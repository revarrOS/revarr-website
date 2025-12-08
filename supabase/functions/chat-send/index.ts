import { createClient } from 'npm:@supabase/supabase-js@2.47.10'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Client-Info, Apikey',
}

interface SendMessageRequest {
  name: string
  email: string
  company?: string | null
  channel: 'sales' | 'customer-service' | 'billing' | 'technical-support' | 'general'
  message: string
  conversationId?: string | null
}

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    })
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    const body: SendMessageRequest = await req.json()
    const { name, email, company, channel, message, conversationId } = body

    if (!name || !email || !channel || !message) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      )
    }

    let convId = conversationId

    if (conversationId) {
      const { data: existingConv } = await supabase
        .from('conversations')
        .select('id, status')
        .eq('id', conversationId)
        .eq('status', 'open')
        .maybeSingle()

      if (existingConv) {
        convId = existingConv.id
      } else {
        convId = null
      }
    }

    if (!convId) {
      const { data: newConv, error: convError } = await supabase
        .from('conversations')
        .insert({
          user_name: name,
          user_email: email,
          company: company || null,
          channel,
          status: 'open',
        })
        .select('id')
        .single()

      if (convError) {
        throw convError
      }

      convId = newConv.id
    } else {
      await supabase
        .from('conversations')
        .update({ updated_at: new Date().toISOString() })
        .eq('id', convId)
    }

    const { error: msgError } = await supabase
      .from('messages')
      .insert({
        conversation_id: convId,
        from_role: 'user',
        message_text: message,
      })

    if (msgError) {
      throw msgError
    }

    try {
      await sendEmailNotification({
        name,
        email,
        company: company || 'N/A',
        channel,
        message,
        conversationId: convId,
      })
    } catch (emailError) {
      console.error('Email notification failed:', emailError)
    }

    return new Response(
      JSON.stringify({ conversationId: convId }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    )
  } catch (error) {
    console.error('Error in chat-send:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    )
  }
})

async function sendEmailNotification(params: {
  name: string
  email: string
  company: string
  channel: string
  message: string
  conversationId: string
}) {
  const resendApiKey = Deno.env.get('RESEND_API_KEY')
  
  if (!resendApiKey) {
    console.warn('RESEND_API_KEY not configured, skipping email notification')
    return
  }

  const channelLabels: Record<string, string> = {
    sales: 'Sales',
    'customer-service': 'Customer Service',
    billing: 'Billing',
    'technical-support': 'Technical Support',
    general: 'General',
  }

  const channelLabel = channelLabels[params.channel] || params.channel
  const messagePreview = params.message.substring(0, 300)
  const adminUrl = `${Deno.env.get('SITE_URL') || 'https://revarr.com'}/admin/conversations/${params.conversationId}`

  const emailBody = `
New message from: ${params.name}
Email: ${params.email}
Company: ${params.company}
Channel: ${channelLabel}

Message:
${messagePreview}${params.message.length > 300 ? '...' : ''}

View and reply:
${adminUrl}
  `.trim()

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${resendApiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'revARR Support <noreply@revarr.com>',
      to: ['jonathan@revarr.com'],
      subject: `[revARR] New ${channelLabel} message from ${params.name}`,
      text: emailBody,
    }),
  })

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(`Resend API error: ${errorText}`)
  }
}