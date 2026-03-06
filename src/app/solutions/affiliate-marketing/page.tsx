import { Metadata } from 'next';
import AffiliateMarketingClient from './AffiliateMarketingClient';

export const metadata: Metadata = {
    title: 'Affiliate Marketing Solutions | RocketFuel',
    description: 'RocketFuel powers global affiliate and referral payments with instant stablecoin and crypto payouts. Reward partners faster, reduce delays, and automate settlements across your network.',
};

export default function AffiliateMarketingPage() {
    return <AffiliateMarketingClient />;
}
