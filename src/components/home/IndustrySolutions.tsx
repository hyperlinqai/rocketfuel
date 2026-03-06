import Link from 'next/link';

const industries = [
    "Skills-Based Gaming",
    "Social Commerce",
    "Marketplaces",
    "Affiliate Marketing",
    "Gig Economy",
    "Creator Platforms",
    "Private Charters",
    "Restaurants",
    "Hospitality",
    "Consignment/Resale",
    "Software Development",
    "Global Royalties"
];

export function IndustrySolutions() {
    return (
        <section className="bg-secondary-bg py-24 px-4">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-primary-text mb-6">
                    Purpose-built flows for your business model.
                </h2>

                <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-12 mb-12">
                    {industries.map((industry, index) => (
                        <span
                            key={index}
                            className="bg-white border border-gray-200 text-secondary-text px-6 py-3 rounded-full text-base md:text-lg font-medium hover:border-button-action hover:text-button-action hover:bg-blue-50 transition-all cursor-default shadow-sm"
                        >
                            {industry}
                        </span>
                    ))}
                </div>

                <Link
                    href="/solutions"
                    className="bg-primary-text hover:bg-gray-800 text-white font-semibold py-3 px-8 rounded-lg transition-colors inline-block"
                >
                    Browse solutions
                </Link>
            </div>
        </section>
    );
}
