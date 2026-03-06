'use client';

import { motion } from 'framer-motion';
import { Globe, Zap, ShieldCheck, DollarSign, Plug, BarChart3, Check } from 'lucide-react';

const advantages = [
    {
        title: "Global Coverage",
        description: "Crypto and fiat payments across 190+ countries.",
        icon: Globe
    },
    {
        title: "Instant Settlements",
        description: "No waiting for wires or banking hours.",
        icon: Zap
    },
    {
        title: "Regulatory Compliance",
        description: "AML, KYC, and OFAC-aligned architecture.",
        icon: ShieldCheck
    },
    {
        title: "Partner Revenue",
        description: "PSPs and ISOs earn recurring revenue on transactions.",
        icon: DollarSign
    },
    {
        title: "API-First Infrastructure",
        description: "Integrate quickly with your platform or back office.",
        icon: Plug
    },
    {
        title: "Real-time Reporting",
        description: "Enterprise-grade dashboards and analytics.",
        icon: BarChart3
    }
];

export function WhyChoose() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Content */}
                    <div>
                        {/* Changed badge to orange/amber */}
                        <div className="inline-block px-4 py-1.5 rounded-full bg-amber-50 text-amber-700 text-sm font-semibold mb-6">
                            Why RocketFuel
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            Fast, Compliant, and <br />
                            {/* Changed to orange-600 */}
                            <span className="text-orange-600">Borderless by Design</span>
                        </h2>
                        <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                            RocketFuel bridges the gap between Web2 and Web3, combining blockchain efficiency with traditional financial compliance. Whether you’re processing payments, managing global payouts, or rewarding customer loyalty, we handle the rails — so you can focus on growth.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                            {advantages.map((adv, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-start gap-4"
                                >
                                    {/* Changed icon bg to orange-50 and text to orange-600 */}
                                    <div className="flex-shrink-0 p-2 bg-orange-50 rounded-lg text-orange-600">
                                        <adv.icon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-sm">{adv.title}</h4>
                                        <p className="text-sm text-gray-500 mt-1">{adv.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Comparison Chart Visual */}
                    <div className="relative">
                        {/* Card Comparison */}
                        <div className="bg-gray-900 rounded-3xl p-8 text-white shadow-2xl relative z-10">
                            <h3 className="text-2xl font-bold mb-8 text-center">RocketFuel vs. Traditional</h3>

                            <div className="space-y-6">
                                {/* Header Row */}
                                <div className="grid grid-cols-3 gap-4 text-sm text-gray-400 font-medium border-b border-gray-800 pb-2">
                                    <div>Feature</div>
                                    <div className="text-center">Banks</div>
                                    {/* Changed RocketFuel column header to orange/gold */}
                                    <div className="text-center text-orange-400 font-bold">RocketFuel</div>
                                </div>

                                {/* Rows */}
                                {[
                                    { feature: "Settlement Speed", trad: "3-5 Days", rf: "Instant" },
                                    { feature: "Global Reach", trad: "Limited", rf: "190+ Countries" },
                                    { feature: "Chargebacks", trad: "High Risk", rf: "Zero" },
                                    { feature: "Processing Fees", trad: "2-4% + FX", rf: "~1%" },
                                    { feature: "24/7 Availability", trad: "No", rf: "Yes" },
                                ].map((row, i) => (
                                    <div key={i} className="grid grid-cols-3 gap-4 text-sm items-center">
                                        <div className="text-gray-300">{row.feature}</div>
                                        <div className="text-center text-gray-500">{row.trad}</div>
                                        {/* Changed verified badge to green still as that is semantic, but perhaps text accent? Green fits 'good'. Keeping green for success indicators. */}
                                        <div className="text-center font-bold text-green-400 bg-green-900/20 py-1 rounded-md">{row.rf}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Background Elements */}
                        <div className="absolute top-10 -right-10 w-full h-full bg-gray-100 rounded-3xl -z-10 transform rotate-3"></div>
                        {/* Changed blur to orange */}
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-orange-100 rounded-full blur-3xl -z-10"></div>
                    </div>

                </div>
            </div>
        </section>
    );
}
