import Link from 'next/link';

export function Compliance() {
    return (
        <section className="bg-white py-24 px-4">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
                <div className="flex-1">
                    <div className="inline-block bg-blue-50 text-button-action px-4 py-1 rounded-full text-sm font-semibold mb-6">
                        Trust & Safety
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-primary-text mb-6">
                        Built for regulated businesses.
                    </h2>
                    <p className="text-secondary-text text-lg leading-relaxed mb-8">
                        RocketFuel is designed with compliance at its core. We handle the heavy lifting of regulation so you can focus on your product.
                    </p>

                    <ul className="grid sm:grid-cols-2 gap-4 mb-10">
                        {[
                            "MSB registered",
                            "Sanctions screening",
                            "KYC/KYB/KYT options",
                            "Role-based access",
                            "HMAC-signed webhooks",
                            "Audit-ready logs"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center text-secondary-text">
                                <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                {item}
                            </li>
                        ))}
                    </ul>

                    <Link
                        href="/compliance"
                        className="text-button-action font-semibold hover:text-button-action-hover transition-colors flex items-center gap-2"
                    >
                        Read compliance overview
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </Link>
                </div>

                <div className="flex-1 relative">
                    {/* Abstract visual for security/compliance */}
                    <div className="relative w-full aspect-square max-w-md mx-auto">
                        <div className="absolute inset-0 bg-blue-100 rounded-full opacity-20 animate-pulse"></div>
                        <div className="absolute inset-4 bg-white rounded-2xl shadow-2xl border border-gray-100 flex items-center justify-center p-8">
                            <div className="grid grid-cols-2 gap-4 w-full h-full">
                                <div className="bg-gray-50 rounded-lg p-4 flex flex-col justify-center items-center border border-gray-100">
                                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mb-2">
                                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    </div>
                                    <span className="text-xs font-semibold text-gray-500">KYC Verified</span>
                                </div>
                                <div className="bg-gray-50 rounded-lg p-4 flex flex-col justify-center items-center border border-gray-100">
                                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                                    </div>
                                    <span className="text-xs font-semibold text-gray-500">Encrypted</span>
                                </div>
                                <div className="bg-gray-50 rounded-lg p-4 flex flex-col justify-center items-center border border-gray-100">
                                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mb-2">
                                        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                                    </div>
                                    <span className="text-xs font-semibold text-gray-500">Audit Log</span>
                                </div>
                                <div className="bg-gray-50 rounded-lg p-4 flex flex-col justify-center items-center border border-gray-100">
                                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mb-2">
                                        <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    </div>
                                    <span className="text-xs font-semibold text-gray-500">Global</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
