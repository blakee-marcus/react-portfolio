# Blake Marcus Studio

Production website and client-start system for [Blake Marcus Studio](https://www.blakemarcus.com), a Las Vegas web design studio serving founder-led service businesses.

The app combines a public marketing site, package comparison, Stripe-backed $150 deposit checkout, gated onboarding pages, SEO metadata, dynamic Open Graph images, transactional email, and launch-readiness tooling.

## Table of Contents

- [Live URLs](#live-urls)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Database](#database)
- [Stripe Deposit Flow](#stripe-deposit-flow)
- [Email](#email)
- [SEO and Analytics](#seo-and-analytics)
- [Scripts](#scripts)
- [Quality Gates](#quality-gates)
- [CI/CD](#cicd)
- [Deployment](#deployment)
- [Operational Runbooks](#operational-runbooks)
- [Security Notes](#security-notes)

## Live URLs

- Production: <https://www.blakemarcus.com>
- Apex redirect: <https://blakemarcus.com>
- Local development: <http://localhost:3000>

## Tech Stack

- **Framework:** Next.js 16 App Router, React 19, TypeScript
- **Styling:** Tailwind CSS 4, Radix UI Slot, Framer Motion, Lucide icons
- **Data:** Postgres, Drizzle ORM, `postgres`
- **Payments:** Stripe Checkout and Stripe webhooks
- **Email:** Resend, React Email templates, Google Workspace inboxes
- **SEO:** Centralized metadata helpers, structured data, sitemap, robots, dynamic OG images
- **Analytics:** Vercel Analytics and Speed Insights
- **Quality:** ESLint 9, TypeScript, Node.js test runner with `tsx`, GitHub Actions CI
- **Deployment:** Vercel

## Features

- Marketing pages for packages, process, proof, studio positioning, support, and legal content.
- Three package offers: Essentials, Growth, and Full Brand Build.
- Prominent $150 project deposit path, with package-specific Stripe Checkout sessions.
- Postgres-backed deposit records and webhook event tracking.
- Idempotent Stripe webhook processing for completed, async, failed, and expired checkout sessions.
- Signed `HttpOnly` access cookie for paid onboarding pages.
- Gated intake, kickoff, and onboarding pages after deposit completion.
- Best-effort Resend emails for client confirmations and internal studio notifications.
- Dynamic Open Graph image generation for share previews.
- Search-ready sitemap, robots file, canonical URLs, and schema.org structured data.
- Deposit launch readiness checks for production configuration.

## Project Structure

```text
app/                         Next.js App Router pages, layouts, route handlers
app/api/checkout/deposit/    Stripe Checkout session creation endpoint
app/api/webhooks/stripe/     Stripe webhook verification and processing
components/site/             Marketing-site components and shared site UI
components/ui/               Low-level reusable UI primitives
db/migrations/               SQL migrations
emails/                      React Email templates
lib/                         Business logic, SEO helpers, DB, email, deposit services
lib/db/                      Drizzle schema and database client
lib/deposit/                 Deposit domain, repository, service, and config logic
lib/email/                   Email config and sending helpers
public/                      Static assets and icons
scripts/                     Operational scripts
tests/                       Node.js test suite
docs/                        Runbooks, studio operating docs, and specialist agent docs
```

## Getting Started

### Prerequisites

- Node.js `>=22.0.0 <25.0.0`
- npm
- Postgres database for the deposit flow
- Stripe account
- Stripe CLI for local webhook testing
- Resend account for transactional email testing, optional for local-only page work

### Installation

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open <http://localhost:3000>.

For clean CI-like installs, use:

```bash
npm ci
```

## Environment Variables

Copy `.env.example` to `.env.local` and replace placeholder values before testing the full deposit flow.

| Variable | Required | Purpose |
| --- | --- | --- |
| `DATABASE_URL` | Yes | Postgres connection string used by Drizzle and deposit persistence. |
| `STRIPE_SECRET_KEY` | Yes | Stripe secret key used to create Checkout sessions and retrieve sessions. |
| `STRIPE_WEBHOOK_SECRET` | Yes | Stripe webhook signing secret used to verify incoming webhook requests. |
| `STRIPE_DEPOSIT_PRICE_ID_ESSENTIALS` | Yes | Stripe Price ID for the Essentials deposit. |
| `STRIPE_DEPOSIT_PRICE_ID_GROWTH` | Yes | Stripe Price ID for the Growth deposit. |
| `STRIPE_DEPOSIT_PRICE_ID_FULL_BRAND` | Yes | Stripe Price ID for the Full Brand Build deposit. |
| `STRIPE_DEPOSIT_AUTOMATIC_TAX` | No | Set to `true` to enable Stripe automatic tax for deposit checkout. Defaults to disabled. |
| `NEXT_PUBLIC_SITE_URL` | No | Public site URL used by browser-visible flows and readiness checks. |
| `SITE_URL` | No | Server-side site URL fallback used by readiness checks. |
| `INTAKE_FORM_URL` | Yes | External intake form opened after a paid deposit. |
| `KICKOFF_BOOKING_URL` | Yes | External kickoff scheduler opened after intake. |
| `STUDIO_SUPPORT_EMAIL` | Yes | Human support inbox and internal paid-deposit notification recipient. |
| `RESEND_API_KEY` | No | Resend API key for transactional studio emails. Deposits still complete if missing. |
| `STUDIO_EMAIL_FROM` | No | Verified Resend sender. Defaults to `Blake Marcus Studio <hello@send.blakemarcus.com>`. |
| `STUDIO_EMAIL_REPLY_TO` | No | Human reply-to inbox. Defaults to `hello@blakemarcus.com`. |

The app treats placeholder values containing `replace_me` as missing for launch-readiness checks.

Never commit `.env.local`, production secrets, Stripe keys, Resend keys, or database credentials.

## Database

The Drizzle schema lives in `lib/db/schema.ts`. SQL migrations live in `db/migrations`.

Apply the current schema directly:

```bash
npm run db:push
```

Or apply migrations manually:

```bash
psql "$DATABASE_URL" -f db/migrations/0000_deposit_system.sql
psql "$DATABASE_URL" -f db/migrations/0001_project_intakes.sql
```

Generate a new migration after changing the Drizzle schema:

```bash
npm run db:generate
```

## Stripe Deposit Flow

1. Create three `$150` Stripe Prices for package deposits.
2. Add the `price_...` IDs to `.env.local`.
3. Apply the database schema.
4. Start the app:

```bash
npm run dev
```

5. Forward Stripe webhooks locally:

```bash
stripe listen --forward-to localhost:3000/api/webhooks/stripe
```

6. Copy the local `whsec_...` value into `STRIPE_WEBHOOK_SECRET`.
7. Visit `/deposit?package=growth`, submit the form, and complete Checkout with a Stripe test card.
8. Confirm the user returns through `/start/access/[publicId]`, reaches `/start/confirmation`, and can access paid onboarding pages.

Important routes:

- `/start` — public package/deposit start page
- `/deposit?package=growth` — package-specific deposit form
- `/start/access/[publicId]` — paid access finalization route
- `/start/confirmation` — post-payment confirmation
- `/start/intake`, `/start/kickoff`, `/start/onboarding` — protected onboarding pages

For production launch details, use [`docs/deposit-go-live.md`](docs/deposit-go-live.md).

## Email

Transactional email is best-effort and should not block deposit fulfillment.

Recommended production setup:

- Use Google Workspace for `hello@blakemarcus.com` and human inboxes.
- Verify `send.blakemarcus.com` in Resend for application-generated email.
- Keep Resend DNS records on the sending subdomain so they do not interfere with Google Workspace MX records on the root domain.

Relevant files:

- `lib/email/config.ts`
- `lib/email/deposit.tsx`
- `emails/deposit-confirmation.tsx`

## SEO and Analytics

SEO primitives are centralized so page metadata stays consistent.

Relevant files:

- `lib/seo.ts` — metadata, canonical URLs, structured data helpers, OG image URL helpers
- `app/sitemap.ts` — sitemap route
- `app/robots.ts` — robots route
- `app/og/route.tsx` — dynamic Open Graph image generation
- `app/layout.tsx` — global metadata, structured data, analytics providers

After important URL or metadata changes:

1. Deploy to production.
2. Verify `https://www.blakemarcus.com/sitemap.xml` includes the expected URLs.
3. Inspect priority URLs in Google Search Console.
4. Request indexing for new or materially changed pages.
5. Confirm old URLs such as `/about` and `/portfolio` resolve through the intended redirects.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Next.js development server. |
| `npm run build` | Build the production application. |
| `npm run start` | Start the built production server. |
| `npm run lint` | Run ESLint. |
| `npm run typecheck` | Run TypeScript in no-emit mode. |
| `npm run test` | Run the Node.js test suite. |
| `npm run test:watch` | Re-run tests while developing. |
| `npm run test:coverage` | Run tests with Node coverage reporting. |
| `npm run check` | Run lint, typecheck, and tests. |
| `npm run check:deposit` | Validate deposit launch configuration and database readiness. |
| `npm run db:generate` | Generate Drizzle migrations from schema changes. |
| `npm run db:push` | Push the Drizzle schema to the configured database. |

## Quality Gates

Run the default local gate before handing off code:

```bash
npm run check
npm run build
```

Use the deposit readiness check only after real environment values and a reachable database are configured:

```bash
npm run check:deposit
```

Manual checks before production deposit changes:

- Invalid or incomplete form submissions redirect back to `/deposit` with the expected message.
- Successful card payments reach `/start/confirmation`.
- Paid deposits unlock `/start/intake`, `/start/kickoff`, and `/start/onboarding`.
- Paid deposits send the client confirmation and studio notification when Resend is configured.
- Replayed Stripe webhook events do not duplicate fulfillment.
- Protected `/start/*` pages redirect to `/deposit` without the signed access cookie.

Testing guidance lives in [`tests/README.md`](tests/README.md).

## CI/CD

GitHub Actions runs on pushes to `main`, pull requests targeting `main`, and manual dispatches.

The workflow is intentionally split by risk:

- `quality` runs without production secrets: install, production dependency audit for high/critical issues, lint, typecheck, test, and build.
- `deposit-readiness` runs only outside pull requests after `quality` passes. It uses protected secrets to verify the production deposit configuration, database schema, Stripe prices, and launch-readiness checks.

Vercel handles production deployment from `main`. GitHub Actions is the quality gate; Vercel is the deployment system.

## Deployment

Production deploys run on Vercel from `main`.

Deployment checklist:

1. Run local quality gates.
2. Commit focused changes only.
3. Push to `main`.
4. Confirm the Vercel production deployment is `Ready`.
5. Smoke-test the changed production routes.
6. For deposit-related changes, run the full Stripe and webhook verification path.

The production Stripe webhook endpoint should be registered as:

```text
https://www.blakemarcus.com/api/webhooks/stripe
```

Security headers and Vercel behavior are configured in `vercel.json`.

## Operational Runbooks

Key docs:

- [`docs/deposit-go-live.md`](docs/deposit-go-live.md) — production deposit launch and smoke tests
- [`docs/client-onboarding-system.md`](docs/client-onboarding-system.md) — guided onboarding flow
- [`docs/client-intake-questionnaire.md`](docs/client-intake-questionnaire.md) — intake structure
- [`docs/client-kickoff-agenda.md`](docs/client-kickoff-agenda.md) — kickoff structure
- [`docs/client-launch-handoff-checklist.md`](docs/client-launch-handoff-checklist.md) — launch handoff
- [`docs/seo-analytics-strategist-agent.md`](docs/seo-analytics-strategist-agent.md) — SEO and analytics direction
- [`docs/studio-command-center.md`](docs/studio-command-center.md) — studio operating notes

## Security Notes

- Stripe webhooks must be verified with `STRIPE_WEBHOOK_SECRET` before processing.
- Deposit fulfillment should remain idempotent because Stripe can retry webhook events.
- Protected onboarding routes depend on signed `HttpOnly` access cookies.
- Do not log payment secrets, webhook secrets, database URLs, Resend keys, or raw sensitive client intake data.
- Keep production environment variables in Vercel project settings, not in source control.
- Treat email delivery as best-effort; payment and access fulfillment should not depend on Resend availability.

## License

Private project. All rights reserved.
