'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    ArrowRight, Globe, Handshake, ShieldCheck,
    BarChart3, Users, Network, Coins,
    CheckCircle2, Lock, FileCheck, TrendingUp,
    Building2, Zap, Code2, Link2
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
                        <Handshake className="w-4 h-4 mr-2" />
                        Partner Network
                    </motion.div>

                    <motion.h1
                        variants={fadeInUp}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight"
                    >
                        A Global Network Built on{' '}
                        <span className="bg-gradient-to-r from-yellow-500 to-orange-600 bg-clip-text text-transparent">
                            Trust and Innovation
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={fadeInUp}
                        className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10"
                    >
                        RocketFuel partners with regulated banks, exchanges, and technology providers to power instant, secure, and compliant payment solutions around the world.
                    </motion.p>

                    <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn-primary px-8 py-4 flex items-center justify-center gap-2 cursor-pointer bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 border-transparent shadow-lg shadow-orange-500/20"
                            >
                                Become a Partner <ArrowRight className="w-5 h-5" />
                            </motion.div>
                        </Link>
                        <Link href="/contact">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn-secondary px-8 py-4 cursor-pointer"
                            >
                                Talk to Sales
                            </motion.div>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

// --- Partner Ecosystem Section ---
function PartnerEcosystem() {
    const categories = [
        { icon: Building2, title: "Banking & Financial Institutions", desc: "Regulated banking partners" },
        { icon: Coins, title: "Digital Asset Exchanges", desc: "Licensed exchange partners" },
        { icon: Network, title: "PSPs & ISOs", desc: "Payment service providers" },
        { icon: Code2, title: "Technology Partners", desc: "API and platform integrations" },
        { icon: ShieldCheck, title: "Compliance Providers", desc: "KYC, AML, and security" }
    ];

    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                        Powering the Global Payments Infrastructure
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        RocketFuel's success is driven by a trusted network of partners who share our vision of frictionless, compliant, and borderless commerce. From regulated banking institutions to blockchain technology innovators, our ecosystem ensures every transaction is secure, transparent, and instant.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((category, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all border border-gray-100"
                        >
                            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 mb-4">
                                <category.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">{category.title}</h3>
                            <p className="text-sm text-gray-600">{category.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// --- Why Partner Section ---
function WhyPartner() {
    const benefits = [
        {
            icon: Globe,
            title: "Global Expansion",
            desc: "Access to cross-border payment capabilities in stablecoin, crypto, and fiat."
        },
        {
            icon: TrendingUp,
            title: "Revenue Opportunities",
            desc: "Earn on transaction volume and white-label solutions."
        },
        {
            icon: ShieldCheck,
            title: "Regulatory Alignment",
            desc: "Work with a partner built on compliance-first principles."
        },
        {
            icon: Code2,
            title: "Technical Simplicity",
            desc: "API-first integrations for merchants, platforms, and aggregators."
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                        Partnership that Drives Growth and Global Reach
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        RocketFuel gives partners the ability to expand globally, unlock new revenue streams, and deliver modern payment capabilities to their customers — without the complexity of building infrastructure from scratch.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            className="text-center"
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center text-white mb-6 mx-auto shadow-lg shadow-orange-500/20">
                                <benefit.icon className="w-8 h-8" />
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

// --- Compliance Section ---
function Compliance() {
    return (
        <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-orange-900/50 border border-orange-700 text-orange-300 text-sm font-medium mb-6">
                        <ShieldCheck className="w-4 h-4 mr-2" /> Compliance & Security
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Regulated Partners. Transparent Operations.</h2>
                    <p className="text-lg text-gray-400">
                        Every RocketFuel partnership is backed by compliance, security, and accountability. We collaborate exclusively with regulated entities that meet or exceed local and international financial standards.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { title: "AML, KYC & OFAC", desc: "Compliance integrated into every partner flow.", icon: FileCheck },
                        { title: "FBO Accounts", desc: "Custodial structures with regulated institutions.", icon: Building2 },
                        { title: "Blockchain Transparency", desc: "On-chain transaction validation.", icon: Link2 },
                        { title: "Continuous Monitoring", desc: "Partner safety and reliability checks.", icon: BarChart3 }
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

// --- Partner Models Section ---
function PartnerModels() {
    const models = [
        {
            title: "Technology Partners",
            desc: "Integrate RocketFuel APIs, SDKs, or payment rails into your platform.",
            icon: Code2
        },
        {
            title: "Payment Partners",
            desc: "Enable global crypto, stablecoin, and fiat payments for your merchants.",
            icon: Coins
        },
        {
            title: "Referral Partners",
            desc: "Earn commissions by introducing merchants and platforms to RocketFuel.",
            icon: Users
        },
        {
            title: "White-Label Partners",
            desc: "Launch your own branded version of RocketFuel's infrastructure.",
            icon: Network
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                        Flexible Programs for Every Partnership Type
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        RocketFuel offers several engagement models to align with your business structure and goals.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {models.map((model, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            className="flex gap-6 p-8 rounded-2xl bg-gray-50 hover:bg-orange-50/50 transition-all border border-transparent hover:border-orange-100"
                        >
                            <div className="flex-shrink-0">
                                <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600">
                                    <model.icon className="w-7 h-7" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">{model.title}</h3>
                                <p className="text-gray-600">{model.desc}</p>
                            </div>
                        </motion.div>
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
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Power the Future of Payments Together</h2>
                <p className="text-xl text-yellow-100 mb-10 max-w-2xl mx-auto">
                    RocketFuel's partner ecosystem is built for collaboration and scale. Join us to deliver next-generation payment solutions, expand your reach, and unlock new revenue opportunities worldwide.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link href="/contact">
                        <div className="btn-white w-full sm:w-auto text-orange-700">
                            Become a Partner
                        </div>
                    </Link>
                    <Link href="/contact">
                        <div className="btn-glass w-full sm:w-auto">
                            Contact Partnerships
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default function PartnersClient() {
    return (
        <main className="flex flex-col min-h-screen">
            <Hero />
            <PartnerEcosystem />
            <WhyPartner />
            <Compliance />
            <PartnerModels />
            <CTA />
        </main>
    );
}
