import { Metadata } from 'next';
import CreatorPlatformsClient from './CreatorPlatformsClient';

export const metadata: Metadata = {
    title: 'Creator Platform Payments | Instant Crypto and Stablecoin Payouts | RocketFuel',
    description: 'RocketFuel empowers creator and subscription platforms with global crypto and stablecoin payments. Accept tips, handle subscriptions, and pay creators instantly with blockchain transparency.',
};

export default function CreatorPlatformsPage() {
    return <CreatorPlatformsClient />;
}
