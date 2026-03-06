import { Metadata } from 'next';
import CareersClient from './CareersClient';

export const metadata: Metadata = {
    title: 'Careers at RocketFuel | Join the Future of Global Payments',
    description: 'Join RocketFuel and help shape the future of global payments. We\'re building fast, compliant, and borderless payment solutions powered by crypto, stablecoins, and modern infrastructure.',
};

export default function CareersPage() {
    return <CareersClient />;
}
