'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Send } from 'lucide-react';
import { useState } from 'react';

export function TalkToSalesForm() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <section id="sales-form" className="py-24 bg-white relative overflow-hidden">
            {/* Decoration */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500" />

            <div className="max-w-3xl mx-auto px-4">

                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary-text mb-4">
                        Start the Conversation
                    </h2>
                    <p className="text-lg text-secondary-text">
                        Complete the form below and a RocketFuel team member will contact you shortly to discuss your business goals and recommend the best solution.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gray-50 p-8 md:p-10 rounded-3xl border border-gray-100"
                >
                    {submitted ? (
                        <div className="text-center py-16">
                            <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 text-orange-600">
                                <Send className="w-10 h-10" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Message Sent!</h3>
                            <p className="text-gray-600 max-w-md mx-auto">
                                Thank you! A member of our sales team will reach out soon to learn more about your goals and walk you through how RocketFuel can help.
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Name</label>
                                    <input required type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all bg-white" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Company</label>
                                    <input required type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all bg-white" placeholder="Acme Inc." />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Business Email</label>
                                    <input required type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all bg-white" placeholder="john@company.com" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Country</label>
                                    <select defaultValue="" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all bg-white">
                                        <option value="" disabled>Select your country</option>
                                        <option value="US">United States</option>
                                        <option value="GB">United Kingdom</option>
                                        <option value="EU">Europe</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">What are you interested in?</label>
                                <select defaultValue="" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all bg-white">
                                    <option value="" disabled>Select interest</option>
                                    <option value="accept">Accept Payments</option>
                                    <option value="payouts">Send Payouts</option>
                                    <option value="invoicing">Invoicing</option>
                                    <option value="all">All of the above</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Message (Optional)</label>
                                <textarea className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all bg-white h-32 resize-none" placeholder="Tell us about your business goals..." />
                            </div>

                            <button className="w-full px-8 py-4 bg-orange-600 text-white rounded-xl font-bold hover:bg-orange-500 transition-colors flex items-center justify-center gap-2 group shadow-lg shadow-orange-200">
                                Talk to Sales
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    )}
                </motion.div>

            </div>
        </section>
    );
}
