import { Metadata } from 'next';
import PrivateChartersClient from './PrivateChartersClient';

export const metadata: Metadata = {
    title: 'Private Charter Payments | Global Crypto and Stablecoin Solutions for Luxury Travel | RocketFuel',
    description: 'RocketFuel enables private charter and luxury service providers to accept crypto and stablecoin payments globally. Process high-value bookings and settle instantly with full compliance.',
};

export default function PrivateChartersPage() {
    return <PrivateChartersClient />;
}
