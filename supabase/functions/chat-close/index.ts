import { createClient } from 'npm:@supabase/supabase-js@2.47.10'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Client-Info, Apikey',
}

interface CloseRequest {
  conversationId: string
  closed_by?: string
}

const CHANNEL_LABELS: Record<string, string> = {
  sales: 'Sales',
  'customer-service': 'Customer Service',
  billing: 'Billing & Invoices',
  'technical-support': 'Technical Support',
  general: 'General Question',
}

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    })
  }

  try {
    const body: CloseRequest = await req.json()
    const { conversationId, closed_by = 'admin' } = body

    if (!conversationId) {
      return new Response(
        JSON.stringify({ error: 'conversationId is required' }),
        {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      )
    }

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    const { data: conversation, error: convError } = await supabase
      .from('conversations')
      .select('*')
      .eq('id', conversationId)
      .maybeSingle()

    if (convError) {
      throw convError
    }

    if (!conversation) {
      return new Response(
        JSON.stringify({ error: 'Conversation not found' }),
        {
          status: 404,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      )
    }

    const { data: messages, error: msgError } = await supabase
      .from('messages')
      .select('*')
      .eq('conversation_id', conversationId)
      .order('created_at', { ascending: true })

    if (msgError) {
      throw msgError
    }

    const closedAt = new Date().toISOString()

    const { error: updateError } = await supabase
      .from('conversations')
      .update({
        status: 'closed',
        updated_at: closedAt
      })
      .eq('id', conversationId)

    if (updateError) {
      throw updateError
    }

    const formatDate = (date: string) => {
      return new Date(date).toLocaleString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      })
    }

    const messagesHtml = messages.map((msg: any) => {
      const role = msg.from_role === 'admin' ? 'revARR Support' : conversation.user_name
      return `
        <div style="margin: 16px 0; padding: 12px; background: ${msg.from_role === 'admin' ? '#f0f9ff' : '#f8fafc'}; border-radius: 8px;">
          <div style="font-weight: 600; color: #334155; margin-bottom: 4px;">${role}</div>
          <div style="color: #64748b; font-size: 12px; margin-bottom: 8px;">${formatDate(msg.created_at)}</div>
          <div style="color: #1e293b; white-space: pre-wrap;">${msg.message_text}</div>
        </div>
      `
    }).join('')

    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #f8fafc; margin: 0; padding: 20px;">
  <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
    <div style="background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%); padding: 32px; text-align: center;">
      <h1 style="color: white; margin: 0; font-size: 24px;">revARR Support</h1>
      <p style="color: rgba(255,255,255,0.9); margin: 8px 0 0 0; font-size: 14px;">Conversation Transcript</p>
    </div>

    <div style="padding: 32px;">
      <div style="background: #f1f5f9; padding: 20px; border-radius: 8px; margin-bottom: 24px;">
        <h2 style="color: #0f172a; margin: 0 0 16px 0; font-size: 18px;">Conversation Details</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; color: #64748b; font-weight: 500;">Reference ID:</td>
            <td style="padding: 8px 0; color: #06b6d4; font-weight: 600; font-family: monospace;">${conversation.reference_id}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748b; font-weight: 500;">Channel:</td>
            <td style="padding: 8px 0; color: #0f172a;">${CHANNEL_LABELS[conversation.channel] || conversation.channel}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748b; font-weight: 500;">Created:</td>
            <td style="padding: 8px 0; color: #0f172a;">${formatDate(conversation.created_at)}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748b; font-weight: 500;">Closed:</td>
            <td style="padding: 8px 0; color: #0f172a;">${formatDate(closedAt)}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748b; font-weight: 500;">Closed by:</td>
            <td style="padding: 8px 0; color: #0f172a;">${closed_by === 'user' ? 'Customer' : 'Support Agent'}</td>
          </tr>
        </table>
      </div>

      <h3 style="color: #0f172a; margin: 0 0 16px 0;">Message Transcript</h3>
      ${messagesHtml}

      <div style="margin-top: 32px; padding-top: 24px; border-top: 2px solid #e2e8f0; text-align: center;">
        <p style="color: #64748b; font-size: 14px; margin: 0;">
          Need more help? Visit <a href="https://revarr.com" style="color: #06b6d4; text-decoration: none;">revarr.com</a> or start a new conversation.
        </p>
      </div>
    </div>
  </div>
</body>
</html>
    `

    const resendApiKey = Deno.env.get('RESEND_API_KEY')

    if (resendApiKey) {
      const emailResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'revARR Support <support@revarr.com>',
          to: [conversation.user_email, 'jonathan@revarr.com'],
          subject: `revARR Support – Conversation REF ${conversation.reference_id} closed`,
          html: emailHtml,
        }),
      })

      if (!emailResponse.ok) {
        const errorText = await emailResponse.text()
        console.error('Failed to send email:', errorText)
      }
    }

    return new Response(
      JSON.stringify({ ok: true }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    )
  } catch (error) {
    console.error('Error in chat-close:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    )
  }
})
