import { Metadata } from 'next';
import SoftwareDevelopmentClient from './SoftwareDevelopmentClient';

export const metadata: Metadata = {
    title: 'Software Payments | Crypto and Stablecoin Solutions for SaaS | RocketFuel',
    description: 'RocketFuel enables software and SaaS platforms to accept crypto, stablecoins, and fiat. Simplify global subscriptions, license billing, and developer payouts with instant settlement.',
};

export default function SoftwareDevelopmentPage() {
    return <SoftwareDevelopmentClient />;
}
