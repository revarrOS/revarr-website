# Stripe Identity Linkage Documentation

## Overview

The marketing website and revARR OS share the same Supabase project (qdmrihjfeiyfdeajlcsg.supabase.co), enabling seamless user identity linkage through Stripe checkout sessions.

## Architecture

### Authentication Flow
1. User must be logged in on marketing site before accessing checkout
2. Checkout page verifies authentication and displays user email
3. User clicks "Pay Now" to initiate Stripe checkout
4. Marketing site passes JWT to stripe-checkout edge function
5. Edge function extracts user identity from JWT
6. Stripe session is created with hard identity binding
7. User completes payment on Stripe
8. Stripe redirects to OS with session_id
9. OS reads user_id from Stripe session metadata

### Identity Binding

The stripe-checkout edge function creates Stripe sessions with three layers of identity:

```typescript
stripe.checkout.sessions.create({
  customer_email: user.email,           // Email from authenticated user
  client_reference_id: user.id,         // Supabase user ID
  metadata: {
    user_id: user.id,                   // Primary: Supabase user ID
    source: 'revarr_marketing'          // Source tracking
  },
  mode: 'payment',                      // One-time payment only
  success_url: 'https://app.revarr.com/auth/setup?session_id={CHECKOUT_SESSION_ID}',
  cancel_url: 'https://www.revarr.com/pricing?canceled=true'
})
```

## Key Components

### Frontend: src/pages/Checkout.tsx
- Requires authentication before rendering
- Redirects unauthenticated users to /login with return URL
- Displays logged-in user email
- Passes Authorization header with JWT to edge function

### Backend: supabase/functions/stripe-checkout/index.ts
- Validates Authorization header
- Extracts user from JWT using supabase.auth.getUser()
- Returns 401 if authentication fails
- Creates Stripe session with user_id in metadata
- Logs complete session details for verification

## OS Integration

### Expected Behavior

The OS verify-stripe-session handler should:

1. **Primary**: Read `metadata.user_id` from Stripe session
   - This contains the authenticated Supabase user ID
   - Guaranteed to be present for all marketing purchases

2. **Defensive Fallback**: Use `customer_email` only if metadata is missing
   - This is an edge case for older sessions or manual testing
   - Should not be the primary identity resolution path

### Verification Query

```typescript
// OS should retrieve session like this:
const session = await stripe.checkout.sessions.retrieve(session_id, {
  expand: ['customer']
})

// Primary identity resolution
const userId = session.metadata?.user_id

// Defensive fallback (edge case only)
if (!userId) {
  // Look up user by email
  const { data } = await supabase
    .from('users')
    .select('id')
    .eq('email', session.customer_email)
    .maybeSingle()
}
```

## Security

### Authentication Requirements
- All checkout requests require valid JWT
- JWT is verified by Supabase before session creation
- No customer email accepted from frontend (prevents spoofing)
- User identity derived from authenticated session only

### Data Flow
```
User Login → JWT → Checkout Page → Edge Function → Supabase Auth →
User ID → Stripe Session → OS → Provision Access
```

## Configuration

### Shared Supabase Project
- Project ID: qdmrihjfeiyfdeajlcsg
- Marketing and OS use the same auth.users table
- No cross-project user matching required
- Identity linkage is direct and guaranteed

### Environment Variables
- `VITE_SUPABASE_URL`: Shared project URL
- `VITE_SUPABASE_ANON_KEY`: Public anon key
- `SUPABASE_SERVICE_ROLE_KEY`: Server-side only (edge functions)
- `STRIPE_SECRET_KEY`: Stripe API key (edge functions)

## Payment Mode

### One-Time Purchase Only
- No trials
- No subscriptions
- No recurring charges
- Single payment for Opportunity Intelligence Engine
- Instant access to revARR OS upon successful payment

## Testing Verification

### Manual Testing Checklist
- [ ] Logged-out user clicking "Pay Now" redirects to /login
- [ ] After login, user returns to checkout page
- [ ] Checkout displays user email with green indicator
- [ ] Stripe session contains metadata.user_id
- [ ] Stripe session contains client_reference_id
- [ ] Success URL redirects to https://app.revarr.com/auth/setup
- [ ] OS can read user_id from session metadata

### Edge Function Logs
The stripe-checkout function logs complete session details:
```
[AUTH SUCCESS] User: <user_id> <user_email>
[STRIPE SESSION CREATED] {
  session_id: <stripe_session_id>,
  user_id: <supabase_user_id>,
  customer_email: <user_email>,
  client_reference_id: <supabase_user_id>,
  metadata: { user_id: <supabase_user_id>, source: 'revarr_marketing' }
}
```

## Troubleshooting

### User not authenticated
**Symptom**: 401 error from edge function
**Solution**: User must log in before checkout

### Session missing metadata
**Symptom**: metadata.user_id is undefined
**Solution**: Verify edge function is deployed with latest code

### OS can't find user
**Symptom**: User exists in Stripe but not in OS
**Solution**: Verify OS is using same Supabase project (qdmrihjfeiyfdeajlcsg)

## Related Files
- `/src/pages/Checkout.tsx` - Frontend checkout page
- `/src/pages/Login.tsx` - Authentication page
- `/supabase/functions/stripe-checkout/index.ts` - Checkout edge function
- `/supabase/functions/stripe-webhook/index.ts` - Webhook handler (if used by OS)

## Last Updated
2025-12-13
