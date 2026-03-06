'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    ArrowRight, Gift, CreditCard, Repeat, ShieldCheck,
    CheckCircle2, Building2, Layout, Zap, Users,
    Wallet, Receipt, Mail, BarChart3, Globe, Coins
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

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >
                        <motion.h1 variants={fadeInUp} className="hero-title max-w-3xl">
                            Seamless Card-to-Gift{' '}
                            <span className="text-gradient-gold">
                                Payments on Chain.
                            </span>
                        </motion.h1>
                        <motion.p variants={fadeInUp} className="hero-description">
                            Unlock new revenue and reduce card declines with RocketFuel’s blockchain-based gift card solution. Enable shoppers to fund accounts, buy gift cards, and redeem instantly at your website.
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

                    {/* Hero Visual: Gift Card Issuance */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative hidden lg:block perspective-1000"
                    >
                        {/* Central Card Animation */}
                        <div className="relative w-full aspect-square max-w-md mx-auto flex items-center justify-center">

                            {/* Shopper Card */}
                            <motion.div
                                animate={{ x: [-20, 0, -20], rotate: [-5, 0, -5] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute left-0 top-1/3 w-48 h-32 bg-gray-900 rounded-xl shadow-xl p-4 border border-gray-700 z-10"
                            >
                                <div className="flex justify-between items-start mb-6">
                                    <div className="w-8 h-5 bg-yellow-500/80 rounded" />
                                    <CreditCard className="w-5 h-5 text-gray-400" />
                                </div>
                                <div className="space-y-2">
                                    <div className="w-full h-2 bg-gray-700 rounded" />
                                    <div className="w-2/3 h-2 bg-gray-700 rounded" />
                                </div>
                            </motion.div>

                            {/* Arrow Flow */}
                            <motion.div
                                animate={{ opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="absolute z-0 w-40 h-1 bg-gradient-to-r from-gray-900 to-orange-600"
                                style={{ transform: 'rotate(-15deg)' }}
                            />

                            {/* RocketFuel Gift Card */}
                            <motion.div
                                animate={{ x: [20, 0, 20], rotate: [5, 0, 5] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                className="absolute right-0 top-1/4 w-56 h-36 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl shadow-2xl p-6 text-white z-20 border border-white/20 backdrop-blur-sm"
                            >
                                <div className="flex justify-between items-start mb-8">
                                    <Gift className="w-8 h-8 text-white/90" />
                                    <span className="font-bold text-lg">$100.00</span>
                                </div>
                                <div className="text-sm font-medium tracking-widest mb-1">GIFT CARD</div>
                                <div className="font-mono text-xs opacity-80">XXXX-XXXX-XXXX-3921</div>

                                {/* Shine Effect */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent w-full h-full rounded-xl" />
                            </motion.div>

                            {/* Blockchain Verification Badge */}
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 1, type: "spring" }}
                                className="absolute bottom-10 right-10 bg-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 z-30"
                            >
                                <ShieldCheck className="w-4 h-4 text-green-500" />
                                <span className="text-xs font-bold text-gray-800">Verified On-Chain</span>
                            </motion.div>

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
        { title: "Higher Approval Rates", desc: "Reduce declines by processing as a gift card purchase instead of a direct transaction.", icon: CheckCircle2 },
        { title: "Instant Redemption", desc: "Gift cards are automatically created and applied in seconds.", icon: Zap },
        { title: "Transparent Tracking", desc: "Every card is logged on-chain for full audit and compliance visibility.", icon: Globe },
        { title: "Increased Revenue", desc: "Merchants earn more with frictionless checkout and no lost sales due to failed auths.", icon: BarChart3 }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Simplify Payments and Boost Conversions</h2>
                    <p className="text-lg text-gray-600">Traditional credit card transactions often fail for digital-first industries. RocketFuel’s Gift Card solution bridges that gap by enabling shoppers to purchase blockchain-backed gift cards that can be instantly redeemed at your site.</p>
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
    const steps = [
        { title: "Purchase", desc: "The shopper buys a gift card using a credit or debit card.", icon: CreditCard },
        { title: "Token Creation", desc: "RocketFuel instantly issues a blockchain-based gift card representing the value.", icon: Coins },
        { title: "Redemption", desc: "The shopper uses the gift card to fund their wallet or make a purchase.", icon: Wallet },
        { title: "Settlement", desc: "RocketFuel settles with the merchant, and a receipt is sent.", icon: Receipt }
    ];

    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">From Purchase to Redemption in Seconds</h2>
                    <p className="text-gray-600">Each card is assigned a unique alphanumeric code and linked to the shopper’s email for verification.</p>
                </div>

                <div className="grid md:grid-cols-4 gap-8 relative text-center">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-gray-200 z-0" />

                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="relative z-10 flex flex-col items-center"
                        >
                            <div className="w-24 h-24 bg-white rounded-full shadow-xl flex items-center justify-center text-orange-600 border border-orange-50 mb-8">
                                <step.icon className="w-10 h-10" />
                                <div className="absolute top-0 right-0 bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold border-4 border-gray-50">
                                    {i + 1}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                            <p className="text-gray-600 text-sm max-w-[200px]">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// --- Features Section with Dashboard Visual ---
function Features() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Designed for Digital Commerce</h2>
                        <p className="text-lg text-gray-600 mb-8">
                            RocketFuel Gift Cards are ideal for merchants operating in gaming, entertainment, and digital goods. By tokenizing the transaction, merchants eliminate traditional chargebacks while offering shoppers a fast, familiar checkout experience.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Real-time issuance and redemption",
                                "Supports major credit and debit cards",
                                "Full transaction transparency through blockchain records",
                                "API integration for merchant dashboards and reporting"
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
                        className="bg-gray-900 rounded-2xl p-8 shadow-2xl relative"
                    >
                        <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-800">
                            <div className="text-white font-semibold">Gift Card Log</div>
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                            </div>
                        </div>

                        <div className="space-y-3">
                            <div className="grid grid-cols-4 text-xs text-gray-500 uppercase tracking-wider pb-2">
                                <span>Code</span>
                                <span>Status</span>
                                <span>Value</span>
                                <span className="text-right">Time</span>
                            </div>
                            {[
                                { code: "GC-8921", status: "Redeemed", value: "$50.00", time: "2 min ago" },
                                { code: "GC-4420", status: "Issued", value: "$100.00", time: "5 min ago" },
                                { code: "GC-1193", status: "Redeemed", value: "$25.00", time: "12 min ago" },
                                { code: "GC-7734", status: "Issued", value: "$200.00", time: "1 hr ago" },
                            ].map((card, i) => (
                                <div key={i} className="grid grid-cols-4 items-center text-sm p-3 bg-gray-800 rounded-lg">
                                    <div className="text-white font-mono">{card.code}</div>
                                    <div>
                                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${card.status === 'Redeemed' ? 'bg-green-500/20 text-green-400' : 'bg-orange-500/20 text-orange-400'}`}>
                                            {card.status}
                                        </span>
                                    </div>
                                    <div className="text-white font-medium">{card.value}</div>
                                    <div className="text-gray-400 text-right text-xs">{card.time}</div>
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
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-900/50 border border-yellow-700 text-yellow-300 text-sm font-medium mb-6">
                        <ShieldCheck className="w-4 h-4 mr-2" /> Compliance
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Fully Compliant and Auditable</h2>
                    <p className="text-lg text-gray-400">Every RocketFuel gift card transaction is recorded as a blockchain entry to ensure traceability. Merchants maintain full visibility while shoppers enjoy a seamless experience.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { title: "Blockchain Record", desc: "Immutable gift card creation and redemption logs.", icon: Layout },
                        { title: "Automated Verification", desc: "Automated KYC and AML safeguards via regulated partners.", icon: ShieldCheck },
                        { title: "Merchant of Record", desc: "RocketFuel acts as MOR ensuring compliant processing.", icon: Building2 },
                        { title: "Verifiable Audit", desc: "Verifiable audit trail for acquirers and compliance teams.", icon: CheckCircle2 }
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
                            <Users className="w-48 h-48 text-yellow-200" />
                        </div>
                    </motion.div>
                    <div className="order-1 lg:order-2">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Boost Sales While Maintaining Compliance</h2>
                        <p className="text-lg text-gray-600 mb-8">
                            RocketFuel’s Gift Card solution opens up new revenue channels and reduces payment friction. Merchants earn from every redemption, while integrators share in success.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Simple API integration for rapid deployment",
                                "White-label support for partner networks",
                                "Revenue-sharing for referring PSPs and ISOs",
                                "Full reporting and payout visibility"
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
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3" />
            <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Bridge the Gap Between Cards and Crypto</h2>
                <p className="text-xl text-yellow-50 mb-10 max-w-2xl mx-auto">
                    RocketFuel’s blockchain-based gift cards offer a unique way to accept payments securely, instantly, and globally. Reduce declines and increase conversion.
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

export default function GiftCardsPage() {
    return (
        <main className="min-h-screen">
            <Hero />
            <Benefits />
            <HowItWorks />
            <Features />
            <Compliance />
            <Partners />
            <CTA />
        </main>
    );
}
