'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Video, BarChart2, Globe } from 'lucide-react';
import Link from 'next/link';

export function TalkToSalesHero() {
    const scrollToForm = () => {
        const formSection = document.getElementById('sales-form');
        if (formSection) {
            formSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative pt-32 pb-20 overflow-hidden bg-white">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-orange-100/30 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/3 -z-10" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-amber-100/30 rounded-full blur-[100px] translate-y-1/3 translate-x-1/3 -z-10" />

            <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
                {/* Left Column: Text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-sm font-medium mb-6">
                        <Video className="w-4 h-4" />
                        <span>Connect with Experts</span>
                    </div>

                    <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-primary-text mb-6 leading-tight">
                        Let’s Power Your <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">
                            Payments Together
                        </span>
                    </h1>

                    <p className="text-lg text-secondary-text mb-8 max-w-lg">
                        Connect with RocketFuel’s sales team to explore how crypto, stablecoin, and fiat payment solutions can help your business grow globally — faster, safer, and smarter.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button
                            onClick={scrollToForm}
                            className="px-6 py-3 bg-orange-600 text-white rounded-lg font-bold hover:bg-orange-500 transition-colors flex items-center justify-center gap-2"
                        >
                            Talk to Sales
                            <ArrowRight className="w-4 h-4" />
                        </button>
                        <Link
                            href="/request-demo"
                            className="px-6 py-3 rounded-lg border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 hover:border-gray-300 transition-all text-center"
                        >
                            Request Demo
                        </Link>
                    </div>
                </motion.div>

                {/* Right Column: Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative flex justify-center"
                >
                    {/* Abstract Video Call Concept */}
                    <div className="relative w-full max-w-md aspect-square">
                        <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-amber-500/20 rounded-full blur-3xl animate-pulse" />

                        <div className="relative z-10 bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden h-full flex flex-col">
                            {/* Header UI */}
                            <div className="h-12 border-b border-gray-100 flex items-center px-6 justify-between">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-400" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                    <div className="w-3 h-3 rounded-full bg-green-400" />
                                </div>
                                <div className="px-3 py-1 bg-gray-100 rounded-full text-xs font-semibold text-gray-500">Sales Call</div>
                            </div>

                            {/* Call Content */}
                            <div className="flex-1 p-6 flex flex-col items-center justify-center text-center">
                                <div className="w-24 h-24 bg-gradient-to-br from-orange-100 to-amber-100 rounded-full flex items-center justify-center mb-6 relative">
                                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-sm">
                                        <span className="text-3xl">👨‍💼</span>
                                    </div>
                                    <div className="absolute bottom-0 right-0 w-8 h-8 bg-green-500 border-4 border-white rounded-full" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">RocketFuel Expert</h3>
                                <p className="text-sm text-gray-500 mb-6">Ready to discuss your global payment strategy.</p>

                                <div className="grid grid-cols-2 gap-4 w-full">
                                    <div className="p-3 bg-gray-50 rounded-xl flex items-center gap-3">
                                        <BarChart2 className="w-5 h-5 text-blue-500" />
                                        <span className="text-sm font-medium">Analytics</span>
                                    </div>
                                    <div className="p-3 bg-gray-50 rounded-xl flex items-center gap-3">
                                        <Globe className="w-5 h-5 text-cyan-500" />
                                        <span className="text-sm font-medium">Global</span>
                                    </div>
                                </div>
                            </div>

                            {/* Controls UI */}
                            <div className="h-16 bg-gray-50 border-t border-gray-100 flex items-center justify-center gap-6">
                                <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-500"><Video className="w-5 h-5" /></div>
                                <div className="w-12 h-12 rounded-full bg-red-500 shadow-lg shadow-red-200 flex items-center justify-center text-white"><Video className="w-6 h-6 rotate-45" /></div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
