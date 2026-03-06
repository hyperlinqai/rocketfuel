'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function SolutionsCTA() {
    return (
        <section className="py-24 px-4 bg-gray-50 overflow-hidden relative">
            <div className="absolute inset-0 bg-grid-slate-200 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] pointer-events-none" />

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                    One Platform. <br />
                    {/* Changed gradient to orange/amber */}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">
                        Every Payment Possibility.
                    </span>
                </h2>

                <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                    Whether you’re a merchant, marketplace, or platform provider, RocketFuel gives you the tools to build smarter financial flows. Accept crypto, pay globally, verify users, and reward loyalty.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link
                        href="/demo"
                        className="btn-primary"
                    >
                        Request a Demo
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>

                    <Link
                        href="/products/crypto-merchant-processing"
                        className="btn-secondary"
                    >
                        Explore Products
                    </Link>
                </div>
            </div>
        </section>
    );
}
