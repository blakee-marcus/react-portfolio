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
    eyebrow: 'Single-page website',
    startingPrice: 'Starting at $2,000',
    timeline: 'Typically 1 week',
    summary:
      'A focused one-page website that explains what you do, builds trust fast, and gives visitors one clear next step.',
    idealFor:
      'Best for service businesses that need a polished online presence without turning the project into something bigger than it needs to be.',
    includes: [
      'One strategic page built around clarity and conversion',
      'Light copy guidance to sharpen your message',
      'Responsive design for desktop and mobile',
      'Contact, inquiry, or booking setup',
    ],
    depositLabel: 'Start Essentials',
  },
  {
    slug: 'growth',
    name: 'Growth',
    eyebrow: 'Multi-page business website',
    startingPrice: 'Starting at $4,500',
    timeline: 'Typically 2 weeks',
    summary:
      'A stronger multi-page website for businesses that need more structure, more credibility, and a clearer path from interest to inquiry.',
    idealFor:
      'Best for studios, wellness brands, and service businesses that need room for services, proof, story, and stronger positioning.',
    includes: [
      'Thoughtful sitemap and page structure',
      'Custom visual direction aligned to your brand',
      'Light CMS support for repeatable content',
      'Space for services, about, proof, and FAQ pages',
    ],
    depositLabel: 'Start Growth',
    featured: true,
  },
  {
    slug: 'full-brand',
    name: 'Full Brand Build',
    eyebrow: 'Strategic custom experience',
    startingPrice: 'Starting at $7,500',
    timeline: 'Typically 3 to 4 weeks',
    summary:
      'A more strategic custom build for businesses that rely on their website to support premium positioning, launches, or consistent lead flow.',
    idealFor:
      'Best for founder-led businesses ready for a more custom digital presence with deeper design support and a stronger content system.',
    includes: [
      'Full custom site design and development',
      'Flexible CMS and reusable content sections',
      'Higher-end motion and transition details',
      'Deeper support around structure, content, and launch',
    ],
    depositLabel: 'Start Full Brand Build',
  },
];

export const everyPackageIncludes = [
  'A clear scope before the work begins',
  'Direct communication with the studio throughout the project',
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
    body: 'Pick the level of support that fits your business now. For most clients, Growth is the right place to start.',
  },
  {
    number: '02',
    title: 'Pay the $150 deposit',
    body: 'Your deposit reserves a project spot and applies to your total fee. It is how the project moves from interest to action.',
  },
  {
    number: '03',
    title: 'Complete intake',
    body: 'You will share your business goals, offer, audience, content, and visual direction through one guided intake form.',
  },
  {
    number: '04',
    title: 'Book kickoff',
    body: 'We confirm scope, priorities, timeline, and next steps so the project starts with clarity instead of guesswork.',
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
    body: 'Every project begins with defined deliverables so the process stays focused and the work stays on track.',
  },
  {
    title: 'Direct communication',
    body: 'You work with one partner who knows the details of the project from start to finish.',
  },
  {
    title: 'Steady momentum',
    body: 'The process is designed to keep things moving without making the experience feel rushed or chaotic.',
  },
];

export const proofStories = [
  {
    label: 'Wellness practice',
    title: 'A website that helps a practice feel credible, calming, and easy to book.',
    summary:
      'Built for wellness businesses that need to communicate trust quickly and guide visitors toward taking action without overwhelming them.',
    bullets: [
      'Clarify services and who they are for',
      'Make booking or inquiry feel simple on mobile',
      'Use a cleaner visual rhythm that supports trust',
    ],
  },
  {
    label: 'Creative studio',
    title: 'A stronger online presence for founder-led businesses with a point of view.',
    summary:
      'Designed for studios that need more than a portfolio. The goal is a site that explains the offer clearly and turns interest into qualified leads.',
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
      'Ideal for businesses ready to replace a pieced-together online presence with something clearer, more premium, and easier to trust.',
    bullets: [
      'Sharpen the message around what you do and who it is for',
      'Create stronger hierarchy and clearer calls to action',
      'Support future growth with a simple content structure',
    ],
  },
];

export const studioPrinciples = [
  {
    title: 'Small on purpose',
    body: 'The studio stays intentionally lean so every project gets close attention, clear communication, and thoughtful execution.',
  },
  {
    title: 'Premium without drag',
    body: 'The experience is refined and structured without the slow timelines, layers, or complexity people expect from agencies.',
  },
  {
    title: 'Built for trust',
    body: 'Everything is shaped around clarity, credibility, and helping service businesses look easier to trust online.',
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
      'This studio is built for founder-led service businesses that want a stronger online presence, a clearer message, and a more premium first impression.',
  },
  {
    question: 'How does the $150 deposit work?',
    answer:
      'The deposit reserves your project spot and applies to your total project fee. Once it is paid, you move into intake and kickoff so the work can begin.',
  },
  {
    question: 'What if I am between packages?',
    answer:
      'Choose the option that feels closest to what you need now. Scope is confirmed before production, and Growth is the best fit for most businesses.',
  },
  {
    question: 'Do you help with copy and structure?',
    answer:
      'Yes. Every package includes guidance on messaging, structure, and what each page needs to do so the site feels clearer and easier to act on.',
  },
  {
    question: 'Is ongoing support available after launch?',
    answer:
      'Yes. You can continue with a care plan for updates, maintenance, small improvements, and continued support after launch.',
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
    'Priority support for post-launch changes and tweaks',
  ],
};

export function getPackageBySlug(slug?: string | null) {
  return packageOffers.find((offer) => offer.slug === slug);
}
