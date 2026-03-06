import { Metadata } from 'next';
import GlobalRoyaltiesClient from './GlobalRoyaltiesClient';

export const metadata: Metadata = {
    title: 'Global Royalty Payments | Crypto and Stablecoin Solutions for Music and Media | RocketFuel',
    description: 'RocketFuel enables fast, transparent royalty payments in crypto, stablecoins, or fiat. Pay artists, creators, and rights holders worldwide instantly with full blockchain traceability.',
};

export default function GlobalRoyaltiesPage() {
    return <GlobalRoyaltiesClient />;
}
