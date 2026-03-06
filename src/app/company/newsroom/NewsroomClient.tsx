'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    ArrowRight, Newspaper, FileText, ExternalLink,
    Mail, Download, Linkedin, Twitter, BookOpen,
    Calendar, Tag, TrendingUp
} from 'lucide-react';
import React from 'react';

// --- Animation Variants ---
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

// --- Hero Section ---
function Hero() {
    return (
        <section className="relative py-24 md:py-32 overflow-hidden bg-white">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-100/40 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 z-0" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-100/40 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    className="text-center max-w-4xl mx-auto"
                >
                    <motion.div
                        variants={fadeInUp}
                        className="inline-flex items-center px-4 py-2 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-sm font-medium mb-8"
                    >
                        <Newspaper className="w-4 h-4 mr-2" />
                        Newsroom
                    </motion.div>

                    <motion.h1
                        variants={fadeInUp}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight"
                    >
                        RocketFuel in the{' '}
                        <span className="bg-gradient-to-r from-yellow-500 to-orange-600 bg-clip-text text-transparent">
                            News
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={fadeInUp}
                        className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto"
                    >
                        Follow our latest announcements, media features, and updates as we build the future of global payments.
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
}

// --- Press Releases Section (using Media Coverage data) ---
function PressReleases() {
    const articles = [
        {
            title: "RocketFuel Pre-Announces Record Growth In Q1-Q3 2024",
            source: "Yahoo Finance",
            url: "https://finance.yahoo.com/news/rocketfuel-pre-announces-record-growth-024100746.html",
            thumbnail: "https://rocketfuel.inc/wp-content/uploads/2025/01/Screenshot-2025-01-06-at-5.14.05%E2%80%AFPM-1024x414.png"
        },
        {
            title: "RocketFuel CEO shares vision of transforming payments",
            source: "Proactive Investors",
            url: "https://www.proactiveinvestors.com/companies/news/1047783/rocketfuel-ceo-shares-vision-of-transforming-payments-with-improved-efficiency-and-financial-inclusion-1047783.html",
            thumbnail: "https://rocketfuel.inc/wp-content/uploads/2024/05/Screenshot-2024-05-16-at-9.43.03%E2%80%AFPM-1024x518.png"
        },
        {
            title: "AI and Blockchain Technology Combined: RocketFuel's Ben Yankowitz",
            source: "CFO.com",
            url: "https://www.cfo.com/news/ai-blockchain-rocketfuels-ben-yankowitz-technology-crypto/691521/",
            thumbnail: "https://rocketfuel.inc/wp-content/uploads/2023/08/Screenshot-2023-08-24-at-10.52.57-AM-1024x569.png"
        },
        {
            title: "ACI Teams With RocketFuel To Power Cryptocurrency Merchant Payments",
            source: "PYMNTS",
            url: "https://www.pymnts.com/cryptocurrency/2021/aci-teams-with-rocketfuel-to-power-cryptocurrency-merchant-payments/",
            thumbnail: "https://rocketfuel.inc/wp-content/uploads/2023/06/ACI-Teams-With-RocketFuel-To-Power-Cryptocurrency-Merchant-Payments-1024x491.jpg"
        },
        {
            title: "Crypto Creeps into the Checkout Line",
            source: "Banking Dive",
            url: "https://www.bankingdive.com/news/crypto-creeps-checkout-line-marqeta-visa-mastercard-bitpay/609409/",
            thumbnail: "https://rocketfuel.inc/wp-content/uploads/2023/06/Crypto-creeps-into-the-checkout-line-Banking-Dive-1024x521.jpg"
        },
        {
            title: "RocketFuel: Payment Checkout Reinvented",
            source: "Fintech News",
            url: "https://www.fintechnews.org/rocketfuel-blockchain-payment-checkout-reinvented/",
            thumbnail: "https://rocketfuel.inc/wp-content/uploads/2023/06/ROCKETFUEL-BLOCKCHAIN-payment-checkout-Fintech-News-1024x517.jpg"
        }
    ];

    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                        Press Releases
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        See how RocketFuel is featured across leading financial and technology publications.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {articles.map((article, i) => (
                        <motion.a
                            key={i}
                            href={article.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-gray-100 group"
                        >
                            {/* Article Thumbnail Hero Section */}
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

                            <div className="p-6">
                                <div className="flex items-center gap-2 text-sm text-orange-600 font-medium mb-3">
                                    <ExternalLink className="w-4 h-4" />
                                    <span>{article.source}</span>
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors mb-3 line-clamp-2">
                                    {article.title}
                                </h3>
                                <div className="flex items-center text-orange-600 font-medium text-sm">
                                    Read Article <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>

                <div className="text-center">
                    <Link href="/company/newsroom/press-coverage">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white rounded-full font-semibold shadow-lg shadow-orange-500/20 cursor-pointer"
                        >
                            View All Media Coverage <ArrowRight className="w-5 h-5" />
                        </motion.div>
                    </Link>
                </div>
            </div>
        </section>
    );
}

// --- TV Interviews Section ---
function TVInterviews() {
    const interviews = [
        {
            date: "05/15/2024",
            title: "RocketFuel Payment Solutions CEO Discusses Innovations in Digital Payments and Blockchain Technology",
            source: "Proactive Investors",
            url: "https://www.youtube.com/watch?v=rsBiq_98vcM"
        },
        {
            date: "04/24/2024",
            title: "RocketFuel CEO on Advancing Crypto Use in Business Payments",
            source: "Proactive Investors",
            url: "https://youtu.be/y8MWqoK-9Ik"
        },
        {
            date: "03/06/2024",
            title: "RocketFuel CEO Discusses Bitcoin's Rise and the Path to Wider Adoption",
            source: "Proactive Investors",
            url: "https://www.youtube.com/watch?v=565Qh2EQ3xE"
        }
    ];

    // Extract YouTube video ID for thumbnail
    const getYouTubeThumbnail = (url: string) => {
        const patterns = [
            /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/,
            /youtube\.com\/embed\/([^&\s]+)/,
        ];

        for (const pattern of patterns) {
            const match = url.match(pattern);
            if (match) {
                return `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg`;
            }
        }
        return null;
    };

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                        TV Interviews
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Watch our leadership team discuss the future of payments, blockchain technology, and crypto adoption.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {interviews.map((interview, i) => {
                        const thumbnail = getYouTubeThumbnail(interview.url);

                        return (
                            <motion.a
                                key={i}
                                href={interview.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.6 }}
                                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-gray-100 group"
                            >
                                {/* Video Thumbnail */}
                                <div className="relative aspect-video bg-gradient-to-br from-orange-500 to-orange-600 overflow-hidden">
                                    {thumbnail && (
                                        <img
                                            src={thumbnail}
                                            alt={interview.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                            onError={(e) => {
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

                                <div className="p-6">
                                    <div className="flex items-center gap-2 text-sm text-orange-600 font-medium mb-3">
                                        <ExternalLink className="w-4 h-4" />
                                        <span>{interview.source}</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors mb-3 line-clamp-2">
                                        {interview.title}
                                    </h3>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2 text-sm text-gray-500">
                                            <Calendar className="w-4 h-4" />
                                            <span>{interview.date}</span>
                                        </div>
                                        <div className="flex items-center text-orange-600 font-medium text-sm">
                                            Watch <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </div>
                            </motion.a>
                        );
                    })}
                </div>

                <div className="text-center">
                    <Link href="/company/newsroom/press-coverage">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-orange-600 text-orange-600 rounded-full font-semibold hover:bg-orange-50 transition-colors cursor-pointer"
                        >
                            View All TV Interviews <ArrowRight className="w-4 h-4" />
                        </motion.div>
                    </Link>
                </div>
            </div>
        </section>
    );
}

// --- Media Coverage Section ---
function MediaCoverage() {
    const articles = [
        {
            title: "RocketFuel Pre-Announces Record Growth In Q1-Q3 2024",
            source: "Yahoo Finance",
            url: "https://finance.yahoo.com/news/rocketfuel-pre-announces-record-growth-024100746.html"
        },
        {
            title: "RocketFuel CEO shares vision of transforming payments",
            source: "Proactive Investors",
            url: "https://www.proactiveinvestors.com/companies/news/1047783/rocketfuel-ceo-shares-vision-of-transforming-payments-with-improved-efficiency-and-financial-inclusion-1047783.html"
        },
        {
            title: "AI and Blockchain Technology Combined: RocketFuel's Ben Yankowitz",
            source: "CFO.com",
            url: "https://www.cfo.com/news/ai-blockchain-rocketfuels-ben-yankowitz-technology-crypto/691521/"
        },
        {
            title: "ACI Teams With RocketFuel To Power Cryptocurrency Merchant Payments",
            source: "PYMNTS",
            url: "https://www.pymnts.com/cryptocurrency/2021/aci-teams-with-rocketfuel-to-power-cryptocurrency-merchant-payments/"
        },
        {
            title: "Crypto Creeps into the Checkout Line",
            source: "Banking Dive",
            url: "https://www.bankingdive.com/news/crypto-creeps-checkout-line-marqeta-visa-mastercard-bitpay/609409/"
        },
        {
            title: "RocketFuel: Payment Checkout Reinvented",
            source: "Fintech News",
            url: "https://www.fintechnews.org/rocketfuel-blockchain-payment-checkout-reinvented/"
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                        Media Coverage
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        See how RocketFuel is featured across leading financial and technology publications.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {articles.map((article, i) => (
                        <motion.a
                            key={i}
                            href={article.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            className="bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all border border-gray-100 group"
                        >
                            <div className="flex items-center gap-2 text-sm text-orange-600 font-medium mb-3">
                                <ExternalLink className="w-4 h-4" />
                                <span>{article.source}</span>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors mb-3">
                                {article.title}
                            </h3>
                            <div className="flex items-center text-orange-600 font-medium text-sm">
                                Read Article <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </motion.a>
                    ))}
                </div>

                <div className="text-center">
                    <Link href="/company/newsroom/press-coverage">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-orange-600 text-orange-600 rounded-full font-semibold hover:bg-orange-50 transition-colors cursor-pointer"
                        >
                            View All Media Coverage <ArrowRight className="w-4 h-4" />
                        </motion.div>
                    </Link>
                </div>
            </div>
        </section>
    );
}

// --- Product Updates Section ---
function ProductUpdates() {
    const updates = [
        {
            icon: FileText,
            title: "RocketFuel launches Crypto Invoicing Solution for global merchants",
            tag: "Product Launch"
        },
        {
            icon: TrendingUp,
            title: "Introducing ZeroProof — privacy-first age verification powered by blockchain",
            tag: "New Feature"
        },
        {
            icon: Tag,
            title: "R Points: Blockchain loyalty reimagined for merchants and PSPs",
            tag: "Platform Update"
        }
    ];

    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                        What's New at RocketFuel
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Stay current with new features, integrations, and product releases.
                    </p>
                </div>

                <div className="space-y-6">
                    {updates.map((update, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all border border-gray-100 flex items-center gap-6 cursor-pointer group"
                        >
                            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 flex-shrink-0">
                                <update.icon className="w-6 h-6" />
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="px-3 py-1 bg-orange-50 text-orange-600 rounded-full text-xs font-medium">
                                        {update.tag}
                                    </span>
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                                    {update.title}
                                </h3>
                            </div>
                            <ArrowRight className="w-5 h-5 text-orange-600 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// --- Contact Media Team Section ---
function ContactMedia() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                    Press Inquiries and Requests
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                    Members of the media can contact our communications team for interviews, brand assets, or additional information.
                </p>

                <div className="bg-gray-50 rounded-2xl p-8 mb-8 border border-gray-100">
                    <Mail className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                    <p className="text-gray-600 mb-2">Email our PR team:</p>
                    <a href="mailto:press@rocketfuel.inc" className="text-2xl font-bold text-orange-600 hover:text-orange-700">
                        press@rocketfuel.inc
                    </a>
                </div>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link href="/contact">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn-primary px-8 py-4 flex items-center justify-center gap-2 cursor-pointer bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 border-transparent shadow-lg shadow-orange-500/20"
                        >
                            Contact PR Team <Mail className="w-5 h-5" />
                        </motion.div>
                    </Link>
                    <Link href="/contact">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn-secondary px-8 py-4 flex items-center gap-2 cursor-pointer"
                        >
                            Download Media Kit <Download className="w-5 h-5" />
                        </motion.div>
                    </Link>
                </div>
            </div>
        </section>
    );
}

// --- Stay Connected Section ---
function StayConnected() {
    const socials = [
        { icon: Linkedin, name: "LinkedIn", handle: "RocketFuel Payments", link: "#" },
        { icon: Twitter, name: "Twitter/X", handle: "@RocketFuelPay", link: "#" },
        { icon: BookOpen, name: "Blog", handle: "Visit Blog", link: "/blog" }
    ];

    return (
        <section className="py-24 bg-gradient-to-br from-yellow-500 to-orange-600 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3" />
            <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Follow RocketFuel</h2>
                <p className="text-xl text-yellow-100 mb-12">
                    For the latest company news, product updates, and thought leadership
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                    {socials.map((social, i) => (
                        <a
                            key={i}
                            href={social.link}
                            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all group"
                        >
                            <social.icon className="w-10 h-10 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                            <h3 className="font-bold text-lg mb-1">{social.name}</h3>
                            <p className="text-yellow-100 text-sm">{social.handle}</p>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default function NewsroomClient() {
    return (
        <main className="flex flex-col min-h-screen">
            <Hero />
            <PressReleases />
            <TVInterviews />
            <ProductUpdates />
            <ContactMedia />
            <StayConnected />
        </main>
    );
}
