'use client';

import { motion } from 'framer-motion';
import { HelpCircle, MessageCircle, FileQuestion, Search } from 'lucide-react';

export function HelpCenterHero() {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden bg-white">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-100/40 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 -z-10" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-100/40 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 -z-10" />

            <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
                {/* Left Column: Text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center lg:text-left z-10"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-sm font-medium mb-6">
                        <HelpCircle className="w-4 h-4" />
                        <span>Support Hub</span>
                    </div>

                    <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-primary-text mb-6 leading-tight">
                        Welcome to the <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">
                            RocketFuel Help Center
                        </span>
                    </h1>

                    <p className="text-xl text-secondary-text mb-8 max-w-lg mx-auto lg:mx-0">
                        Get answers, resources, and support for everything from merchant onboarding to customer payments.
                    </p>

                    <div className="p-4 bg-blue-50 border border-blue-100 rounded-xl flex items-start gap-3 max-w-md mx-auto lg:mx-0">
                        <MessageCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                        <p className="text-sm text-blue-800 text-left">
                            <strong>Need immediate help?</strong><br />
                            Please contact our support team at <a href="mailto:support@rocketfuel.inc" className="underline hover:text-blue-600">support@rocketfuel.inc</a>.
                        </p>
                    </div>
                </motion.div>

                {/* Right Column: Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden lg:flex items-center justify-center"
                >
                    <div className="relative w-full aspect-square max-w-md">
                        {/* Abstract Support Illustration */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 to-amber-500/10 rounded-full blur-3xl animate-pulse" />

                        <div className="relative z-10 w-full h-full bg-white/60 backdrop-blur-sm border border-white/50 rounded-3xl shadow-xl flex items-center justify-center p-8">
                            <div className="grid grid-cols-2 gap-4 w-full h-full">
                                <div className="bg-orange-50 rounded-2xl p-6 flex flex-col items-center justify-center gap-3">
                                    <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-orange-600">
                                        <FileQuestion className="w-6 h-6" />
                                    </div>
                                    <div className="h-2 w-16 bg-orange-200 rounded-full" />
                                    <div className="h-2 w-10 bg-orange-200 rounded-full" />
                                </div>
                                <div className="bg-amber-50 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 mt-8">
                                    <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-amber-600">
                                        <Search className="w-6 h-6" />
                                    </div>
                                    <div className="h-2 w-16 bg-amber-200 rounded-full" />
                                    <div className="h-2 w-20 bg-amber-200 rounded-full" />
                                </div>
                                <div className="bg-blue-50 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 -mt-8">
                                    <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-blue-600">
                                        <MessageCircle className="w-6 h-6" />
                                    </div>
                                    <div className="h-2 w-12 bg-blue-200 rounded-full" />
                                    <div className="h-2 w-16 bg-blue-200 rounded-full" />
                                </div>
                                <div className="bg-gray-50 rounded-2xl p-6 flex flex-col items-center justify-center gap-3">
                                    <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-gray-600">
                                        <HelpCircle className="w-6 h-6" />
                                    </div>
                                    <div className="h-2 w-20 bg-gray-200 rounded-full" />
                                    <div className="h-2 w-12 bg-gray-200 rounded-full" />
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
