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

**Current revenue plan:** [`revenue-game-plan.md`](./revenue-game-plan.md)

---

## This Week's Priorities

Keep this list tight. Three to five active priorities max. Updated 2026-06-15.

| Priority | Owner Agent | Status | Notes |
| --- | --- | --- | --- |
| Push pending local changes to production | Frontend Technical Lead | Not started | 13 days since last deploy; significant uncommitted work (intake, insights, CRM, SEO improvements). Ship what's ready, then verify. |
| Run production-style deposit QA in test mode | Deposit Operations / Launch Manager | Not started | After push: verify Stripe checkout, webhook, confirmation, intake/kickoff access, and emails end-to-end. |
| Apply intake DB migration + confirm kickoff scheduler | Client Success / Onboarding | In progress | `0001_project_intakes.sql` exists locally; needs production application + live scheduler URL confirmation. |
| Review mobile UX for homepage → services → start → deposit | UX/UI Director | Not started | `/deposit` loads slow (~1.8 s); make the buying path feel premium and fast on mobile. |
| Resolve Vercel Web Analytics access + get traffic baseline | SEO / Analytics Strategist | Not started | Analytics API endpoints return 404; dashboard access unknown. Need traffic/referrer/top-page signals before outreach ramps.

---

## Active Leads

Use this as the simple pipeline until a CRM is needed.

| Lead / Business | Source | Fit | Stage | Next Action | Owner | Last Touch |
| --- | --- | --- | --- | --- | --- | --- |
| Example local service business | Manual research | TBD | Research | Score fit and identify website opportunity | Local Growth / Outreach | - |

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
| - | - | - | - | - | - |

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
| Deposits this month | 0 | 1-3 | Early target: prove funnel. |
| Website projects booked | 0 | 1-2 | Focus on qualified, deliverable work. |
| Care plan clients | 0 | 1 | Offer after successful launches. |
| Project revenue booked | $0 | TBD | Track signed/paid work, not wishful pipeline. |
| Recurring monthly revenue | $0 | TBD | Care plans only after clear value. |

---

## Site + Funnel Health

| Area | Status | Owner Agent | Next Check |
| --- | --- | --- | --- |
| Production deploys | Healthy (stale) | Frontend Technical Lead | 19/20 deploys READY; last push June 1 (13 days ago). Many uncommitted local changes need shipping. |
| Homepage copy/positioning | Improved | Conversion Copywriter | Mobile review |
| Services/packages page | Live on `/services`; stale `/packages` URL 404s | Offer / Pricing Strategist | Confirm scope clarity and avoid using `/packages` in external links |
| Start/deposit flow | Needs QA; `/deposit` slow (~1.8 s) | Deposit Operations / Launch Manager | Full test-mode run after push; `/deposit` load time needs investigation |
| Client onboarding | Intake form implemented | Client Success / Onboarding | Apply `project_intakes` DB migration + confirm kickoff scheduler |
| Work/proof page | Needs stronger proof | Conversion Copywriter | Case-study draft |
| Studio page | Improved | Conversion Copywriter + UX/UI Director | Founder story polish |
| SEO/schema | Improved | SEO / Analytics Strategist | Sitemap and robots are reachable; validate search previews next |
| Analytics | Vercel Web Analytics API inaccessible (404) | SEO / Analytics Strategist | Confirm dashboard access; get traffic/referrer/top-page baseline before outreach |

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

- [ ] Resolve and commit/remove `app/manifest.ts` (before next deploy).
- [ ] Push pending local changes (intake, CRM, insights, SEO) to production.
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
- [ ] Initialize the local SQLite CRM with `npm run crm -- init`.
- [ ] Research 50 Las Vegas prospects and score the top 15.
- [ ] Confirm Vercel Web Analytics / Speed Insights dashboard access; get traffic baseline.
- [ ] Investigate `/deposit` page slow load (~1.8 s) and optimize if possible.

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
| 2026-06-15 | Shift priority to pushing pending local work + analytics baseline. | Last deploy was 13 days ago with uncommitted intake/CRM/SEO work piling up. Vercel analytics API returned 404s, so dashboard access and traffic signals must be unblocked before outreach. `/deposit` load time flagged as slow. | Coeus |

---

## Parking Lot

Ideas that might be useful later, but should not distract from the current stage.

- Productized website audit offer
- Website prep checklist lead magnet
- Referral partner program
- Monthly studio notes/newsletter
- Template shop or digital products
- Local business website teardown series
