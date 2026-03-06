'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    ArrowRight, Globe, Zap, Wallet, ShieldCheck,
    BarChart3, Users, Layout, Coins,
    CheckCircle2, Network, RefreshCw,
    Code2, Smartphone, Lock, FileCheck,
    CreditCard, Link2, Calendar, Store
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
                            <Code2 className="w-4 h-4 mr-2" />
                            Software Development Solutions
                        </motion.div>

                        <motion.h1 variants={fadeInUp} className="hero-title">
                            Modern Payments for <br className="hidden lg:block" />
                            <span className="text-gradient-gold">
                                Software and SaaS Platforms
                            </span>
                        </motion.h1>

                        <motion.p variants={fadeInUp} className="hero-description">
                            RocketFuel helps software companies, platforms, and developer networks accept crypto payments, manage global subscriptions, and pay partners instantly in stablecoins or fiat.
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
                                <Code2 className="w-12 h-12 text-orange-600" />
                            </motion.div>

                            {[
                                { icon: Layout, color: "bg-orange-100 text-orange-600", angle: 0, label: "API" },
                                { icon: Calendar, color: "bg-green-100 text-green-600", angle: 72, label: "Billing" },
                                { icon: Coins, color: "bg-purple-100 text-purple-600", angle: 144, label: "Crypto" },
                                { icon: Network, color: "bg-blue-100 text-blue-600", angle: 216, label: "Devs" },
                                { icon: Globe, color: "bg-pink-100 text-pink-600", angle: 288, label: "Global" },
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
            title: "Accept Crypto & Stablecoins",
            desc: "Expand to global customers without card limits or borders.",
            icon: Coins
        },
        {
            title: "Instant Settlement",
            desc: "Eliminate delays from traditional payment rails.",
            icon: Zap
        },
        {
            title: "Built for Recurring Billing",
            desc: "Automate subscription renewals and license management.",
            icon: RefreshCw
        },
        {
            title: "Developer-Friendly",
            desc: "Full API, SDK, and webhook support.",
            icon: Layout
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                        Simplify Global Subscriptions and Developer Payouts
                    </h2>
                    <p className="text-lg text-gray-600">
                        Software and SaaS platforms rely on recurring payments and cross-border transactions. RocketFuel's infrastructure supports instant, compliant, and borderless payments — built for developers, by developers.
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
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900">From Subscription to Settlement in Seconds</h2>
                </div>

                <div className="relative grid md:grid-cols-4 gap-8 text-center z-10">
                    <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-gray-200 -z-10" />

                    {[
                        { step: "01", title: "Accept Payments", desc: "Customers pay in crypto, stablecoins, or fiat.", icon: CreditCard },
                        { step: "02", title: "Automate Billing", desc: "Manage recurring subscriptions and renewals.", icon: Calendar },
                        { step: "03", title: "Convert & Settle", desc: "Funds converted and settled in your account.", icon: Wallet },
                        { step: "04", title: "Pay Developers", desc: "Instantly distribute commissions or royalties.", icon: Users }
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
                    Perfect for SaaS tools, app stores, API marketplaces, and open-source funding platforms.
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
                            Designed for Software Companies
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">One Infrastructure for Every Business Model</h2>
                        <p className="text-lg text-gray-600 mb-8">
                            RocketFuel supports all types of software businesses, from small developer teams to enterprise SaaS platforms. Our API-first approach ensures flexibility for any payment or payout workflow.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "SaaS subscriptions and recurring billing",
                                "API marketplaces and usage-based billing",
                                "App stores and plugin marketplaces",
                                "Developer networks and royalty payments"
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
                                <div className="text-xs text-gray-400">SaaS Analytics</div>
                            </div>

                            <div className="grid grid-cols-3 gap-3 mb-6">
                                {[
                                    { label: "Subscriptions", val: "2,847", trend: "+32%" },
                                    { label: "MRR", val: "$184k", trend: "+28%" },
                                    { label: "Payouts", val: "142", trend: "Instant" }
                                ].map((stat, i) => (
                                    <div key={i} className="bg-gray-800 p-3 rounded-lg text-center">
                                        <div className="text-xs text-gray-400 mb-1">{stat.label}</div>
                                        <div className="font-bold text-sm lg:text-base">{stat.val}</div>
                                        <div className="text-xs text-green-400">{stat.trend}</div>
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-3">
                                <div className="text-xs text-gray-500 uppercase tracking-widest mb-2">Recent Activity</div>
                                {[
                                    { name: "Pro Plan", amount: "$99/mo", type: "Subscription", icon: Calendar },
                                    { name: "API Usage", amount: "$450", type: "Metered", icon: BarChart3 },
                                    { name: "Plugin Sale", amount: "$29", type: "Marketplace", icon: Store },
                                    { name: "Dev Payout", amount: "$2,400", type: "Royalty", icon: Users },
                                ].map((row, i) => (
                                    <div key={i} className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg border border-white/5">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-white">
                                                {/* @ts-ignore */}
                                                <row.icon className="w-4 h-4" />
                                            </div>
                                            <div>
                                                <div className="text-sm font-medium">{row.name}</div>
                                                <div className="text-xs text-gray-500">{row.type}</div>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-sm font-bold">{row.amount}</div>
                                            <div className="text-xs text-green-400">Settled</div>
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
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-orange-900/50 border border-orange-700 text-orange-300 text-sm font-medium mb-6">
                        <ShieldCheck className="w-4 h-4 mr-2" /> Enterprise Compliance
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Global Reach with Enterprise-Grade Compliance</h2>
                    <p className="text-lg text-gray-400">
                        RocketFuel enables global commerce without compromising security or compliance. Every transaction is processed through regulated partners and logged on-chain for transparency.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { title: "Regulated Partners", desc: "Banking and exchange partners for settlement.", icon: Link2 },
                        { title: "AML & KYC", desc: "Compliance built into every transaction.", icon: FileCheck },
                        { title: "On-Chain Traceability", desc: "For settlements and audits.", icon: BarChart3 },
                        { title: "ZeroProof Verify", desc: "Optional identity verification for platform access.", icon: ShieldCheck }
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
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Built for Integration and Innovation</h2>
                <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
                    RocketFuel provides developers and partners with full technical control and commercial upside. Our API, SDKs, and partner model make integration easy — and monetization simple.
                </p>

                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {[
                        { text: "RESTful API, SDKs, and sandbox access for testing", icon: Layout },
                        { text: "Webhooks for real-time transaction updates", icon: Zap },
                        { text: "White-label support for software vendors", icon: Users },
                        { text: "Revenue-sharing opportunities for partners", icon: Network }
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
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Borderless Payments for a Global Software Ecosystem</h2>
                <p className="text-xl text-yellow-100 mb-10 max-w-2xl mx-auto">
                    RocketFuel helps software companies modernize payment flows with global acceptance, instant settlement, and blockchain transparency — built for scale, security, and speed.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link href="/demo">
                        <div className="btn-white w-full sm:w-auto text-orange-700">
                            Request Demo
                        </div>
                    </Link>
                    <Link href="/developers">
                        <div className="btn-glass w-full sm:w-auto">
                            Explore Developer Tools
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default function SoftwareDevelopmentClient() {
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
