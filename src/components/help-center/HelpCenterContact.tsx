'use client';

import { motion } from 'framer-motion';
import { Mail, MessageSquare } from 'lucide-react';
import Link from 'next/link';

export function HelpCenterContact() {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-600/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3" />

            <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-white mb-6"
                >
                    Need More Help?
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
                >
                    For help with payments, integrations, or account access, please reach out to our team.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col sm:flex-row gap-6 justify-center"
                >
                    <a href="mailto:support@rocketfuel.inc" className="group flex items-center justify-center gap-3 px-8 py-5 bg-orange-600 text-white rounded-xl font-bold hover:bg-orange-500 transition-colors">
                        <Mail className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                        <span>Contact Support</span>
                    </a>

                    <Link href="/demo" className="group flex items-center justify-center gap-3 px-8 py-5 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl font-bold hover:bg-white/20 transition-colors">
                        <MessageSquare className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                        <span>Request a Demo</span>
                    </Link>
                </motion.div>

                <div className="mt-12 pt-12 border-t border-gray-800 text-gray-500">
                    <p>Support Email: <strong className="text-gray-300">support@rocketfuel.inc</strong></p>
                </div>
            </div>
        </section>
    );
}
