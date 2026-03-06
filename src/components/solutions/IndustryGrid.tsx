'use client';

import {
    Gamepad2, ShoppingBag, Store, Users, Briefcase, Video,
    Plane, UtensilsCrossed, Hotel, Repeat, ArrowRight, Layers
} from 'lucide-react';
import { motion } from 'framer-motion';

const industries = [
    { name: "Skills-Based Gaming & eSports", icon: Gamepad2, description: "Instant payouts for winners" },
    { name: "Social Commerce", icon: ShoppingBag, description: "Unified checkout flow" },
    { name: "Digital Marketplaces", icon: Store, description: "Seller & buyer settlements" },
    { name: "Affiliate Networks", icon: Users, description: "Global commission payouts" },
    { name: "Gig Economy", icon: Briefcase, description: "Freelancer salary streams" },
    { name: "Creator Platforms", icon: Video, description: "Monetization for creators" },
    { name: "Private Charters", icon: Plane, description: "High-value crypto bookings" },
    { name: "Restaurants & Retail", icon: UtensilsCrossed, description: "POS crypto integrations" },
    { name: "Hospitality", icon: Hotel, description: "Seamless booking payments" },
    { name: "Consignment / Resale", icon: Repeat, description: "Trustless peer settlements" },
];

export function IndustryGrid() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                        One Platform. Infinite Possibilities.
                    </h2>
                    <p className="text-xl text-gray-600">
                        RocketFuel powers a full ecosystem of crypto and stablecoin solutions for digital-first businesses. Our technology makes it easy to accept payments, send global payouts, automate invoicing, and reward loyalty.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {industries.map((industry, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ y: -5 }}
                            // Matching Product Page Benefits style (rounded-3xl, p-8, bg-gray-50, hover:shadow-lg)
                            className="bg-gray-50 rounded-3xl p-8 flex flex-col items-center justify-center group hover:shadow-lg hover:border-orange-100 border border-gray-100 transition-all"
                        >
                            {/* Changed icon color to text-orange-600 */}
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform text-orange-600">
                                <industry.icon className="w-6 h-6" />
                            </div>
                            {/* Changed hover text color to text-orange-700 */}
                            <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-orange-700 transition-colors">{industry.name}</h3>
                            <p className="text-xs text-gray-500 line-clamp-2 md:line-clamp-none hidden md:block">{industry.description}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 flex items-center justify-center">
                    {/* Changed badge to orange theme */}
                    <div className="inline-flex items-center gap-2 text-orange-600 bg-orange-50 px-4 py-2 rounded-full font-medium text-sm border border-orange-100">
                        <Layers className="w-4 h-4" />
                        <span>Supporting 50+ Verticals worldwide</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
