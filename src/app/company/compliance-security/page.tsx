import { Metadata } from 'next';
import ComplianceSecurityClient from './ComplianceSecurityClient';

export const metadata: Metadata = {
    title: 'RocketFuel Compliance & Security | Regulated, Transparent, and Secure Global Payments',
    description: 'RocketFuel combines regulatory compliance, blockchain transparency, and advanced security to deliver trusted global crypto, stablecoin, and fiat payment solutions.',
};

export default function ComplianceSecurityPage() {
    return <ComplianceSecurityClient />;
}
