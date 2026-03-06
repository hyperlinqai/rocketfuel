'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function RequestDemoCTA() {
    const scrollToForm = () => {
        const formSection = document.getElementById('demo-form');
        if (formSection) {
            formSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="py-20 bg-gray-900 text-white overflow-hidden relative">
            {/* Background Glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3" />

            <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Let’s Get Started
                    </h2>
                    <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                        Your customers are ready to pay — let RocketFuel handle the rest.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={scrollToForm}
                            className="px-8 py-4 bg-orange-600 text-white rounded-xl font-bold hover:bg-orange-500 transition-colors flex items-center justify-center gap-2"
                        >
                            Request Demo
                            <ArrowRight className="w-5 h-5" />
                        </button>
                        <Link
                            href="/talk-to-sales"
                            className="px-8 py-4 bg-gray-800 text-white rounded-xl font-bold hover:bg-gray-700 transition-colors border border-gray-700"
                        >
                            Talk to Sales
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
