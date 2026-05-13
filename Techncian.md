# Technician Systems Reference

This file defines how Blake Marcus Studio produces high-converting, brand-aligned websites with consistency, speed, and craft.

The studio is not building decorative portfolio pieces. Every production decision should support a clear business outcome: help a founder-led service business look more trustworthy, explain its offer clearly, and move visitors toward a simple next step.

The production standard is:

> Premium craft, simple systems, fast execution, and calm conversion clarity.

This document complements:

- Design Foundations
- Entrepreneur Foundations
- Manager Systems Reference
- Sales and Growth Reference

---

# 3.1 Production Role

The Technician function owns the build layer of the studio.

Its job is to turn strategy, copy, design direction, and client materials into a polished website that is:

- Clear to understand
- Easy to navigate
- Fast on mobile
- Trust-building
- Conversion-focused
- Simple for the client to maintain
- Ready for ongoing support

The Technician should not overbuild. The goal is not to impress other developers. The goal is to create a site that helps the client get more qualified inquiries, bookings, deposits, or purchases.

---

# 3.2 Production Principles

## 1. Clarity Before Craft

Visual polish matters, but only after the page answers:

- What does this business do?
- Who is it for?
- Why should someone trust it?
- What should the visitor do next?

If a visual idea makes the offer harder to understand, remove it.

## 2. Systems Before Custom Chaos

Use repeatable structures whenever possible:

- Reusable sections
- Shared layout primitives
- Consistent CTA patterns
- Tokenized spacing, color, shadows, and radius
- Repeated motion behavior
- Standardized page architecture

Custom work should happen inside the system, not outside of it.

## 3. Premium Means Controlled

A premium site should feel intentional, not busy.

Use:

- Strong typography
- Clean grids
- Confident whitespace
- Restrained surfaces
- Subtle texture
- Useful motion
- Clear calls to action

Avoid:

- Decorative clutter
- Heavy animation
- Generic SaaS gradients
- Parchment or yellowed beige
- Random icon usage
- Overly complex layouts
- Experimental interactions that hurt comprehension

## 4. Mobile Is the Real First Impression

Every build must feel excellent on mobile.

Mobile production rules:

- CTAs must be easy to tap
- Navigation must be obvious
- Sections must stack cleanly
- Copy must stay readable
- Forms must feel short and guided
- Cards must not become cramped
- Motion must not slow interaction

## 5. Conversion Is Part of the Build

A finished page is not done until the next action is obvious.

Primary CTA language should stay close to:

- Start with a $150 deposit
- Reserve your project spot
- Begin the website build
- Book the next step

Secondary CTAs should support the decision, not compete with it.

---

# 3.3 Core Production Stack

The default production stack for studio websites is:

- Next.js App Router
- TypeScript
- Tailwind CSS
- CSS variables for design tokens
- Framer Motion for restrained interaction
- Stripe Checkout for deposit flow
- Resend for transactional email when needed
- Drizzle and Postgres when persistence is required
- Vercel for hosting and deployment

Do not add extra libraries unless they clearly reduce complexity, improve maintainability, or support a client-facing outcome.

---

# 3.4 Component System

The studio component library should stay focused and reusable.

## Core Layout Components

- `PageShell`
- `Section`
- `SectionIntro`
- `Container`
- `Grid`
- `SplitSection`
- `CtaBand`

## Core Marketing Components

- `Hero`
- `ProofStrip`
- `PackageCard`
- `ProcessSteps`
- `TestimonialCard`
- `FAQ`
- `FeatureCard`
- `PricingSummary`
- `DepositSummary`

## Core Interaction Components

- `PrimaryLink`
- `SecondaryLink`
- `Button`
- `MobileNav`
- `Accordion`
- `FormField`
- `StatusMessage`
- `LoadingState`

## Component Rules

Each component should have:

- One clear purpose
- Predictable spacing
- Responsive defaults
- Accessible markup
- Token-based styling
- Minimal prop complexity
- No hardcoded one-off design decisions unless justified

If a component needs too many props, split it.

---

# 3.5 Tailwind and Token Standards

Tailwind should be used as the primary styling language, supported by CSS variables for brand-level control.

## Required Token Categories

Maintain tokens for:

- Background
- Surface
- Elevated surface
- Text
- Muted text
- Border
- Strong border
- Accent
- Accent contrast
- CTA background
- CTA text
- Shadow
- Radius
- Section spacing
- Motion easing

## Styling Rules

- Use tokens before raw colors
- Keep spacing consistent across pages
- Avoid arbitrary values unless they preserve a specific design rhythm
- Use responsive classes intentionally
- Keep dark surfaces readable
- Use borders and shadows subtly
- Do not rely on color alone for state changes

## Visual Direction

The studio style should remain:

> Editorial brutalist luxury with calm conversion clarity.

That means:

- Near-black and off-white foundations
- Cool gray structure
- Muted accent use
- Strong heading hierarchy
- Fine grain or subtle texture
- Hairline borders
- Clean, tactile cards
- Confident but restrained contrast

---

# 3.6 Motion Standards

Motion should make the site feel polished without making it feel like a demo.

## Approved Motion Patterns

- Fade in
- Slight y-axis reveal
- Subtle scale on hover
- Button surface shift
- Card lift
- Staggered section reveal
- Soft background drift
- Loading state feedback

## Motion Timing

Use calm, restrained values:

- Micro-interactions: 150ms to 250ms
- Section reveals: 300ms to 600ms
- Page-level motion: subtle and limited

## Motion Rules

- Respect reduced motion preferences
- Never animate large blocks in a way that delays reading
- Do not use bounce effects
- Do not use spinning decorative elements
- Do not animate primary conversion elements away from the user
- Use motion to guide attention toward the next step

---

# 3.7 Page Production Standards

## Home Page

The home page must establish trust quickly and route visitors toward packages or deposit.

Required structure:

1. Outcome-driven hero
2. Clear audience statement
3. Proof or credibility cue
4. Package preview
5. Process preview
6. Objection reduction
7. Final deposit CTA

The page should make the studio feel premium, focused, and easy to start with.

## Packages Page

The packages page must simplify buying.

Required structure:

1. Three packages max
2. Plain-language outcomes
3. Scope clarity
4. Timeline clarity
5. Recommended option when useful
6. Deposit CTA per package
7. FAQ or reassurance section

Do not overload package cards with every possible detail. Keep the decision simple.

## Start / Deposit Page

The deposit page must remove hesitation and complete the first commitment.

Required structure:

1. Selected package summary
2. $150 deposit explanation
3. What happens immediately after payment
4. Trust and reassurance copy
5. Clear checkout action
6. Support contact if needed

The page should feel secure, simple, and final.

## Process Page

The process page must make the studio feel safe and structured.

Required structure:

1. Deposit to launch overview
2. Key milestones
3. Client responsibilities
4. Timeline expectations
5. What happens after launch
6. CTA back to deposit

The process should feel guided, not complicated.

## Proof Page

The proof page must build trust without overwhelming the visitor.

Required structure:

1. Selective work examples
2. Problem solved
3. Business outcome or strategic improvement
4. Screens or visual proof
5. Short explanation of the decision
6. CTA to start

Proof should feel curated, not like a dumping ground.

## Studio Page

The studio page must make the solo model feel like an advantage.

Required structure:

1. Founder-led positioning
2. Why the studio is intentionally small
3. How systems improve quality and speed
4. What clients can expect
5. CTA to packages or deposit

The message should be: small on purpose, structured by design.

---

# 3.8 Deposit Flow Production Standards

The deposit flow is a core business system, not an add-on.

## Required Flow

1. Client selects package
2. Client starts with $150 deposit
3. Stripe Checkout handles payment
4. Confirmation page explains next steps
5. Confirmation email is sent
6. Intake form is unlocked or linked
7. Kickoff booking is presented
8. Deposit event is recorded

## Deposit Flow Rules

- Keep the page focused
- Do not introduce unrelated services
- Repeat what the client receives after paying
- Make checkout states clear
- Handle errors calmly
- Do not leave users on a dead-end screen
- Reinforce that the deposit reserves their project spot

## Confirmation Page Must Include

- Payment received message
- Package selected
- What happens next
- Intake form link
- Kickoff booking link
- Support email
- Expected response window

---

# 3.9 Forms and Client Input

Forms should feel guided, not exhausting.

## Form Rules

- Ask only what is needed for the current step
- Use clear labels
- Avoid clever field names
- Group related fields
- Use single-column layouts on mobile
- Show calm, specific error messages
- Confirm successful submission clearly

## Intake Priorities

The intake system should collect:

- Business name
- Website or current links
- Primary goal
- Ideal customer
- Services or offers
- Brand tone
- Required pages
- Booking or contact flow
- Existing assets
- Timeline needs

Do not ask clients to make design decisions they are not equipped to make. Translate their answers into design direction internally.

---

# 3.10 QA Standards

A site is not ready to hand off until it passes basic production QA.

## Required QA Checklist

### Content

- No placeholder copy
- No broken links
- CTA copy is consistent
- Package names and prices match the source of truth
- Contact details are correct
- Forms submit correctly

### Responsive

- Mobile tested
- Tablet tested
- Desktop tested
- Navigation works across breakpoints
- Cards stack cleanly
- Buttons remain easy to tap

### Accessibility

- Semantic headings
- Proper button and link usage
- Visible focus states
- Keyboard navigation
- Sufficient color contrast
- Alt text on meaningful images
- Reduced motion support

### Performance

- Images optimized
- No unnecessary scripts
- No heavy decorative effects
- Fast first load
- Clean loading states
- No console errors

### SEO Baseline

- Metadata added
- Open Graph image configured
- Page titles are clear
- Meta descriptions are written
- Sitemap available
- Robots configuration checked
- Semantic HTML structure verified

### Launch

- Domain connected
- SSL active
- Environment variables configured
- Stripe test completed if deposit flow is included
- Email delivery checked if transactional email is included
- Final walkthrough completed

---

# 3.11 Handoff Standards

Every client should leave with a site that feels understandable and maintainable.

## Required Handoff Deliverables

- Final website link
- Admin or CMS access if applicable
- Short handoff video
- Basic update instructions
- Launch checklist summary
- Known limitations or future recommendations
- Support plan recommendation

## Handoff Video Structure

1. Quick congratulations and project recap
2. Walkthrough of main pages
3. How to update key content
4. How forms or booking flows work
5. What not to touch
6. How to request support
7. Recommended next improvements

Keep the handoff calm, practical, and short.

---

# 3.12 14 Day Post Launch Tuneup

Every build should include a light post-launch review window.

## Purpose

The 14 day tuneup protects the client experience after real users begin interacting with the site.

## Tuneup Includes

- Minor copy refinements
- Small layout fixes
- Mobile polish
- Broken link fixes
- Form issue fixes
- Performance review
- UX improvements based on early feedback

## Tuneup Does Not Include

- New pages
- New services
- Major redesigns
- New integrations
- Strategy pivots
- Ongoing content updates

Those belong in a support plan or new scope.

---

# 3.13 Ongoing Support Production Standards

Ongoing support should feel like protection and improvement, not vague maintenance.

## Support Can Include

- Content updates
- Minor design refinements
- Performance monitoring
- Plugin or dependency checks when relevant
- Analytics review
- Quarterly UX recommendations
- Landing page improvements
- Conversion refinements

## Support Should Not Become

- Unlimited redesign work
- Emergency development without boundaries
- Random task intake
- Custom software maintenance unless scoped separately

Support plans should preserve the studio’s calm, structured delivery model.

---

# 3.14 Technician Decision Filter

Before shipping any production decision, ask:

1. Does this make the offer clearer?
2. Does this make the client look more trustworthy?
3. Does this reduce friction toward the next action?
4. Does this preserve the studio’s premium feel?
5. Does this stay simple enough to maintain?
6. Would a local service business owner understand it quickly?

If the answer is no, simplify.

---

# 3.15 Definition of Done

A project is done when:

- The site is live or ready to launch
- The primary CTA is obvious
- The mobile experience is strong
- The site passes QA
- The client knows how to use it
- The deposit or lead flow works
- The handoff video is complete
- The support path is clear
- The site feels premium without feeling overbuilt

The Technician standard is not complexity.

The Technician standard is:

> A calm, high-performing website that looks intentional, works cleanly, and helps the client move their business forward.
