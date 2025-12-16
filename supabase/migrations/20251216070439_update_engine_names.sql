/*
  # Update Engine Names

  This migration updates all engine product names to reflect the new naming structure:

  ## Name Changes

  1. Level 2: Partner Intelligence Engine → Partner Map
  2. Level 3: Partner Acquisition Engine → Partner Acquisition Engine (no change)
  3. Level 4: Partner Enablement Engine → Partner Enablement Hub
  4. Level 5: Partner Revenue Intelligence Engine → Co-Sell Engine
  5. Level 6: Channel Growth Engine → Channel Analytics
  6. Level 7: Co-Sell & Deal Routing Engine → Deal Routing Engine

  ## Rationale

  - Level 5 focuses on deal intelligence and forecasting (Co-Sell Engine)
  - Level 6 focuses on workflow automation (Deal Routing Engine - formerly Level 7)
  - Level 7 focuses on leadership dashboards and analytics (Channel Analytics - formerly Level 6)

  This structure creates a clearer progression from intelligence → automation → analytics.
*/

UPDATE products
SET
  name = 'Partner Map',
  updated_at = now()
WHERE name LIKE '%Partner Intelligence Engine%' AND name NOT LIKE '%Revenue%';

UPDATE products
SET
  name = 'Partner Enablement Hub',
  updated_at = now()
WHERE name LIKE '%Partner Enablement Engine%';

UPDATE products
SET
  name = 'Co-Sell Engine',
  updated_at = now()
WHERE name LIKE '%Partner Revenue Intelligence Engine%';

UPDATE products
SET
  name = 'Deal Routing Engine',
  updated_at = now()
WHERE name LIKE '%Co-Sell%Deal Routing Engine%';

UPDATE products
SET
  name = 'Channel Analytics',
  updated_at = now()
WHERE name LIKE '%Channel Growth Engine%';