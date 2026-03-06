'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    ArrowRight, Globe, Zap, Clock, Wallet, CheckCircle2,
    Upload, Search, ShieldCheck, Building2, Handshake, Network,
    CreditCard, Coins, RefreshCcw, Banknote
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
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-yellow-100/40 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/3 z-0" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >
                        <motion.h1 variants={fadeInUp} className="hero-title max-w-4xl">
                            Global Payouts in{' '}
                            <span className="text-gradient-gold">
                                Stablecoin & Fiat
                            </span>
                        </motion.h1>
                        <motion.p variants={fadeInUp} className="hero-description">
                            Send one-to-many payments across the world with a single click. Pay affiliates, vendors, and contractors in stablecoins, crypto, or local currencies — all through one unified platform.
                        </motion.p>
                        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                            <Link href="/demo">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="btn-primary w-full sm:w-auto px-8 py-4 flex items-center justify-center gap-2 cursor-pointer"
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

                    {/* Hero Visual: Global Connection Map */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative w-full aspect-square max-w-lg mx-auto flex items-center justify-center">
                            {/* Central Hub */}
                            <div className="w-24 h-24 bg-white rounded-full shadow-2xl flex items-center justify-center z-20 relative border border-gray-100">
                                <div className="text-2xl font-bold text-orange-600">RF</div>
                                <div className="absolute inset-0 border-4 border-orange-100 rounded-full animate-ping opacity-20" />
                            </div>

                            {/* Orbiting Nodes */}
                            {[
                                { currency: "USD", angle: 0, distance: 140, color: "bg-green-100 text-green-700" },
                                { currency: "EUR", angle: 72, distance: 140, color: "bg-blue-100 text-blue-700" },
                                { currency: "USDC", angle: 144, distance: 140, color: "bg-indigo-100 text-indigo-700" },
                                { currency: "GBP", angle: 216, distance: 140, color: "bg-purple-100 text-purple-700" },
                                { currency: "BTC", angle: 288, distance: 140, color: "bg-orange-100 text-orange-700" }
                            ].map((node, i) => (
                                <motion.div
                                    key={i}
                                    className={`absolute w-14 h-14 rounded-full shadow-lg flex items-center justify-center font-bold text-sm ${node.color} z-10`}
                                    style={{
                                        top: '50%',
                                        left: '50%',
                                        x: Math.cos((node.angle * Math.PI) / 180) * node.distance - 28,
                                        y: Math.sin((node.angle * Math.PI) / 180) * node.distance - 28
                                    }}
                                    animate={{
                                        y: [
                                            Math.sin((node.angle * Math.PI) / 180) * node.distance - 28,
                                            Math.sin((node.angle * Math.PI) / 180) * node.distance - 38,
                                            Math.sin((node.angle * Math.PI) / 180) * node.distance - 28
                                        ]
                                    }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                                >
                                    {node.currency}
                                </motion.div>
                            ))}

                            {/* Connectivity Lines */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                                <circle cx="50%" cy="50%" r="140" fill="none" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="4 4" />
                                <circle cx="50%" cy="50%" r="70" fill="none" stroke="#E2E8F0" strokeWidth="1" />
                            </svg>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

// --- Benefits Section ---
function Benefits() {
    const benefits = [
        { title: "Instant Settlements", desc: "Complete payments in seconds, 24/7, including weekends and holidays.", icon: Zap },
        { title: "Multi-Currency Flexibility", desc: "Payouts in USDC, USDT, Bitcoin, or local fiat like USD, EUR, GBP.", icon: RefreshCcw },
        { title: "Global Reach", desc: "Pay recipients in nearly every country through regulated compliant rails.", icon: Globe },
        { title: "Lower Fees", desc: "Save significantly compared to traditional cross-border payment providers.", icon: Wallet }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Instant, Borderless, and Cost-Effective</h2>
                    <p className="text-lg text-gray-600">Global payments don’t have to be slow or expensive. RocketFuel eliminates the friction by enabling instant payouts in crypto, stablecoins, or fiat — directly to your recipients worldwide.</p>
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
                            className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-lg transition-all"
                        >
                            <div className="w-12 h-12 bg-yellow-100 rounded-2xl flex items-center justify-center text-yellow-600 mb-6">
                                <benefit.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                            <p className="text-gray-600">{benefit.desc}</p>
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
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900">Simple for Merchants. Instant for Recipients.</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { step: "01", title: "Fund Account", desc: "Load funds in fiat or stablecoins using your preferred method.", icon: Wallet },
                        { step: "02", title: "Add Recipients", desc: "Upload details via API, CSV, or dashboard.", icon: Upload },
                        { step: "03", title: "Send Instantly", desc: "Funds are auto-converted and sent in chosen currency.", icon: Zap },
                        { step: "04", title: "Track Real-Time", desc: "Monitor every transaction with detailed reporting.", icon: Search }
                    ].map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 p-4 font-bold text-6xl text-gray-50 opacity-50 group-hover:text-yellow-50 transition-colors">{step.step}</div>
                            <div className="w-12 h-12 bg-yellow-50 rounded-xl flex items-center justify-center text-orange-600 mb-6 relative z-10">
                                <step.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2 relative z-10">{step.title}</h3>
                            <p className="text-gray-600 relative z-10">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// --- Infrastructure Section ---
function Infrastructure() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Built for Businesses That Need Global Reach</h2>
                        <p className="text-lg text-gray-600 mb-8">
                            RocketFuel’s payout platform is designed for companies managing large-scale disbursements. Whether you’re a platform, marketplace, or enterprise, we make payouts seamless and compliant.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "One-to-many payouts with batch upload or API",
                                "Automatic currency conversion and settlement",
                                "Transaction tracking and reconciliation reports",
                                "Works for gaming, marketplaces, and digital services"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-700">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-gray-900 rounded-2xl p-6 shadow-2xl relative"
                    >
                        {/* Batch Payout Visual */}
                        <div className="absolute top-4 left-4 flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                        </div>
                        <div className="mt-8">
                            <div className="flex justify-between items-center text-gray-400 text-xs uppercase tracking-wider mb-4 border-b border-gray-800 pb-2">
                                <span>Recipient</span>
                                <span>Method</span>
                                <span>Amount</span>
                                <span>Status</span>
                            </div>
                            {[
                                { name: "Alex Chen", loc: "Singapore", method: "USDC", amount: "$1,250.00", status: "Sent" },
                                { name: "Maria Garcia", loc: "Spain", method: "EUR Bank", amount: "€850.00", status: "Processing" },
                                { name: "John Smith", loc: "UK", method: "GBP Bank", amount: "£620.00", status: "Sent" },
                                { name: "Sarah Jones", loc: "USA", method: "USD ACH", amount: "$2,100.00", status: "Sent" },
                                { name: "Wei Zhang", loc: "China", method: "USDT", amount: "$3,000.00", status: "Sent" },
                            ].map((row, i) => (
                                <div key={i} className="flex justify-between items-center py-3 text-sm border-b border-gray-800/50">
                                    <div className="text-white font-medium flex items-center gap-2">
                                        <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 text-xs">{row.name.charAt(0)}</div>
                                        {row.name}
                                    </div>
                                    <div className="text-gray-400">{row.method}</div>
                                    <div className="text-white font-medium">{row.amount}</div>
                                    <div className={`text-xs px-2 py-1 rounded-full ${row.status === 'Sent' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>{row.status}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

// --- Compliance Section ---
function Compliance() {
    return (
        <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
            {/* Background Mesh */}
            {/* Background Mesh */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-900/50 border border-yellow-700 text-yellow-300 text-sm font-medium mb-6">
                        <ShieldCheck className="w-4 h-4 mr-2" /> Compliance
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Regulated, Secure, and Transparent</h2>
                    <p className="text-lg text-gray-400">RocketFuel partners exclusively with licensed financial institutions, exchanges, and banking providers to ensure every transaction meets global compliance standards.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { title: "AML & KYC", desc: "Fully compliant with global AML, KYC, and OFAC regulations.", icon: ShieldCheck },
                        { title: "Licensed Partners", desc: "All transactions processed through regulated financial partners.", icon: Building2 },
                        { title: "Secure Storage", desc: "Funds secured via FBO accounts and blockchain settlement.", icon: Lock },
                        { title: "On-Chain Audit", desc: "Traceable, auditable payout activity on-chain.", icon: Network }
                    ].map((item, i) => (
                        <div key={i} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-8 rounded-2xl">
                            <item.icon className="w-10 h-10 text-yellow-400 mb-6" />
                            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                            <p className="text-gray-400 text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// --- Partners Section ---
function Partners() {
    return (
        <section className="py-24 bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="order-2 lg:order-1"
                    >
                        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-10 flex items-center justify-center">
                            <Handshake className="w-48 h-48 text-yellow-200" />
                        </div>
                    </motion.div>
                    <div className="order-1 lg:order-2">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Grow with RocketFuel’s Partner Network</h2>
                        <p className="text-lg text-gray-600 mb-8">
                            PSPs, ISOs, and integrators can embed RocketFuel’s payout infrastructure into their offerings and generate new recurring revenue streams.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "White-label and API-based integration options",
                                "Revenue-sharing opportunities",
                                "Full access to reporting tools and analytics",
                                "Dedicated partner support and onboarding"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-700">
                                    <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

// --- CTA Section ---
function CTA() {
    return (
        <section className="py-24 bg-gradient-to-br from-yellow-500 to-orange-600 text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px] -translate-x-1/3 -translate-y-1/3" />
            <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Start Sending Global Payouts Today</h2>
                <p className="text-xl text-yellow-50 mb-10 max-w-2xl mx-auto">
                    Eliminate international payment barriers. Send instant, low-cost, compliant payments to your global network in stablecoins or fiat.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link href="/demo">
                        <div className="btn-white w-full sm:w-auto">
                            Request Demo
                        </div>
                    </Link>
                    <Link href="/contact">
                        <div className="btn-glass w-full sm:w-auto">
                            Talk to Sales
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}

// Missing imports
import { Lock } from 'lucide-react';

export default function GlobalPayoutsPage() {
    return (
        <main className="min-h-screen">
            <Hero />
            <Benefits />
            <HowItWorks />
            <Infrastructure />
            <Compliance />
            <Partners />
            <CTA />
        </main>
    );
}
