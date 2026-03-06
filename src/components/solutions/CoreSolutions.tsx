'use client';

import { motion } from 'framer-motion';
import { CreditCard, Globe, FileText, Gift, ShieldCheck, Coins, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const solutions = [
    {
        title: "Crypto Merchant Processing",
        description: "Accept crypto and stablecoin payments with automatic conversion and settlement.",
        icon: CreditCard,
        // Changed to Orange
        color: "text-orange-600",
        bg: "bg-orange-50"
    },
    {
        title: "Global Payouts",
        description: "Instantly pay affiliates, contractors, and vendors in crypto, stablecoins, or local currencies.",
        icon: Globe,
        color: "text-green-600",
        bg: "bg-green-50"
    },
    {
        title: "Crypto Invoicing",
        description: "Send and receive invoices with stablecoin or fiat settlement in one click.",
        icon: FileText,
        color: "text-purple-600",
        bg: "bg-purple-50"
    },
    {
        title: "Gift Cards",
        description: "Convert card payments into blockchain-backed gift cards for instant redemption.",
        icon: Gift,
        color: "text-pink-600",
        bg: "bg-pink-50"
    },
    {
        title: "ZeroProof Age Verification",
        description: "Verify user age and identity with zero-knowledge proofs — privacy without compromise.",
        icon: ShieldCheck,
        // Already orange, keeping it
        color: "text-orange-600",
        bg: "bg-orange-50"
    },
    {
        title: "R-Points Loyalty",
        description: "A blockchain loyalty network that rewards customers and drives repeat business.",
        icon: Coins,
        // Changed to Amber/Yellow (Gold-ish)
        color: "text-amber-600",
        bg: "bg-amber-50"
    }
];

export function CoreSolutions() {
    return (
        <section className="py-24 bg-secondary-bg relative overflow-hidden">
            {/* Decorative Blobs - Changed to Orange/Amber */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 -z-0 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 -z-0 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
                    <div className="text-left">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            Powering the Next Generation of Global Payments
                        </h2>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            RocketFuel combines advanced blockchain technology with real-world financial infrastructure to deliver the most complete crypto commerce stack available.
                        </p>
                    </div>
                    <div className="relative h-[400px] hidden lg:flex items-center justify-center">
                        {/* Abstract Representation of Commerce Stack */}
                        <div className="relative w-80 h-80">
                            <div className="absolute inset-0 border-2 border-dashed border-gray-300 rounded-full animate-spin-slow" style={{ animationDuration: '30s' }}></div>
                            <div className="absolute inset-4 border border-gray-200 rounded-full animate-reverse-spin" style={{ animationDuration: '25s' }}></div>

                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-32 h-32 bg-white rounded-2xl shadow-xl flex items-center justify-center z-20 border border-gray-100">
                                    <Image src="/images/logo.png" width={100} height={30} alt="RocketFuel" className="h-8 w-auto opacity-80" />
                                </div>
                            </div>

                            {/* Orbiting Icons */}
                            {solutions.map((sol, i) => {
                                const angle = (i / solutions.length) * 2 * Math.PI;
                                const radius = 140; // distance from center
                                const x = Math.cos(angle) * radius;
                                const y = Math.sin(angle) * radius;
                                return (
                                    <div
                                        key={i}
                                        className="absolute w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center z-20 top-1/2 left-1/2 transition-transform hover:scale-125 hover:z-30 cursor-pointer"
                                        style={{
                                            marginTop: -24, marginLeft: -24,
                                            transform: `translate(${x}px, ${y}px)`
                                        }}
                                        title={sol.title}
                                    >
                                        <sol.icon className={`w-5 h-5 ${sol.color}`} />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {solutions.map((solution, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group"
                        >
                            <div className={`w-14 h-14 ${solution.bg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform`}>
                                <solution.icon className={`w-7 h-7 ${solution.color}`} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                            <p className="text-gray-600 leading-relaxed mb-4">{solution.description}</p>
                            {/* Changed to orange-600 */}
                            <div className="flex items-center text-sm font-semibold text-orange-600 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0">
                                Learn more <ArrowRight className="w-4 h-4 ml-1" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
