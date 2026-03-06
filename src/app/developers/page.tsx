import { Metadata } from 'next';
import DevelopersClient from './DevelopersClient';

export const metadata: Metadata = {
    title: 'RocketFuel for Developers | APIs, SDKs, and Webhooks for Global Crypto Payments',
    description: 'Build with RocketFuel\'s crypto and stablecoin payment APIs. Accept crypto, send global payouts, and automate settlement using SDKs, webhooks, and our developer sandbox.',
};

export default function DevelopersPage() {
    return <DevelopersClient />;
}
