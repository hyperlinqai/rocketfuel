import { Metadata } from 'next';
import HospitalityClient from './HospitalityClient';

export const metadata: Metadata = {
    title: 'Hospitality Payments | Crypto and Stablecoin Solutions for Hotels and Resorts | RocketFuel',
    description: 'RocketFuel enables hotels, resorts, and hospitality brands to accept crypto, stablecoins, and fiat. Offer global guests faster, cheaper, and more secure payments with instant settlement.',
};

export default function HospitalityPage() {
    return <HospitalityClient />;
}
