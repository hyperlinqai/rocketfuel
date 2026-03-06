'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    ArrowRight, FileText, Globe, Zap, Clock, ShieldCheck,
    CheckCircle2, Building2, Layout, Mail, Share2, DollarSign,
    Receipt, FileCheck, Coins
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
                            Get Paid Faster with{' '}
                            <span className="text-gradient-gold">
                                Crypto Invoicing.
                            </span>
                        </motion.h1>
                        <motion.p variants={fadeInUp} className="hero-description">
                            Instantly accept payments in stablecoin or crypto with RocketFuel’s seamless invoicing platform. Reduce friction, eliminate volatility, and settle globally in the currency you choose.
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

                    {/* Hero Visual: Invoice Interface */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative hidden lg:block perspective-1000"
                    >
                        {/* Invoice Card */}
                        <motion.div
                            whileHover={{ rotateY: -5, rotateX: 5 }}
                            transition={{ type: "spring", stiffness: 100, damping: 30 }}
                            className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-8 max-w-md mx-auto relative z-10"
                        >
                            <div className="flex justify-between items-start mb-8">
                                <div>
                                    <div className="text-2xl font-bold text-gray-900 mb-1">INVOICE</div>
                                    <div className="text-sm text-gray-500">#RF-2024-001</div>
                                </div>
                                <div className="text-right">
                                    <div className="text-sm font-semibold text-gray-900">RocketFuel Inc.</div>
                                    <div className="text-xs text-gray-500">Miami, FL</div>
                                </div>
                            </div>

                            <div className="mb-8">
                                <div className="text-xs text-gray-500 uppercase mb-1">Bill To</div>
                                <div className="font-semibold text-gray-900">Global Tech Solutions</div>
                                <div className="text-sm text-gray-500">contact@globaltech.com</div>
                            </div>

                            <div className="border-t border-b border-gray-100 py-4 mb-8">
                                <div className="flex justify-between text-sm mb-2">
                                    <span className="text-gray-600">Web Development Services</span>
                                    <span className="font-medium">$5,000.00</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">Server Maintenance</span>
                                    <span className="font-medium">$1,200.00</span>
                                </div>
                            </div>

                            <div className="flex justify-between items-center mb-8">
                                <div className="text-sm font-semibold text-gray-900">Total Due</div>
                                <div className="text-3xl font-bold text-orange-600">$6,200.00</div>
                            </div>

                            <div className="relative overflow-hidden rounded-xl bg-gray-50 border border-gray-200 p-4">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-sm font-medium text-gray-700">Pay with Crypto</span>
                                    <div className="flex gap-1">
                                        <div className="w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-[10px] font-bold">₿</div>
                                        <div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-[10px] font-bold">Ξ</div>
                                        <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-[10px] font-bold">$</div>
                                    </div>
                                </div>
                                <div className="w-full bg-button-action text-white text-center py-2 rounded-lg font-semibold text-sm cursor-pointer hover:bg-orange-700 transition-colors">
                                    Pay Now
                                </div>

                                {/* Paid Overlay Animation */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 2, duration: 0.5, type: "spring" }}
                                    className="absolute inset-0 bg-white/90 backdrop-blur-sm flex items-center justify-center"
                                >
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg">
                                            <CheckCircle2 className="w-8 h-8" />
                                        </div>
                                        <div className="text-green-600 font-bold text-lg">PAID</div>
                                        <div className="text-xs text-gray-500">Settled in USDC</div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Background Elements */}
                        <div className="absolute top-10 -right-4 w-72 h-72 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full blur-3xl opacity-20 -z-10" />
                        <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-gradient-to-tr from-orange-500 to-yellow-400 rounded-full blur-3xl opacity-20 -z-10" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

// --- Benefits Section ---
function Benefits() {
    const benefits = [
        { title: "Accept Crypto or Stablecoin", desc: "Let clients pay in Bitcoin, Ethereum, USDC, USDT while you get paid in your preferred currency.", icon: Coins },
        { title: "Instant Conversion", desc: "Automatically convert funds to your preferred currency at the time of payment.", icon: Zap },
        { title: "Faster Settlement", desc: "Receive funds to your account within 24 hours, globally. No multi-day bank delays.", icon: Clock },
        { title: "No Volatility", desc: "Lock in the value of every payment at the moment of receipt. Zero exposure to crypto swings.", icon: ShieldCheck }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Simple, Fast, and Global Invoicing</h2>
                    <p className="text-lg text-gray-600">Traditional invoicing tools weren’t built for a borderless economy. RocketFuel makes it effortless for businesses to send invoices and receive payments in stablecoins or crypto all with automatic conversion and next-day settlement.</p>
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
        { title: "Create Your Invoice", desc: "Generate invoices manually or through API integration with your accounting system.", icon: FileText },
        { title: "Share the Payment Link", desc: "Customers can pay using crypto or stablecoins directly from the invoice link.", icon: Share2 },
        { title: "Get Paid Instantly", desc: "Funds are converted automatically and settled in your preferred currency.", icon: DollarSign }
    ];

    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Create, Send, and Settle in Three Steps</h2>
                    <p className="text-gray-600">RocketFuel supports recurring billing, batch invoicing, and automated reconciliation.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-12 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-200 z-0" />

                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="relative z-10 flex flex-col items-center text-center"
                        >
                            <div className="w-24 h-24 bg-white rounded-full shadow-xl flex items-center justify-center text-orange-600 border border-orange-50 mb-8">
                                <step.icon className="w-10 h-10" />
                                <div className="absolute top-0 right-0 bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold border-4 border-gray-50">
                                    {i + 1}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                            <p className="text-gray-600 max-w-xs">{step.desc}</p>
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
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Built for Global Commerce and Modern Finance</h2>
                        <p className="text-lg text-gray-600 mb-8">
                            RocketFuel Invoicing works for freelancers, small businesses, and enterprises alike. Whether you’re billing clients abroad or collecting payments in stablecoins, we provide the tools to scale securely and compliantly.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Compatible with major cryptocurrencies and stablecoins",
                                "Instant conversion to supported fiat currencies",
                                "Transparent exchange rates and transaction summaries",
                                "Detailed reporting and reconciliation for accounting teams"
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
                        className="bg-gray-900 rounded-2xl p-8 shadow-2xl"
                    >
                        <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-800">
                            <div className="text-white font-semibold">Invoices Overview</div>
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                            </div>
                        </div>

                        <div className="space-y-4">
                            {[
                                { id: "INV-001", client: "Acme Corp", amount: "$12,450.00", status: "Paid", method: "USDC" },
                                { id: "INV-002", client: "Stark Ind", amount: "$8,200.00", status: "Paid", method: "BTC" },
                                { id: "INV-003", client: "Wayne Ent", amount: "$15,000.00", status: "Pending", method: "-" },
                                { id: "INV-004", client: "Cyberdyne", amount: "$4,300.00", status: "Paid", method: "USDT" },
                            ].map((inv, i) => (
                                <div key={i} className="flex items-center justify-between p-4 bg-gray-800 rounded-xl">
                                    <div>
                                        <div className="text-sm font-medium text-white">{inv.client}</div>
                                        <div className="text-xs text-gray-500">{inv.id}</div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-sm font-medium text-white">{inv.amount}</div>
                                        <div className={`text-xs ${inv.status === 'Paid' ? 'text-green-400' : 'text-yellow-400'}`}>
                                            {inv.status} {inv.status === 'Paid' && `via ${inv.method}`}
                                        </div>
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

// --- Compliance Section ---
function Compliance() {
    return (
        <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-900/50 border border-yellow-700 text-yellow-300 text-sm font-medium mb-6">
                        <ShieldCheck className="w-4 h-4 mr-2" /> Security First
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Compliant by Design, Trusted by Merchants</h2>
                    <p className="text-lg text-gray-400">Our invoicing system includes full KYC, AML, and KYT safeguards while maintaining privacy and on-chain transparency.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { title: "Regulated Partners", desc: "Every RocketFuel payment is processed through regulated financial and exchange partners.", icon: Building2 },
                        { title: "AML & KYC Verification", desc: "Integrated identity verification for compliant invoicing.", icon: ShieldCheck },
                        { title: "Encrypted Data", desc: "Enterprise-grade encryption and secure data handling.", icon: FileCheck },
                        { title: "Auditable History", desc: "Fully auditable payment histories for easy accounting and reconciliation.", icon: Layout }
                    ].map((item, i) => (
                        <div key={i} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-8 rounded-2xl">
                            <item.icon className="w-10 h-10 text-yellow-500 mb-6" />
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
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Integrate Invoicing into Your Existing Workflow</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Automate billing, track invoices, and manage settlements. RocketFuel connects with your favorite tools.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                    {[
                        { title: "API & Webhooks", desc: "Automate invoice creation and get real-time status updates." },
                        { title: "CSV Import", desc: "Bulk upload invoices for mass billing." },
                        { title: "Accounting Sync", desc: "Seamless integration with major accounting platforms." },
                        { title: "Real-Time Updates", desc: "Instant notifications on payment and conversion status." }
                    ].map((item, i) => (
                        <div key={i} className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                            <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                            <p className="text-sm text-gray-600">{item.desc}</p>
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
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Borderless Invoicing for a Digital Economy</h2>
                <p className="text-xl text-yellow-50 mb-10 max-w-2xl mx-auto">
                    RocketFuel makes invoicing smarter, faster, and global. Accept crypto and stablecoins from anywhere and keep your business moving.
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

export default function CryptoInvoicingPage() {
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
