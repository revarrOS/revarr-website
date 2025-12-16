/*
  # Remove Chat System

  1. Drop Tables
    - Drop `messages` table
    - Drop `conversations` table
  
  2. Changes
    - Removes all chat-related database tables and data
*/

DROP TABLE IF EXISTS messages;
DROP TABLE IF EXISTS conversations;