import Link from 'next/link';
import Image from 'next/image';
import { SITE_CONFIG } from '@/lib/constants';
import {
    ShieldCheck, Lock, Award,
    Mail, MapPin,
    Twitter, Linkedin, Github
} from 'lucide-react';

// --- Footer Data ---

const footerLinks = {
    products: {
        title: 'Products',
        links: [
            { name: 'Crypto Payments', href: '/products/crypto-merchant-processing' },
            { name: 'Global Payouts', href: '/products/global-payouts' },
            { name: 'Invoicing', href: '/products/crypto-invoicing' },
            { name: 'Giftcards', href: '/products/giftcards' },
            { name: 'Age Verification', href: '/products/age-verification' },
            { name: 'Blockchain Loyalty Network', href: '/products/blockchain-loyalty-network' },
        ]
    },
    solutions: {
        title: 'Solutions',
        links: [
            { name: 'Gaming', href: '/solutions/skills-based-gaming' },
            { name: 'Marketplaces', href: '/solutions/marketplaces' },
            { name: 'Gig Economy', href: '/solutions/gig-economy' },
            { name: 'Creator Economy', href: '/solutions/creators' },
        ]
    },
    developers: {
        title: 'Developers',
        links: [
            { name: 'Overview', href: '/developers' },
            { name: 'API Docs', href: 'https://docs.rocketfuel.inc/' },
            { name: 'SDKs', href: '/developers/sdks' },
            { name: 'Sandbox', href: '/developers/sandbox' },
        ]
    },
    company: {
        title: 'Company',
        links: [
            { name: 'About', href: '/company/about' },
            { name: 'Partners', href: '/company/partners' },
            { name: 'Careers', href: '/company/careers' },
            { name: 'Newsroom', href: '/company/newsroom' },
        ]
    },
    resources: {
        title: 'Resources',
        links: [
            { name: 'Blog', href: '/blog' },
            { name: 'Case Studies', href: '/resources/case-studies' },
            { name: 'Guides', href: '/resources/guides' },
            { name: 'Help Center', href: '/resources/help-center' },
        ]
    }
};

const supportedAssets = ['USDC', 'USDT', 'BTC', 'ETH', 'SOL', 'MATIC'];

const socialLinks = [
    { name: 'Twitter', href: 'https://twitter.com/rocketfuel', icon: Twitter },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/rocketfuel', icon: Linkedin },
    { name: 'GitHub', href: 'https://github.com/rocketfuel', icon: Github },
];

export function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300">
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Footer Logo */}
                <div className="mb-12">
                    <Link href="/" className="inline-block">
                        <Image
                            src="/images/footer-logo.png"
                            alt={SITE_CONFIG.name}
                            width={180}
                            height={45}
                            className="h-9 w-auto opacity-90 hover:opacity-100 transition-opacity"
                        />
                    </Link>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                    {/* Link Columns */}
                    {Object.values(footerLinks).map((section) => (
                        <div key={section.title}>
                            <h4 className="font-semibold text-white mb-4">{section.title}</h4>
                            <ul className="space-y-2">
                                {section.links.map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.href} className="text-sm hover:text-white transition-colors">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Contact Column */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">Contact</h4>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <a href="mailto:sales@rocketfuel.inc" className="flex items-center gap-2 hover:text-white transition-colors">
                                    <Mail className="w-4 h-4" /> sales@rocketfuel.inc
                                </a>
                            </li>
                            <li>
                                <a href="mailto:partnerships@rocketfuel.inc" className="flex items-center gap-2 hover:text-white transition-colors">
                                    <Mail className="w-4 h-4" /> partnerships@rocketfuel.inc
                                </a>
                            </li>
                            <li>
                                <a href="mailto:support@rocketfuel.inc" className="flex items-center gap-2 hover:text-white transition-colors">
                                    <Mail className="w-4 h-4" /> support@rocketfuel.inc
                                </a>
                            </li>
                            <li className="flex items-start gap-2 pt-2">
                                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                <span>Miami, FL, USA</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-800 my-12" />

                {/* Compliance & Assets Row */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                    {/* Compliance Badges */}
                    <div className="flex flex-wrap items-center justify-center gap-6">
                        <div className="flex items-center gap-2 text-sm">
                            <ShieldCheck className="w-5 h-5 text-green-500" />
                            <span>MSB Registered</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                            <Lock className="w-5 h-5 text-blue-400" />
                            <span>SOC2 Compliant</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                            <Award className="w-5 h-5 text-yellow-400" />
                            <span>PCI-DSS Level 1</span>
                        </div>
                    </div>

                    {/* Supported Assets */}
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        <span className="text-sm text-gray-500 mr-2">Supported Assets:</span>
                        {supportedAssets.map((asset) => (
                            <span key={asset} className="px-3 py-1 bg-gray-800 rounded-full text-xs font-medium text-gray-300">
                                {asset}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        {/* Copyright */}
                        <p className="text-sm text-gray-500">
                            © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
                        </p>

                        {/* Legal Links */}
                        <div className="flex items-center gap-6 text-sm">
                            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                            <Link href="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                                    aria-label={social.name}
                                >
                                    <social.icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
