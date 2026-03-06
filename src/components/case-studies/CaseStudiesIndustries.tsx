'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShoppingCart, Gamepad2, Plane, Code, ArrowRight } from 'lucide-react';

const industries = [
    {
        name: "Marketplaces",
        description: "Simplify buyer-seller flows.",
        icon: ShoppingCart,
    },
    {
        name: "Gaming & Esports",
        description: "Handle global player payouts.",
        icon: Gamepad2,
    },
    {
        name: "Hospitality & Travel",
        description: "Enable crypto and stablecoin booking payments.",
        icon: Plane,
    },
    {
        name: "Software & Platforms",
        description: "Automate global developer or partner payments.",
        icon: Code,
    },
];

export function CaseStudiesIndustries() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-primary-text mb-6">
                        Solutions That Scale Across Every Sector
                    </h2>
                    <p className="text-lg text-secondary-text max-w-2xl mx-auto">
                        RocketFuel powers payment innovation across multiple industries, providing tailored solutions for specific business needs.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {industries.map((industry, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all border border-gray-100 flex flex-col items-center text-center"
                        >
                            <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center text-primary-text mb-6 group-hover:scale-110 transition-transform group-hover:text-amber-500">
                                <industry.icon className="w-8 h-8" />
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                {industry.name}
                            </h3>

                            <p className="text-gray-600 mb-6">
                                {industry.description}
                            </p>

                            <div className="mt-auto opacity-0 group-hover:opacity-100 transition-opacity text-amber-600 font-medium flex items-center gap-2">
                                Learn more <ArrowRight className="w-4 h-4" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
