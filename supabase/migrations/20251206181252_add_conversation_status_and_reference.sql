/*
  # Add Conversation Status and Archive Support

  1. Changes to conversations table
    - Add `status` column (default 'open', can be 'closed')
    - Add `closed_at` timestamp for when conversation was closed
    - Add `reference_id` for tracking conversations (e.g., REV-2025-0001)
    
  2. Migration Details
    - Uses IF NOT EXISTS checks to prevent errors
    - Generates reference IDs automatically using a sequence
    - Adds index on status for efficient filtering
    
  3. Notes
    - Existing conversations will have status = 'open' by default
    - Reference IDs follow format: REV-YYYY-NNNN
    - Closed conversations remain in database with full history
*/

-- Add status column if it doesn't exist
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'conversations' AND column_name = 'status'
  ) THEN
    ALTER TABLE conversations ADD COLUMN status text DEFAULT 'open' NOT NULL;
  END IF;
END $$;

-- Add closed_at column if it doesn't exist
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'conversations' AND column_name = 'closed_at'
  ) THEN
    ALTER TABLE conversations ADD COLUMN closed_at timestamptz;
  END IF;
END $$;

-- Add reference_id column if it doesn't exist
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'conversations' AND column_name = 'reference_id'
  ) THEN
    ALTER TABLE conversations ADD COLUMN reference_id text UNIQUE;
  END IF;
END $$;

-- Create sequence for reference IDs if it doesn't exist
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_sequences WHERE schemaname = 'public' AND sequencename = 'conversation_ref_seq'
  ) THEN
    CREATE SEQUENCE conversation_ref_seq START 1;
  END IF;
END $$;

-- Create function to generate reference IDs
CREATE OR REPLACE FUNCTION generate_conversation_reference()
RETURNS text AS $$
DECLARE
  ref_number integer;
  year_part text;
BEGIN
  ref_number := nextval('conversation_ref_seq');
  year_part := to_char(CURRENT_DATE, 'YYYY');
  RETURN 'REV-' || year_part || '-' || lpad(ref_number::text, 4, '0');
END;
$$ LANGUAGE plpgsql;

-- Create the trigger function
CREATE OR REPLACE FUNCTION generate_conversation_reference_trigger()
RETURNS TRIGGER AS $$
BEGIN
  NEW.reference_id := generate_conversation_reference();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to auto-generate reference IDs for new conversations
DROP TRIGGER IF EXISTS set_conversation_reference ON conversations;

CREATE TRIGGER set_conversation_reference
  BEFORE INSERT ON conversations
  FOR EACH ROW
  WHEN (NEW.reference_id IS NULL)
  EXECUTE FUNCTION generate_conversation_reference_trigger();

-- Update existing conversations to have reference IDs
UPDATE conversations
SET reference_id = generate_conversation_reference()
WHERE reference_id IS NULL;

-- Add index on status for efficient filtering
CREATE INDEX IF NOT EXISTS idx_conversations_status ON conversations(status);

-- Add constraint to ensure status is valid
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint WHERE conname = 'conversations_status_check'
  ) THEN
    ALTER TABLE conversations ADD CONSTRAINT conversations_status_check 
      CHECK (status IN ('open', 'closed'));
  END IF;
END $$;