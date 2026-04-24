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
      'A clear, polished one-page website that helps your business look credible, explain the offer, and give visitors one obvious next step.',
    idealFor:
      'Best for new or lean service businesses that need a stronger online presence without turning the project into a large build.',
    includes: [
      'One strategic page built around your core offer',
      'Clear sections for services, proof, and contact',
      'Light copy refinement to sharpen the message',
      'Responsive design for mobile, tablet, and desktop',
      'Launch support and simple handoff',
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
      'A complete service business website designed to build trust quickly, explain your value clearly, and guide visitors toward booking or inquiry.',
    idealFor:
      'Best for established service businesses that need more than a landing page and want their website to actively support sales.',
    includes: [
      'Thoughtful sitemap and conversion-focused page structure',
      'Custom visual direction aligned to your brand',
      'Core pages for services, proof, about, FAQ, and contact',
      'Light CMS support for repeatable content',
      'Launch QA, handoff, and post-launch polish',
    ],
    depositLabel: 'Reserve Growth',
    featured: true,
  },
  {
    slug: 'full-brand',
    name: 'Signature',
    eyebrow: 'Premium build',
    startingPrice: 'Starting at $7,500',
    timeline: '3 to 4 weeks',
    summary:
      'A deeper website experience for businesses ready to look premium, sharpen their positioning, and create a stronger client journey from first impression to inquiry.',
    idealFor:
      'Best for founder-led service businesses that need a more custom presentation, stronger messaging, and room to grow.',
    includes: [
      'Custom multi-page website with elevated visual direction',
      'Deeper messaging support across core pages',
      'Flexible CMS and reusable content sections',
      'Motion, polish, and premium interaction details',
      'Launch checklist, handoff walkthrough, and 14-day tuneup',
    ],
    depositLabel: 'Reserve Signature',
  },
];

export const everyPackageIncludes = [
  'A clear scope before production begins',
  'Direct communication with one studio partner',
  'A mobile-first website aligned to your brand',
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
    body: 'Pick the level of support that matches where your business is now. For most service businesses, Growth is the strongest starting point.',
  },
  {
    number: '02',
    title: 'Place the $150 deposit',
    body: 'Your deposit reserves your place in the production schedule and applies to your total project fee.',
  },
  {
    number: '03',
    title: 'Complete intake',
    body: 'You will share your goals, offer, audience, content, and visual direction through one guided intake form.',
  },
  {
    number: '04',
    title: 'Book kickoff',
    body: 'We confirm the scope, priorities, timeline, and next steps so the project starts with clarity.',
  },
  {
    number: '05',
    title: 'Design, build, and launch',
    body: 'Your site moves through a structured build with clear checkpoints, focused feedback, and a defined launch path.',
  },
];

export const processValues = [
  {
    title: 'Clear scope',
    body: 'Every project starts with defined deliverables so the work stays focused and the process stays easy to follow.',
  },
  {
    title: 'Direct communication',
    body: 'You work with one partner who understands the strategy, design, and details from start to finish.',
  },
  {
    title: 'Steady momentum',
    body: 'The process is designed to keep decisions moving without making the experience feel rushed or chaotic.',
  },
];

export const proofStories = [
  {
    label: 'Wellness practice',
    title: 'A calmer website that makes the practice easier to trust and easier to book.',
    summary:
      'Built for wellness businesses that need to create confidence quickly and guide visitors toward action without overwhelming them.',
    bullets: [
      'Clarify services and who they are for',
      'Make booking or inquiry simple on mobile',
      'Use a cleaner visual rhythm that supports trust',
    ],
  },
  {
    label: 'Creative studio',
    title: 'A stronger online presence for a business with a clear point of view.',
    summary:
      'Designed for studios that need more than a portfolio. The goal is to explain the offer clearly, show credibility, and turn interest into qualified leads.',
    bullets: [
      'Bring structure to offers, process, and proof',
      'Balance personality with clear conversion paths',
      'Make the business easier to understand at a glance',
    ],
  },
  {
    label: 'Service business',
    title: 'A polished site that helps a small business look established faster.',
    summary:
      'Built for businesses ready to replace a pieced-together online presence with something clearer, more premium, and easier to trust.',
    bullets: [
      'Sharpen the message around what the business does',
      'Create stronger hierarchy and clearer calls to action',
      'Support future growth with a simple content structure',
    ],
  },
];

export const studioPrinciples = [
  {
    title: 'Small on purpose',
    body: 'The studio stays intentionally lean so each project gets close attention, clear communication, and thoughtful execution.',
  },
  {
    title: 'Premium without drag',
    body: 'The experience is refined and structured without the slow timelines, layers, or complexity of a traditional agency.',
  },
  {
    title: 'Built for trust',
    body: 'Every decision is shaped around clarity, credibility, and helping service businesses feel easier to choose.',
  },
];

export const fitNotes = [
  'A strong fit if you want a polished website, a guided process, and one experienced partner leading the work.',
  'A weaker fit if you want endless revisions, enterprise complexity, or a large agency-style team.',
];

export const faqs = [
  {
    question: 'Who is this studio for?',
    answer:
      'This studio is built for founder-led service businesses that want a clearer message, a stronger online presence, and a more premium first impression.',
  },
  {
    question: 'How does the $150 deposit work?',
    answer:
      'The deposit reserves your place in the project schedule and applies to your total project fee. Once it is paid, you move into intake and kickoff.',
  },
  {
    question: 'What if I am between packages?',
    answer:
      'Choose the package closest to what you need now. Scope is confirmed before production begins, and Growth is the best fit for most service businesses.',
  },
  {
    question: 'Do you help with copy and structure?',
    answer:
      'Yes. Every package includes guidance on messaging, structure, and what each page needs to do so the site feels clearer and easier to act on.',
  },
  {
    question: 'Is ongoing support available after launch?',
    answer:
      'Yes. Care plans are available for updates, maintenance, small improvements, and continued support after launch.',
  },
];

export const carePlan = {
  title: 'Care Plan',
  summary:
    'Ongoing support for businesses that want a trusted studio partner after launch for updates, maintenance, and steady improvements.',
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
