import { createClient } from 'npm:@supabase/supabase-js@2.47.10'
import Stripe from 'npm:stripe@14.12.0'

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
    console.log('[ENV CHECK] STRIPE_SECRET_KEY defined:', !!Deno.env.get('STRIPE_SECRET_KEY'))
    console.log('[ENV CHECK] STRIPE_WEBHOOK_SECRET defined:', !!Deno.env.get('STRIPE_WEBHOOK_SECRET'))

    const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY') ?? '', {
      apiVersion: '2024-11-20.acacia',
    })

    const signature = req.headers.get('stripe-signature')
    const body = await req.text()

    let event: Stripe.Event

    try {
      event = stripe.webhooks.constructEvent(
        body,
        signature!,
        Deno.env.get('STRIPE_WEBHOOK_SECRET') ?? ''
      )
    } catch (err) {
      return new Response(
        JSON.stringify({ error: `Webhook signature verification failed: ${err.message}` }),
        {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      )
    }

    const supabaseAdmin = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    switch (event.type) {
      case 'setup_intent.succeeded': {
        const setupIntent = event.data.object as Stripe.SetupIntent
        const paymentMethodId = setupIntent.payment_method as string
        const customerId = setupIntent.customer as string

        if (customerId && paymentMethodId) {
          await supabaseAdmin
            .from('trial_accounts')
            .update({
              stripe_payment_method_id: paymentMethodId,
              stripe_setup_intent_id: setupIntent.id,
              payment_method_saved: true,
              updated_at: new Date().toISOString(),
            })
            .eq('stripe_customer_id', customerId)
        }
        break
      }

      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session
        const userId = session.metadata?.user_id
        const isTrial = session.metadata?.is_trial === 'true'

        if (!userId) {
          throw new Error('No user_id in metadata')
        }

        if (isTrial && session.mode === 'setup') {
          await supabaseAdmin
            .from('trial_accounts')
            .update({
              stripe_setup_intent_id: session.setup_intent as string,
              updated_at: new Date().toISOString(),
            })
            .eq('user_id', userId)
          break
        }

        if (session.subscription) {
          const subscription = await stripe.subscriptions.retrieve(
            session.subscription as string
          )

          await supabaseAdmin.from('subscriptions').upsert({
            user_id: userId,
            stripe_customer_id: session.customer as string,
            stripe_subscription_id: subscription.id,
            status: subscription.status,
            current_period_start: new Date(subscription.current_period_start * 1000).toISOString(),
            current_period_end: new Date(subscription.current_period_end * 1000).toISOString(),
            cancel_at_period_end: subscription.cancel_at_period_end,
            updated_at: new Date().toISOString(),
          })
        }
        break
      }

      case 'customer.subscription.updated': {
        const subscription = event.data.object as Stripe.Subscription

        await supabaseAdmin
          .from('subscriptions')
          .update({
            status: subscription.status,
            current_period_start: new Date(subscription.current_period_start * 1000).toISOString(),
            current_period_end: new Date(subscription.current_period_end * 1000).toISOString(),
            cancel_at_period_end: subscription.cancel_at_period_end,
            updated_at: new Date().toISOString(),
          })
          .eq('stripe_subscription_id', subscription.id)
        break
      }

      case 'customer.subscription.deleted': {
        const subscription = event.data.object as Stripe.Subscription

        await supabaseAdmin
          .from('subscriptions')
          .update({
            status: 'canceled',
            updated_at: new Date().toISOString(),
          })
          .eq('stripe_subscription_id', subscription.id)
        break
      }

      default:
        console.log(`Unhandled event type: ${event.type}`)
    }

    return new Response(
      JSON.stringify({ received: true }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    )
  } catch (error) {
    console.error('Webhook error:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    )
  }
})