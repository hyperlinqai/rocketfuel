'use client';

import { motion } from 'framer-motion';
import { ShoppingBag, Gamepad2, Coins } from 'lucide-react';

const caseStudies = [
    {
        category: "Global Marketplace",
        icon: ShoppingBag,
        title: "Expanding to New Geographies",
        description: "Enabled crypto and stablecoin checkout, reducing failed transactions and expanding to new geographies.",
        stats: [
            { label: "Faster Settlement", value: "40%" },
            { label: "Conversion Lift", value: "15%" },
        ],
        color: "bg-orange-50 text-orange-600",
    },
    {
        category: "Gaming Platform",
        icon: Gamepad2,
        title: "Instant Player Payouts",
        description: "Integrated RocketFuel payouts to pay global players and partners instantly, improving retention.",
        stats: [
            { label: "Payout Friction", value: "-90%" },
            { label: "Retention Rate", value: "+25%" },
        ],
        color: "bg-amber-50 text-amber-600",
    },
    {
        category: "E-commerce Merchant",
        icon: Coins,
        title: "Reducing Cart Abandonment",
        description: "Implemented one-click crypto checkout to reduce cart abandonment and increase international sales.",
        stats: [
            { label: "Intl Sales", value: "+30%" },
            { label: "Cart Abandonment", value: "-12%" },
        ],
        color: "bg-yellow-50 text-yellow-600",
    },
];

export function CaseStudiesFeatured() {
    return (
        <section className="py-24 bg-secondary-bg">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-primary-text mb-6">
                        Our Technology in Action
                    </h2>
                    <p className="text-lg text-secondary-text max-w-2xl mx-auto">
                        See how forward-thinking companies are leveraging RocketFuel to transform their payment operations.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {caseStudies.map((study, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow border border-gray-100 flex flex-col h-full"
                        >
                            <div className={`w-14 h-14 rounded-xl ${study.color} flex items-center justify-center mb-6`}>
                                <study.icon className="w-7 h-7" />
                            </div>

                            <div className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2">
                                {study.category}
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                {study.title}
                            </h3>

                            <p className="text-gray-600 mb-8 flex-1">
                                {study.description}
                            </p>

                            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-100">
                                {study.stats.map((stat, i) => (
                                    <div key={i}>
                                        <div className="text-2xl font-bold text-primary-text">{stat.value}</div>
                                        <div className="text-sm text-gray-500">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
