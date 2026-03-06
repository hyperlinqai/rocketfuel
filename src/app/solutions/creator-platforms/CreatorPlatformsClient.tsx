'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    ArrowRight, Globe, Zap, Wallet, ShieldCheck,
    BarChart3, Users, Layout, ShoppingBag, Coins,
    CheckCircle2, Network, Smartphone, RefreshCw, Layers,
    Video, Mic, Heart, Star, Lock, FileCheck, Banknote,
    CreditCard, PieChart, TrendingUp, Handshake, Link2
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
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-100/40 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 z-0" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-100/40 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >
                        <motion.div variants={fadeInUp} className="hero-badge bg-orange-50 text-orange-600 border-orange-100">
                            <Video className="w-4 h-4 mr-2" />
                            Creator Platform Solutions
                        </motion.div>

                        <motion.h1 variants={fadeInUp} className="hero-title">
                            Powering the Creator Economy with <br className="hidden lg:block" />
                            <span className="text-gradient-gold">
                                Instant, Transparent Payments
                            </span>
                        </motion.h1>

                        <motion.p variants={fadeInUp} className="hero-description">
                            RocketFuel enables subscription and fan-based platforms to accept crypto, manage creator payouts, and reward engagement — all through one secure, compliant infrastructure.
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

                    {/* Hero Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative hidden lg:block perspective-1000"
                    >
                        <div className="relative w-full aspect-square max-w-md mx-auto">
                            <motion.div
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white rounded-full shadow-2xl flex items-center justify-center border-4 border-orange-50 z-20"
                            >
                                <Video className="w-12 h-12 text-orange-600" />
                            </motion.div>

                            {[
                                { icon: Star, color: "bg-orange-100 text-orange-600", angle: 0, label: "Fans" },
                                { icon: Heart, color: "bg-green-100 text-green-600", angle: 72, label: "Tips" },
                                { icon: Coins, color: "bg-purple-100 text-purple-600", angle: 144, label: "Crypto" },
                                { icon: Mic, color: "bg-pink-100 text-pink-600", angle: 216, label: "Creators" },
                                { icon: Globe, color: "bg-blue-100 text-blue-600", angle: 288, label: "Global" },
                            ].map((node, i) => (
                                <motion.div
                                    key={i}
                                    className={`absolute top-1/2 left-1/2 w-16 h-16 rounded-2xl ${node.color} flex flex-col items-center justify-center text-xs font-bold shadow-lg border-2 border-white z-10`}
                                    animate={{
                                        x: Math.cos((node.angle * Math.PI) / 180) * 160 - 32,
                                        y: Math.sin((node.angle * Math.PI) / 180) * 160 - 32,
                                    }}
                                >
                                    <node.icon className="w-6 h-6 mb-1" />
                                    {node.label}
                                </motion.div>
                            ))}

                            <svg className="absolute inset-0 w-full h-full pointer-events-none -z-10 opacity-30">
                                <circle cx="50%" cy="50%" r="160" stroke="#fbbf24" strokeWidth="2" strokeDasharray="8 8" fill="none" className="animate-spin-slow" />
                            </svg>
                        </div>
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
            title: "Accept Payments Globally",
            desc: "Fans can pay using crypto, stablecoins, or local fiat.",
            icon: Globe
        },
        {
            title: "Instant Payouts",
            desc: "Creators receive funds immediately, in their chosen currency or wallet.",
            icon: Zap
        },
        {
            title: "Built for Engagement",
            desc: "Support tips, subscriptions, or pay-per-content transactions.",
            icon: Heart
        },
        {
            title: "Compliance Built-In",
            desc: "Regulated partners, KYC/KYT, and privacy-first design.",
            icon: ShieldCheck
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                        Simplify Monetization and Payouts for Global Creators
                    </h2>
                    <p className="text-lg text-gray-600">
                        Modern creator platforms need flexible, borderless payment tools that support fans and creators across multiple markets. RocketFuel provides a full payment and payout system that works for one-time tips, recurring subscriptions, or marketplace-style revenue sharing.
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
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900">End-to-End Payments for the Creator Economy</h2>
                </div>

                <div className="relative grid md:grid-cols-4 gap-8 text-center z-10">
                    <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-gray-200 -z-10" />

                    {[
                        { step: "01", title: "Accept Payments", desc: "Fans and subscribers pay in crypto, stablecoins, or fiat directly.", icon: CreditCard },
                        { step: "02", title: "Manage Balances", desc: "RocketFuel tracks balances for subscriptions, tips, and unlocks.", icon: BarChart3 },
                        { step: "03", title: "Payout Instantly", desc: "Creators receive payouts in stablecoins, crypto, or local fiat.", icon: Zap },
                        { step: "04", title: "Reconcile & Report", desc: "Access full transaction history, payout records, and analytics.", icon: FileCheck }
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

                <div className="text-center mt-12 text-gray-500 text-sm">
                    APIs and SDKs allow complete automation for recurring billing and mass payouts across global creator bases.
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
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-sm font-medium mb-6">
                            Designed for Global Creator Ecosystems
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">One Platform for Every Monetization Model</h2>
                        <p className="text-lg text-gray-600 mb-8">
                            RocketFuel supports subscription services, fan communities, digital content sales, and multi-vendor creator networks. Whether you manage a niche content platform or a large-scale creator marketplace, RocketFuel makes payments effortless.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Subscription and membership platforms",
                                "Tipping, pay-per-post, and donation-based engagement",
                                "Creator marketplaces and digital service platforms",
                                "Brand and influencer collaborations with automated revenue sharing"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-700">
                                    <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0" />
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
                                <div className="text-xs text-gray-400">Creator Earnings Dashboard</div>
                            </div>

                            <div className="grid grid-cols-3 gap-3 mb-6">
                                {[
                                    { label: "Today's Tips", val: "$1,240", trend: "+25%" },
                                    { label: "Subscribers", val: "15.4k", trend: "+3%" },
                                    { label: "Monthly Revenue", val: "$42.5k", trend: "+12%" }
                                ].map((stat, i) => (
                                    <div key={i} className="bg-gray-800 p-3 rounded-lg text-center">
                                        <div className="text-xs text-gray-400 mb-1">{stat.label}</div>
                                        <div className="font-bold text-sm lg:text-base">{stat.val}</div>
                                        <div className="text-xs text-green-400">{stat.trend}</div>
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-3">
                                <div className="text-xs text-gray-500 uppercase tracking-widest mb-2">Recent Transactions</div>
                                {[
                                    { name: "SuperFan99", amount: "$50.00", type: "Tip", icon: Heart },
                                    { name: "Monthly Sub", amount: "$9.99", type: "Recurring", icon: RefreshCw },
                                    { name: "Exclusive Video", amount: "$15.00", type: "Unlock", icon: Lock },
                                    { name: "Brand Deal Payout", amount: "$2,500.00", type: "Revenue Share", icon: Handshake },
                                ].map((row, i) => (
                                    <div key={i} className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg border border-white/5">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-white">
                                                {/* @ts-ignore */}
                                                {i === 3 ? <Users className="w-4 h-4" /> : <row.icon className="w-4 h-4" />}
                                            </div>
                                            <div>
                                                <div className="text-sm font-medium">{row.name}</div>
                                                <div className="text-xs text-gray-500">{row.type}</div>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-sm font-bold">{row.amount}</div>
                                            <div className="text-xs text-green-400">Received</div>
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

// Icon for Handshake (not in imports, substituting with Users or similar in code above, but defining for clarity)
// Using Users for Brand Deal.

// --- Compliance Section ---
function Compliance() {
    return (
        <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-orange-900/50 border border-orange-700 text-orange-300 text-sm font-medium mb-6">
                        <ShieldCheck className="w-4 h-4 mr-2" /> Compliance and Trust
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Privacy, Security, and Compliance for Every Transaction</h2>
                    <p className="text-lg text-gray-400">
                        RocketFuel brings bank-grade compliance and blockchain transparency to the creator economy, ensuring safety for both platforms and their creators.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { title: "AML & KYC", desc: "Compliance integrated into all transactions.", icon: FileCheck },
                        { title: "On-Chain Traceability", desc: "Transparent reporting for all payouts.", icon: Link2 },
                        { title: "ZeroProof Verify", desc: "Optional age and identity verification.", icon: ShieldCheck },
                        { title: "Regulated Partners", desc: "Banking and exchange partners for settlement.", icon: Banknote }
                    ].map((item, i) => (
                        <div key={i} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-8 rounded-2xl">
                            {/* @ts-ignore */}
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
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Grow Engagement and Revenue with RocketFuel</h2>
                <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
                    RocketFuel helps creator platforms build trust and scale globally. Partners can integrate RocketFuel’s infrastructure and participate in shared transaction revenue while delivering faster payouts and better creator retention.
                </p>

                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {[
                        { text: "Revenue sharing for PSPs, ISOs, and integrators", icon: PieChart },
                        { text: "White-label and co-brand options for platform operators", icon: Layout },
                        { text: "Full analytics and reconciliation dashboard", icon: TrendingUp },
                        { text: "Global coverage for stablecoin and fiat payouts", icon: Globe }
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
        <section className="py-24 bg-gradient-to-br from-yellow-500 to-orange-600 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3" />
            <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Accep Payments. Pay Creators. Scale Without Limits.</h2>
                <p className="text-xl text-yellow-100 mb-10 max-w-2xl mx-auto">
                    RocketFuel connects fans, creators, and platforms through one secure, blockchain-based payment network. Accept crypto, automate payouts, and expand your creator ecosystem globally.
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

export default function CreatorPlatformsClient() {
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
