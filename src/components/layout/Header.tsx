'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ChevronDown, Menu, X, ArrowRight,
    CreditCard, Globe, FileText, Gift, ShieldCheck, Coins,
    Gamepad2, ShoppingBag, Store, Users, Briefcase, Video, Plane, UtensilsCrossed, Hotel, Repeat, Code2, Music,
    BookOpen, Cpu, Webhook, Box, TestTube, Layers,
    Building2, Handshake, Lock, UserPlus, Newspaper,
    PenTool, BookMarked, FileQuestion, HelpCircle
} from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

// --- Menu Data ---

const menuData = {
    products: {
        title: 'Products',
        items: [
            { name: 'Crypto Merchant Processing', href: '/products/crypto-merchant-processing', icon: CreditCard, description: 'Accept crypto payments seamlessly' },
            { name: 'Global Payouts', href: '/products/global-payouts', icon: Globe, description: 'Stablecoin & fiat payouts worldwide' },
            { name: 'Crypto Invoicing', href: '/products/crypto-invoicing', icon: FileText, description: 'Professional crypto invoices' },
            { name: 'Giftcards', href: '/products/giftcards', icon: Gift, description: 'Digital gift card solutions' },
            { name: 'Age Verification', href: '/products/age-verification', icon: ShieldCheck, description: 'Privacy-first age checks' },
            { name: 'Blockchain Loyalty Network', href: '/products/blockchain-loyalty-network', icon: Coins, description: 'Blockchain loyalty network' },
        ]
    },
    solutions: {
        title: 'Solutions',
        items: [
            { name: 'Overview', href: '/solutions', icon: Layers, description: 'See all our solutions' },
            { name: 'Skills-Based Gaming', href: '/solutions/skills-based-gaming', icon: Gamepad2 },
            { name: 'Social Commerce', href: '/solutions/social-commerce', icon: ShoppingBag },
            { name: 'Marketplaces', href: '/solutions/marketplaces', icon: Store },
            { name: 'Affiliate Marketing', href: '/solutions/affiliate-marketing', icon: Users },
            { name: 'Gig Economy', href: '/solutions/gig-economy', icon: Briefcase },
            { name: 'Creator Platforms', href: '/solutions/creator-platforms', icon: Video },
            { name: 'Private Charters', href: '/solutions/private-charters', icon: Plane },
            { name: 'Restaurants', href: '/solutions/restaurants', icon: UtensilsCrossed },
            { name: 'Hospitality', href: '/solutions/hospitality', icon: Hotel },
            { name: 'Consignment / Resale', href: '/solutions/consignment-resale', icon: Repeat },
            { name: 'Software Development', href: '/solutions/software-development', icon: Code2 },
            { name: 'Global Royalties', href: '/solutions/global-royalties', icon: Music },
        ]
    },
    developers: {
        title: 'Developers',
        items: [
            { name: 'Overview', href: '/developers', icon: BookOpen, description: 'Get started with our platform' },
            { name: 'API Reference', href: 'https://docs.rocketfuel.inc/', icon: Cpu, description: 'Full API documentation', external: true },
            { name: 'SDKs', href: '/developers/sdks', icon: Box, description: 'Client libraries & tools' },
            { name: 'Webhooks', href: '/developers/webhooks', icon: Webhook, description: 'Real-time event notifications' },
            { name: 'Sandbox', href: '/developers/sandbox', icon: TestTube, description: 'Test environment' },
        ]
    },
    company: {
        title: 'Company',
        items: [
            { name: 'About Us', href: '/company/about', icon: Building2 },
            { name: 'Partners', href: '/company/partners', icon: Handshake },
            { name: 'Compliance & Security', href: '/company/compliance-security', icon: Lock },
            { name: 'Careers', href: '/company/careers', icon: UserPlus },
            { name: 'Newsroom', href: '/company/newsroom', icon: Newspaper },
        ]
    },
    resources: {
        title: 'Resources',
        items: [
            { name: 'Blog', href: '/blog', icon: PenTool },
            { name: 'Case Studies', href: '/resources/case-studies', icon: BookMarked },
            { name: 'Guides', href: '/resources/guides', icon: FileQuestion },
            { name: 'Help Center', href: '/resources/help-center', icon: HelpCircle },
        ]
    }
};

// --- Animation Variants ---

const dropdownVariants = {
    hidden: { opacity: 0, y: 10, filter: 'blur(5px)' },
    visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: {
            duration: 0.3,
            ease: [0.4, 0, 0.2, 1] as const
        }
    },
    exit: {
        opacity: 0,
        y: 10,
        filter: 'blur(5px)',
        transition: {
            duration: 0.2,
            ease: [0.4, 0, 0.2, 1] as const
        }
    }
};

const mobileMenuVariants = {
    hidden: { x: '100%' },
    visible: { x: 0, transition: { type: 'spring' as const, stiffness: 300, damping: 30 } },
    exit: { x: '100%', transition: { duration: 0.2 } }
};

// --- Sub-components ---

interface MenuItemProps {
    item: { name: string; href: string; icon: React.ElementType; description?: string; external?: boolean };
    onClick?: () => void;
}

function MenuItem({ item, onClick }: MenuItemProps) {
    const Icon = item.icon;

    if (item.external) {
        return (
            <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClick}
                className="group flex items-start gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors"
            >
                <div className="p-2 bg-blue-50 rounded-lg text-blue-600 group-hover:bg-blue-100 transition-colors">
                    <Icon className="w-5 h-5" />
                </div>
                <div>
                    <p className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">{item.name}</p>
                    {item.description && <p className="text-sm text-gray-500">{item.description}</p>}
                </div>
            </a>
        );
    }

    return (
        <Link href={item.href} onClick={onClick} className="group flex items-start gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors">
            <div className="p-2 bg-blue-50 rounded-lg text-blue-600 group-hover:bg-blue-100 transition-colors">
                <Icon className="w-5 h-5" />
            </div>
            <div>
                <p className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">{item.name}</p>
                {item.description && <p className="text-sm text-gray-500">{item.description}</p>}
            </div>
        </Link>
    );
}

interface DropdownPanelProps {
    menu: { title: string; items: { name: string; href: string; icon: any; description?: string; external?: boolean }[] };
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

function DropdownPanel({ menu, onMouseEnter, onMouseLeave }: DropdownPanelProps) {
    const isLargeMenu = menu.items.length > 6;
    return (
        <motion.div
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-2xl z-40"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <div className="max-w-7xl mx-auto px-6 py-8">
                <div className={`grid gap-2 ${isLargeMenu ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
                    {menu.items.map((item) => (
                        <MenuItem key={item.name} item={item} />
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

// --- Main Header ---

import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

export function Header() {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const pathname = usePathname();

    // Close menu on route change
    useEffect(() => {
        setActiveDropdown(null);
        setMobileMenuOpen(false);
    }, [pathname]);

    const handleMouseEnter = (key: string) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
        setActiveDropdown(key);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setActiveDropdown(null);
        }, 200); // 200ms delay for smoother transition
    };

    return (
        <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-lg border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/images/logo.png"
                            alt={SITE_CONFIG.name}
                            width={160}
                            height={40}
                            className="h-8 w-auto"
                            priority
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-1">
                        {Object.entries(menuData).map(([key, menu]) => (
                            <div
                                key={key}
                                className="relative"
                                onMouseEnter={() => handleMouseEnter(key)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <button
                                    className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${activeDropdown === key ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'}`}
                                    onClick={() => activeDropdown === key ? setActiveDropdown(null) : setActiveDropdown(key)}
                                >
                                    {menu.title}
                                    <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === key ? 'rotate-180' : ''}`} />
                                </button>
                            </div>
                        ))}
                    </nav>

                    {/* CTAs */}
                    <div className="hidden lg:flex items-center gap-3">
                        <Link href="/talk-to-sales" className="text-sm font-medium text-gray-700 hover:text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                            Talk to Sales
                        </Link>
                        <Link href="/request-demo" className="group btn-primary !text-sm !px-5 !py-2.5">
                            Request Demo
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Desktop Dropdown Panels */}
            <AnimatePresence>
                {activeDropdown && (
                    <DropdownPanel
                        menu={menuData[activeDropdown as keyof typeof menuData]}
                        onMouseEnter={() => {
                            if (timeoutRef.current) {
                                clearTimeout(timeoutRef.current);
                                timeoutRef.current = null;
                            }
                        }}
                        onMouseLeave={handleMouseLeave}
                    />
                )}
            </AnimatePresence>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        variants={mobileMenuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="fixed inset-0 top-20 bg-white z-40 lg:hidden overflow-y-auto"
                    >
                        <div className="p-6 space-y-6">
                            {Object.entries(menuData).map(([key, menu]) => (
                                <div key={key}>
                                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">{menu.title}</p>
                                    <div className="space-y-1">
                                        {menu.items.map((item) => (
                                            <MenuItem key={item.name} item={item} onClick={() => setMobileMenuOpen(false)} />
                                        ))}
                                    </div>
                                </div>
                            ))}

                            <div className="pt-6 border-t border-gray-200 space-y-3">
                                <Link href="/talk-to-sales" onClick={() => setMobileMenuOpen(false)} className="block text-center text-gray-700 font-medium py-3 rounded-lg border border-gray-200 hover:bg-gray-50">
                                    Talk to Sales
                                </Link>
                                <Link href="/request-demo" onClick={() => setMobileMenuOpen(false)} className="block text-center btn-primary w-full">
                                    Request Demo
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
