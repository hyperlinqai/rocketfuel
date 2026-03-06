import { Metadata } from 'next';
import ConsignmentResaleClient from './ConsignmentResaleClient';

export const metadata: Metadata = {
    title: 'Consignment & Resale Payments | Crypto and Stablecoin Solutions | RocketFuel',
    description: 'RocketFuel powers global consignment and resale platforms with instant crypto and stablecoin payments. Accept payments, automate seller payouts, and settle instantly in stablecoins or fiat.',
};

export default function ConsignmentResalePage() {
    return <ConsignmentResaleClient />;
}
