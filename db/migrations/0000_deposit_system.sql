DO $$ BEGIN
 CREATE TYPE deposit_status AS ENUM ('pending', 'processing', 'paid', 'failed', 'expired');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

CREATE TABLE IF NOT EXISTS deposits (
  id text PRIMARY KEY,
  public_id text NOT NULL UNIQUE,
  status deposit_status NOT NULL DEFAULT 'pending',
  package_slug text NOT NULL,
  package_name text NOT NULL,
  price_id text NOT NULL,
  full_name text NOT NULL,
  email text NOT NULL,
  email_normalized text NOT NULL,
  business_name text NOT NULL,
  amount_cents integer NOT NULL,
  currency text NOT NULL,
  stripe_checkout_session_id text UNIQUE,
  stripe_payment_intent_id text UNIQUE,
  stripe_customer_id text,
  last_checkout_url text,
  access_token_hash text NOT NULL,
  policy_acknowledged_at timestamptz NOT NULL,
  paid_at timestamptz,
  failed_at timestamptz,
  expired_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS deposits_email_package_created_idx
  ON deposits (email_normalized, package_slug, created_at DESC);

CREATE INDEX IF NOT EXISTS deposits_status_idx
  ON deposits (status);

CREATE TABLE IF NOT EXISTS stripe_webhook_events (
  event_id text PRIMARY KEY,
  event_type text NOT NULL,
  checkout_session_id text,
  livemode boolean NOT NULL DEFAULT false,
  processed_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now()
);
