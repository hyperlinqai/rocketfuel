'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
    ArrowRight, CheckCircle2, ShieldCheck, Zap, Globe, Lock,
    CreditCard, Layout, Terminal, Banknote, RefreshCcw,
    BarChart3, Code2, Bitcoin
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

const scaleIn = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } }
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
                            Accept Crypto{' '}
                            <span className="text-gradient-gold">
                                Payments Anywhere.
                            </span>
                        </motion.h1>
                        <motion.p variants={fadeInUp} className="hero-description">
                            Instantly settled in fiat or stablecoin. The fastest, easiest, and most compliant way to accept crypto online or in-store. We handle the blockchain complexity — you get paid in the currency you choose.
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

                    {/* Hero Visual: Split Payment Flow */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative w-full aspect-square max-w-lg mx-auto">
                            {/* Merchant Dashboard Card */}
                            <div className="absolute right-0 bottom-10 w-3/4 bg-white/80 backdrop-blur-xl border border-white/50 rounded-2xl shadow-2xl p-6 z-20">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="text-sm font-semibold text-gray-500">Incoming Settlement</div>
                                    <div className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">Completed</div>
                                </div>
                                <div className="text-4xl font-bold text-gray-900 mb-2">$12,450.00</div>
                                <div className="text-sm text-gray-400">USD - Bank Transfer</div>
                            </div>

                            {/* Crypto Input Card */}
                            <div className="absolute left-0 top-10 w-2/3 bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl p-6 z-10 text-white transform -rotate-6">
                                <div className="flex items-center justify-between mb-6">
                                    <span className="text-sm font-medium text-gray-400">Payment Method</span>
                                    <Globe className="w-5 h-5 text-yellow-500" />
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between p-3 bg-gray-800 rounded-xl border border-gray-700">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500 font-bold">₿</div>
                                            <div>
                                                <div className="font-semibold">Bitcoin</div>
                                                <div className="text-xs text-gray-400">BTC Network</div>
                                            </div>
                                        </div>
                                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                                    </div>
                                    <div className="flex items-center justify-between p-3 bg-gray-800 rounded-xl border border-gray-700 opacity-60">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500 font-bold">Ξ</div>
                                            <div>
                                                <div className="font-semibold">USDC</div>
                                                <div className="text-xs text-gray-400">Ethereum</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Connecting Line */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none z-15">
                                <motion.path
                                    d="M 120 200 Q 250 250 350 350"
                                    fill="none"
                                    stroke="url(#gradient)"
                                    strokeWidth="4"
                                    strokeDasharray="10 10"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                />
                                <defs>
                                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#eab308" />
                                        <stop offset="100%" stopColor="#ea580c" />
                                    </linearGradient>
                                </defs>
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
        { title: "Instant Conversion", desc: "Every crypto payment is automatically converted to fiat or stablecoin.", icon: RefreshCcw },
        { title: "24/7 Availability", desc: "No banking hours, no settlement delays. Always open.", icon: ClockIcon },
        { title: "Global Acceptance", desc: "Tap into crypto users worldwide without borders.", icon: Globe },
        { title: "No Chargebacks", desc: "Immutable blockchain transactions protect your revenue.", icon: ShieldCheck }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Faster Payments. Global Reach. Zero Chargebacks.</h2>
                    <p className="text-lg text-gray-600">Traditional payment rails weren’t built for a global digital economy. RocketFuel’s Crypto Merchant Processing lets you accept Bitcoin, Ethereum, USDT, USDC, and more — without volatility risk or complex setup.</p>
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
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900">Simple for Merchants, Seamless for Shoppers</h2>
                </div>

                <div className="relative grid md:grid-cols-3 gap-12 text-center z-10">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-200 -z-10" />

                    {[
                        { step: "01", title: "Checkout", desc: "Your customer chooses 'Pay with Crypto'.", icon: CreditCard },
                        { step: "02", title: "Instant Conversion", desc: "We securely receive and auto-convert to your currency.", icon: RefreshCcw },
                        { step: "03", title: "Guaranteed Settlement", desc: "Funds arrive within 24h. No volatility risk.", icon: Banknote }
                    ].map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="flex flex-col items-center"
                        >
                            <div className="w-24 h-24 bg-white rounded-full shadow-xl flex items-center justify-center text-orange-600 border border-orange-50 mb-6 relative z-10">
                                <step.icon className="w-10 h-10" />
                                <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-sm border-2 border-white">{step.step}</div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                            <p className="text-gray-600 max-w-xs">{step.desc}</p>
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
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Perfect for High-Risk and Global Industries</h2>
                        <p className="text-lg text-gray-600 mb-8">
                            RocketFuel supports industries that traditional processors can’t — from gaming and content platforms to travel and remittances. We provide fully compliant, automated crypto acceptance designed for flexibility and transparency.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Works for high-risk MCC codes (Gaming, Content, Marketplaces)",
                                "PCI and AML-aligned infrastructure",
                                "Instant settlement in USD, EUR, USDC, and USDT",
                                "Detailed reporting and reconciliation tools"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-700">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <motion.div
                        whileHover={{ rotateY: 5 }}
                        className="relative perspective-1000"
                    >
                        {/* Dashboard Mockup */}
                        <div className="bg-gray-900 rounded-2xl shadow-2xl p-6 text-white border border-gray-800">
                            <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-800">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                </div>
                                <div className="text-xs text-gray-400">RocketFuel Merchant Dashboard</div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="bg-gray-800 p-4 rounded-xl">
                                    <div className="text-gray-400 text-sm mb-1">Total Volume</div>
                                    <div className="text-2xl font-bold">$1.2M</div>
                                    <div className="text-green-400 text-xs flex items-center gap-1">
                                        <ArrowRight className="w-3 h-3 -rotate-45" /> +12% this week
                                    </div>
                                </div>
                                <div className="bg-gray-800 p-4 rounded-xl">
                                    <div className="text-gray-400 text-sm mb-1">Settled (USD)</div>
                                    <div className="text-2xl font-bold">$890k</div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="text-xs text-gray-500 uppercase tracking-widest mb-2">Recent Settlements</div>
                                {[1, 2, 3].map((_, i) => (
                                    <div key={i} className="flex items-center justify-between p-3 hover:bg-gray-800 rounded-lg transition-colors cursor-pointer">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500">
                                                <Banknote className="w-4 h-4" />
                                            </div>
                                            <div>
                                                <div className="text-sm font-medium">Payout to Bank</div>
                                                <div className="text-xs text-gray-400">Today, 10:42 AM</div>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-sm font-medium">-$24,500.00</div>
                                            <div className="text-xs text-green-400">Completed</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
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
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-orange-900/50 border border-orange-700 text-orange-300 text-sm font-medium mb-6">
                        <ShieldCheck className="w-4 h-4 mr-2" /> Compliance
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Compliance First. Technology Driven.</h2>
                    <p className="text-lg text-gray-400">Every RocketFuel transaction is monitored through regulated partners and trusted exchanges. We combine traditional KYC/KYT controls with blockchain transparency.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { title: "Regulated Partners", desc: "Partnered with Coinbase Prime and other tier-1 regulated exchanges.", icon: Building2 },
                        { title: "Risk & AML", desc: "Integrated risk scoring and AML screening for every transaction.", icon: Lock },
                        { title: "ZeroProof Verification", desc: "Zero-knowledge age and identity verification technology.", icon: ShieldCheck },
                        { title: "On-Chain Audit", desc: "Fully auditable on-chain records for complete transparency.", icon: FileCheck }
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

// --- Integrations Section ---
function Integrations() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Integrate with Your Existing Stack</h2>
                        <p className="text-lg text-gray-600 mb-8">
                            Whether you use Shopify, WooCommerce, or a custom checkout, RocketFuel’s SDKs and APIs make crypto acceptance plug-and-play.
                        </p>
                        <div className="flex flex-wrap gap-4 mb-8">
                            {["Shopify", "WooCommerce", "Magento", "BigCommerce", "Custom API"].map((platform) => (
                                <span key={platform} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium text-sm">
                                    {platform}
                                </span>
                            ))}
                        </div>
                        <Link href="/developers" className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700">
                            View Developer Documentation <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                    </div>

                    <div className="bg-[#1E1E1E] rounded-xl shadow-2xl overflow-hidden border border-gray-800">
                        <div className="flex items-center px-4 py-3 bg-[#2D2D2D] border-b border-gray-700">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                                <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                            </div>
                            <div className="ml-4 text-xs text-gray-400 font-mono">rocketfuel-sdk.js</div>
                        </div>
                        <div className="p-6 overflow-x-auto">
                            <pre className="text-sm font-mono leading-relaxed">
                                <code className="language-javascript">
                                    <span className="text-[#C678DD]">const</span> <span className="text-[#E5C07B]">payment</span> <span className="text-[#56B6C2]">=</span> <span className="text-[#C678DD]">await</span> rocketfuel.<span className="text-[#61AFEF]">createPayment</span>({'{'}
                                    {'\n'}  <span className="text-[#E06C75]">amount</span>: <span className="text-[#D19A66]">100.00</span>,
                                    {'\n'}  <span className="text-[#E06C75]">currency</span>: <span className="text-[#98C379]">'USD'</span>,
                                    {'\n'}  <span className="text-[#E06C75]">customer</span>: {'{'}
                                    {'\n'}    <span className="text-[#E06C75]">email</span>: <span className="text-[#98C379]">'customer@example.com'</span>
                                    {'\n'}  {'}'}
                                    {'\n'}{'}'});
                                </code>
                            </pre>
                        </div>
                    </div>
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
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Accept Crypto Payments?</h2>
                <p className="text-xl text-orange-100 mb-10 max-w-2xl mx-auto">
                    Grow your business with a faster, more global payment rail. Start accepting crypto and receive guaranteed fiat or stablecoin settlements in hours.
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

// Icons needed that weren't imported initially
import { Building2, FileCheck, Clock as ClockIcon } from 'lucide-react';

export default function CryptoMerchantPage() {
    return (
        <main className="min-h-screen">
            <Hero />
            <Benefits />
            <HowItWorks />
            <Features />
            <Compliance />
            <Integrations />
            <CTA />
        </main>
    );
}
