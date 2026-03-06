export const SITE_CONFIG = {
  name: 'RocketFuel',
  description: 'Enterprise-grade crypto payment processing and global payouts for modern businesses.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://rocketfuel.inc',
  ogImage: 'https://rocketfuel.inc/og.jpg',
  links: {
    twitter: 'https://twitter.com/rocketfuel',
    github: 'https://github.com/rocketfuel',
  },
  authors: [
    {
      name: 'RocketFuel',
      url: 'https://rocketfuel.inc',
    },
  ],
  keywords: ['Crypto Payments', 'Global Payouts', 'Blockchain', 'Invoicing', 'Payment Processing'],
} as const;

export type SiteConfig = typeof SITE_CONFIG;
