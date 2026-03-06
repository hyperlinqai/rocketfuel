'use client';

import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';

export function GuidesNewsletter() {
    return (
        <section className="py-24 bg-gray-900 relative overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-amber-600/10 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3" />

            <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-gray-800 border border-gray-700 text-orange-400 text-sm font-medium mb-6">
                        Stay Ahead of the Curve
                    </span>

                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Get New Guides as They’re Released
                    </h2>

                    <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                        Subscribe to be the first to access RocketFuel’s newest resources on crypto adoption, stablecoin innovation, and global payment technology.
                    </p>

                    <form className="max-w-md mx-auto flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                            />
                        </div>
                        <div className="relative">
                            <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                            <input
                                type="email"
                                placeholder="Work Email Address"
                                className="w-full pl-14 pr-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                            />
                        </div>

                        <button className="w-full px-8 py-4 bg-white text-gray-900 rounded-xl font-bold hover:bg-orange-50 transition-colors flex items-center justify-center gap-2 group mt-2">
                            Subscribe
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>

                    <p className="mt-6 text-sm text-gray-500">
                        We care about your data in our privacy policy. No spam, ever.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
