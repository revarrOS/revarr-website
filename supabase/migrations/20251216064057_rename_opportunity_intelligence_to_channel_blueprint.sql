/*
  # Rename Opportunity Intelligence Engine to Channel Blueprint

  This migration updates the product names in the database from "Opportunity Intelligence Engine" 
  to "Channel Blueprint" to reflect the new branding and positioning.

  ## Changes

  1. Product Names
    - Renames all product entries from "Opportunity Intelligence Engine" to "Channel Blueprint"
    - Updates product names for all currency variants (GBP, USD, EUR)
  
  2. Product Descriptions
    - Updates description text to reflect the new positioning as a business case tool
    - Changes from "foundation every company needs before building a channel" to 
      "AI-built business case that shows if channel is your right GTM move"

  ## Products Affected
  - Channel Blueprint (GBP) - formerly "Opportunity Intelligence Engine"
  - Channel Blueprint (USD) - formerly "Opportunity Intelligence Engine (USD)"
  - Channel Blueprint (EUR) - formerly "Opportunity Intelligence Engine (EUR)"
*/

UPDATE products 
SET 
  name = 'Channel Blueprint',
  description = 'AI-built business case that shows if channel is your right GTM move. Board-ready. Evidence-backed. Includes Market Reality Analysis, Competitive Intelligence, Revenue Model with 3-year ARR forecast, The Verdict on direct vs. channel, and Board-ready business case.',
  updated_at = now()
WHERE name = 'Opportunity Intelligence Engine';

UPDATE products 
SET 
  name = 'Channel Blueprint (USD)',
  description = 'AI-built business case that shows if channel is your right GTM move. Board-ready. Evidence-backed. Includes Market Reality Analysis, Competitive Intelligence, Revenue Model with 3-year ARR forecast, The Verdict on direct vs. channel, and Board-ready business case.',
  updated_at = now()
WHERE name = 'Opportunity Intelligence Engine (USD)';

UPDATE products 
SET 
  name = 'Channel Blueprint (EUR)',
  description = 'AI-built business case that shows if channel is your right GTM move. Board-ready. Evidence-backed. Includes Market Reality Analysis, Competitive Intelligence, Revenue Model with 3-year ARR forecast, The Verdict on direct vs. channel, and Board-ready business case.',
  updated_at = now()
WHERE name = 'Opportunity Intelligence Engine (EUR)';
