export type PackageKey = 'essentials' | 'growth' | 'full-brand';

export type PackageOffer = {
  slug: PackageKey;
  name: string;
  eyebrow: string;
  startingPrice: string;
  timeline: string;
  summary: string;
  idealFor: string;
  includes: string[];
  scopeBoundaries: string[];
  depositLabel: string;
  featured?: boolean;
};

export const packageOffers: PackageOffer[] = [
  {
    slug: 'essentials',
    name: 'Essentials',
    eyebrow: 'Focused launch',
    startingPrice: 'Starting at $2,000',
    timeline: '5 business days',
    summary:
      'A polished one-page website that makes your business feel real, trusted, and easy to contact without burying visitors in extra pages.',
    idealFor:
      'Best for new or lean service businesses that need to look credible fast without turning a simple need into a bloated project.',
    includes: [
      'One focused page built around the offer people actually buy',
      'Plain-language sections for services, trust, and contact',
      'Copy cleanup so the message sounds like you and makes sense quickly',
      'Responsive design for mobile, tablet, and desktop',
      'Launch support and a handoff you can actually follow',
    ],
    scopeBoundaries: [
      'Full brand identity system',
      'Complex CMS or content migration',
      'Advanced booking, e-commerce, or custom app logic',
    ],
    depositLabel: 'Reserve Essentials',
  },
  {
    slug: 'growth',
    name: 'Growth',
    eyebrow: 'Complete website',
    startingPrice: 'Starting at $4,500',
    timeline: '10 business days',
    summary:
      'A complete service-business website that explains what you do, why it matters, and how to take the next step without making visitors connect the dots themselves.',
    idealFor:
      'Best for established service businesses that are already doing good work and need the website to help earn better-fit inquiries.',
    includes: [
      'A thoughtful sitemap built around how real customers decide',
      'Custom visual direction that feels like your business, not a template',
      'Core pages for services, proof, about, FAQ, and contact',
      'Light CMS support for repeatable content',
      'Launch QA, a practical handoff, and post-launch polish',
    ],
    scopeBoundaries: [
      'Complex custom applications',
      'Advanced e-commerce or deep API integrations',
      'Large content migrations or full brand strategy engagements',
    ],
    depositLabel: 'Reserve Growth',
    featured: true,
  },
  {
    slug: 'full-brand',
    name: 'Full Brand Build',
    eyebrow: 'Premium build',
    startingPrice: 'Starting at $7,500',
    timeline: '3 to 4 weeks',
    summary:
      'A deeper website experience for businesses ready to feel more premium, say what they mean clearly, and create a smoother path from first impression to inquiry.',
    idealFor:
      'Best for founder-led service businesses that need a more custom presence, stronger messaging, and a site that can grow with them.',
    includes: [
      'Custom multi-page website with a more elevated visual point of view',
      'Deeper messaging support so the site sounds clear, confident, and human',
      'Flexible CMS and reusable content sections',
      'Motion, polish, and thoughtful interaction details',
      'Launch checklist, handoff walkthrough, and a 14-day tune-up',
    ],
    scopeBoundaries: [
      'Enterprise brand strategy or procurement-heavy work',
      'Large-scale content production',
      'Complex software products or advanced automation systems',
    ],
    depositLabel: 'Reserve Full Brand Build',
  },
];

export const everyPackageIncludes = [
  'A clear scope before production begins',
  'Direct communication with one studio partner',
  'A mobile-first website that feels aligned with your business',
  'Launch guidance and handoff support',
];

export const audienceGroups = [
  'Founder-led service businesses',
  'Boutique wellness and beauty brands',
  'Creative studios and personal brands',
  'Coaches, consultants, and experts',
  'Experience-driven local businesses',
];

export const processSteps = [
  {
    number: '01',
    title: 'Choose your package',
    body: 'Pick the level of support that matches where the business is right now. For most service businesses, Growth gives the message enough room to breathe.',
  },
  {
    number: '02',
    title: 'Place the $150 deposit',
    body: 'Your deposit saves space in the production schedule and is credited toward the total project fee.',
  },
  {
    number: '03',
    title: 'Complete intake',
    body: 'You share the goals, offer, audience, content, and visual direction in one guided intake so the project starts with real context.',
  },
  {
    number: '04',
    title: 'Book kickoff',
    body: 'We confirm the scope, priorities, timeline, and next steps together so everyone knows what is being built and why.',
  },
  {
    number: '05',
    title: 'Design, build, and launch',
    body: 'Your site moves through a structured build with clear checkpoints, focused feedback, and a launch path that does not feel chaotic.',
  },
];

export const processValues = [
  {
    title: 'Clear scope',
    body: 'Every project starts with defined deliverables so the work stays focused and you are not left wondering what is included.',
  },
  {
    title: 'Direct communication',
    body: 'You work with one partner who understands the strategy, design, copy, and details from start to finish.',
  },
  {
    title: 'Steady momentum',
    body: 'The process keeps decisions moving while still giving the work enough care to feel thoughtful.',
  },
];

export const proofStories = [
  {
    label: 'Wellness practice',
    title: 'A calmer website that helps people feel safe, informed, and ready to book.',
    summary:
      'Built for wellness businesses where the website needs to lower anxiety, answer the obvious questions, and make booking feel simple.',
    bullets: [
      'Clarify the services and who they are actually for',
      'Make booking or inquiry simple on mobile',
      'Use a cleaner visual rhythm that supports trust',
    ],
  },
  {
    label: 'Creative studio',
    title: 'A stronger online presence for a business with taste, standards, and a clear point of view.',
    summary:
      'Designed for studios that need more than a gallery of work. The site has to explain the offer, show credibility, and help the right people reach out.',
    bullets: [
      'Bring structure to offers, process, and proof',
      'Keep the personality while making the next step obvious',
      'Make the business easier to understand at a glance',
    ],
  },
  {
    label: 'Service business',
    title: 'A polished site that helps a small business look as established as the work already is.',
    summary:
      'Built for businesses ready to replace the patched-together version of their online presence with something clearer, warmer, and easier to trust.',
    bullets: [
      'Sharpen the message around what the business does and why people choose it',
      'Create stronger hierarchy and clearer calls to action',
      'Support future growth with a simple content structure',
    ],
  },
];

export const studioPrinciples = [
  {
    title: 'Small on purpose',
    body: 'The studio stays intentionally lean so the work gets close attention, honest communication, and thoughtful execution instead of getting passed around.',
  },
  {
    title: 'Premium without drag',
    body: 'The experience is meant to feel polished and organized without the slow timelines, handoffs, or fog of a traditional agency.',
  },
  {
    title: 'Built for trust',
    body: 'Every decision is shaped around clarity, credibility, and helping the right clients feel confident choosing you.',
  },
];

export const fitNotes = [
  'A strong fit if you want a polished website, a guided process, and one thoughtful partner leading the work with you.',
  'A weaker fit if you want endless revisions, enterprise complexity, or a big agency team with lots of layers.',
];

export const faqs = [
  {
    question: 'Who is this studio for?',
    answer:
      'This studio is built for founder-led service businesses that want their website to feel clearer, warmer, more premium, and more useful to the people deciding whether to reach out.',
  },
  {
    question: 'How does the $150 deposit work?',
    answer:
      'The deposit saves your place in the project schedule and is credited toward the total project fee. Once it is paid, you move into intake and kickoff.',
  },
  {
    question: 'What if I am between packages?',
    answer:
      'Choose the package closest to what the business needs now. Scope is confirmed before production begins, and Growth is the best fit for most service businesses.',
  },
  {
    question: 'Do you help with copy and structure?',
    answer:
      'Yes. Every package includes guidance on messaging, structure, and what each page needs to say so the site feels clearer, more human, and easier to act on.',
  },
  {
    question: 'Is ongoing support available after launch?',
    answer:
      'Yes. Care plans are available for updates, maintenance, small improvements, and continued support after the site is live.',
  },
];

export const carePlan = {
  title: 'Care Plan',
  summary:
    'Ongoing support for businesses that want a trusted studio partner after launch for updates, maintenance, and steady improvements without having to start from scratch each time.',
  details: [
    'Monthly content and design updates',
    'Site maintenance and issue monitoring',
    'Small UX and conversion improvements over time',
    'Priority support for post-launch changes',
  ],
};

export function getPackageBySlug(slug?: string | null) {
  return packageOffers.find((offer) => offer.slug === slug);
}
