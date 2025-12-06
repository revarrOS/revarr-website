/*
  # Create Chat System

  1. New Tables
    - `conversations`
      - `id` (uuid, primary key)
      - `user_name` (text, required) - Name of the user starting the conversation
      - `user_email` (text, required) - Email of the user
      - `company` (text, nullable) - User's company name
      - `channel` (text, required) - Channel type: sales, customer-service, billing, technical-support, general
      - `status` (text, required, default 'open') - Conversation status: open or closed
      - `created_at` (timestamptz) - When conversation was created
      - `updated_at` (timestamptz) - Last update timestamp
    
    - `messages`
      - `id` (uuid, primary key)
      - `conversation_id` (uuid, foreign key) - References conversations.id
      - `from_role` (text, required) - Who sent the message: user or admin
      - `message_text` (text, required) - The message content
      - `created_at` (timestamptz) - When message was sent

  2. Security
    - Enable RLS on both tables
    - Public can read and insert to conversations (for website chat)
    - Public can read and insert to messages (for website chat)
    - These are intentionally permissive as this is a support chat system
*/

-- Create conversations table
CREATE TABLE IF NOT EXISTS conversations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_name text NOT NULL,
  user_email text NOT NULL,
  company text,
  channel text NOT NULL CHECK (channel IN ('sales', 'customer-service', 'billing', 'technical-support', 'general')),
  status text NOT NULL DEFAULT 'open' CHECK (status IN ('open', 'closed')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create messages table
CREATE TABLE IF NOT EXISTS messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  conversation_id uuid NOT NULL REFERENCES conversations(id) ON DELETE CASCADE,
  from_role text NOT NULL CHECK (from_role IN ('user', 'admin')),
  message_text text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_messages_conversation_id ON messages(conversation_id);
CREATE INDEX IF NOT EXISTS idx_conversations_status ON conversations(status);
CREATE INDEX IF NOT EXISTS idx_conversations_channel ON conversations(channel);
CREATE INDEX IF NOT EXISTS idx_conversations_updated_at ON conversations(updated_at DESC);

-- Enable RLS
ALTER TABLE conversations ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;

-- RLS Policies for conversations
CREATE POLICY "Anyone can read conversations"
  ON conversations FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Anyone can create conversations"
  ON conversations FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Anyone can update conversations"
  ON conversations FOR UPDATE
  TO public
  USING (true)
  WITH CHECK (true);

-- RLS Policies for messages
CREATE POLICY "Anyone can read messages"
  ON messages FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Anyone can create messages"
  ON messages FOR INSERT
  TO public
  WITH CHECK (true);
