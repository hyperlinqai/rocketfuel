'use client';

import { motion } from 'framer-motion';
import { Network, Handshake, Code2, ShieldCheck, Check } from 'lucide-react';
import Link from 'next/link';

export function PartnersSection() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                        Empower Your Ecosystem
                    </h2>
                    <p className="text-xl text-gray-600">
                        RocketFuel isn’t just a payments provider — it’s an infrastructure partner. We help payment processors, platforms, and enterprises scale globally through crypto acceptance, payout automation, and on-chain loyalty.
                    </p>
                </div>

                <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                    {/* Changed gradient to Orange/Red/Yellow */}
                    <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-orange-500 via-red-500 to-amber-500"></div>

                    <div className="grid lg:grid-cols-2">
                        {/* Features List */}
                        <div className="p-10 lg:p-16 flex flex-col justify-center">
                            <h3 className="text-2xl font-bold text-gray-900 mb-8">Partner Benefits</h3>
                            <ul className="space-y-6">
                                {[
                                    { text: "White-label and co-branded solutions", icon: Network },
                                    { text: "Revenue-sharing model for partners", icon: Handshake },
                                    { text: "Seamless integration via API, SDKs, and webhooks", icon: Code2 },
                                    { text: "Enterprise-level compliance and reporting tools", icon: ShieldCheck },
                                ].map((item, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex items-start gap-4"
                                    >
                                        {/* Changed icon bg to orange-50 and text to orange-600 */}
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-600">
                                            <item.icon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-lg font-medium text-gray-900">{item.text}</p>
                                        </div>
                                    </motion.li>
                                ))}
                            </ul>
                            <div className="mt-10">
                                {/* Changed link text color to orange-600 */}
                                <Link href="/partners" className="text-orange-600 font-semibold hover:text-orange-700 flex items-center gap-2">
                                    Become a Partner <span aria-hidden="true">&rarr;</span>
                                </Link>
                            </div>
                        </div>

                        {/* Visual Representation */}
                        <div className="bg-gray-50 p-10 lg:p-16 flex items-center justify-center border-t lg:border-t-0 lg:border-l border-gray-100">
                            {/* Diagram Logic */}
                            <div className="relative w-full max-w-md aspect-[4/3]">
                                {/* Central Hub */}
                                <div className="absolute inset-x-0 bottom-0 top-1/4 bg-white rounded-t-2xl border-t border-x border-gray-200 shadow-sm flex flex-col items-center pt-8 z-10">
                                    {/* Changed label background to orange-600 */}
                                    <div className="bg-orange-600 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">You (Partner)</div>
                                    <div className="w-full grid grid-cols-2 gap-4 px-8 opacity-50">
                                        <div className="h-2 rounded bg-gray-200"></div>
                                        <div className="h-2 rounded bg-gray-200"></div>
                                        <div className="h-20 col-span-2 rounded bg-gray-100"></div>
                                    </div>
                                </div>

                                {/* RocketFuel Layer */}
                                <div className="absolute inset-x-4 bottom-[-20px] h-24 bg-gray-900 rounded-b-xl -z-10 flex items-end justify-center pb-4 text-white text-sm font-medium tracking-wide">
                                    Powered by RocketFuel
                                </div>

                                {/* Connection Lines */}
                                <div className="absolute top-0 inset-x-0 h-1/4 flex justify-around items-end pb-4">
                                    <div className="flex flex-col items-center gap-2">
                                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600"><Check className="w-5 h-5" /></div>
                                        <span className="text-xs font-medium text-gray-500">Merchant</span>
                                        <div className="h-8 w-px bg-gray-300"></div>
                                    </div>
                                    <div className="flex flex-col items-center gap-2">
                                        <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600"><Check className="w-5 h-5" /></div>
                                        <span className="text-xs font-medium text-gray-500">Platform</span>
                                        <div className="h-8 w-px bg-gray-300"></div>
                                    </div>
                                    <div className="flex flex-col items-center gap-2">
                                        <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600"><Check className="w-5 h-5" /></div>
                                        <span className="text-xs font-medium text-gray-500">App</span>
                                        <div className="h-8 w-px bg-gray-300"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
