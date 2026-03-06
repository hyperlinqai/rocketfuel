'use client';

import { motion } from 'framer-motion';
import { Handshake, Network, Megaphone, Headset, ArrowRight } from 'lucide-react';

const contacts = [
    {
        title: "Sales & Demos",
        description: "Interested in using RocketFuel for payments or payouts?",
        email: "sales@rocketfuel.inc",
        icon: Handshake,
        color: "bg-orange-50 text-orange-600"
    },
    {
        title: "Partnerships",
        description: "Want to collaborate or integrate with RocketFuel?",
        email: "partners@rocketfuel.inc",
        icon: Network,
        color: "bg-amber-50 text-amber-600"
    },
    {
        title: "Press & Media",
        description: "Journalists and media requests.",
        email: "press@rocketfuel.inc",
        icon: Megaphone,
        color: "bg-blue-50 text-blue-600"
    },
    {
        title: "Support",
        description: "Need help with an existing account or transaction?",
        email: "support@rocketfuel.inc",
        icon: Headset,
        color: "bg-green-50 text-green-600"
    }
];

export function ContactOptions() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary-text mb-4">
                        Connect with the RocketFuel Team
                    </h2>
                    <p className="text-lg text-secondary-text">
                        Choose the right contact path below to reach our team directly.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {contacts.map((contact, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col h-full p-8 rounded-2xl bg-secondary-bg border border-gray-100 hover:border-orange-100 hover:shadow-lg transition-all"
                        >
                            <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${contact.color}`}>
                                <contact.icon className="w-7 h-7" />
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                {contact.title}
                            </h3>

                            <p className="text-gray-600 mb-6 flex-1 text-sm">
                                {contact.description}
                            </p>

                            <a href={`mailto:${contact.email}`} className="flex items-center text-sm font-semibold text-gray-900 group hover:text-orange-600 transition-colors gap-2 mt-auto">
                                {contact.email} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
