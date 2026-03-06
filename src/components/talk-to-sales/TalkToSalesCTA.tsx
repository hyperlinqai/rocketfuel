'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function TalkToSalesCTA() {
    const scrollToForm = () => {
        const formSection = document.getElementById('sales-form');
        if (formSection) {
            formSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="py-20 bg-secondary-bg text-center">
            <div className="max-w-4xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Ready to Simplify Payments?
                    </h2>
                    <p className="text-lg text-secondary-text mb-10 max-w-2xl mx-auto">
                        Talk to our sales team today and see how RocketFuel can help your business grow faster with modern, compliant payment technology.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={scrollToForm}
                            className="px-8 py-4 bg-orange-600 text-white rounded-xl font-bold hover:bg-orange-500 transition-colors flex items-center justify-center gap-2"
                        >
                            Talk to Sales
                            <ArrowRight className="w-5 h-5" />
                        </button>
                        <Link
                            href="/request-demo"
                            className="px-8 py-4 bg-white text-gray-900 rounded-xl font-bold hover:bg-gray-50 transition-colors border border-gray-200"
                        >
                            Request a Demo
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
