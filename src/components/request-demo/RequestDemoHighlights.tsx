'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, ArrowLeftRight, Zap, ShieldCheck } from 'lucide-react';

const highlights = [
    {
        title: "Multi-Currency Support",
        desc: "Accept payments in crypto, stablecoins, or fiat seamlessly.",
        icon: ArrowLeftRight
    },
    {
        title: "Instant Settlement",
        desc: "Settle instantly to your preferred currency or account.",
        icon: Zap
    },
    {
        title: "Banking Compliance",
        desc: "Stay compliant with regulated partners and full AML/KYC.",
        icon: ShieldCheck
    }
];

export function RequestDemoHighlights() {
    return (
        <section className="py-24 bg-secondary-bg">
            <div className="max-w-7xl mx-auto px-4">

                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary-text mb-6">
                        See How RocketFuel Simplifies Payments
                    </h2>
                    <p className="text-lg text-secondary-text">
                        RocketFuel delivers borderless payments with blockchain precision and banking-level compliance — helping you grow revenue and reduce friction.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Visual: Workflow Diagram */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative bg-white rounded-3xl shadow-xl p-8 border border-gray-100"
                    >
                        <div className="flex items-center justify-between relative z-10">
                            {/* Customer Node */}
                            <div className="flex flex-col items-center">
                                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-3">
                                    <span className="text-2xl">👤</span>
                                </div>
                                <span className="text-sm font-bold text-gray-900">Customer</span>
                                <span className="text-xs text-gray-500">Pays in Crypto</span>
                            </div>

                            {/* RocketFuel Node */}
                            <div className="flex flex-col items-center relative">
                                {/* Animated Connector Line Left */}
                                <div className="absolute top-8 right-full w-full h-0.5 bg-gray-200 -mr-4 -z-10">
                                    <div className="absolute inset-0 bg-orange-500 w-1/2 animate-pulse" />
                                </div>
                                <div className="w-20 h-20 bg-gray-900 rounded-2xl flex items-center justify-center shadow-lg transform rotate-3 mb-3">
                                    <span className="text-2xl font-bold text-white">RF</span>
                                </div>
                                <span className="text-sm font-bold text-gray-900">RocketFuel</span>
                                <span className="text-xs text-orange-600 font-medium">Conversion</span>
                                {/* Animated Connector Line Right */}
                                <div className="absolute top-8 left-full w-full h-0.5 bg-gray-200 -ml-4 -z-10">
                                    <div className="absolute inset-0 bg-green-500 w-full animate-pulse delay-75" />
                                </div>
                            </div>

                            {/* Merchant Node */}
                            <div className="flex flex-col items-center">
                                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-3">
                                    <span className="text-2xl">🏦</span>
                                </div>
                                <span className="text-sm font-bold text-gray-900">Merchant</span>
                                <span className="text-xs text-gray-500">Gets Fiat</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Highlights List */}
                    <div className="space-y-8">
                        {highlights.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex gap-4"
                            >
                                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                                    <p className="text-gray-600">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
