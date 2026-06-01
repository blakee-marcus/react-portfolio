# Blake Marcus Studio Command Center

This is the operating dashboard for Blake Marcus Studio.

Use it to keep the studio focused on the next highest-leverage work: qualified leads, deposits, reliable delivery, better proof, and calm client experience.

---

## Current Studio Focus

**Primary goal:** turn blakemarcus.com into a working sales and delivery system for premium website builds.

**Current stage:** studio setup + launch readiness.

**Primary offer:** website builds for founder-led service businesses.

**Primary conversion path:**

> Visit site → understand packages → choose fit → pay $150 deposit → complete intake → book kickoff → build → launch → optional care plan

---

## This Week’s Priorities

Keep this list tight. Three to five active priorities max.

| Priority | Owner Agent | Status | Notes |
| --- | --- | --- | --- |
| Run production-style deposit QA in test mode | Deposit Operations / Launch Manager | Not started | Production env keys are present; verify Stripe checkout, webhook, confirmation, intake/kickoff access, and emails without deploying. |
| Apply intake DB migration + confirm kickoff scheduler | Client Success / Onboarding | In progress | Native intake form is live; next unblock is `project_intakes` production schema plus live scheduler URL confirmation. |
| Review mobile UX for homepage → services → start → deposit | UX/UI Director | Not started | Public checks pass on core pages; make the buying path feel premium and easy on mobile. |
| Draft proof/case-study structure for `/work` | Conversion Copywriter | Not started | Replace placeholder proof with stronger real/project-style assets before outreach volume increases. |
| Resolve `app/manifest.ts` intentionally | Frontend Technical Lead | Not started | Keep as a launch-polish task after deposit/onboarding QA. |

---

## Active Leads

Use this as the simple pipeline until a CRM is needed.

| Lead / Business | Source | Fit | Stage | Next Action | Owner | Last Touch |
| --- | --- | --- | --- | --- | --- | --- |
| Example local service business | Manual research | TBD | Research | Score fit and identify website opportunity | Local Growth / Outreach | — |

### Lead Stages

- Research
- Qualified
- Contacted
- Followed up
- Interested
- Deposit sent
- Deposit paid
- Not now
- Closed / no fit

### Fit Score

Use simple labels:

- **Strong:** clear service business, likely budget, obvious website opportunity
- **Maybe:** promising but needs more research
- **Weak:** poor fit, unclear budget, no clear need, or not founder-led

---

## Active Projects

| Client / Project | Package | Stage | Next Client Action | Next Studio Action | Risk / Blocker |
| --- | --- | --- | --- | --- | --- |
| — | — | — | — | — | — |

### Project Stages

- Deposit paid
- Intake pending
- Kickoff scheduled
- Strategy / structure
- Copy / content
- Design
- Build
- Review
- Launch prep
- Launched
- Care plan

---

## Revenue Snapshot

| Metric | Current | Target | Notes |
| --- | ---: | ---: | --- |
| Deposits this month | 0 | 1–3 | Early target: prove funnel. |
| Website projects booked | 0 | 1–2 | Focus on qualified, deliverable work. |
| Care plan clients | 0 | 1 | Offer after successful launches. |
| Project revenue booked | $0 | TBD | Track signed/paid work, not wishful pipeline. |
| Recurring monthly revenue | $0 | TBD | Care plans only after clear value. |

---

## Site + Funnel Health

| Area | Status | Owner Agent | Next Check |
| --- | --- | --- | --- |
| Production deploys | Healthy | Frontend Technical Lead | Latest production deployment is READY/PROMOTED; re-check after each push |
| Homepage copy/positioning | Improved | Conversion Copywriter | Mobile review |
| Services/packages page | Live on `/services`; stale `/packages` URL 404s | Offer / Pricing Strategist | Confirm scope clarity and avoid using `/packages` in external links |
| Start/deposit flow | Needs QA | Deposit Operations / Launch Manager | Full test-mode run; `/start` and `/deposit` return 200 |
| Client onboarding | Intake form implemented | Client Success / Onboarding | Apply `project_intakes` DB migration + confirm kickoff scheduler |
| Work/proof page | Needs stronger proof | Conversion Copywriter | Case-study draft |
| Studio page | Improved | Conversion Copywriter + UX/UI Director | Founder story polish |
| SEO/schema | Improved | SEO / Analytics Strategist | Sitemap and robots are reachable; validate search previews next |
| Analytics | Instrumented; traffic report unavailable in this run | SEO / Analytics Strategist | Confirm Vercel dashboard traffic, referrers, top pages, and Speed Insights |

---

## Agent Bench

Use the roster when assigning work: [`studio-agent-roster.md`](./studio-agent-roster.md)

| Agent | Best Use Right Now | Status |
| --- | --- | --- |
| CEO / Studio Operator | Pick weekly priorities and reduce noise | Ready |
| Offer / Pricing Strategist | Confirm packages, care plan, and scope boundaries | Ready |
| Conversion Copywriter | Improve proof, FAQs, emails, case studies | Ready |
| UX/UI Director | Review sales path and page experience | Ready |
| Frontend Technical Lead | Deployment, manifest, mobile, accessibility, QA | Ready |
| SEO / Analytics Strategist | Analytics review, SEO content targets, local SEO | Ready |
| Local Growth / Outreach | Build lead list and outreach sequence | Ready |
| Client Success / Onboarding | Intake, kickoff, launch handoff, care transition | Ready |
| Deposit Operations / Launch Manager | Stripe, webhook, database, Resend, go-live QA | Ready |

---

## Operating Rhythm

### Daily / As Needed

- Check for broken deployments or urgent site issues.
- Capture any lead, project, or task that should not be forgotten.
- Move one high-leverage task forward instead of creating a huge list.

### Weekly Studio Review

Run once per week:

1. Review leads and pipeline.
2. Review deposits, revenue, and active projects.
3. Review site analytics and funnel issues.
4. Pick 3 to 5 priorities for the week.
5. Assign each priority to an agent.
6. Archive or defer anything not needed now.

Template: [`studio-weekly-review-template.md`](./studio-weekly-review-template.md)

### Monthly Studio Review

Run once per month:

1. Review what generated leads or revenue.
2. Review what wasted time.
3. Improve one sales asset.
4. Improve one delivery asset.
5. Improve one technical/SEO foundation.
6. Decide whether to adjust packages, pricing, or care plan positioning.

---

## Backlog

### High Priority

- [ ] Resolve and commit/remove `app/manifest.ts`.
- [ ] Run full deposit flow QA in test mode.
- [ ] Confirm Resend email behavior for paid deposits.
- [ ] Create real proof/case-study structure for `/work`.
- [x] Create intake form questions.
- [x] Create kickoff prep/checklist.
- [x] Implement native paid-client intake form.
- [ ] Apply `db/migrations/0001_project_intakes.sql` to production database.
- [ ] Confirm `KICKOFF_BOOKING_URL` points to the live scheduler.
- [ ] Review mobile sales path.
- [ ] Confirm no outreach, docs, or external links use stale `/packages` URL.

### Medium Priority

- [x] Add client prep checklist.
- [x] Add launch checklist.
- [ ] Add testimonial request template.
- [x] Add care plan transition email.
- [ ] Add lead tracker seed list.
- [ ] Write first local outreach sequence.
- [ ] Confirm Vercel Web Analytics / Speed Insights setup.

### Later

- [ ] Add blog/insight section if SEO strategy supports it.
- [ ] Add downloadable website prep checklist.
- [ ] Add public case studies with screenshots.
- [ ] Add recurring care plan sales page or section.
- [ ] Add CRM integration if manual tracker becomes painful.

---

## Decision Log

Record decisions that affect the studio so they do not get re-litigated every week.

| Date | Decision | Reason | Owner |
| --- | --- | --- | --- |
| 2026-05-13 | Use a role-agent roster to operate the studio system. | Keeps strategy, copy, UX, technical, growth, and onboarding work focused. | Blake + Coeus |
| 2026-05-13 | Build the command center as the source of truth for studio setup. | Turns the agent docs into a working operating system. | Coeus |
| 2026-05-13 | Draft the client onboarding system as docs before wiring tools. | Keeps the deposit-to-kickoff experience clear before committing to a form/scheduler platform. | Coeus |
| 2026-06-01 | Prioritize deposit/onboarding QA over new site work this week. | Production deploy and public pages are healthy, but traffic data was unavailable and the deposit-to-kickoff path still needs proof before outreach. | Coeus |

---

## Parking Lot

Ideas that might be useful later, but should not distract from the current stage.

- Productized website audit offer
- Website prep checklist lead magnet
- Referral partner program
- Monthly studio notes/newsletter
- Template shop or digital products
- Local business website teardown series
