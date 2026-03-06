'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { HelpCircle, Code2, Users, ArrowRight } from 'lucide-react';

const resources = [
    {
        title: "Help Center",
        desc: "For FAQs and onboarding.",
        icon: HelpCircle,
        href: "/resources/help-center"
    },
    {
        title: "Developers",
        desc: "API docs and sandbox access.",
        icon: Code2,
        href: "https://docs.rocketfuel.inc/"
    },
    {
        title: "Partners",
        desc: "Join our partner network.",
        icon: Users,
        href: "/company/partners"
    },
    {
        title: "Request a Demo",
        desc: "Speak directly with sales.",
        icon: ArrowRight,
        href: "/demo"
    }
];

export function ContactResources() {
    return (
        <section className="py-24 bg-secondary-bg">
            <div className="max-w-7xl mx-auto px-4">
                <div className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-primary-text mb-4">
                        Helpful Resources
                    </h2>
                    <p className="text-secondary-text">
                        Before reaching out, you can also explore:
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {resources.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link href={item.href} className="group block bg-white p-6 rounded-xl border border-gray-200 hover:border-orange-200 hover:shadow-md transition-all">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="p-2 bg-gray-50 rounded-lg group-hover:bg-orange-50 group-hover:text-orange-600 transition-colors text-gray-600">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-orange-500 transition-colors" />
                                </div>
                                <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                                <p className="text-sm text-gray-500">{item.desc}</p>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
