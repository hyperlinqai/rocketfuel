'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, ExternalLink } from 'lucide-react';

export function CaseStudiesCTA() {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-600/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-amber-600/20 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3" />

            <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-white mb-6"
                >
                    Your Success Story Starts Here
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
                >
                    We help businesses of every size simplify payments, strengthen compliance, and expand globally. Let’s build your case study next.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <Link href="/demo">
                        <button className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-lg font-bold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 group">
                            Request a Demo
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </Link>
                    <Link href="/contact">
                        <button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-gray-600 text-white rounded-lg font-bold hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                            <MessageSquare className="w-5 h-5" />
                            Contact Sales
                        </button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
