import Link from 'next/link';
import { Hourglass, Rocket, Check, X, ArrowRight } from 'lucide-react';

export function ProblemSolution() {
    return (
        <section className="py-24 px-4 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
                        Legacy payments slow you down. <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                            RocketFuel speeds you up.
                        </span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Stop losing revenue to outdated payment rails. Switch to the modern infrastructure built for speed, transparency, and growth.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-stretch max-w-5xl mx-auto">
                    {/* Old Way */}
                    <div className="group relative p-8 rounded-3xl bg-white/60 backdrop-blur-sm border border-red-100 hover:border-red-200 transition-all duration-300">
                        <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-transparent rounded-3xl opacity-50" />
                        <div className="relative z-10">
                            <div className="flex items-center space-x-4 mb-8">
                                <div className="p-3 bg-red-100/80 rounded-2xl">
                                    <Hourglass className="w-8 h-8 text-red-500" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-700">The Old Way</h3>
                            </div>
                            <ul className="space-y-4">
                                {[
                                    "High decline rates and lost revenue",
                                    "Days-long international wires",
                                    "Surprise FX fees and hidden costs",
                                    "Chargebacks & manual reconciliation"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center space-x-3 text-gray-500 group-hover:text-gray-600 transition-colors">
                                        <div className="flex-shrink-0 p-1 bg-red-50 rounded-full">
                                            <X className="w-4 h-4 text-red-400" />
                                        </div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* RocketFuel Way */}
                    <div className="relative p-1 rounded-3xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-2xl shadow-blue-500/20 transform md:-translate-y-4 hover:scale-[1.02] transition-all duration-500">
                        <div className="h-full bg-white rounded-[22px] p-8 relative overflow-hidden">
                            {/* Abstract bg shapes */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -mr-32 -mt-32 opacity-60" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-50 rounded-full blur-3xl -ml-32 -mb-32 opacity-60" />

                            <div className="relative z-10">
                                <div className="flex items-center space-x-4 mb-8">
                                    <div className="p-3 bg-blue-100 rounded-2xl shadow-inner">
                                        <Rocket className="w-8 h-8 text-blue-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-700">
                                        The RocketFuel Way
                                    </h3>
                                </div>
                                <ul className="space-y-4">
                                    {[
                                        "Multi-rail payments for max acceptance",
                                        "Fast cross-border settlement",
                                        "Transparent pricing, no surprises",
                                        "Chargeback-resistant & clean reporting"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center space-x-3 text-gray-800 font-medium">
                                            <div className="flex-shrink-0 p-1 bg-blue-100 rounded-full text-blue-600">
                                                <Check className="w-4 h-4" />
                                            </div>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-16">
                    <Link
                        href="/how-it-works"
                        className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all bg-button-action rounded-full hover:shadow-lg hover:shadow-button-action/30 hover:bg-button-action-hover hover:scale-105 active:scale-95"
                    >
                        See how it works
                        <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
