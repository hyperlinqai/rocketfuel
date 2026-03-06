'use client';

import { motion } from 'framer-motion';
import { Users, BarChart } from 'lucide-react';

export function GuidesMission() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden relative border border-gray-200 shadow-lg">
                            {/* Abstract Representation of "Studying Data" */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-3/4 h-3/4 bg-white rounded-xl shadow-inner p-6 flex flex-col gap-4">
                                    <div className="flex items-center gap-4 border-b border-gray-100 pb-4">
                                        <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                                            <Users className="w-5 h-5 text-orange-600" />
                                        </div>
                                        <div className="flex-1 h-2 bg-gray-100 rounded-full" />
                                    </div>
                                    <div className="flex-1 bg-gray-50 rounded-lg p-4 flex items-end justify-between gap-2">
                                        <div className="w-full bg-amber-200 rounded-t-sm" style={{ height: '40%' }} />
                                        <div className="w-full bg-orange-300 rounded-t-sm" style={{ height: '60%' }} />
                                        <div className="w-full bg-orange-500 rounded-t-sm" style={{ height: '80%' }} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Element */}
                        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-orange-100 rounded-full blur-2xl -z-10" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-primary-text mb-6">
                            Empowering Businesses Through Knowledge
                        </h2>
                        <div className="space-y-6 text-lg text-secondary-text">
                            <p>
                                Global payments are changing fast. RocketFuel’s mission is to make modern financial technology understandable, transparent, and actionable.
                            </p>
                            <p>
                                Our guides are created by payment experts, developers, and compliance professionals — built to help merchants, partners, and innovators navigate the digital payment revolution with confidence.
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
