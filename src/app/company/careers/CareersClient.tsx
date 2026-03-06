'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    ArrowRight, Users, Globe, Zap,
    TrendingUp, Heart, Target, Lightbulb,
    CheckCircle2, Rocket, Code2, ShieldCheck,
    CreditCard, FileText, Award, Sparkles
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
                        <Rocket className="w-4 h-4 mr-2" />
                        Join Our Team
                    </motion.div>

                    <motion.h1
                        variants={fadeInUp}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight"
                    >
                        Build the Future of{' '}
                        <span className="bg-gradient-to-r from-yellow-500 to-orange-600 bg-clip-text text-transparent">
                            Payments
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={fadeInUp}
                        className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10"
                    >
                        RocketFuel is redefining how the world moves money — faster, safer, and without borders. Join our global team of innovators powering the next generation of financial technology.
                    </motion.p>

                    <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="#open-roles">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn-primary px-8 py-4 flex items-center justify-center gap-2 cursor-pointer bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 border-transparent shadow-lg shadow-orange-500/20"
                            >
                                View Open Roles <ArrowRight className="w-5 h-5" />
                            </motion.div>
                        </Link>
                        <Link href="/contact">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn-secondary px-8 py-4 cursor-pointer"
                            >
                                Contact HR
                            </motion.div>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

// --- Who We Are Section ---
function WhoWeAre() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                        Driven by Innovation. Built for Growth.
                    </h2>
                </div>
                <div className="prose prose-lg max-w-none">
                    <div className="space-y-6 text-gray-700 leading-relaxed">
                        <p className="text-xl text-gray-900 font-medium">
                            RocketFuel is a global payments company transforming how businesses and customers pay and get paid. Founded in 2020, we combine the speed of blockchain with the security of regulated financial infrastructure to deliver seamless crypto, stablecoin, and fiat payments.
                        </p>
                        <p>
                            Our team is made up of technologists, operators, and dreamers who believe in creating a faster, more transparent financial future.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

// --- Why Work Section ---
function WhyWork() {
    const benefits = [
        { icon: TrendingUp, title: "Growth Opportunities", desc: "Develop your skills in an industry that's changing fast" },
        { icon: Globe, title: "Remote Flexibility", desc: "Work from anywhere, collaborate globally" },
        { icon: Target, title: "Impactful Work", desc: "Build technology used by real businesses every day" },
        { icon: Heart, title: "Inclusive Culture", desc: "Join a team that values innovation and trust" }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                        Where Startups Meet Stability
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        We're a high-growth fintech startup that values autonomy, accountability, and creative problem-solving. Every team member has a direct impact on the company's success and the evolution of global commerce.
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

// --- What We Build Section ---
function WhatWeBuild() {
    const products = [
        { icon: CreditCard, name: "Crypto Merchant Processing" },
        { icon: Globe, name: "Global Payouts (Stablecoin & Fiat)" },
        { icon: FileText, name: "Crypto Invoicing" },
        { icon: ShieldCheck, name: "ZeroProof Age Verification" },
        { icon: Award, name: "R Points – Blockchain Loyalty" }
    ];

    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                        Products That Power the Future
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        At RocketFuel, you'll work on the core infrastructure driving global commerce — from one-click crypto checkout to instant global payouts, invoicing, loyalty, and identity verification systems.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all border border-gray-100 flex items-center gap-4"
                        >
                            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 flex-shrink-0">
                                <product.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// --- Culture Section ---
function Culture() {
    const values = [
        { icon: ShieldCheck, title: "Integrity First", desc: "Trust and transparency in every decision" },
        { icon: Globe, title: "Think Global", desc: "Build for scale, diversity, and accessibility" },
        { icon: Lightbulb, title: "Stay Curious", desc: "Innovate through exploration and iteration" },
        { icon: Target, title: "Own It", desc: "Every team member drives impact" }
    ];

    return (
        <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Fast. Focused. Fearless.</h2>
                    <p className="text-lg text-gray-400">
                        We move quickly, adapt constantly, and celebrate every milestone — large or small. We believe in taking ownership, working collaboratively, and building products that solve real-world problems.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((value, i) => (
                        <div key={i} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-8 rounded-2xl">
                            <value.icon className="w-10 h-10 text-orange-400 mb-6" />
                            <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                            <p className="text-gray-400 text-sm">{value.desc}</p>
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
        <section id="open-roles" className="py-24 bg-gradient-to-br from-yellow-500 to-orange-600 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3" />
            <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Your Next Chapter Starts Here</h2>
                <p className="text-xl text-yellow-100 mb-10 max-w-2xl mx-auto">
                    We're hiring across engineering, compliance, operations, partnerships, and sales. If you're passionate about fintech, blockchain, and innovation — there's a place for you at RocketFuel.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link href="/contact">
                        <div className="btn-white w-full sm:w-auto text-orange-700">
                            View Open Roles
                        </div>
                    </Link>
                    <Link href="/contact">
                        <div className="btn-glass w-full sm:w-auto">
                            Submit Application
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default function CareersClient() {
    return (
        <main className="flex flex-col min-h-screen">
            <Hero />
            <WhoWeAre />
            <WhyWork />
            <WhatWeBuild />
            <Culture />
            <CTA />
        </main>
    );
}
