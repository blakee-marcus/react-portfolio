export const dynamic = "force-static";

const siteUrl = "https://www.blakemarcus.com";
const pageUrl = `${siteUrl}/about`;

export const metadata = {
  title: "Long Beach Web Developer | Custom Business Websites by Blake Marcus",
  description:
    "Looking to redesign your business website? Blake Marcus is a freelance web developer in Long Beach, CA who builds fast, custom websites for small businesses using React, Tailwind CSS, and modern frameworks.",
  keywords:
    "web developer Long Beach, website redesign for small business, freelance web developer, hire web developer near me, custom business websites, React developer, Tailwind CSS, full stack developer Long Beach",
  alternates: { canonical: pageUrl },
  authors: [{ name: "Blake Marcus" }],
  openGraph: {
    type: "profile",
    url: pageUrl,
    title: "Freelance Web Developer in Long Beach – Blake Marcus",
    description:
      "Need a new website for your business? Hire Blake Marcus, a freelance web developer in Long Beach, CA, specializing in custom websites, landing pages, and SEO-focused redesigns.",
    images: [
      {
        url: `${siteUrl}/api/og?title=About+Blake+Marcus`,
        width: 1200,
        height: 630,
        alt: "About Blake Marcus",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Freelance Web Developer in Long Beach – Blake Marcus",
    description:
      "Custom websites, landing pages, and SEO-focused redesigns for small businesses.",
    images: [`${siteUrl}/api/og?title=About+Blake+Marcus`],
  },
};

function jsonLd() {
  const aboutPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Blake Marcus",
    url: pageUrl,
    mainEntity: {
      "@type": "Person",
      name: "Blake Marcus",
      jobTitle: "Full-Stack / Front-End Web Developer",
      url: siteUrl,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Long Beach",
        addressRegion: "CA",
        addressCountry: "US",
      },
      worksFor: { "@type": "Organization", name: "GoBasile" },
      sameAs: [
        "https://github.com/blakee-marcus",
        "https://www.linkedin.com/in/blake-marcus/",
        "https://www.gobasile.com",
      ],
      knowsAbout: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "Flask",
        "PostgreSQL",
        "SEO",
        "Accessibility",
      ],
    },
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "About", item: pageUrl },
    ],
  };

  // inject both at once
  return JSON.stringify([aboutPageJsonLd, breadcrumbsJsonLd]);
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-secondary text-primary font-base px-6 sm:px-12 py-16 border-4 border-primary shadow-brutal">
      {/* JSON-LD (no next/script needed) */}
      <script
        id="about-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd() }}
      />

      <header className="w-full px-4 py-10 text-center border-b-4 border-primary">
        <h1 className="text-[2.5rem] sm:text-6xl font-headings uppercase tracking-[var(--letter-spacing-wide)]">
          About Blake Marcus
        </h1>
      </header>

      <section className="max-w-6xl mx-auto px-6 sm:px-12 py-16 space-y-[var(--component-gap)]">
        {/* Intro */}
        <div>
          <h2 className="text-3xl sm:text-5xl font-headings uppercase border-l-4 border-primary pl-4 tracking-tight">
            Custom Website Development for Local Businesses
          </h2>
          <p className="mt-4 text-lg leading-relaxed border-l-4 border-primary pl-4">
            I’m Blake Marcus — a <strong>freelance web developer</strong> in Long Beach, CA helping
            small businesses <strong>rebuild their websites</strong> to boost trust, speed, and SEO.
          </p>
          <p className="text-lg leading-relaxed border-l-4 border-primary pl-4">
            Whether you need a <strong>modern redesign</strong>, a <strong>landing page</strong>, or
            a fully custom app, I’ll help you ship something{" "}
            <strong>fast, clean, and easy to manage</strong>.
          </p>
          <p className="text-lg leading-relaxed border-l-4 border-primary pl-4">
            I also build at <strong>GoBasile</strong>, a device marketplace — and partner with small
            business owners to launch professional websites that <em>stand out</em>.
          </p>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-headings uppercase border-b-4 border-primary pb-2">
            Services I Offer
          </h2>
          <ul className="list-disc list-inside text-lg space-y-3 pt-4">
            <li>Website redesigns with bold, mobile-first layouts</li>
            <li>Custom landing pages optimized for conversions</li>
            <li>SEO-ready sites with forms, reviews, and integrations</li>
            <li>Web apps with dashboards, logins, and backend logic</li>
          </ul>
        </div>

        {/* Tech Stack */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-headings uppercase border-b-4 border-primary pb-2">
            Tech Stack
          </h2>
          <ul className="text-lg space-y-1 pt-4">
            <li><strong>Front-End:</strong> React, Next.js, Tailwind CSS, JavaScript</li>
            <li><strong>Back-End:</strong> Flask, Node.js, Express, GraphQL</li>
            <li><strong>Databases:</strong> PostgreSQL, MongoDB</li>
            <li><strong>Tools:</strong> Git, GitHub, Vercel, Heroku, AWS</li>
          </ul>
        </div>

        {/* Sample Projects */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-headings uppercase border-b-4 border-primary pb-2">
            Sample Projects
          </h2>
          <ul className="text-lg space-y-6 pt-4">
            {[
              {
                name: "Tesla Check-In Tool",
                desc:
                  "Internal kiosk app to streamline vehicle delivery workflows and improve customer handoffs.",
                link: "https://github.com/blakee-marcus/Check-In-Tool",
              },
              {
                name: "Every After Bakery",
                desc:
                  "Full-stack eCommerce platform with login, cart, checkout, admin features, and Stripe payments.",
                link: "https://github.com/Azurene/ever-after-bakery",
              },
              {
                name: "Tech Blog",
                desc:
                  "A CMS-style blog with signup, posts, and comments. Built with Express and MySQL.",
                link: "https://github.com/blakee-marcus/tech-blog",
              },
            ].map(({ name, desc, link }) => (
              <li key={name}>
                <strong>{name}:</strong> {desc}
                <br />
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent underline hover:bg-accent hover:text-secondary transition-colors"
                >
                  View Project
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Experience */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-headings uppercase border-b-4 border-primary pb-2">
            Experience & Teaching
          </h2>
          <div className="pt-4 space-y-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-wide">
                Teaching Assistant — edX (2022–Present)
              </h3>
              <p className="text-lg">
                I help students master full-stack development — from React and APIs to responsive design.
              </p>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-wide">
                Tesla Advisor (2023–2024)
              </h3>
              <p className="text-lg">
                Built a kiosk tool to improve delivery workflows. Bridged tech with real-world ops.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-headings uppercase border-b-4 border-primary pb-2">
            Let’s Work Together
          </h2>
          <p className="text-lg mt-4 border-l-4 border-primary pl-4">
            Ready to <strong>rebuild your website</strong>?{" "}
            <a
              href="mailto:marcusb733@gmail.com"
              className="text-accent underline hover:bg-accent hover:text-primary transition-colors"
            >
              Email me
            </a>{" "}
            or connect on{" "}
            <a
              href="https://www.linkedin.com/in/blake-marcus/"
              className="text-accent underline hover:bg-accent hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            .
          </p>
          <p className="text-lg mt-2 border-l-4 border-primary pl-4">
            You can also find more work on{" "}
            <a
              href="https://github.com/blakee-marcus"
              className="text-accent underline hover:bg-accent hover:text-secondary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
