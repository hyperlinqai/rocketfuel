import type { Metadata } from 'next';
import { RequestDemoHero } from '@/components/request-demo/RequestDemoHero';
import { RequestDemoHighlights } from '@/components/request-demo/RequestDemoHighlights';
import { RequestDemoFeatures } from '@/components/request-demo/RequestDemoFeatures';
import { RequestDemoForm } from '@/components/request-demo/RequestDemoForm';
import { RequestDemoTrusted } from '@/components/request-demo/RequestDemoTrusted';
import { RequestDemoCTA } from '@/components/request-demo/RequestDemoCTA';

export const metadata: Metadata = {
    title: 'Request a Demo | See RocketFuel in Action',
    description: 'Experience RocketFuel’s global payment solutions. Accept crypto, stablecoins, and fiat with instant settlement, low fees, and full compliance. Request your live demo today.',
};

export default function RequestDemoPage() {
    return (
        <main className="min-h-screen bg-white">
            <RequestDemoHero />
            <RequestDemoHighlights />
            <RequestDemoFeatures />
            <RequestDemoForm />
            <RequestDemoTrusted />
            <RequestDemoCTA />
        </main>
    );
}
