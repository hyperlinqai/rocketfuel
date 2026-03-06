'use client';

import { motion } from 'framer-motion';
import { FileText, Search, Settings, PlayCircle, Rocket, LifeBuoy } from 'lucide-react';

const steps = [
    { title: "Submit Documents", icon: FileText, desc: "Business info & KYC/KYB" },
    { title: "Account Review", icon: Search, desc: "Compliance check" },
    { title: "Integration Setup", icon: Settings, desc: "Credentials & Sandbox" },
    { title: "Testing", icon: PlayCircle, desc: "Verify transactions" },
    { title: "Go Live", icon: Rocket, desc: "Accept payments" },
    { title: "Ongoing Support", icon: LifeBuoy, desc: "24/7 assistance" },
];

export function HelpCenterOnboarding() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary-text mb-6">
                        Merchant Onboarding Steps
                    </h2>
                    <p className="text-lg text-secondary-text max-w-2xl mx-auto">
                        RocketFuel’s onboarding process is simple and designed for speed.
                    </p>
                </div>

                {/* Timeline Visualization */}
                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-gray-100 -z-10" />

                    <div className="grid md:grid-cols-6 gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex flex-col items-center text-center group"
                            >
                                <div className="w-24 h-24 bg-white rounded-full border-4 border-gray-50 flex items-center justify-center mb-6 relative z-10 group-hover:border-orange-100 transition-colors">
                                    <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center text-orange-600 group-hover:scale-110 transition-transform">
                                        <step.icon className="w-8 h-8" />
                                    </div>

                                    {/* Step Number Badge */}
                                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold border-4 border-white">
                                        {index + 1}
                                    </div>
                                </div>

                                <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                                <p className="text-sm text-gray-500">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
