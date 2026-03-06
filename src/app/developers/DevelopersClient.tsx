'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    ArrowRight, Globe, Zap, ShieldCheck,
    BarChart3, Users, Layout, Coins,
    CheckCircle2, Network, Code2, FileText,
    Lock, FileCheck, Link2, Terminal,
    Webhook, Box, TestTube, Layers
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
                            Developer Platform
                        </motion.div>

                        <motion.h1 variants={fadeInUp} className="hero-title">
                            Build the Future of <br className="hidden lg:block" />
                            <span className="text-gradient-gold">
                                Global Payments
                            </span>
                        </motion.h1>

                        <motion.p variants={fadeInUp} className="hero-description">
                            RocketFuel gives developers instant access to blockchain-based payments, payouts, invoicing, and compliance tools — all through a simple, secure API suite.
                        </motion.p>

                        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                            <a href="https://docs.rocketfuel.inc/" target="_blank" rel="noopener noreferrer">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="btn-primary w-full sm:w-auto px-8 py-4 flex items-center justify-center gap-2 cursor-pointer bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 border-transparent shadow-lg shadow-orange-500/20"
                                >
                                    Explore API Docs <ArrowRight className="w-5 h-5" />
                                </motion.div>
                            </a>
                            <Link href="/sandbox">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="btn-secondary w-full sm:w-auto px-8 py-4 cursor-pointer"
                                >
                                    Request Sandbox Access
                                </motion.div>
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Hero Visual - Code Terminal */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative hidden lg:block"
                    >
                        <div className="bg-gray-900 rounded-2xl shadow-2xl p-6 text-white border border-gray-800">
                            <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-800">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                </div>
                                <div className="text-xs text-gray-400">payment-integration.js</div>
                            </div>

                            <div className="font-mono text-sm space-y-2">
                                <div className="text-purple-400">import <span className="text-blue-400">{'{ RocketFuel }'}</span> from <span className="text-green-400">'@rocketfuel/sdk'</span>;</div>
                                <div className="h-2" />
                                <div className="text-gray-500">// Initialize payment</div>
                                <div className="text-blue-400">const <span className="text-white">payment</span> = <span className="text-purple-400">await</span> RocketFuel.<span className="text-yellow-400">createPayment</span>({'({'}</div>
                                <div className="pl-4 text-white">amount: <span className="text-green-400">'100.00'</span>,</div>
                                <div className="pl-4 text-white">currency: <span className="text-green-400">'USDC'</span>,</div>
                                <div className="pl-4 text-white">recipient: <span className="text-green-400">'0x742d...'</span></div>
                                <div>{'});'}</div>
                                <div className="h-2" />
                                <div className="text-gray-500">// Response</div>
                                <div className="text-green-400">✓ Payment confirmed</div>
                                <div className="text-blue-400">Status: <span className="text-green-400">settled</span></div>
                                <div className="text-blue-400">TX: <span className="text-gray-400">0x8f3a2b...</span></div>
                            </div>

                            <div className="mt-6 pt-4 border-t border-gray-800 flex items-center justify-between text-xs">
                                <div className="flex items-center gap-2 text-green-400">
                                    <CheckCircle2 className="w-4 h-4" />
                                    <span>API Connected</span>
                                </div>
                                <div className="text-gray-500">Response time: 142ms</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

// --- Why Build Section ---
function WhyBuild() {
    const benefits = [
        {
            title: "Unified API",
            desc: "For crypto, stablecoin, and fiat transactions.",
            icon: Layout
        },
        {
            title: "Global Reach",
            desc: "Across 190+ countries.",
            icon: Globe
        },
        {
            title: "Regulated Rails",
            desc: "Payment rails and on-chain transparency.",
            icon: ShieldCheck
        },
        {
            title: "Sandbox Environment",
            desc: "For testing and development.",
            icon: TestTube
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                        Developer-Ready Infrastructure for Global Commerce
                    </h2>
                    <p className="text-lg text-gray-600">
                        RocketFuel's platform is built for developers who need powerful, flexible, and compliant tools to create crypto and stablecoin payment solutions. From small integrations to enterprise-level orchestration, our APIs scale with your product.
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

// --- Developer Stack Section ---
function DeveloperStack() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900">Everything You Need to Build, Launch, and Scale</h2>
                    <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
                        RocketFuel provides a complete developer ecosystem to build global payment workflows, automate settlement, and deliver frictionless customer experiences.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        {
                            title: "API",
                            desc: "Core endpoints for payments, payouts, and reconciliation.",
                            icon: Code2,
                            color: "bg-orange-100 text-orange-600"
                        },
                        {
                            title: "SDKs",
                            desc: "Prebuilt libraries for popular programming languages.",
                            icon: Box,
                            color: "bg-blue-100 text-blue-600"
                        },
                        {
                            title: "Webhooks",
                            desc: "Real-time transaction and settlement updates.",
                            icon: Webhook,
                            color: "bg-green-100 text-green-600"
                        },
                        {
                            title: "Sandbox",
                            desc: "Safe testing environment for simulating live transactions.",
                            icon: TestTube,
                            color: "bg-purple-100 text-purple-600"
                        }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15 }}
                            className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all border border-gray-100"
                        >
                            <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center mb-6`}>
                                <item.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                            <p className="text-gray-600 text-sm">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// --- Use Cases Section ---
function UseCases() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Powering Payments for Every Application</h2>
                        <p className="text-lg text-gray-600 mb-8">
                            RocketFuel's developer tools support a wide range of industries and use cases, from commerce and payouts to loyalty programs and digital wallets.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "E-commerce and marketplace integrations",
                                "Global payout automation for gig or affiliate platforms",
                                "Invoicing and B2B payment systems",
                                "Loyalty, rewards, and gift card networks",
                                "Travel, hospitality, and fintech applications"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-700">
                                    <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* API Metrics Dashboard */}
                    <div className="relative">
                        <div className="bg-gray-900 rounded-2xl shadow-2xl p-6 text-white border border-gray-800">
                            <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-800">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                </div>
                                <div className="text-xs text-gray-400">API Usage</div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-6">
                                {[
                                    { label: "Requests", val: "1.2M", trend: "Today" },
                                    { label: "Uptime", val: "99.9%", trend: "30 days" },
                                    { label: "Latency", val: "142ms", trend: "Avg" },
                                    { label: "Success", val: "99.8%", trend: "Rate" }
                                ].map((stat, i) => (
                                    <div key={i} className="bg-gray-800 p-4 rounded-lg">
                                        <div className="text-xs text-gray-400 mb-1">{stat.label}</div>
                                        <div className="font-bold text-lg">{stat.val}</div>
                                        <div className="text-xs text-green-400">{stat.trend}</div>
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-3">
                                <div className="text-xs text-gray-500 uppercase tracking-widest mb-2">Active Endpoints</div>
                                {[
                                    { name: "/payments/create", calls: "342k", icon: Coins },
                                    { name: "/payouts/send", calls: "128k", icon: Zap },
                                    { name: "/invoices/generate", calls: "89k", icon: FileText },
                                    { name: "/webhooks/subscribe", calls: "45k", icon: Webhook }
                                ].map((endpoint, i) => (
                                    <div key={i} className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg border border-white/5">
                                        <div className="flex items-center gap-3">
                                            <endpoint.icon className="w-4 h-4 text-orange-400" />
                                            <span className="font-mono text-sm">{endpoint.name}</span>
                                        </div>
                                        <div className="text-sm text-gray-400">{endpoint.calls}</div>
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

// --- Security Section ---
function Security() {
    return (
        <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-orange-900/50 border border-orange-700 text-orange-300 text-sm font-medium mb-6">
                        <ShieldCheck className="w-4 h-4 mr-2" /> Enterprise Security
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Secure and Compliant by Design</h2>
                    <p className="text-lg text-gray-400">
                        RocketFuel's developer platform is built on secure, compliant rails — ensuring every integration meets global regulatory and operational standards.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { title: "Regulated Partners", desc: "Exchange and banking partners for settlement.", icon: Link2 },
                        { title: "Full Compliance", desc: "AML, KYC, and OFAC compliance built-in.", icon: FileCheck },
                        { title: "On-Chain Transparency", desc: "For all transactions and settlements.", icon: BarChart3 },
                        { title: "Encrypted APIs", desc: "Authentication and secure key management.", icon: Lock }
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

// --- Partner Section ---
function Partner() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Developer Tools That Grow with Your Business</h2>
                <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
                    RocketFuel enables developers, partners, and platforms to monetize integrations and earn recurring revenue. Whether you're building a marketplace, fintech app, or payment plugin, we give you the flexibility to scale globally.
                </p>

                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {[
                        { text: "White-label and co-brand integration options", icon: Layers },
                        { text: "Revenue-sharing opportunities for partners", icon: Network },
                        { text: "24/7 developer support and dedicated onboarding", icon: Users },
                        { text: "Access to sandbox, testing, and production environments", icon: TestTube }
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
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Developer Tools for a Borderless Economy</h2>
                <p className="text-xl text-yellow-100 mb-10 max-w-2xl mx-auto">
                    Integrate payments, payouts, and loyalty in minutes with RocketFuel's secure and scalable APIs. Test in our sandbox, go live globally, and start building the future of blockchain payments.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a href="https://docs.rocketfuel.inc/" target="_blank" rel="noopener noreferrer">
                        <div className="btn-white w-full sm:w-auto text-orange-700">
                            Explore API Docs
                        </div>
                    </a>
                    <Link href="/sandbox">
                        <div className="btn-glass w-full sm:w-auto">
                            Request Sandbox Access
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default function DevelopersClient() {
    return (
        <main className="flex flex-col min-h-screen">
            <Hero />
            <WhyBuild />
            <DeveloperStack />
            <UseCases />
            <Security />
            <Partner />
            <CTA />
        </main>
    );
}
