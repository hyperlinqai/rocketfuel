import { constructMetadata } from '@/seo/metadata';
import { CaseStudiesHero } from '@/components/case-studies/CaseStudiesHero';
import { CaseStudiesOverview } from '@/components/case-studies/CaseStudiesOverview';
import { CaseStudiesFeatured } from '@/components/case-studies/CaseStudiesFeatured';
import { CaseStudiesIndustries } from '@/components/case-studies/CaseStudiesIndustries';
import { CaseStudiesCTA } from '@/components/case-studies/CaseStudiesCTA';

export const metadata = constructMetadata({
    title: "RocketFuel Case Studies | How Businesses Use Crypto and Stablecoin Payments to Grow",
    description: "Explore how businesses use RocketFuel to simplify payments, scale globally, and save costs with instant crypto and stablecoin transactions.",
});

export default function CaseStudiesPage() {
    return (
        <main className="bg-white">
            <CaseStudiesHero />
            <CaseStudiesOverview />
            <CaseStudiesFeatured />
            <CaseStudiesIndustries />
            <CaseStudiesCTA />
        </main>
    );
}
