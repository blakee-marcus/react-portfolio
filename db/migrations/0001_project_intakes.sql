CREATE TABLE IF NOT EXISTS project_intakes (
  id text PRIMARY KEY,
  deposit_id text NOT NULL REFERENCES deposits(id) ON DELETE cascade,
  deposit_public_id text NOT NULL,
  package_slug text NOT NULL,
  package_name text NOT NULL,
  full_name text NOT NULL,
  email text NOT NULL,
  business_name text NOT NULL,
  responses jsonb NOT NULL,
  submitted_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS project_intakes_deposit_id_idx
  ON project_intakes (deposit_id);

CREATE INDEX IF NOT EXISTS project_intakes_submitted_at_idx
  ON project_intakes (submitted_at DESC);
