'use client';

import { motion } from 'framer-motion';
import { BookOpen, Hammer, TrendingUp } from 'lucide-react';

const values = [
    {
        icon: BookOpen,
        title: "Learn",
        description: "Master the fundamentals of crypto payments, stablecoins, and blockchain technology.",
        color: "bg-orange-50 text-orange-600"
    },
    {
        icon: Hammer,
        title: "Build",
        description: "Implement scalable payment flows with developer-friendly APIs and SDKs.",
        color: "bg-amber-50 text-amber-600"
    },
    {
        icon: TrendingUp,
        title: "Grow",
        description: "Scale your business globally with instant settlement and lower fees.",
        color: "bg-yellow-50 text-yellow-600"
    }
];

export function GuidesLearningValues() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-primary-text mb-6"
                    >
                        Simplify the Complex World of Digital Payments
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-secondary-text max-w-3xl mx-auto"
                    >
                        RocketFuel’s guides help merchants, partners, and developers understand how blockchain and digital assets are reshaping the payment landscape. Each guide breaks down a real-world topic into actionable steps for your business.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {values.map((val, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex flex-col items-center text-center p-8 rounded-2xl bg-secondary-bg border border-gray-100"
                        >
                            <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${val.color}`}>
                                <val.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{val.title}</h3>
                            <p className="text-gray-600">{val.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
