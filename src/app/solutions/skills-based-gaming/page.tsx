'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    ArrowRight, Gamepad2, Coins, Globe, ShieldCheck,
    Wallet, Zap, Users, BarChart3, Lock, CheckCircle2,
    Trophy, CreditCard
} from 'lucide-react';
import { constructMetadata } from '@/seo/metadata';

// --- Animation Variants ---
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 }
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
                        <motion.div variants={fadeInUp} className="hero-badge">
                            <Gamepad2 className="w-4 h-4 mr-2" />
                            Skills-Based Gaming Solutions
                        </motion.div>

                        <motion.h1 variants={fadeInUp} className="hero-title">
                            Powering the Next Generation of <br className="hidden lg:block" />
                            <span className="text-gradient-gold">
                                Skill-Based Gaming Payments
                            </span>
                        </motion.h1>

                        <motion.p variants={fadeInUp} className="hero-description">
                            RocketFuel enables seamless wallet funding, instant redemptions, and global affiliate payouts in stablecoins, crypto, or fiat — all through one compliant, secure infrastructure.
                        </motion.p>

                        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                            <Link href="/demo">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="btn-primary w-full sm:w-auto px-8 py-4 flex items-center justify-center gap-2"
                                >
                                    Request Demo <ArrowRight className="w-5 h-5" />
                                </motion.div>
                            </Link>
                            <Link href="/contact">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="btn-secondary w-full sm:w-auto px-8 py-4"
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
                        className="relative hidden lg:block"
                    >
                        <div className="relative w-full aspect-square max-w-md mx-auto perspective-1000">
                            {/* Graphic Container */}
                            <div className="relative w-full h-full bg-white/40 backdrop-blur-xl border border-white/50 rounded-3xl shadow-2xl p-6 flex flex-col items-center justify-center overflow-hidden ring-1 ring-white/60">

                                {/* Animated Elements */}
                                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-amber-500/5" />

                                {/* Controller Icon */}
                                <div className="relative z-10 w-32 h-32 bg-white rounded-full shadow-lg flex items-center justify-center text-orange-600 mb-8 border-4 border-orange-50">
                                    <Gamepad2 className="w-16 h-16" />
                                </div>

                                {/* Floating Coins */}
                                {[
                                    { symbol: "₿", bg: "bg-orange-100", text: "text-orange-600", delay: 0, pos: "top-10 left-10" },
                                    { symbol: "Ξ", bg: "bg-blue-100", text: "text-blue-600", delay: 1, pos: "top-10 right-10" },
                                    { symbol: "$", bg: "bg-green-100", text: "text-green-600", delay: 2, pos: "bottom-20 right-20" }
                                ].map((coin, i) => (
                                    <motion.div
                                        key={i}
                                        className={`absolute ${coin.pos} w-12 h-12 rounded-full ${coin.bg} ${coin.text} flex items-center justify-center font-bold text-xl shadow-md border-2 border-white`}
                                        animate={{ y: [-10, 10, -10] }}
                                        transition={{ duration: 3, delay: coin.delay * 0.5, repeat: Infinity, ease: "easeInOut" }}
                                    >
                                        {coin.symbol}
                                    </motion.div>
                                ))}

                                {/* Wallet Interface Mockup */}
                                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md rounded-xl p-4 shadow-lg border border-gray-100">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-sm font-semibold text-gray-500">Wallet Balance</span>
                                        <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">+24.5%</span>
                                    </div>
                                    <div className="text-3xl font-bold text-gray-900">$12,450.00</div>
                                </div>
                            </div>
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
            title: "Wallet Top-Ups",
            desc: "Players fund accounts instantly using crypto or stablecoins.",
            icon: Wallet
        },
        {
            title: "Instant Redemptions",
            desc: "Seamless withdrawals to players’ wallets or local bank accounts.",
            icon: Zap
        },
        {
            title: "Affiliate Payouts",
            desc: "Pay affiliates, streamers, and competition winners anywhere.",
            icon: Users
        },
        {
            title: "Compliance First",
            desc: "All transactions processed through regulated banking partners.",
            icon: ShieldCheck
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                        Fast, Fair, and Frictionless Payments
                    </h2>
                    <p className="text-lg text-gray-600">
                        Traditional processors limit skill-based gaming platforms due to regulatory uncertainty. RocketFuel’s crypto-native solution supports instant deposits, withdrawals, and payouts — without chargebacks or high fees.
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
                            // Standardized Card Style
                            className="bg-gray-50 rounded-3xl p-8 flex flex-col items-center text-center hover:shadow-lg hover:border-orange-100 border border-transparent transition-all"
                        >
                            <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 mb-6">
                                <benefit.icon className="w-7 h-7" />
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
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900">One Infrastructure for Every Flow</h2>
                </div>

                <div className="relative grid md:grid-cols-4 gap-8 text-center z-10">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-gray-200 -z-10" />

                    {[
                        { step: "01", title: "Accept Deposits", desc: "Players top up via crypto or fiat.", icon: Wallet },
                        { step: "02", title: "Convert Instantly", desc: "Auto-convert to stablecoins for liquidity.", icon: Zap },
                        { step: "03", title: "Manage Payouts", desc: "Send winnings to players instantly.", icon: Trophy },
                        { step: "04", title: "Reconcile Easily", desc: "Track all flows in one dashboard.", icon: BarChart3 }
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

// --- Features (Optimized for Platforms) ---
function Features() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Scalable Payments for Gaming Networks</h2>
                        <p className="text-lg text-gray-600 mb-8">
                            RocketFuel supports gaming operators, marketplaces, and tournament organizers with a flexible, API-driven system that scales effortlessly across regions and currencies.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "24/7 global payment processing in crypto and fiat",
                                "Stablecoin support for instant, low-cost transfers",
                                "Automated pay-outs for affiliates and winners",
                                "Real-time reporting and reconciliation"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-700">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Dashboard Mockup - Standardized Style */}
                    <div className="relative">
                        <div className="bg-gray-900 rounded-2xl shadow-2xl p-6 text-white border border-gray-800 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                            <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-800">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                </div>
                                <div className="text-xs text-gray-400">Tournament Payouts</div>
                            </div>
                            <div className="space-y-3">
                                {[
                                    { name: "Winner #1", amount: "$5,000.00", status: "Paid" },
                                    { name: "Winner #2", amount: "$2,500.00", status: "Paid" },
                                    { name: "Winner #3", amount: "$1,000.00", status: "Paid" },
                                    { name: "Affiliate A", amount: "$450.00", status: "Processing" }
                                ].map((row, i) => (
                                    <div key={i} className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500 text-xs">ID</div>
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
            {/* Background Mesh - Amber/Orange Theme (Standardized) */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-orange-900/50 border border-orange-700 text-orange-300 text-sm font-medium mb-6">
                        <ShieldCheck className="w-4 h-4 mr-2" /> Compliance
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Game-Changing Speed, Bank-Grade Compliance</h2>
                    <p className="text-lg text-gray-400">
                        RocketFuel combines blockchain transparency with AML and KYC compliance. We strictly adhere to regulatory standards while ensuring lightning-fast settlements.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { title: "Regulated Partners", desc: "Fully regulated exchange and banking network.", icon: Globe },
                        { title: "KYT Monitoring", desc: "Real-time screening for on-chain transactions.", icon: BarChart3 },
                        { title: "ZeroProof", desc: "Optional age and identity verification tools.", icon: Lock },
                        { title: "Audit Trail", desc: "Ledger reconciliation and transparency.", icon: CheckCircle2 }
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

// --- Partners/Integration ---
function Partners() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Unlock New Revenue Streams</h2>
                <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
                    White-label and API integrations for PSPs, gaming networks, and fintech partners. Monetize every transaction with ease.
                </p>

                <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    {[
                        "Easy Wallet Integration",
                        "Revenue Sharing Models",
                        "Global Currency Coverage"
                    ].map((feature, i) => (
                        <div key={i} className="p-6 bg-orange-50/50 rounded-xl border border-orange-100 flex flex-col items-center">
                            <CheckCircle2 className="w-8 h-8 text-orange-500 mb-3" />
                            <h3 className="font-semibold text-gray-900">{feature}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// --- C.T.A. ---
function CTA() {
    return (
        <section className="py-24 bg-gradient-to-br from-orange-600 to-amber-700 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3" />
            <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Instant Deposits. Global Redemptions.</h2>
                <p className="text-xl text-orange-100 mb-10 max-w-2xl mx-auto">
                    Empower your gaming platform to move beyond legacy limits. Accept crypto, issue stablecoin payouts, and expand globally.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link href="/demo">
                        <div className="btn-white w-full sm:w-auto">
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

export default function SkillsBasedGamingPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Hero />
            <WhyChoose />
            <HowItWorks />
            <Features />
            <Compliance />
            <Partners />
            <CTA />
        </div>
    );
}
