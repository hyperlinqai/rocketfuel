'use client';

import { motion } from 'framer-motion';
import { Wallet, Globe2, TrendingDown, Code } from 'lucide-react';

const benefits = [
    {
        title: "Crypto Settlement",
        desc: "Accept crypto and stablecoins with automatic fiat settlement.",
        icon: Wallet
    },
    {
        title: "Global Payouts",
        desc: "Simplify global payouts for partners and affiliates instantly.",
        icon: Globe2
    },
    {
        title: "Lower Fees",
        desc: "Reduce transaction fees and eliminate expensive chargebacks.",
        icon: TrendingDown
    },
    {
        title: "Flexible Integration",
        desc: "Integrate via hosted widget, redirect, or comprehensive API.",
        icon: Code
    }
];

export function TalkToSalesBenefits() {
    return (
        <section className="py-24 bg-secondary-bg">
            <div className="max-w-7xl mx-auto px-4">

                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary-text mb-6">
                        Discover What RocketFuel Can Do for You
                    </h2>
                    <p className="text-lg text-secondary-text">
                        RocketFuel’s global payment platform helps merchants, platforms, and partners accept and send payments across borders instantly — in crypto, stablecoins, or fiat.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column: Benefits List */}
                    <div className="space-y-8 order-2 lg:order-1">
                        {benefits.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex gap-4 group"
                            >
                                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-orange-50 group-hover:bg-orange-100 transition-colors flex items-center justify-center text-orange-600">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                                    <p className="text-gray-600">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right Column: Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 aspect-square lg:aspect-auto order-1 lg:order-2 h-full min-h-[400px]"
                    >
                        {/* Split Logic Visual */}
                        <div className="absolute inset-0 flex">
                            <div className="w-1/2 bg-gray-50 flex items-center justify-center border-r border-gray-100">
                                <div className="text-center p-6">
                                    <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-4 text-3xl">🏪</div>
                                    <div className="font-bold text-gray-900">Merchants</div>
                                    <div className="text-xs text-gray-500 mt-1">Local Business</div>
                                </div>
                            </div>
                            <div className="w-1/2 bg-orange-50/30 flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(249,115,22,0.05)_50%,transparent_75%)] bg-[length:20px_20px]" />
                                <div className="text-center p-6 relative z-10">
                                    <div className="w-16 h-16 bg-orange-600 rounded-2xl shadow-lg shadow-orange-200 flex items-center justify-center mx-auto mb-4 text-3xl text-white">✈️</div>
                                    <div className="font-bold text-gray-900">Global Reach</div>
                                    <div className="text-xs text-gray-500 mt-1">Borderless Rails</div>
                                </div>
                            </div>
                        </div>

                        {/* Connection Badge */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg z-10">
                            <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-white text-xs font-bold">RF</div>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
