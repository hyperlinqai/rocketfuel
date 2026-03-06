import { Metadata } from 'next';
import PartnersClient from './PartnersClient';

export const metadata: Metadata = {
    title: 'RocketFuel Partners | Global Network of Regulated Payment Providers',
    description: 'RocketFuel collaborates with regulated financial institutions, exchanges, and technology providers to deliver secure, instant global payments for merchants, platforms, and partners worldwide.',
};

export default function PartnersPage() {
    return <PartnersClient />;
}
