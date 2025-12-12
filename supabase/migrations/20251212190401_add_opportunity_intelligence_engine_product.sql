/*
  # Add Opportunity Intelligence Engine Product

  1. Changes
    - Inserts the Opportunity Intelligence Engine product with locked-in pricing
    - GBP £75 (base price)
    - USD $109
    - EUR €89
    - One-time purchase (not recurring)
    - Stripe Price ID: price_1SdaOGE8Pfwh77qbTNnLddxm

  2. Notes
    - This is a one-time purchase product
    - Price is stored in cents/pence (multiply by 100)
    - Interval is 'one_time' for non-recurring purchases
*/

DO $$
BEGIN
  -- Insert or update the Opportunity Intelligence Engine product
  INSERT INTO products (
    name,
    stripe_price_id,
    price,
    currency,
    interval,
    description,
    active
  ) VALUES (
    'Opportunity Intelligence Engine',
    'price_1SdaOGE8Pfwh77qbTNnLddxm',
    7500,
    'GBP',
    'one_time',
    'The foundation every company needs before building a channel. Includes Market Position Snapshot, Competitor Strength Ranking, Revenue Forecasting, White-Space Finder, Best Industries to Target, Best Regions to Target, Market Risk Alerts, and Your 90-Day Action Plan.',
    true
  )
  ON CONFLICT (stripe_price_id) 
  DO UPDATE SET
    price = 7500,
    currency = 'GBP',
    interval = 'one_time',
    description = EXCLUDED.description,
    active = true,
    updated_at = now();

  -- Add USD pricing variant
  INSERT INTO products (
    name,
    stripe_price_id,
    price,
    currency,
    interval,
    description,
    active
  ) VALUES (
    'Opportunity Intelligence Engine (USD)',
    'price_1SdaOGE8Pfwh77qbTNnLddxm_usd',
    10900,
    'USD',
    'one_time',
    'The foundation every company needs before building a channel. Includes Market Position Snapshot, Competitor Strength Ranking, Revenue Forecasting, White-Space Finder, Best Industries to Target, Best Regions to Target, Market Risk Alerts, and Your 90-Day Action Plan.',
    true
  )
  ON CONFLICT (stripe_price_id) 
  DO UPDATE SET
    price = 10900,
    currency = 'USD',
    interval = 'one_time',
    description = EXCLUDED.description,
    active = true,
    updated_at = now();

  -- Add EUR pricing variant
  INSERT INTO products (
    name,
    stripe_price_id,
    price,
    currency,
    interval,
    description,
    active
  ) VALUES (
    'Opportunity Intelligence Engine (EUR)',
    'price_1SdaOGE8Pfwh77qbTNnLddxm_eur',
    8900,
    'EUR',
    'one_time',
    'The foundation every company needs before building a channel. Includes Market Position Snapshot, Competitor Strength Ranking, Revenue Forecasting, White-Space Finder, Best Industries to Target, Best Regions to Target, Market Risk Alerts, and Your 90-Day Action Plan.',
    true
  )
  ON CONFLICT (stripe_price_id) 
  DO UPDATE SET
    price = 8900,
    currency = 'EUR',
    interval = 'one_time',
    description = EXCLUDED.description,
    active = true,
    updated_at = now();
END $$;