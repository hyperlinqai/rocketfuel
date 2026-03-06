import { Metadata } from 'next';
import GigEconomyClient from './GigEconomyClient';

export const metadata: Metadata = {
    title: 'Gig Economy Payments | Instant Global Payouts | RocketFuel',
    description: 'Empower your global workforce with instant crypto and fiat payouts. RocketFuel enables gig platforms to pay freelancers anywhere, anytime, with low fees and full compliance.',
};

export default function GigEconomyPage() {
    return <GigEconomyClient />;
}
