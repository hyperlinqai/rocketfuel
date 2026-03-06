'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    ArrowRight, Coins, Zap, ShieldCheck, Globe,
    Layout, CheckCircle2, Award, BarChart3, Repeat,
    Wallet, Users, PieChart, ShoppingBag
} from 'lucide-react';
import React from 'react';

// --- Animation Variants (Strict Types) ---
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
                            Reward Customers.{' '}
                            <span className="text-gradient-gold">
                                Grow Loyalty.
                            </span>{' '}
                            Boost Revenue.
                        </motion.h1>
                        <motion.p variants={fadeInUp} className="hero-description">
                            R Points brings loyalty into the Web3 era. Earn, track, and redeem blockchain-based rewards across participating merchants, all while maintaining transparency, security, and instant settlement.
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

                    {/* Hero Visual: Token Ecosystem */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative w-full aspect-square max-w-lg mx-auto flex items-center justify-center">
                            {/* Central Hub */}
                            <div className="relative z-20 w-32 h-32 bg-white rounded-full shadow-2xl flex flex-col items-center justify-center border-4 border-yellow-50">
                                <Coins className="w-12 h-12 text-yellow-500 mb-1" />
                                <div className="font-bold text-gray-900">R Points</div>
                            </div>

                            {/* Orbiting Tokens */}
                            {[...Array(6)].map((_, i) => {
                                const angle = (i * 60) * (Math.PI / 180);
                                const radius = 160;
                                return (
                                    <motion.div
                                        key={i}
                                        className="absolute w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center z-10 border border-yellow-100"
                                        style={{
                                            top: '50%',
                                            left: '50%',
                                            x: Math.cos(angle) * -6, // Center offset
                                            y: Math.sin(angle) * -6
                                        }}
                                        animate={{
                                            x: [
                                                Math.cos(angle) * radius - 24,
                                                Math.cos(angle + 0.1) * radius - 24,
                                                Math.cos(angle) * radius - 24
                                            ],
                                            y: [
                                                Math.sin(angle) * radius - 24,
                                                Math.sin(angle + 0.1) * radius - 24,
                                                Math.sin(angle) * radius - 24
                                            ]
                                        }}
                                        transition={{
                                            duration: 3 + i,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                    >
                                        <div className="w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-600 font-bold text-xs">
                                            R
                                        </div>
                                    </motion.div>
                                );
                            })}

                            {/* Connecting Lines */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                                <circle cx="50%" cy="50%" r="160" fill="none" stroke="#FDE68A" strokeWidth="1" strokeDasharray="4 4" className="opacity-50" />
                                <circle cx="50%" cy="50%" r="80" fill="none" stroke="#FDE68A" strokeWidth="1" className="opacity-30" />
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
        { title: "Universal Rewards", desc: "Customers earn R Points from any participating merchant in the network.", icon: Globe },
        { title: "Instant Redemption", desc: "Points can be redeemed instantly at checkout for discounts or offers.", icon: Zap },
        { title: "Transparent & Secure", desc: "Every point tracked on-chain for complete verification.", icon: ShieldCheck },
        { title: "Partner-Driven", desc: "Merchants and PSPs share in the rewards economy.", icon: Users }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Modern Loyalty Built on Blockchain</h2>
                    <p className="text-lg text-gray-600">Traditional loyalty programs are isolated, slow, and easy to forget. R Points creates a shared, on-chain rewards ecosystem that connects merchants and customers seamlessly.</p>
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
        { title: "Earn Points", desc: "Customers earn R Points automatically after any purchase.", icon: ShoppingBag },
        { title: "Track Rewards", desc: "Points are tokenized and stored securely on-chain.", icon: BarChart3 },
        { title: "Redeem Anywhere", desc: "Use points at any participating merchant for discounts.", icon: awardIcon },
        { title: "Merchant Settlement", desc: "Merchants are settled instantly upon redemption.", icon: Wallet }
    ];

    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Earn, Track, Redeem — Instantly.</h2>
                    <p className="text-gray-600">Merchants and Partners can access full analytics through the R Points dashboard.</p>
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
                            <div className="w-24 h-24 bg-white rounded-full shadow-xl flex items-center justify-center text-yellow-600 border border-yellow-50 mb-8">
                                <step.icon className="w-10 h-10" />
                                <div className="absolute top-0 right-0 bg-yellow-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold border-4 border-gray-50">
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

// --- Benefits for Merchants Section ---
function MerchantBenefits() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Drive Retention and Build Customer Value</h2>
                        <p className="text-lg text-gray-600 mb-8">
                            R Points helps merchants increase sales, encourage repeat purchases, and lower acquisition costs through a shared loyalty framework.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Shared reward pool across merchants",
                                "Simple integration via API or dashboard",
                                "Real-time reporting and settlement visibility",
                                "Lower customer acquisition costs"
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
                            <div className="text-white font-semibold flex items-center gap-2">
                                <PieChart className="w-4 h-4 text-gray-400" /> Merchant Analytics
                            </div>
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <div className="bg-gray-800 p-4 rounded-xl">
                                <div className="text-gray-400 text-xs mb-1">Points Issued</div>
                                <div className="text-2xl font-bold text-white">45,200 <span className="text-yellow-500 text-sm">R</span></div>
                            </div>
                            <div className="bg-gray-800 p-4 rounded-xl">
                                <div className="text-gray-400 text-xs mb-1">Redeemed Value</div>
                                <div className="text-2xl font-bold text-white">$4,520</div>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">Recent Activity</div>
                            {[
                                { user: "alex@example.com", action: "Earned", amount: "+500 R", time: "2m ago" },
                                { user: "sarah@test.co", action: "Redeemed", amount: "-1200 R", time: "15m ago" },
                                { user: "mike@domain.net", action: "Earned", amount: "+350 R", time: "1h ago" }
                            ].map((row, i) => (
                                <div key={i} className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg text-sm">
                                    <div className="text-white">{row.user}</div>
                                    <div className="text-right">
                                        <div className={row.action === 'Earned' ? 'text-green-400' : 'text-orange-400'}>{row.amount}</div>
                                        <div className="text-xs text-gray-500">{row.time}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

// --- Transparency Section ---
function Transparency() {
    return (
        <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#eab308_1px,transparent_1px)] [background-size:24px_24px]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">A Loyalty Network You Can Trust</h2>
                    <p className="text-lg text-gray-400">R Points leverages blockchain to ensure every transaction, point issuance, and redemption is verifiable, traceable, and secure.</p>
                </div>

                <div className="max-w-4xl mx-auto bg-black/40 backdrop-blur-xl border border-gray-700 rounded-2xl p-8 overflow-hidden">
                    <div className="flex items-center gap-4 mb-6">
                        <Layout className="w-5 h-5 text-yellow-500" />
                        <span className="font-mono text-sm text-gray-300">Live Blockchain Ledger</span>
                    </div>
                    <div className="space-y-2 font-mono text-xs md:text-sm">
                        {[
                            { hash: "0x8a...4b21", action: "MINT_POINTS", from: "Merchant_A", to: "User_8821", val: "500 R" },
                            { hash: "0x1d...e992", action: "BURN_POINTS", from: "User_3310", to: "Merchant_B", val: "1000 R" },
                            { hash: "0x4f...7a00", action: "MINT_POINTS", from: "Merchant_C", to: "User_1102", val: "250 R" },
                            { hash: "0x9c...3d11", action: "SETTLEMENT", from: "Treasury", to: "Merchant_B", val: "$10.00" },
                        ].map((tx, i) => (
                            <div key={i} className="grid grid-cols-5 gap-4 p-3 border-b border-gray-800 text-gray-400 hover:bg-white/5 transition-colors">
                                <span className="col-span-1 text-orange-400 truncate">{tx.hash}</span>
                                <span className="col-span-1 text-white">{tx.action}</span>
                                <span className="col-span-1 truncate">{tx.from}</span>
                                <span className="col-span-1 truncate opacity-60">to {tx.to}</span>
                                <span className="col-span-1 text-right text-yellow-400">{tx.val}</span>
                            </div>
                        ))}
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
                <div className="flex justify-center mb-8">
                    <Globe className="w-16 h-16 text-white opacity-90" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">From Rewards to Real-World Value</h2>
                <p className="text-xl text-yellow-50 mb-10 max-w-2xl mx-auto">
                    By connecting merchants, customers, and partners through a blockchain network, RocketFuel makes loyalty simple, transparent, and borderless.
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

// Missing icon shim
import { Award as awardIcon } from 'lucide-react';

export default function RPointsPage() {
    return (
        <main className="min-h-screen">
            <Hero />
            <WhyChoose />
            <HowItWorks />
            <MerchantBenefits />
            <Transparency />
            <CTA />
        </main>
    );
}
