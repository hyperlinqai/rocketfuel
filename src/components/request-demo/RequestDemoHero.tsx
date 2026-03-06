'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Bitcoin, CreditCard, DollarSign } from 'lucide-react';
import Link from 'next/link';

export function RequestDemoHero() {
    const scrollToForm = () => {
        const formSection = document.getElementById('demo-form');
        if (formSection) {
            formSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative pt-32 pb-20 overflow-hidden bg-white">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-100/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 -z-10" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-amber-100/30 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 -z-10" />

            <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
                {/* Left Column: Text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-sm font-medium mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                        </span>
                        Live Demo Available
                    </div>

                    <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-primary-text mb-6 leading-tight">
                        Experience the <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">
                            Future of Payments
                        </span>
                    </h1>

                    <p className="text-lg text-secondary-text mb-8 max-w-lg">
                        Discover how RocketFuel makes it easy for merchants to accept crypto, stablecoin, and fiat payments with instant settlement, lower fees, and global coverage.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button
                            onClick={scrollToForm}
                            className="btn-primary flex items-center justify-center gap-2"
                        >
                            Request Demo
                            <ArrowRight className="w-4 h-4" />
                        </button>
                        <Link
                            href="/contact"
                            className="px-6 py-3 rounded-lg border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 hover:border-gray-300 transition-all text-center"
                        >
                            Talk to Sales
                        </Link>
                    </div>
                </motion.div>

                {/* Right Column: Visual */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    {/* Split Visual Container */}
                    <div className="relative">
                        {/* Dashboard Card */}
                        <div className="absolute top-0 right-0 w-3/4 z-10 transform translate-x-4 -translate-y-4">
                            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 transition-transform hover:-translate-y-1 duration-300">
                                <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100">
                                    <div className="text-sm font-semibold text-gray-900">Settlements</div>
                                    <div className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">Instant</div>
                                </div>
                                <div className="space-y-3">
                                    {[1, 2].map((i) => (
                                        <div key={i} className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                                                    <DollarSign className="w-4 h-4 text-gray-500" />
                                                </div>
                                                <div>
                                                    <div className="text-xs font-medium text-gray-900">Merchant Payout</div>
                                                    <div className="text-[10px] text-gray-500">Today, 2:30 PM</div>
                                                </div>
                                            </div>
                                            <div className="text-sm font-bold text-gray-900">+$12,450.00</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Payment Options Card */}
                        <div className="relative bg-gray-900 text-white p-8 rounded-3xl shadow-2xl overflow-hidden mt-12 w-5/6">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                            <h3 className="text-lg font-semibold mb-6">Accept Anything</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700/50 hover:bg-gray-800 transition-colors cursor-default">
                                    <Bitcoin className="w-6 h-6 text-orange-500 mb-2" />
                                    <div className="text-sm font-medium">Bitcoin</div>
                                </div>
                                <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700/50 hover:bg-gray-800 transition-colors cursor-default">
                                    <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-xs font-bold mb-2">$</div>
                                    <div className="text-sm font-medium">USDC</div>
                                </div>
                                <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700/50 hover:bg-gray-800 transition-colors cursor-default">
                                    <CreditCard className="w-6 h-6 text-purple-400 mb-2" />
                                    <div className="text-sm font-medium">Cards</div>
                                </div>
                                <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700/50 hover:bg-gray-800 transition-colors cursor-default">
                                    <DollarSign className="w-6 h-6 text-green-400 mb-2" />
                                    <div className="text-sm font-medium">Fiat</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
