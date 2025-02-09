CREATE SCHEMA IF NOT EXISTS freesg;

CREATE TABLE IF NOT EXISTS freesg.metric (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  created_at TIMESTAMP default CURRENT_TIMESTAMP,
  updated_at TIMESTAMP default CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP default NULL
);

CREATE TABLE IF NOT EXISTS freesg.report (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  created_at TIMESTAMP default CURRENT_TIMESTAMP,
  updated_at TIMESTAMP default CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP default NULL
);

CREATE TABLE IF NOT EXISTS freesg.report_metric (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  report_id uuid NOT NULL references freesg.report(id),
  metric_id uuid NOT NULL references freesg.metric(id),
  created_at TIMESTAMP default CURRENT_TIMESTAMP,
  updated_at TIMESTAMP default CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP default NULL
);

CREATE TABLE IF NOT EXISTS freesg.submission (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  report_id uuid NOT NULL references freesg.report(id),
  status TEXT NOT NULL default 'created',
  created_at TIMESTAMP default CURRENT_TIMESTAMP,
  updated_at TIMESTAMP default CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP default NULL
);

CREATE TABLE IF NOT EXISTS freesg.answer (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  submission_id uuid NOT NULL references freesg.submission(id),
  metric_id uuid NOT NULL references freesg.metric(id),
  value TEXT,
  created_at TIMESTAMP default CURRENT_TIMESTAMP,
  updated_at TIMESTAMP default CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP default NULL
);
