CREATE SCHEMA IF NOT EXISTS freesg;

CREATE TABLE IF NOT EXISTS freesg.metric (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  created_at TIMESTAMP default CURRENT_TIMESTAMP,
  updated_at TIMESTAMP default CURRENT_TIMESTAMP
);
