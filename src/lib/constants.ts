export const SITE_CONFIG = {
  name: 'Next.js SEO Architect',
  description: 'Enterprise-grade Next.js starter with advanced SEO architecture',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com',
  ogImage: 'https://example.com/og.jpg',
  links: {
    twitter: 'https://twitter.com/example',
    github: 'https://github.com/example',
  },
  authors: [
    {
      name: 'Shoaib Khan',
      url: 'https://example.com',
    },
  ],
  keywords: ['Next.js', 'React', 'SEO', 'Performance', 'Web Development'],
} as const;

export type SiteConfig = typeof SITE_CONFIG;
