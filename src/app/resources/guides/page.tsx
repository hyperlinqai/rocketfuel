import type { Metadata } from 'next';
import { GuidesHero } from '@/components/guides/GuidesHero';
import { GuidesLearningValues } from '@/components/guides/GuidesLearningValues';
import { GuidesFeatured } from '@/components/guides/GuidesFeatured';
import { GuidesMission } from '@/components/guides/GuidesMission';
import { GuidesNewsletter } from '@/components/guides/GuidesNewsletter';

export const metadata: Metadata = {
    title: 'RocketFuel Guides | Learn About Crypto, Stablecoins, and Global Payment Innovation',
    description: 'Explore RocketFuel’s guides to learn how crypto and stablecoin payments work. Understand cross-border payments, compliance, and blockchain technology — simplified for businesses.',
};

export default function GuidesPage() {
    return (
        <main className="min-h-screen bg-white">
            <GuidesHero />
            <GuidesLearningValues />
            <GuidesFeatured />
            <GuidesMission />
            <GuidesNewsletter />
        </main>
    );
}
