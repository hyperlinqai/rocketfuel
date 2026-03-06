import { constructMetadata } from '@/seo/metadata';
import { SolutionsHero } from '@/components/solutions/SolutionsHero';
import { IndustryGrid } from '@/components/solutions/IndustryGrid';
import { CoreSolutions } from '@/components/solutions/CoreSolutions';
import { WhyChoose } from '@/components/solutions/WhyChoose';
import { PartnersSection } from '@/components/solutions/PartnersSection';
import { GlobalCompliance } from '@/components/solutions/GlobalCompliance';
import { SolutionsCTA } from '@/components/solutions/SolutionsCTA';

export const metadata = constructMetadata({
    title: 'Crypto Payment and Payout Solutions',
    description: 'RocketFuel delivers crypto payment, stablecoin payout, and blockchain loyalty solutions for modern businesses. Power global commerce across gaming, marketplaces, creator platforms, and more.'
});

export default function SolutionsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <SolutionsHero />
            <IndustryGrid />
            <CoreSolutions />
            <WhyChoose />
            <PartnersSection />
            <GlobalCompliance />
            <SolutionsCTA />
        </div>
    );
}
