import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async redirects() {
    const apexHost = {
      type: 'host' as const,
      value: 'blakemarcus.com',
    };

    return [
      {
        source: '/about',
        has: [apexHost],
        destination: 'https://www.blakemarcus.com/studio',
        permanent: true,
      },
      {
        source: '/portfolio',
        has: [apexHost],
        destination: 'https://www.blakemarcus.com/work',
        permanent: true,
      },
      {
        source: '/hire',
        has: [apexHost],
        destination: 'https://www.blakemarcus.com/services',
        permanent: true,
      },
      {
        source: '/contact',
        has: [apexHost],
        destination: 'https://www.blakemarcus.com/services',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [apexHost],
        destination: 'https://www.blakemarcus.com/:path*',
        permanent: true,
      },
      {
        source: '/about',
        destination: '/studio',
        permanent: true,
      },
      {
        source: '/portfolio',
        destination: '/work',
        permanent: true,
      },
      {
        source: '/hire',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/contact',
        destination: '/services',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
