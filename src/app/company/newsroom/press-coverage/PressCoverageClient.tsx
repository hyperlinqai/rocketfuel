'use client';

import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, Calendar, Filter } from 'lucide-react';
import React, { useState } from 'react';

// --- Press Articles Data ---
const pressArticles = [
    {
        date: "2024",
        title: "RocketFuel Pre-Announces Record Growth In Q1-Q3 2024",
        source: "Yahoo Finance",
        category: "Company News",
        url: "https://finance.yahoo.com/news/rocketfuel-pre-announces-record-growth-024100746.html",
        thumbnail: "https://rocketfuel.inc/wp-content/uploads/2025/01/Screenshot-2025-01-06-at-5.14.05%E2%80%AFPM-1024x414.png"
    },
    {
        date: "2024",
        title: "RocketFuel CEO shares vision of transforming payments",
        source: "Proactive Investors",
        category: "Leadership",
        url: "https://www.proactiveinvestors.com/companies/news/1047783/rocketfuel-ceo-shares-vision-of-transforming-payments-with-improved-efficiency-and-financial-inclusion-1047783.html",
        thumbnail: "https://rocketfuel.inc/wp-content/uploads/2024/05/Screenshot-2024-05-16-at-9.43.03%E2%80%AFPM-1024x518.png"
    },
    {
        date: "2024",
        title: "RocketFuel CEO sees stablecoin adoption transforming B2B transactions",
        source: "Proactive Investors",
        category: "Industry Insights",
        url: "https://www.proactiveinvestors.com/companies/news/1046165/rocketfuel-ceo-sees-stablecoin-adoption-transforming-b2b-transactions-1046165.html",
        thumbnail: "https://rocketfuel.inc/wp-content/uploads/2024/04/Screenshot-2024-04-26-at-12.06.24%E2%80%AFAM-1024x563.png"
    },
    {
        date: "2024",
        title: "RocketFuel CEO sees Bitcoin surge driving crypto awareness and adoption",
        source: "Proactive Investors",
        category: "Industry Insights",
        url: "https://www.proactiveinvestors.com/companies/news/1042889/rocketfuel-ceo-sees-bitcoin-surge-driving-crypto-awareness-and-adoption-1042889.html",
        thumbnail: "https://rocketfuel.inc/wp-content/uploads/2024/04/Screenshot-2024-04-25-at-2.35.44%E2%80%AFPM-1024x565.png"
    },
    {
        date: "2024",
        title: "Stablecoins attractive amid lack of clarity on crypto regulations, RocketFuel CEO says",
        source: "Proactive Investors",
        category: "Regulation",
        url: "https://www.proactiveinvestors.com/companies/news/1042139/stablecoins-attractive-amid-lack-of-clarity-on-crypto-regulations-rocketfuel-ceo-says-1042139.html",
        thumbnail: "https://rocketfuel.inc/wp-content/uploads/2024/04/Screenshot-2024-04-25-at-2.49.02%E2%80%AFPM-1024x566.png"
    },
    {
        date: "2024",
        title: "RocketFuel Blockchain pre-announces impressive 3Q revenue growth",
        source: "Proactive Investors",
        category: "Company News",
        url: "https://www.proactiveinvestors.com/companies/news/1040442/rocketfuel-blockchain-pre-announces-impressive-3q-revenue-growth-1040442.html",
        thumbnail: "https://rocketfuel.inc/wp-content/uploads/2024/02/Screenshot-2024-02-22-at-1.08.07%E2%80%AFPM-1024x665.png"
    },
    {
        date: "2024",
        title: "RocketFuel is optimizing how businesses move money with crypto transactions topping 400,000",
        source: "Proactive Investors",
        category: "Product",
        url: "https://www.proactiveinvestors.com/companies/news/1035837/rocketfuel-is-optimizing-how-businesses-move-money-with-crypto-transactions-topping-400-000-in-the-year-to-date-1035837.html",
        thumbnail: "https://rocketfuel.inc/wp-content/uploads/2023/12/RocketFuel-is-optimizing-how-businesses-move-money-with-crypto-transactions-topping-400-000-in-the-year-to-date-OTCQB-RKFL-1024x508.jpg"
    },
    {
        date: "2024",
        title: "RocketFuel says crypto is revolutionizing global payments for businesses",
        source: "Proactive Investors",
        category: "Industry Insights",
        url: "https://www.proactiveinvestors.com/companies/news/1033551/rocketfuel-says-crypto-is-revolutionizing-global-payments-for-businesses-1033551.html",
        thumbnail: "https://rocketfuel.inc/wp-content/uploads/2023/12/RocketFuel-says-crypto-is-revolutionizing-global-payments-for-businesses-OTCQB-RKFL-1024x514.jpg"
    },
    {
        date: "2023",
        title: "AI and Blockchain Technology Combined: RocketFuel's Ben Yankowitz",
        source: "CFO.com",
        category: "Leadership",
        url: "https://www.cfo.com/news/ai-blockchain-rocketfuels-ben-yankowitz-technology-crypto/691521/",
        thumbnail: "https://rocketfuel.inc/wp-content/uploads/2023/08/Screenshot-2023-08-24-at-10.52.57-AM-1024x569.png"
    },
    {
        date: "2023",
        title: "RocketFuel teams up with Ripple to simplify cross border payments",
        source: "Proactive Investors",
        category: "Partnerships",
        url: "https://www.proactiveinvestors.com/companies/news/1032527/rocketfuel-teams-up-with-ripple-to-simplify-cross-border-payments-1032527.html",
        thumbnail: "https://rocketfuel.inc/wp-content/uploads/2023/12/RocketFuel-teams-up-with-Ripple-to-simplify-cross-border-payments-OTCQB-RKFL-1024x514.jpg"
    },
    {
        date: "2023",
        title: "RocketFuel says crypto payments are overcoming obstacles for large multinationals",
        source: "Proactive Investors",
        category: "Industry Insights",
        url: "https://www.proactiveinvestors.com/companies/news/1024538/rocketfuel-says-crypto-payments-are-overcoming-obstacles-for-large-multinationals-1024538.html",
        thumbnail: "https://rocketfuel.inc/wp-content/uploads/2023/09/Screenshot-2023-09-05-at-3.57.30-PM-1024x594.png"
    },
    {
        date: "2023",
        title: "Cryptocurrency's surge in Latin America: A Q&A with RocketFuel's Monica Taher",
        source: "Proactive Investors",
        category: "Leadership",
        url: "https://www.proactiveinvestors.com/companies/news/1023879/cryptocurrency-s-surge-in-latin-america-a-q-a-with-rocketfuel-s-monica-taher-1023879.html",
        thumbnail: "https://rocketfuel.inc/wp-content/uploads/2023/08/Screenshot-2023-08-23-at-11.33.23-AM-1024x512.png"
    },
    {
        date: "2023",
        title: "RocketFuel Blockchain set to achieve positive cash flow in September",
        source: "Proactive Investors",
        category: "Company News",
        url: "https://www.proactiveinvestors.com/companies/news/1021818/rocketfuel-blockchain-set-to-achieve-positive-cash-flow-in-september-as-transactions-soar-on-new-products-and-customer-wins-1021818.html",
        thumbnail: "https://rocketfuel.inc/wp-content/uploads/2023/07/Screenshot-2023-07-26-at-11.26.59-AM-1024x565.png"
    },
    {
        date: "2023",
        title: "RocketFuel Announces 15x Increase in Customer Traction from New Products",
        source: "Market Screener",
        category: "Company News",
        url: "https://www.marketscreener.com/quote/stock/ROCKETFUEL-BLOCKCHAIN-IN-111314318/news/RocketFuel-Announces-15x-Increase-in-Customer-Traction-from-New-Products-and-Customers-44426720/",
        thumbnail: "https://rocketfuel.inc/wp-content/uploads/2023/07/Screenshot-2023-07-26-at-11.21.18-AM-1024x823.png"
    },
    {
        date: "2023",
        title: "RocketFuel CEO says BlackRock's proposed spot Bitcoin ETF could be watershed moment",
        source: "Proactive Investors",
        category: "Industry Insights",
        url: "https://www.proactiveinvestors.com/companies/news/1020102/rocketfuel-ceo-says-blackrock-s-proposed-spot-bitcoin-etf-could-be-watershed-moment-for-crypto-1020102.html",
        thumbnail: "https://rocketfuel.inc/wp-content/uploads/2023/07/Screenshot-2023-07-12-at-10.57.10-AM-1024x635.png"
    },
    {
        date: "2023",
        title: "RocketFuel is revolutionizing online payments with cryptocurrencies",
        source: "Proactive Investors",
        category: "Product",
        url: "https://www.proactiveinvestors.co.uk/companies/news/1020030/rocketfuel-is-revolutionizing-online-payments-with-cryptocurrencies-and-seamless-checkout-experience-1020030.html",
        thumbnail: "https://rocketfuel.inc/wp-content/uploads/2023/07/Screenshot-2023-07-12-at-10.54.39-AM-1024x460.png"
    },
    {
        date: "2023",
        title: "RocketFuel weighs in on how Bitcoin ETF approval can encourage crypto adoption",
        source: "Yahoo Finance",
        category: "Industry Insights",
        url: "https://finance.yahoo.com/news/rocketfuel-weighs-bitcoin-etf-approval-215723907.html",
        thumbnail: "https://rocketfuel.inc/wp-content/uploads/2023/07/Screenshot-2023-07-12-at-10.49.33-AM-1024x462.png"
    },
    {
        date: "2023",
        title: "RocketFuel has a winner in B2B Cross-Border Payments, leveraging blockchain to cut costs",
        source: "Proactive Investors",
        category: "Product",
        url: "https://www.proactiveinvestors.com/companies/news/1019470/rocketfuel-has-a-winner-in-b2b-cross-border-payments-leveraging-blockchain-to-cut-costs-1019470.html",
        thumbnail: "https://rocketfuel.inc/wp-content/uploads/2023/07/RocketFuel-has-a-winner-in-B2B-Cross-Border-Payments-leveraging-blockchain-to-cut-costs-OTCMKTS-RKFL-1024x521.jpg"
    },
    {
        date: "2023",
        title: "RocketFuel stock flies after it raises revenue guidance to $5 million",
        source: "Proactive Investors",
        category: "Company News",
        url: "https://www.proactiveinvestors.com/companies/news/1018950/rocketfuel-stock-rockets-after-it-raises-revenue-guidance-to-5-million-1018950.html",
        thumbnail: "https://rocketfuel.inc/wp-content/uploads/2023/06/RocketFuel-Blockchain-Inc-flies-rockets-after-it-raises-revenue-guidance-to-5-million-1024x521.jpg"
    },
    {
        date: "2023",
        title: "RocketFuel launches Payouts product to let businesses pay customers in crypto",
        source: "Proactive Investors",
        category: "Product",
        url: "https://www.proactiveinvestors.com/companies/news/1017512/rocketfuel-launches-payouts-product-to-let-businesses-pay-customers-in-crypto-1017512.html",
        thumbnail: "https://rocketfuel.inc/wp-content/uploads/2023/06/RocketFuel-Inc-launches-its-Payouts-product-to-let-businesses-pay-their-customers-in-crypto-1024x491.jpg"
    },
    {
        date: "2023",
        title: "RocketFuel Blockchain launches Payouts program for users to receive crypto and fiat worldwide",
        source: "Barron's",
        category: "Product",
        url: "https://www.barrons.com/articles/rocketfuel-blockchain-launches-payouts-program-for-users-to-receive-crypto-and-fiat-worldwide-93326923",
        thumbnail: "https://rocketfuel.inc/wp-content/uploads/2023/06/RocketFuel-Blockchain-launches-Payouts-program-for-users-to-receive-crypto-and-fiat-worldwide-Barron-s-1024x517.jpg"
    },
    {
        date: "2022",
        title: "RocketFuel Blockchain Debuts B2B Cross-Border Settlement Solution",
        source: "PYMNTS",
        category: "Product",
        url: "https://www.pymnts.com/news/b2b-payments/2022/today-in-b2b-payments-back-office-operations-deserve-more-cfo-attention-rocketfuel-blockchain-debuts-b2b-cross-border-settlement-solution/",
        thumbnail: "https://rocketfuel.inc/wp-content/uploads/2023/06/Today-in-B2B-Payments-Back-Office-Operations-Deserve-More-CFO-Attention-RocketFuel-Blockchain-Debuts-B2B-Cross-Border-Settlement-Solution-1024x491.jpg"
    },
    {
        date: "2021",
        title: "ACI Teams With RocketFuel To Power Cryptocurrency Merchant Payments",
        source: "PYMNTS",
        category: "Partnerships",
        url: "https://www.pymnts.com/cryptocurrency/2021/aci-teams-with-rocketfuel-to-power-cryptocurrency-merchant-payments/",
        thumbnail: "https://rocketfuel.inc/wp-content/uploads/2023/06/ACI-Teams-With-RocketFuel-To-Power-Cryptocurrency-Merchant-Payments-1024x491.jpg"
    },
    {
        date: "2021",
        title: "Crypto Creeps into the Checkout Line",
        source: "Banking Dive",
        category: "Industry Insights",
        url: "https://www.bankingdive.com/news/crypto-creeps-checkout-line-marqeta-visa-mastercard-bitpay/609409/",
        thumbnail: "https://rocketfuel.inc/wp-content/uploads/2023/06/Crypto-creeps-into-the-checkout-line-Banking-Dive-1024x521.jpg"
    },
    {
        date: "2021",
        title: "RocketFuel Makes Crypto One-Click Pay Available For Cannabis Industry",
        source: "PYMNTS",
        category: "Product",
        url: "https://www.pymnts.com/news/bitcoin-tracker/2021/bitcoin-daily-rocketfuel-crypto-one-click-pay-cannabis-tesla-retains-1-billion-dollar-bitcoin-investment/",
        thumbnail: "https://rocketfuel.inc/wp-content/uploads/2023/06/Bitcoin-Daily-RocketFuel-Makes-Crypto-One-Click-Pay-Available-For-Cannabis-Industry-Tesla-Retains-Its-1-3B-Bitcoin-Investment-1024x491.jpg"
    },
    {
        date: "2021",
        title: "Cryptocurrencies are the Future of Payments: Here is How Merchants Fit In",
        source: "Retail TouchPoints",
        category: "Industry Insights",
        url: "https://www.retailtouchpoints.com/topics/digital-commerce/cryptocurrencies-are-the-future-of-payments-here-is-how-merchants-fit-in",
        thumbnail: "https://rocketfuel.inc/wp-content/uploads/2023/06/Cryptocurrencies-are-the-Future-of-Payments-Here-is-How-Merchants-Fit-In-Retail-TouchPoints-1024x491.jpg"
    },
    {
        date: "2021",
        title: "RocketFuel Introduces Industry-First Price Settlement Guarantee",
        source: "PR Newswire",
        category: "Product",
        url: "https://www.prnewswire.com/news-releases/rocketfuel-introduces-industry-first-price-settlement-guarantee-to-protect-merchants-from-crypto-volatility-301321802.html",
        thumbnail: "https://rocketfuel.inc/wp-content/uploads/2023/06/RocketFuel-Introduces-Industry-First-Price-Settlement-Guarantee-to-Protect-Merchants-from-Crypto-Volatility-1024x517.jpg"
    },
    {
        date: "2021",
        title: "Restaurants' Appetite for Cryptocurrency is Growing",
        source: "Restaurant Business",
        category: "Industry Insights",
        url: "https://www.restaurantbusinessonline.com/technology/restaurants-appetite-cryptocurrency-growing",
        thumbnail: "https://rocketfuel.inc/wp-content/uploads/2023/06/Restaurants-appetite-for-cryptocurrency-is-growing-1024x517.jpg"
    },
    {
        date: "2021",
        title: "RocketFuel: Payment Checkout Reinvented",
        source: "Fintech News",
        category: "Product",
        url: "https://www.fintechnews.org/rocketfuel-blockchain-payment-checkout-reinvented/",
        thumbnail: "https://rocketfuel.inc/wp-content/uploads/2023/06/ROCKETFUEL-BLOCKCHAIN-payment-checkout-Fintech-News-1024x517.jpg"
    },
    // TV Interviews
    {
        date: "05/15/2024",
        title: "RocketFuel Payment Solutions CEO Discusses Innovations in Digital Payments and Blockchain Technology",
        source: "Proactive Investors",
        category: "TV Interviews",
        url: "https://www.youtube.com/watch?v=rsBiq_98vcM",
        thumbnail: "https://img.youtube.com/vi/rsBiq_98vcM/maxresdefault.jpg"
    },
    {
        date: "04/24/2024",
        title: "RocketFuel CEO on Advancing Crypto Use in Business Payments",
        source: "Proactive Investors",
        category: "TV Interviews",
        url: "https://youtu.be/y8MWqoK-9Ik",
        thumbnail: "https://img.youtube.com/vi/y8MWqoK-9Ik/maxresdefault.jpg"
    },
    {
        date: "03/06/2024",
        title: "RocketFuel CEO Discusses Bitcoin's Rise and the Path to Wider Adoption",
        source: "Proactive Investors",
        category: "TV Interviews",
        url: "https://www.youtube.com/watch?v=565Qh2EQ3xE",
        thumbnail: "https://img.youtube.com/vi/565Qh2EQ3xE/maxresdefault.jpg"
    },
    {
        date: "02/28/2024",
        title: "RocketFuel Payment Solutions CEO Discusses Crypto Regulation and Adoption Trends",
        source: "Proactive Investors",
        category: "TV Interviews",
        url: "https://www.youtube.com/watch?v=JWsucag9l1M",
        thumbnail: "https://img.youtube.com/vi/JWsucag9l1M/maxresdefault.jpg"
    },
    {
        date: "02/21/2024",
        title: "RocketFuel Payment Solutions CEO Jensen Predicts Shift to Digital Currencies & Blockchain Globally",
        source: "Proactive Investors",
        category: "TV Interviews",
        url: "https://youtu.be/k6sHn06R23k",
        thumbnail: "https://img.youtube.com/vi/k6sHn06R23k/maxresdefault.jpg"
    },
    {
        date: "02/06/2024",
        title: "RocketFuel Payment Solutions' Year-Over-Year Growth Reflects Expanding Product Portfolio",
        source: "Proactive Investors",
        category: "TV Interviews",
        url: "https://youtu.be/VywuID2Nv4I",
        thumbnail: "https://img.youtube.com/vi/VywuID2Nv4I/maxresdefault.jpg"
    },
    {
        date: "01/24/2024",
        title: "RocketFuel's Peter Jensen Discusses Delisting Decision to Prioritize Customer Service and Expansion",
        source: "Proactive Investors",
        category: "TV Interviews",
        url: "https://youtu.be/IcvhQJm6Eo8",
        thumbnail: "https://img.youtube.com/vi/IcvhQJm6Eo8/maxresdefault.jpg"
    },
    {
        date: "01/03/2024",
        title: "RocketFuel's explosive 2023 growth and exciting plans for 2024 in digital payments",
        source: "Proactive Investors",
        category: "TV Interviews",
        url: "https://youtu.be/7eyRyKQLuS0",
        thumbnail: "https://img.youtube.com/vi/7eyRyKQLuS0/maxresdefault.jpg"
    },
    {
        date: "12/20/2023",
        title: "Rocketfuel Payment Solutions sees Cryptocurrency on the Rise as company looks for Expansion in 2024",
        source: "Proactive Investors",
        category: "TV Interviews",
        url: "https://youtu.be/s3ZSR-pvby0",
        thumbnail: "https://img.youtube.com/vi/s3ZSR-pvby0/maxresdefault.jpg"
    },
    {
        date: "12/13/2023",
        title: "RocketFuel Reveals $3.7 Billion Market Projections by 2032 with Blockchain and AI Integration",
        source: "Proactive Investors",
        category: "TV Interviews",
        url: "https://youtu.be/jZGmImmwyyY",
        thumbnail: "https://img.youtube.com/vi/jZGmImmwyyY/maxresdefault.jpg"
    },
    {
        date: "12/11/2023",
        title: "RocketFuel & Ripple's XRP Ledger: The Key to Transforming Global Payments",
        source: "Proactive Investors",
        category: "TV Interviews",
        url: "https://youtu.be/zanN3xfdC74",
        thumbnail: "https://img.youtube.com/vi/zanN3xfdC74/maxresdefault.jpg"
    },
    {
        date: "12/01/2023",
        title: "RocketFuel CEO reveals explosive growth over 400,000 crypto transactions so far in 2023",
        source: "Proactive Investors",
        category: "TV Interviews",
        url: "https://youtu.be/jdCn9HOj3_k",
        thumbnail: "https://img.youtube.com/vi/jdCn9HOj3_k/maxresdefault.jpg"
    },
    {
        date: "11/22/2023",
        title: "RocketFuel revolutionizing payments with speed, security, and seamless integrations",
        source: "Proactive Investors",
        category: "TV Interviews",
        url: "https://youtu.be/QUWzlXa-U8k",
        thumbnail: "https://img.youtube.com/vi/QUWzlXa-U8k/maxresdefault.jpg"
    },
    {
        date: "11/15/2023",
        title: "Revolutionizing Global Payments RocketFuel's Reveals How Cryptocurrency is Transforming Businesses",
        source: "Proactive Investors",
        category: "TV Interviews",
        url: "https://youtu.be/igzhAf1lJBk",
        thumbnail: "https://img.youtube.com/vi/igzhAf1lJBk/maxresdefault.jpg"
    },
    {
        date: "11/08/2023",
        title: "Live from Dubai: Peter Jensen, RocketFuel's CEO, discusses the company's partnership with Ripple",
        source: "Proactive Investors",
        category: "TV Interviews",
        url: "https://www.youtube.com/watch?v=w28zOjcaVaY",
        thumbnail: "https://img.youtube.com/vi/w28zOjcaVaY/maxresdefault.jpg"
    },
    {
        date: "11/02/2023",
        title: "Peter Jensen, RocketFuel's CEO, discusses crypto payments latest data",
        source: "Proactive Investors",
        category: "TV Interviews",
        url: "https://youtu.be/qvKKJL1wFfs",
        thumbnail: "https://img.youtube.com/vi/qvKKJL1wFfs/maxresdefault.jpg"
    },
    {
        date: "2023",
        title: "RocketFuel CEO: 'Too much' Bitcoin regulation will suppress technical advancement",
        source: "Fox Business",
        category: "TV Interviews",
        url: "https://video.foxbusiness.com/v/6282668862001"
    },
    {
        date: "2023",
        title: "Benzinga Crypto Festival: The Next Phase - Accepting and Paying with Crypto Currencies",
        source: "Benzinga",
        category: "TV Interviews",
        url: "https://benzinga.wistia.com/medias/y2uodxj1ty"
    },
    {
        date: "2023",
        title: "RocketFuel CEO: Investors beginning to view cryptocurrency as technology",
        source: "Fox Business",
        category: "TV Interviews",
        url: "https://video.foxbusiness.com/v/6261924519001"
    },
    {
        date: "2021",
        title: "RocketFuel enables online payment options with cryptocurrency",
        source: "Yahoo Finance",
        category: "TV Interviews",
        url: "https://finance.yahoo.com/video/rocketfuel-enables-online-payment-options-190116899.html"
    },
    {
        date: "2021",
        title: "Fox Business News TV with Peter Jensen, CEO Rocketfuel",
        source: "Fox Business",
        category: "TV Interviews",
        url: "https://video.foxbusiness.com/v/6246307497001"
    }
];

export default function PressCoverageClient() {
    const [selectedCategory, setSelectedCategory] = useState<string>("All");

    const categories = ["All", "Company News", "Product", "Partnerships", "Leadership", "Industry Insights", "Regulation", "TV Interviews"];

    const filteredArticles = selectedCategory === "All"
        ? pressArticles
        : pressArticles.filter(article => article.category === selectedCategory);

    return (
        <main className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative py-24 md:py-32 overflow-hidden bg-white">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-100/40 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 z-0" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                            Press Coverage
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                            Comprehensive collection of RocketFuel's media coverage across leading financial and technology publications.
                        </p>
                    </div>
                </div>
            </section>

            {/* Filter Section */}
            <section className="py-8 bg-gray-50 border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-3 overflow-x-auto pb-2">
                        <Filter className="w-5 h-5 text-gray-600 flex-shrink-0" />
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${selectedCategory === category
                                    ? 'bg-gradient-to-r from-yellow-500 to-orange-600 text-white shadow-lg'
                                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Articles Grid */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-8">
                        <p className="text-gray-600">
                            Showing <span className="font-bold text-orange-600">{filteredArticles.length}</span> {selectedCategory === "TV Interviews" ? "videos" : "articles"}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredArticles.map((article, i) => {
                            // Extract YouTube video ID for thumbnail
                            const getYouTubeThumbnail = (url: string) => {
                                const patterns = [
                                    /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/,
                                    /youtube\.com\/embed\/([^&\s]+)/,
                                ];

                                for (const pattern of patterns) {
                                    const match = url.match(pattern);
                                    if (match) {
                                        // Use hqdefault as it's more reliable than maxresdefault
                                        return `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg`;
                                    }
                                }
                                return null;
                            };

                            const thumbnail = article.category === "TV Interviews" ? getYouTubeThumbnail(article.url) : null;

                            return (
                                <motion.a
                                    key={i}
                                    href={article.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: (i % 9) * 0.05, duration: 0.4 }}
                                    className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-gray-100 group"
                                >
                                    {/* Thumbnail Hero Section */}
                                    {article.category === "TV Interviews" ? (
                                        /* Video Thumbnail for TV Interviews */
                                        <div className="relative aspect-video bg-gradient-to-br from-orange-500 to-orange-600 overflow-hidden">
                                            {thumbnail && (
                                                <img
                                                    src={thumbnail}
                                                    alt={article.title}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                    onError={(e) => {
                                                        // Hide image on error, show gradient background
                                                        e.currentTarget.style.display = 'none';
                                                    }}
                                                />
                                            )}
                                            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                                                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M8 5v14l11-7z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    ) : article.thumbnail ? (
                                        /* Article Thumbnail for Press Articles */
                                        <div className="relative aspect-video bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                                            <img
                                                src={article.thumbnail}
                                                alt={article.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                            <div className="absolute top-3 right-3">
                                                <ExternalLink className="w-5 h-5 text-white drop-shadow-lg" />
                                            </div>
                                        </div>
                                    ) : null}

                                    <div className="p-6">
                                        <div className="flex items-center justify-between mb-3">
                                            <div className="flex items-center gap-2 text-sm text-orange-600 font-medium">
                                                <ExternalLink className="w-4 h-4" />
                                                <span>{article.source}</span>
                                            </div>
                                            <span className="px-2 py-1 bg-orange-50 text-orange-600 rounded-full text-xs font-medium">
                                                {article.category}
                                            </span>
                                        </div>

                                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors mb-3 line-clamp-2">
                                            {article.title}
                                        </h3>

                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2 text-sm text-gray-500">
                                                <Calendar className="w-4 h-4" />
                                                <span>{article.date}</span>
                                            </div>
                                            <div className="flex items-center text-orange-600 font-medium text-sm">
                                                {article.category === "TV Interviews" ? "Watch" : "Read"} <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </div>
                                    </div>
                                </motion.a>
                            );
                        })}
                    </div>
                </div>
            </section>
        </main>
    );
}
