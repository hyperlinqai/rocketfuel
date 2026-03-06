import { Metadata } from 'next';
import RestaurantsClient from './RestaurantsClient';

export const metadata: Metadata = {
    title: 'Restaurant Payments | Crypto and Stablecoin Solutions for Dining | RocketFuel',
    description: 'RocketFuel enables restaurants to accept crypto, stablecoins, and fiat both online and in-store. Process orders instantly, reduce fees, and settle in local currency with full compliance.',
};

export default function RestaurantsPage() {
    return <RestaurantsClient />;
}
