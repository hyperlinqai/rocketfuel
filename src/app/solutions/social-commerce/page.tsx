'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    ArrowRight, MessageCircle, Heart, Share2, Zap, Globe,
    ShieldCheck, CheckCircle2, ShoppingBag, BarChart3, Users,
    Wallet, Smartphone, Lock, Coins, Instagram, Video, Layout
} from 'lucide-react';
import React from 'react';

// --- Animation Variants ---
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

// --- Hero Section ---
function Hero() {
    return (
        <section className="hero-section">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-100/40 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 z-0" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-100/40 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >
                        <motion.div variants={fadeInUp} className="hero-badge bg-orange-50 text-orange-600 border-orange-100">
                            <Heart className="w-4 h-4 mr-2" />
                            Social Commerce Solutions
                        </motion.div>

                        <motion.h1 variants={fadeInUp} className="hero-title">
                            Empower the Creator Economy with <br className="hidden lg:block" />
                            <span className="text-gradient-gold">
                                Instant, Global Payments
                            </span>
                        </motion.h1>

                        <motion.p variants={fadeInUp} className="hero-description">
                            RocketFuel enables social sellers, live commerce platforms, and creator-led brands to accept crypto, issue payouts, and reward loyalty — all on one blockchain-based infrastructure.
                        </motion.p>

                        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                            <Link href="/demo">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="btn-primary w-full sm:w-auto px-8 py-4 flex items-center justify-center gap-2 cursor-pointer bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 border-transparent shadow-lg shadow-orange-500/20"
                                >
                                    Request Demo <ArrowRight className="w-5 h-5" />
                                </motion.div>
                            </Link>
                            <Link href="/contact">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="btn-secondary w-full sm:w-auto px-8 py-4 cursor-pointer"
                                >
                                    Talk to Sales
                                </motion.div>
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Hero Visual: Live Commerce Interface */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative hidden lg:block perspective-1000"
                    >
                        {/* Mobile Interface Mockup */}
                        <div className="relative w-[320px] h-[640px] bg-gray-900 rounded-[3rem] border-8 border-gray-800 shadow-2xl mx-auto overflow-hidden">
                            {/* Screen Content */}
                            <div className="absolute inset-0 bg-gray-800">
                                {/* Live Stream Background Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 z-10" />
                                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                                    <Video className="w-32 h-32 text-white" />
                                </div>

                                {/* UI Elements */}
                                <div className="absolute top-6 left-0 right-0 px-6 z-20 flex justify-between items-center text-white">
                                    <div className="flex items-center gap-2 bg-black/40 px-3 py-1 rounded-full backdrop-blur-md">
                                        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                                        <span className="text-xs font-bold">LIVE</span>
                                        <span className="text-xs opacity-80">12.5k</span>
                                    </div>
                                    <div className="w-8 h-8 rounded-full bg-black/40 flex items-center justify-center backdrop-blur-md">
                                        <Share2 className="w-4 h-4" />
                                    </div>
                                </div>

                                {/* Chat & Purchase Flow */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 space-y-4">
                                    {/* Chat Bubbles */}
                                    <div className="space-y-2 mb-4 h-32 overflow-hidden opacity-80 mask-image-gradient">
                                        <div className="flex gap-2 items-center text-xs text-white">
                                            <span className="font-bold text-yellow-400">@crypto_fan</span>
                                            <span>Just bought one! 🚀</span>
                                        </div>
                                        <div className="flex gap-2 items-center text-xs text-white">
                                            <span className="font-bold text-pink-400">@sarah_j</span>
                                            <span>Love this drop!</span>
                                        </div>
                                        <div className="flex gap-2 items-center text-xs text-white">
                                            <span className="font-bold text-blue-400">@alex_web3</span>
                                            <span>Paying with USDC works smoothly</span>
                                        </div>
                                    </div>

                                    {/* Product Card */}
                                    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-3 flex gap-3 items-center">
                                        <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                                            <ShoppingBag className="w-6 h-6 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="text-white text-sm font-bold">Limited Edition Hoodie</div>
                                            <div className="text-white/70 text-xs text-yellow-300 font-mono">0.05 ETH / $120 USDC</div>
                                        </div>
                                        <motion.button
                                            whileTap={{ scale: 0.95 }}
                                            className="bg-orange-600 text-white px-4 py-2 rounded-lg text-xs font-bold"
                                        >
                                            Buy Now
                                        </motion.button>
                                    </div>
                                </div>

                                {/* Floating Emojis */}
                                <div className="absolute right-4 bottom-32 flex flex-col gap-2 z-10">
                                    {[Heart, Zap, MessageCircle].map((Icon, i) => (
                                        <motion.div
                                            key={i}
                                            animate={{ y: [-20, -100], opacity: [1, 0] }}
                                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.5, ease: "easeOut" }}
                                            className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center"
                                        >
                                            <Icon className={`w-4 h-4 ${i === 0 ? 'text-red-500' : i === 1 ? 'text-yellow-400' : 'text-blue-400'}`} />
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Payment Notification Overlay */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 1, type: "spring" }}
                            className="absolute top-1/2 -right-12 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3 w-64 z-30 border border-orange-100"
                        >
                            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                <Coins className="w-5 h-5" />
                            </div>
                            <div>
                                <div className="text-sm font-bold text-gray-900">Payout Received</div>
                                <div className="text-xs text-gray-500">+$450.00 USDC (Instant)</div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

// --- Why Choose Section ---
function WhyChoose() {
    const benefits = [
        {
            title: "Accept Crypto Payments",
            desc: "Empower creators to sell directly through social channels using Bitcoin, Ethereum, or Stablecoins.",
            icon: Coins
        },
        {
            title: "Instant Global Payouts",
            desc: "Pay influencers, affiliates, and vendors in stablecoins or local currencies instantly.",
            icon: Zap
        },
        {
            title: "Frictionless Checkout",
            desc: "Reduce cart abandonment with fast, secure payments embedded in your platform.",
            icon: ShoppingBag
        },
        {
            title: "Built-In Loyalty",
            desc: "Reward buyers and creators through R Points, RocketFuel’s blockchain loyalty network.",
            icon: Heart
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                        Instant, Borderless Payments for the Creator Economy
                    </h2>
                    <p className="text-lg text-gray-600">
                        Social commerce platforms rely on speed, trust, and accessibility. RocketFuel provides a unified solution for creators and platforms to receive payments, pay commissions, and manage global transactions — all without traditional banking delays or chargeback risks.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit, i) => (
                        <motion.div
                            key={i}
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-gray-50 rounded-3xl p-8 flex flex-col items-center text-center hover:shadow-lg hover:border-orange-100 border border-transparent transition-all"
                        >
                            <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 mb-6 shadow-sm">
                                <benefit.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                            <p className="text-gray-600 text-sm">{benefit.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// --- How It Works Section ---
function HowItWorks() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900">A Complete Payments Stack</h2>
                </div>

                <div className="relative grid md:grid-cols-4 gap-8 text-center z-10">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-gray-200 -z-10" />

                    {[
                        { step: "01", title: "Accept Payments", desc: "Buyers pay using crypto, stablecoins, or fiat.", icon: Wallet },
                        { step: "02", title: "Auto Conversion", desc: "Payments are instantly converted to stablecoins or fiat.", icon: Zap },
                        { step: "03", title: "Payout & Reward", desc: "Creators get instant payouts + loyalty points.", icon: Heart },
                        { step: "04", title: "Track & Manage", desc: "Full data visibility via RocketFuel dashboard.", icon: BarChart3 }
                    ].map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="flex flex-col items-center"
                        >
                            <div className="w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center text-orange-600 border border-orange-50 mb-6 relative z-10">
                                <step.icon className="w-10 h-10" />
                                <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-sm border-2 border-white">{step.step}</div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                            <p className="text-sm text-gray-600 max-w-[200px]">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// --- Features Section ---
function Features() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Scalable Payments for Modern Commerce Models</h2>
                        <p className="text-lg text-gray-600 mb-8">
                            Whether you’re running a live shopping platform, influencer marketplace, or direct-to-consumer creator brand, RocketFuel helps you accept payments and manage payouts globally — without intermediaries.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Accept crypto and fiat from buyers anywhere",
                                "Pay affiliates, creators, and vendors instantly",
                                "Automate commissions via smart routing APIs",
                                "Track revenue, payouts, and engagement centrally"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-700">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Dashboard Mockup */}
                    <div className="relative">
                        <div className="bg-gray-900 rounded-2xl shadow-2xl p-6 text-white border border-gray-800">
                            <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-800">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                </div>
                                <div className="text-xs text-gray-400">Creator Dashboard</div>
                            </div>
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="bg-orange-900/20 p-4 rounded-xl border border-orange-500/20">
                                    <div className="text-orange-300 text-xs mb-1">Total Earnings</div>
                                    <div className="text-2xl font-bold">$12,450</div>
                                </div>
                                <div className="bg-yellow-900/20 p-4 rounded-xl border border-yellow-500/20">
                                    <div className="text-yellow-300 text-xs mb-1">Pending Payout</div>
                                    <div className="text-2xl font-bold">$2,100</div>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <div className="text-xs text-gray-500 uppercase tracking-widest mb-2">Recent Collaborations</div>
                                {[
                                    { name: "Brand Deal #1", amount: "+$5,000", status: "Paid", icon: Instagram },
                                    { name: "Merch Sales", amount: "+$2,850", status: "Processing", icon: ShoppingBag },
                                    { name: "Affiliate Link", amount: "+$450", status: "Paid", icon: Share2 },
                                ].map((row, i) => (
                                    <div key={i} className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg border border-white/5">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-white">
                                                <row.icon className="w-4 h-4" />
                                            </div>
                                            <span className="text-sm font-medium">{row.name}</span>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-sm font-bold">{row.amount}</div>
                                            <div className={`text-xs ${row.status === 'Paid' ? 'text-green-400' : 'text-yellow-400'}`}>{row.status}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// --- Compliance Section ---
function Compliance() {
    return (
        <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
            {/* Background Mesh - Gold/Orange Theme */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-orange-900/50 border border-orange-700 text-orange-300 text-sm font-medium mb-6">
                        <ShieldCheck className="w-4 h-4 mr-2" /> Trust & Safety
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Trust and Compliance for Every Transaction</h2>
                    <p className="text-lg text-gray-400">
                        RocketFuel brings compliance and transparency to the fast-moving creator economy. All transactions are processed through licensed partners, ensuring AML, KYC, and OFAC alignment while protecting user privacy.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { title: "Regulated Partners", desc: "Regulated exchange and banking network.", icon: Globe },
                        { title: "Transparent Ledger", desc: "Blockchain-based transparency for settlements.", icon: BarChart3 },
                        { title: "ZeroProof Privacy", desc: "Privacy-first verification for creators.", icon: Lock },
                        { title: "Audit Ready", desc: "Tokenized transaction records for auditability.", icon: CheckCircle2 }
                    ].map((item, i) => (
                        <div key={i} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-8 rounded-2xl">
                            <item.icon className="w-10 h-10 text-orange-400 mb-6" />
                            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                            <p className="text-gray-400 text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// --- Partner Opportunities Section ---
function PartnerOpportunities() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Monetize Every Transaction in Your Ecosystem</h2>
                <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
                    RocketFuel enables social commerce platforms, PSPs, and integrators to embed crypto payments and global payouts directly into their environments.
                </p>

                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {[
                        { text: "White-label integration and co-branding options", icon: Layout },
                        { text: "Shared transaction revenue model for partners", icon: Coins },
                        { text: "Real-time reporting and payout visibility", icon: BarChart3 },
                        { text: "Dedicated API, SDK, and webhook support", icon: Zap }
                    ].map((feature, i) => (
                        <div key={i} className="p-6 bg-orange-50/50 rounded-xl border border-orange-100 flex items-center text-left gap-4">
                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-orange-600 shadow-sm shrink-0">
                                <feature.icon className="w-5 h-5" />
                            </div>
                            <span className="font-semibold text-gray-900">{feature.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// --- CTA Section ---
function CTA() {
    return (
        <section className="py-24 bg-gradient-to-br from-orange-600 to-amber-700 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3" />
            <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Faster Checkout. Instant Payouts. Global Growth.</h2>
                <p className="text-xl text-orange-100 mb-10 max-w-2xl mx-auto">
                    RocketFuel powers the future of social commerce with blockchain-based payments and stablecoin payouts that connect creators and consumers worldwide.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link href="/demo">
                        <div className="btn-white w-full sm:w-auto text-orange-700">
                            Request Demo
                        </div>
                    </Link>
                    <Link href="/contact">
                        <div className="btn-glass w-full sm:w-auto">
                            Start Integration
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default function SocialCommercePage() {
    return (
        <main className="flex flex-col min-h-screen">
            <Hero />
            <WhyChoose />
            <HowItWorks />
            <Features />
            <Compliance />
            <PartnerOpportunities />
            <CTA />
        </main>
    );
}
