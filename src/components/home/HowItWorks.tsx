import Link from 'next/link';

export function HowItWorks() {
    return (
        <section className="bg-white py-24 px-4 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary-text">
                        How it works
                    </h2>
                </div>

                <div className="relative grid md:grid-cols-3 gap-12 text-center">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-200 -z-10"></div>

                    {/* Step 1 */}
                    <div className="relative group animate-on-scroll stagger-1">
                        <div className="w-24 h-24 mx-auto bg-white border-4 border-blue-50 rounded-full flex items-center justify-center text-3xl mb-8 group-hover:scale-110 group-hover:border-button-action transition-all duration-300">
                            1
                        </div>
                        <h3 className="text-xl font-bold text-primary-text mb-4">Initiate</h3>
                        <p className="text-secondary-text leading-relaxed px-4">
                            Customer pays or your team uploads a payout batch via dashboard/API.
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div className="relative group animate-on-scroll stagger-2">
                        <div className="w-24 h-24 mx-auto bg-white border-4 border-blue-50 rounded-full flex items-center justify-center text-3xl mb-8 group-hover:scale-110 group-hover:border-button-action transition-all duration-300 delay-100">
                            2
                        </div>
                        <h3 className="text-xl font-bold text-primary-text mb-4">Convert & Verify</h3>
                        <p className="text-secondary-text leading-relaxed px-4">
                            We apply your rules and run compliance checks automatically.
                        </p>
                    </div>

                    {/* Step 3 */}
                    <div className="relative group animate-on-scroll stagger-3">
                        <div className="w-24 h-24 mx-auto bg-white border-4 border-blue-50 rounded-full flex items-center justify-center text-3xl mb-8 group-hover:scale-110 group-hover:border-button-action transition-all duration-300 delay-200">
                            3
                        </div>
                        <h3 className="text-xl font-bold text-primary-text mb-4">Settle & Reconcile</h3>
                        <p className="text-secondary-text leading-relaxed px-4">
                            Funds land in your wallet or bank; dashboards and webhooks keep finance in sync.
                        </p>
                    </div>
                </div>

                <div className="text-center mt-20">
                    <Link
                        href="/developers"
                        className="text-button-action hover:text-button-action-hover font-semibold border-b-2 border-transparent hover:border-button-action-hover transition-all inline-flex items-center gap-2"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                        View developer docs
                    </Link>
                </div>
            </div>
        </section>
    );
}
