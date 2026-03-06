'use client';

import { motion } from 'framer-motion';
import { ArrowRight, FileText, Globe, ShieldCheck, Coins, Layers } from 'lucide-react';
import Link from 'next/link';

const guides = [
    {
        title: "Beginner’s Guide to Stablecoin Payments",
        description: "Learn how stablecoins are solving volatility and settlement issues in global commerce.",
        icon: Coins,
        color: "bg-orange-100 text-orange-600",
        href: "/resources/guides/stablecoins-101"
    },
    {
        title: "The Merchant’s Playbook for Accepting Crypto",
        description: "Everything you need to know to integrate crypto checkout, manage risk, and convert funds automatically.",
        icon: FileText,
        color: "bg-amber-100 text-amber-600",
        href: "/resources/guides/merchant-playbook"
    },
    {
        title: "Understanding Blockchain Compliance",
        description: "A practical overview of AML, KYC, and on-chain monitoring in digital payments.",
        icon: ShieldCheck,
        color: "bg-blue-100 text-blue-600",
        href: "/resources/guides/compliance-overview"
    },
    {
        title: "How to Scale Global Payouts",
        description: "A breakdown of how fintechs and gig platforms use stablecoin rails to move money faster.",
        icon: Globe,
        color: "bg-green-100 text-green-600",
        href: "/resources/guides/global-payouts"
    },
    {
        title: "Building a Future-Ready Payment Stack",
        description: "Learn how API-first architecture and modular integrations help your business scale with RocketFuel.",
        icon: Layers,
        color: "bg-purple-100 text-purple-600",
        href: "/resources/guides/payment-stack"
    }
];

export function GuidesFeatured() {
    return (
        <section className="py-24 bg-secondary-bg">
            <div className="max-w-7xl mx-auto px-4">
                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary-text mb-4">
                        Popular Topics for Businesses and Developers
                    </h2>
                    <p className="text-lg text-secondary-text">
                        Hand-picked resources to help you get started.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {guides.map((guide, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link href="#" className="group block h-full bg-white rounded-2xl p-8 border border-gray-200 hover:border-orange-200 hover:shadow-xl transition-all flex flex-col">
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${guide.color}`}>
                                    <guide.icon className="w-6 h-6" />
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                                    {guide.title}
                                </h3>

                                <p className="text-gray-600 mb-6 flex-1">
                                    {guide.description}
                                </p>

                                <div className="flex items-center text-sm font-semibold text-orange-600 gap-2 mt-auto">
                                    Read Guide <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
