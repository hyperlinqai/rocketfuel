import Link from 'next/link';
import Image from 'next/image';

const products = [
    {
        title: "Crypto Merchant Processing",
        description: "One checkout for crypto & bank. Lift approvals, lower cost, settle your way.",
        image: "/images/products/crypto-merchant.png",
        link: "/products/crypto-merchant-processing"
    },
    {
        title: "Global Payouts",
        description: "Pay vendors, contractors, and partners in minutes—stablecoin or fiat.",
        image: "/images/products/global-payouts.png",
        link: "/products/global-payouts"
    },
    {
        title: "Invoicing",
        description: "Send invoices that get paid fast. Amount-locked quotes and auto-reconciliation.",
        image: "/images/products/invoicing.png",
        link: "/products/crypto-invoicing"
    },
    {
        title: "Card-to-Giftcard",
        description: "Approve more card payments by issuing single-use, on-chain gift cards.",
        image: "/images/products/giftcard.png",
        link: "/products/giftcards"
    },
    {
        title: "ZeroProof",
        description: "Zero Knowledge Proof Age Verification, Built on Blockchain.",
        image: "/images/products/zeroproof.png",
        link: "/products/age-verification"
    },
    {
        title: "R-Points",
        description: "Blockchain Loyalty & Rewards Network",
        image: "/images/products/rewards.png",
        link: "/products/blockchain-loyalty-network"
    }
];

export function ProductSnapshot() {
    return (
        <section className="bg-secondary-bg py-24 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary-text mb-6">
                        Everything you need to orchestrate money.
                    </h2>
                    <p className="text-secondary-text max-w-2xl mx-auto">
                        A complete suite of payment products designed for the modern economy.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <Link
                            key={index}
                            href={product.link}
                            className={`group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 animate-on-scroll stagger-${index + 1}`}
                        >
                            <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform overflow-hidden">
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    width={64}
                                    height={64}
                                    className="object-contain"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-primary-text mb-3 group-hover:text-button-action transition-colors">
                                {product.title}
                            </h3>
                            <p className="text-secondary-text leading-relaxed">
                                {product.description}
                            </p>
                        </Link>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <Link
                        href="/products"
                        className="bg-button-action hover:bg-button-action-hover text-white font-semibold py-3 px-8 rounded-lg transition-colors shadow-md inline-flex items-center"
                    >
                        Explore our products
                    </Link>
                </div>
            </div>
        </section>
    );
}
