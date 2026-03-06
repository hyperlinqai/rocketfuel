'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export function ContactForm() {
    return (
        <section className="py-24 bg-secondary-bg overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">

                {/* Left Column: Form */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-primary-text mb-6">
                        See RocketFuel in Action
                    </h2>
                    <p className="text-lg text-secondary-text mb-10">
                        Experience how easy it is to accept crypto, stablecoin, and fiat payments — all from one secure, compliant platform.
                    </p>

                    <form className="space-y-6 bg-white p-8 rounded-2xl border border-gray-200 shadow-sm" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Name</label>
                                <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all" placeholder="John Doe" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Company</label>
                                <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all" placeholder="Acme Inc." />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Email</label>
                            <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all" placeholder="john@company.com" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Country</label>
                            <select defaultValue="" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all bg-white">
                                <option value="" disabled>Select your country</option>
                                <option value="US">United States</option>
                                <option value="GB">United Kingdom</option>
                                <option value="EU">Europe</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Message (Optional)</label>
                            <textarea className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all h-32 resize-none" placeholder="Tell us about your needs..." />
                        </div>

                        <button className="w-full px-8 py-4 bg-orange-600 text-white rounded-xl font-bold hover:bg-orange-500 transition-colors flex items-center justify-center gap-2 group">
                            Request Demo
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>
                </motion.div>

                {/* Right Column: Dashboard Mockup */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    {/* Mockup Container */}
                    <div className="relative bg-gray-900 rounded-2xl p-2 border border-gray-800 shadow-2xl transform lg:rotate-2 lg:hover:rotate-0 transition-transform duration-500">
                        <div className="bg-gray-800 rounded-xl overflow-hidden aspect-[4/3] flex flex-col">
                            {/* Mockup Header */}
                            <div className="h-10 bg-gray-900 border-b border-gray-700 flex items-center px-4 gap-2">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-500" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                </div>
                            </div>
                            {/* Mockup Body */}
                            <div className="flex-1 bg-gray-900 p-6">
                                <div className="flex justify-between items-center mb-8">
                                    <div>
                                        <div className="text-gray-400 text-xs mb-1">Total Balance</div>
                                        <div className="text-2xl font-bold text-white">$142,308.21</div>
                                    </div>
                                    <div className="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">+12.4%</div>
                                </div>

                                <div className="space-y-4">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-gray-700" />
                                                <div>
                                                    <div className="w-24 h-2 bg-gray-600 rounded mb-1" />
                                                    <div className="w-16 h-2 bg-gray-700 rounded" />
                                                </div>
                                            </div>
                                            <div className="w-12 h-2 bg-green-500/50 rounded" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Floating Feature Badge */}
                    <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3 animate-bounce-slow">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                            <CheckCircle2 className="w-6 h-6" />
                        </div>
                        <div>
                            <div className="text-xs text-gray-500 font-semibold uppercase">Status</div>
                            <div className="text-sm font-bold text-gray-900">Settlement Complete</div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
