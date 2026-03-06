'use client';

import { motion } from 'framer-motion';
import {
    Globe, Zap, ShieldCheck, Users,
    TrendingUp, Coins, Lock, BarChart3
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
        <section className="relative py-24 md:py-32 overflow-hidden bg-white">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-100/40 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 z-0" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-100/40 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    className="text-center max-w-4xl mx-auto"
                >
                    <motion.div
                        variants={fadeInUp}
                        className="inline-flex items-center px-4 py-2 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-sm font-medium mb-8"
                    >
                        <Globe className="w-4 h-4 mr-2" />
                        About RocketFuel
                    </motion.div>

                    <motion.h1
                        variants={fadeInUp}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight"
                    >
                        Powering the Next Generation of{' '}
                        <span className="bg-gradient-to-r from-yellow-500 to-orange-600 bg-clip-text text-transparent">
                            Global Payments
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={fadeInUp}
                        className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto"
                    >
                        Empowering global commerce through instant, borderless payments.
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
}

// --- Story Section ---
function Story() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="prose prose-lg max-w-none"
                >
                    <div className="space-y-6 text-gray-700 leading-relaxed">
                        <p className="text-xl text-gray-900 font-medium">
                            Founded in 2020, RocketFuel is a global payments company redefining how businesses and customers move money across borders. Our mission is simple — to make digital payments faster, safer, and more accessible for everyone.
                        </p>

                        <p>
                            RocketFuel's all-in-one platform enables merchants to accept and send payments in cryptocurrencies, stablecoins, or fiat through a single, secure interface. From one-click crypto checkout and global merchant processing to instant cross-border payouts, invoicing, and blockchain-powered loyalty programs, RocketFuel provides the complete payment infrastructure for the digital economy.
                        </p>

                        <p>
                            Built on advanced blockchain technology and regulated partnerships, RocketFuel eliminates the friction, risk, and high fees of traditional payment systems. Customers enjoy seamless, private, and instant transactions, while merchants gain new revenue channels and global reach without operational complexity.
                        </p>

                        <p className="text-xl text-gray-900 font-semibold pt-4">
                            With RocketFuel, payments are no longer an obstacle — they're a competitive advantage.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

// --- Values Section ---
function Values() {
    const values = [
        {
            icon: Zap,
            title: "Speed",
            description: "Instant settlements and real-time processing for a faster global economy."
        },
        {
            icon: ShieldCheck,
            title: "Security",
            description: "Enterprise-grade security with regulated partners and blockchain transparency."
        },
        {
            icon: Globe,
            title: "Global Reach",
            description: "Borderless payments across 190+ countries with multi-currency support."
        },
        {
            icon: Users,
            title: "Accessibility",
            description: "Simple, developer-friendly tools that scale from startups to enterprises."
        }
    ];

    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                        Our Values
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        The principles that guide everything we build and every partnership we form.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((value, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all border border-gray-100"
                        >
                            <div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-orange-500/20">
                                <value.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                            <p className="text-gray-600">{value.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// --- Stats Section ---
function Stats() {
    const stats = [
        { label: "Founded", value: "2020" },
        { label: "Countries", value: "190+" },
        { label: "Transactions", value: "Millions" },
        { label: "Uptime", value: "99.9%" }
    ];

    return (
        <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fbbf24_1px,transparent_1px)] [background-size:24px_24px]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className="text-center"
                        >
                            <div className="text-4xl md:text-5xl font-bold text-gradient-gold mb-2">
                                {stat.value}
                            </div>
                            <div className="text-gray-400 text-sm uppercase tracking-wider">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// --- Technology Section ---
function Technology() {
    const features = [
        {
            icon: Lock,
            title: "Blockchain-Powered",
            description: "Built on secure, transparent blockchain infrastructure for trust and traceability."
        },
        {
            icon: Coins,
            title: "Multi-Currency",
            description: "Support for crypto, stablecoins, and fiat in a single unified platform."
        },
        {
            icon: BarChart3,
            title: "Real-Time Analytics",
            description: "Comprehensive dashboards and reporting for complete payment visibility."
        },
        {
            icon: TrendingUp,
            title: "Scalable Infrastructure",
            description: "Enterprise-grade systems that grow with your business needs."
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                        Built for the Future
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Advanced technology meets regulatory compliance to deliver the most reliable payment infrastructure.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            className="flex gap-6 p-6 rounded-2xl bg-gray-50 hover:bg-orange-50/50 transition-all border border-transparent hover:border-orange-100"
                        >
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600">
                                    <feature.icon className="w-6 h-6" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default function AboutClient() {
    return (
        <main className="flex flex-col min-h-screen">
            <Hero />
            <Story />
            <Values />
            <Stats />
            <Technology />
        </main>
    );
}
