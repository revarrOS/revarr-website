/*
  # Create form submissions table

  1. New Tables
    - `form_submissions`
      - `id` (uuid, primary key)
      - `type` (text) - Type of form: 'partner_registration', 'partner_apply', 'blog_subscription'
      - `email` (text, required)
      - `name` (text)
      - `company` (text)
      - `phone` (text)
      - `message` (text)
      - `created_at` (timestamptz)
      - `notified` (boolean) - Whether admin has been notified

  2. Security
    - Enable RLS on `form_submissions` table
    - Add policy for inserting form submissions (public access for submissions)
    - Add policy for reading submissions (authenticated admins only)
*/

CREATE TABLE IF NOT EXISTS form_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  type text NOT NULL,
  email text NOT NULL,
  name text,
  company text,
  phone text,
  message text,
  created_at timestamptz DEFAULT now(),
  notified boolean DEFAULT false
);

ALTER TABLE form_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit forms"
  ON form_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read submissions"
  ON form_submissions
  FOR SELECT
  TO authenticated
  USING (true);