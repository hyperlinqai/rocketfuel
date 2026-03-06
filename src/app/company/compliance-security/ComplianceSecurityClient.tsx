'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    ShieldCheck, Lock, FileCheck, Eye,
    Building2, BarChart3, CheckCircle2, Globe,
    AlertTriangle, UserCheck, Database, Key,
    Link2, Shield, FileText, Users
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
                        <ShieldCheck className="w-4 h-4 mr-2" />
                        Compliance & Security
                    </motion.div>

                    <motion.h1
                        variants={fadeInUp}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight"
                    >
                        Compliance You Can Trust.{' '}
                        <span className="bg-gradient-to-r from-yellow-500 to-orange-600 bg-clip-text text-transparent">
                            Security You Can Rely On.
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={fadeInUp}
                        className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto"
                    >
                        RocketFuel's global payment infrastructure is built on regulatory compliance, secure custody, and blockchain transparency — protecting merchants, partners, and customers at every step.
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
}

// --- Regulatory Foundations Section ---
function RegulatoryFoundations() {
    const highlights = [
        { icon: Building2, title: "MSB Framework", desc: "Operates under regulated Money Service Business frameworks" },
        { icon: FileCheck, title: "FBO Accounts", desc: "For Benefit Of account structures through licensed partners" },
        { icon: CheckCircle2, title: "AML, KYC, OFAC", desc: "Compliant with global AML, KYC, and OFAC guidelines" },
        { icon: Globe, title: "Global Compliance", desc: "Adheres to local and international financial regulations" }
    ];

    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                        Licensed Partners. Regulated Operations. Global Reach.
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        RocketFuel operates through a network of regulated financial institutions, exchanges, and custodial partners to ensure every transaction meets the highest global compliance standards.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {highlights.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all border border-gray-100"
                        >
                            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 mb-4">
                                <item.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                            <p className="text-sm text-gray-600">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// --- Blockchain Transparency Section ---
function BlockchainTransparency() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                            Every Transaction, Verifiable on the Blockchain
                        </h2>
                        <p className="text-lg text-gray-600 mb-8">
                            RocketFuel leverages blockchain technology for complete transparency and traceability across payments, payouts, and settlements. This ensures accountability while protecting user privacy.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Immutable on-chain transaction records",
                                "Auditable settlement trails for every transfer",
                                "Real-time monitoring for transaction integrity",
                                "Optional ZeroProof verification for added user protection"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-700">
                                    <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Blockchain Visual */}
                    <div className="relative">
                        <div className="bg-gray-900 rounded-2xl shadow-2xl p-6 text-white border border-gray-800">
                            <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-800">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                </div>
                                <div className="text-xs text-gray-400">Blockchain Ledger</div>
                            </div>

                            <div className="space-y-3">
                                {[
                                    { hash: "0x8f3a2b...", status: "Confirmed", time: "2s ago" },
                                    { hash: "0x7e2c1a...", status: "Confirmed", time: "5s ago" },
                                    { hash: "0x6d1b9f...", status: "Confirmed", time: "8s ago" },
                                    { hash: "0x5c0a8e...", status: "Confirmed", time: "12s ago" }
                                ].map((tx, i) => (
                                    <div key={i} className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg border border-white/5">
                                        <div className="flex items-center gap-3">
                                            <Link2 className="w-4 h-4 text-orange-400" />
                                            <span className="font-mono text-sm">{tx.hash}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-xs text-green-400">{tx.status}</span>
                                            <span className="text-xs text-gray-500">{tx.time}</span>
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

// --- Security Infrastructure Section ---
function SecurityInfrastructure() {
    const features = [
        { icon: Lock, title: "End-to-End Encryption", desc: "Data encryption for all transactions" },
        { icon: Key, title: "Multi-Signature Wallets", desc: "Secure custody and wallet management" },
        { icon: Eye, title: "Fraud Prevention", desc: "Continuous monitoring for suspicious activity" },
        { icon: Shield, title: "API Security", desc: "Encrypted authentication and key management" }
    ];

    return (
        <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Enterprise-Grade Security for Every Payment</h2>
                    <p className="text-lg text-gray-400">
                        Security is embedded at every level of RocketFuel's infrastructure — from encryption to wallet custody to fraud detection.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, i) => (
                        <div key={i} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-8 rounded-2xl">
                            <feature.icon className="w-10 h-10 text-orange-400 mb-6" />
                            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                            <p className="text-gray-400 text-sm">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// --- Risk & Compliance Section ---
function RiskCompliance() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                        Protecting Merchants and Partners from Risk
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        RocketFuel's compliance framework proactively identifies, manages, and mitigates risk for all payment activities.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {[
                        { icon: AlertTriangle, title: "AML & KYT Screening", desc: "Automated AML and Know Your Transaction screening" },
                        { icon: Globe, title: "OFAC Monitoring", desc: "Continuous OFAC and sanctions list monitoring" },
                        { icon: UserCheck, title: "KYB/KYC Onboarding", desc: "Comprehensive onboarding for merchants and partners" },
                        { icon: FileText, title: "Third-Party Audits", desc: "Regular security assessments and audits" }
                    ].map((practice, i) => (
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
                                    <practice.icon className="w-6 h-6" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{practice.title}</h3>
                                <p className="text-gray-600">{practice.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// --- Data Privacy Section ---
function DataPrivacy() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Privacy Without Compromise</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        RocketFuel maintains strict data privacy and protection standards, ensuring customer and merchant information remains secure and never shared without authorization.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { icon: ShieldCheck, title: "GDPR & CCPA", desc: "Aligned data protection standards" },
                        { icon: Users, title: "Zero Data Resale", desc: "No sharing with third parties" },
                        { icon: Key, title: "User Control", desc: "User-controlled access and permissions" },
                        { icon: Database, title: "Data Integrity", desc: "Blockchain-backed transparency" }
                    ].map((commitment, i) => (
                        <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
                            <div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center text-white mb-4 mx-auto shadow-lg shadow-orange-500/20">
                                <commitment.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">{commitment.title}</h3>
                            <p className="text-sm text-gray-600">{commitment.desc}</p>
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
                <h2 className="text-4xl md:text-5xl font-bold mb-6">The Future of Payments Is Secure and Compliant</h2>
                <p className="text-xl text-yellow-100 mb-10 max-w-2xl mx-auto">
                    RocketFuel combines traditional regulatory rigor with blockchain innovation to create a secure, transparent, and compliant payment ecosystem for the digital age.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link href="/contact">
                        <div className="btn-white w-full sm:w-auto text-orange-700">
                            Contact Compliance
                        </div>
                    </Link>
                    <Link href="/company/about">
                        <div className="btn-glass w-full sm:w-auto">
                            Learn More
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default function ComplianceSecurityClient() {
    return (
        <main className="flex flex-col min-h-screen">
            <Hero />
            <RegulatoryFoundations />
            <BlockchainTransparency />
            <SecurityInfrastructure />
            <RiskCompliance />
            <DataPrivacy />
            <CTA />
        </main>
    );
}
