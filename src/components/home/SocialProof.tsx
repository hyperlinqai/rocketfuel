import Image from 'next/image';

const partners = [
    { name: 'ACI Worldwide', logo: '/images/partners/aci-worldwide.png' },
    { name: 'Merchant Connection', logo: '/images/partners/merchant-connection.png' },
    { name: 'Payment Cloud', logo: '/images/partners/payment-cloud.png' },
    { name: 'Shark Processing', logo: '/images/partners/shark-processing.png' },
    { name: 'Signature Payment', logo: '/images/partners/signature-payment.png' },
    { name: 'Trellis', logo: '/images/partners/trellis.png' }
];

export function SocialProof() {
    return (
        <section className="bg-secondary-bg py-12 border-y border-gray-100">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <p className="text-secondary-text font-medium mb-8">
                    Trusted by platforms processing millions monthly
                </p>

                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                    {partners.map((partner, index) => (
                        <div key={index} className="h-16 md:h-20 w-32 md:w-40 relative hover:scale-110 transition-transform">
                            <Image
                                src={partner.logo}
                                alt={partner.name}
                                fill
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>

                <p className="mt-8 text-sm text-secondary-text max-w-2xl mx-auto italic">
                    "From marketplaces to creators and gig platforms, RocketFuel helps businesses get paid—and pay out—fast."
                </p>
            </div>
        </section>
    );
}
