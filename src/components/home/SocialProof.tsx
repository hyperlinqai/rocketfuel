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

                <div className="flex overflow-hidden relative">
                    {/* Gradient Masks */}
                    <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-secondary-bg to-transparent z-10 pointer-events-none" />
                    <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-secondary-bg to-transparent z-10 pointer-events-none" />

                    {/* Marquee Container */}
                    <div className="flex animate-marquee gap-8 md:gap-16 pr-8 md:pr-16 w-max opacity-70 hover:opacity-100 transition-opacity duration-300">
                        {/* Original Array */}
                        {partners.map((partner, index) => (
                            <div key={`logo-1-${index}`} className="h-12 md:h-16 w-32 md:w-40 relative flex-shrink-0 grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300">
                                <Image
                                    src={partner.logo}
                                    alt={partner.name}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        ))}
                        {/* Duplicated Array for infinite scroll effect */}
                        {partners.map((partner, index) => (
                            <div key={`logo-2-${index}`} className="h-12 md:h-16 w-32 md:w-40 relative flex-shrink-0 grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300">
                                <Image
                                    src={partner.logo}
                                    alt={partner.name}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <p className="mt-8 text-sm text-secondary-text max-w-2xl mx-auto italic">
                    "From marketplaces to creators and gig platforms, RocketFuel helps businesses get paid—and pay out—fast."
                </p>
            </div>
        </section>
    );
}
