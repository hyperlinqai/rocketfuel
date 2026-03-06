'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    ArrowRight, ShieldCheck, Lock, CheckCircle2,
    Fingerprint, ScanFace, Globe, FileCheck,
    Smartphone, Key, UserCheck, Server, Eye, Search
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
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-yellow-100/40 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/3 z-0" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >
                        <motion.h1 variants={fadeInUp} className="hero-title max-w-3xl">
                            Privacy-First Age Verification Powered by{' '}
                            <span className="text-gradient-gold">
                                Zero-Knowledge Proofs.
                            </span>
                        </motion.h1>
                        <motion.p variants={fadeInUp} className="hero-description">
                            Verify user age and identity instantly without ever exposing personal data. ZeroProof brings compliance and privacy together through blockchain-based zero-knowledge verification.
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

                    {/* Hero Visual: Digital ID Badge */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative hidden lg:block perspective-1000"
                    >
                        <div className="relative w-full aspect-square max-w-md mx-auto flex items-center justify-center">

                            {/* Background Nodes */}
                            {[...Array(5)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-3 h-3 bg-orange-400 rounded-full opacity-50"
                                    style={{
                                        top: Math.random() * 100 + '%',
                                        left: Math.random() * 100 + '%',
                                    }}
                                    animate={{
                                        scale: [1, 1.5, 1],
                                        opacity: [0.2, 0.5, 0.2]
                                    }}
                                    transition={{
                                        duration: 3 + Math.random() * 2,
                                        repeat: Infinity,
                                        delay: i
                                    }}
                                />
                            ))}

                            {/* Digital ID Card */}
                            <motion.div
                                whileHover={{ rotateY: 5, rotateX: 5 }}
                                className="relative w-72 h-[420px] bg-white/10 backdrop-blur-xl border border-white/40 rounded-3xl shadow-2xl p-6 flex flex-col items-center justify-between z-10 overflow-hidden"
                            >
                                {/* Top Hologram Effect */}
                                <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-orange-500/10 to-transparent" />

                                <div className="mt-8 relative">
                                    <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-yellow-500 to-orange-500 p-1">
                                        <div className="w-full h-full bg-gray-900 rounded-full flex items-center justify-center">
                                            <ShieldCheck className="w-10 h-10 text-white" />
                                        </div>
                                    </div>
                                    <div className="absolute -bottom-2 -right-2 bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded-full border-2 border-white">
                                        VERIFIED
                                    </div>
                                </div>

                                <div className="text-center">
                                    <div className="text-white font-bold text-xl mb-1">ZeroProof ID</div>
                                    <div className="text-gray-300 text-sm font-mono">ID: 8X92-####-####</div>
                                </div>

                                {/* Private Attributes */}
                                <div className="w-full space-y-3">
                                    <div className="flex justify-between items-center text-sm p-3 bg-white/5 rounded-xl border border-white/10">
                                        <span className="text-gray-400">Age</span>
                                        <div className="flex items-center gap-2 text-green-400 font-mono font-bold">
                                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                            21+
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center text-sm p-3 bg-white/5 rounded-xl border border-white/10">
                                        <span className="text-gray-400">Identity</span>
                                        <div className="flex items-center gap-2 text-orange-300 font-mono">
                                            <Lock className="w-3 h-3" /> Encrypted
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-4 w-full pt-4 border-t border-white/10 flex justify-center">
                                    <Fingerprint className="w-8 h-8 text-white/30" />
                                </div>
                            </motion.div>
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
        { title: "Instant Verification", desc: "Confirm eligibility in seconds with zero friction.", icon: ZapIcon },
        { title: "Privacy by Design", desc: "No personal data is ever shared or exposed to merchants.", icon: Eye },
        { title: "Regulatory Compliance", desc: "Meets global AML, KYC, and age verification standards.", icon: FileCheck },
        { title: "User Control", desc: "Users retain complete ownership of their verified identity token.", icon: Key }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Secure, Compliant, and Privacy-Centric</h2>
                    <p className="text-lg text-gray-600">Age and identity verification are critical for compliance — but traditional methods expose sensitive data and increase friction. ZeroProof uses zero-knowledge proofs (ZKPs) to verify a user’s age or identity while keeping all personal information encrypted and off-chain.</p>
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
        { title: "Verify Once", desc: "The user completes a secure KYC process through a regulated partner.", icon: UserCheck },
        { title: "Tokenize Verification", desc: "ZeroProof issues a blockchain-based verification token confirming age and identity.", icon: Fingerprint },
        { title: "Reuse Anywhere", desc: "The user presents the token to instantly verify at any merchant.", icon: Smartphone }
    ];

    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Zero-Knowledge Verification in Three Steps</h2>
                    <p className="text-gray-600">The token contains no personally identifiable information (PII) and cannot be reverse-engineered.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-12 relative text-center">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-200 z-0" />

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
                                <div className="absolute -top-2 -right-2 bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm border-2 border-white">
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

// --- Compliance Section ---
function Compliance() {
    return (
        <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-900/50 border border-yellow-700 text-yellow-300 text-sm font-medium mb-6">
                            <ShieldCheck className="w-4 h-4 mr-2" /> Compliance Without Compromise
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Bridge Regulatory Gaps with Privacy</h2>
                        <p className="text-lg text-gray-400 mb-8">
                            By leveraging zero-knowledge cryptography and blockchain immutability, merchants can meet legal age verification requirements without ever handling sensitive customer data.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Verified once, reusable anywhere in ecosystem",
                                "Encrypted blockchain tokens issued upon success",
                                "Compatible with GDPR and CCPA frameworks",
                                "Auditable logs for compliance teams"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-300">
                                    <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-black/40 backdrop-blur-xl border border-gray-700 rounded-2xl p-8"
                    >
                        {/* Ledger Visual */}
                        <div className="flex items-center justify-between mb-6 border-b border-gray-700 pb-4">
                            <span className="text-sm font-mono text-gray-400">ZeroProof Ledger</span>
                            <div className="flex gap-2">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                <span className="text-xs text-green-500">Live Mainnet</span>
                            </div>
                        </div>
                        <div className="space-y-3 font-mono text-xs">
                            {[
                                { hash: "0x7f...3a21", type: "Age_Verify", status: "Success", time: "0s ago" },
                                { hash: "0x9c...b112", type: "ID_Proof", status: "Success", time: "2s ago" },
                                { hash: "0x1a...f449", type: "Age_Verify", status: "Success", time: "5s ago" },
                                { hash: "0x3d...9cc0", type: "Geo_Check", status: "Success", time: "8s ago" },
                            ].map((tx, i) => (
                                <div key={i} className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/5">
                                    <span className="text-orange-400">{tx.hash}</span>
                                    <span className="text-gray-300">{tx.type}</span>
                                    <span className="text-green-400">{tx.status}</span>
                                    <span className="text-gray-500">{tx.time}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

// --- Benefits Section ---
function Benefits() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="bg-[#1E1E1E] rounded-xl shadow-2xl overflow-hidden border border-gray-800">
                            <div className="flex items-center px-4 py-3 bg-[#2D2D2D] border-b border-gray-700">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                                    <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                                </div>
                                <div className="ml-4 text-xs text-gray-400 font-mono">zeroproof-sdk.js</div>
                            </div>
                            <div className="p-6 overflow-x-auto">
                                <pre className="text-sm font-mono leading-relaxed text-gray-300">
                                    <code>
                                        <span className="text-purple-400">const</span> verification = <span className="text-purple-400">await</span> ZeroProof.<span className="text-blue-400">verify</span>({'{'}
                                        {'\n'}  <span className="text-red-400">type</span>: <span className="text-green-400">'age_over_21'</span>,
                                        {'\n'}  <span className="text-red-400">user</span>: <span className="text-green-400">'current_session'</span>,
                                        {'\n'}  <span className="text-red-400">onSuccess</span>: (token) ={'>'} {'{'}
                                        {'\n'}    console.<span className="text-blue-400">log</span>(<span className="text-green-400">'Verified:'</span>, token);
                                        {'\n'}  {'}'}
                                        {'\n'}{'}'});
                                    </code>
                                </pre>
                            </div>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Reduce Risk and Streamline Onboarding</h2>
                        <p className="text-lg text-gray-600 mb-8">
                            ZeroProof helps merchants and partners meet compliance obligations efficiently while maintaining customer privacy and trust.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-6">
                            {[
                                { title: "Instant Compliance", desc: "Verify at checkout or registration." },
                                { title: "Reduced redundancy", desc: "No repeated KYC across platforms." },
                                { title: "Simple Integration", desc: "Drop-in SDK or API access." },
                                { title: "Double Utility", desc: "Age & Identity support." }
                            ].map((item, i) => (
                                <div key={i} className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                                    <p className="text-sm text-gray-600">{item.desc}</p>
                                </div>
                            ))}
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
        <section className="py-24 bg-gradient-to-br from-yellow-500 to-orange-600 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3" />
            <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                <div className="flex justify-center mb-8">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30">
                        <Lock className="w-10 h-10 text-white" />
                    </div>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Privacy and Compliance, Evolved</h2>
                <p className="text-xl text-yellow-50 mb-10 max-w-2xl mx-auto">
                    ZeroProof is designed for the next generation of secure digital transactions. Protect user privacy, ensure merchant compliance, and eliminate data storage risks.
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

// Missing icon import shim
import { Zap as ZapIcon } from 'lucide-react';

export default function ZeroProofPage() {
    return (
        <main className="min-h-screen">
            <Hero />
            <WhyChoose />
            <HowItWorks />
            <Compliance />
            <Benefits />
            <CTA />
        </main>
    );
}
