import { createClient } from 'npm:@supabase/supabase-js@2.47.10'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Client-Info, Apikey',
}

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    })
  }

  try {
    console.log('Admin conversations function called')
    
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    const { data: conversations, error: convError } = await supabase
      .from('conversations')
      .select(`
        id,
        user_name,
        user_email,
        company,
        channel,
        status,
        created_at,
        updated_at
      `)
      .order('updated_at', { ascending: false })

    if (convError) {
      console.error('Error fetching conversations:', convError)
      throw convError
    }

    console.log(`Found ${conversations?.length || 0} conversations`)

    const conversationsWithMessages = await Promise.all(
      (conversations || []).map(async (conv: any) => {
        const { data: messages, error: msgError } = await supabase
          .from('messages')
          .select('id, from_role, message_text, created_at')
          .eq('conversation_id', conv.id)
          .order('created_at', { ascending: true })

        if (msgError) {
          console.error('Error fetching messages:', msgError)
          return {
            ...conv,
            messages: [],
            lastMessage: null,
            unreadCount: 0,
          }
        }

        const lastMessage = messages && messages.length > 0 ? messages[messages.length - 1] : null
        const userMsgCount = messages ? messages.filter((m: any) => m.from_role === 'user').length : 0
        const adminMsgCount = messages ? messages.filter((m: any) => m.from_role === 'admin').length : 0
        const unreadCount = userMsgCount - adminMsgCount

        return {
          ...conv,
          messages: messages ? messages.map((msg: any) => ({
            id: msg.id,
            from: msg.from_role,
            text: msg.message_text,
            createdAt: msg.created_at,
          })) : [],
          lastMessage: lastMessage ? {
            text: lastMessage.message_text,
            from: lastMessage.from_role,
            createdAt: lastMessage.created_at,
          } : null,
          unreadCount: Math.max(0, unreadCount),
        }
      })
    )

    console.log('Returning conversations with messages')

    return new Response(
      JSON.stringify({ conversations: conversationsWithMessages }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    )
  } catch (error) {
    console.error('Error in admin-conversations:', error)
    return new Response(
      JSON.stringify({ error: error.message, details: String(error) }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    )
  }
})