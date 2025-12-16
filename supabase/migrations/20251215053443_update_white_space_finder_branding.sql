/*
  # Update White Space Finder to Channel White Space Finder

  1. Changes
    - Updates the product description for all three Opportunity Intelligence Engine variants
    - Changes "White-Space Finder" to "Channel White Space Finder"

  2. Tables affected
    - products (description column updated)
*/

UPDATE products
SET 
  description = 'The foundation every company needs before building a channel. Includes Market Position Snapshot, Competitor Strength Ranking, Revenue Forecasting, Channel White Space Finder, Best Industries to Target, Best Regions to Target, Market Risk Alerts, and Your 90-Day Action Plan.',
  updated_at = now()
WHERE stripe_price_id IN (
  'price_1SdaOGE8Pfwh77qbTNnLddxm',
  'price_1SdaOGE8Pfwh77qbTNnLddxm_usd',
  'price_1SdaOGE8Pfwh77qbTNnLddxm_eur'
);
