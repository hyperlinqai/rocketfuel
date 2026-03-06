'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Store, User, Code2 } from 'lucide-react';

const faqData = {
    merchants: [
        {
            q: "How do I become a RocketFuel merchant?",
            a: "Submit your business and compliance documents through our onboarding portal. Once approved, you’ll receive integration credentials to begin setup."
        },
        {
            q: "What currencies does RocketFuel support?",
            a: "You can accept payments in major cryptocurrencies and stablecoins, including Bitcoin (BTC), Ethereum (ETH), USDC, and USDT. Fiat settlements are available in supported regions."
        },
        {
            q: "How long does settlement take?",
            a: "Settlements typically complete within minutes for crypto and stablecoin transactions and within 24 hours for fiat."
        },
        {
            q: "How do I integrate RocketFuel into my platform?",
            a: "You can use our hosted checkout widget, redirect link, or full API integration. Developers can access our sandbox and documentation for testing prior to go-live."
        },
        {
            q: "Can RocketFuel handle payouts to my users or affiliates?",
            a: "Yes. Our Global Payouts solution allows you to send payments to multiple recipients worldwide in stablecoins, crypto, or supported fiat currencies."
        },
        {
            q: "How do I access reports and transaction history?",
            a: "All transactions, settlements, and conversion reports can be viewed from your RocketFuel merchant dashboard."
        }
    ],
    customers: [
        {
            q: "I made a payment, but I don’t see it credited. What should I do?",
            a: "Please email support@rocketfuel.inc with your transaction reference or wallet address. Our support team will review it and provide an update."
        },
        {
            q: "What types of payments can I make with RocketFuel?",
            a: "You can pay with cryptocurrencies such as Bitcoin or Ethereum, as well as popular stablecoins like USDC and USDT."
        },
        {
            q: "How long does it take for my payment to process?",
            a: "Crypto and stablecoin transactions typically confirm within a few minutes, depending on network activity."
        },
        {
            q: "Can I get a refund for a crypto payment?",
            a: "Refunds are managed directly by the merchant. If a refund has been approved, RocketFuel processes it in the same currency originally used."
        },
        {
            q: "Is RocketFuel safe to use?",
            a: "Yes. RocketFuel uses blockchain technology for transparent, encrypted transactions and works only with regulated banking and exchange partners."
        },
        {
            q: "Do I need a RocketFuel account to make a payment?",
            a: "No. Customers can pay directly using their existing crypto wallets or stablecoin accounts — no registration required."
        }
    ],
    technical: [
        {
            q: "Where can developers find API documentation?",
            a: "Visit our Developer Portal at docs.rocketfuel.inc for full API, SDK, and webhook references."
        },
        {
            q: "How do I test my integration before going live?",
            a: "All new merchants are given access to RocketFuel’s sandbox environment to simulate live transactions. Once testing is complete, our team will enable production access."
        },
        {
            q: "Who do I contact for integration or API support?",
            a: "All technical support inquiries should be sent to support@rocketfuel.inc. Include your API key (if applicable), request ID, or error log for faster assistance."
        },
        {
            q: "Does RocketFuel offer webhooks?",
            a: "Yes. Webhooks are available for transaction confirmations, settlements, and payout updates."
        },
        {
            q: "What’s the uptime or reliability of RocketFuel’s platform?",
            a: "RocketFuel operates with enterprise-grade uptime and continuous monitoring across all systems to ensure consistent availability."
        }
    ]
};

const tabs = [
    { id: 'merchants', label: 'For Merchants', icon: Store },
    { id: 'customers', label: 'For Customers', icon: User },
    { id: 'technical', label: 'Technical Support', icon: Code2 },
];

export function HelpCenterFAQ() {
    const [activeTab, setActiveTab] = useState<'merchants' | 'customers' | 'technical'>('merchants');

    return (
        <section className="py-24 bg-secondary-bg">
            <div className="max-w-4xl mx-auto px-4">

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id as any)}
                            className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${activeTab === tab.id
                                    ? 'bg-orange-600 text-white shadow-lg shadow-orange-500/25 ring-2 ring-orange-600 ring-offset-2'
                                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                                }`}
                        >
                            <tab.icon className="w-4 h-4" />
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* FAQ List */}
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                >
                    {faqData[activeTab].map((item, index) => (
                        <FAQItem key={index} question={item.q} answer={item.a} />
                    ))}
                </motion.div>

            </div>
        </section>
    );
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
            >
                <span className="font-semibold text-gray-900 pr-8">{question}</span>
                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
