import { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
    title: 'About RocketFuel | Powering the Next Generation of Global Payments',
    description: 'Founded in 2020, RocketFuel is a global payments company redefining how businesses and customers move money across borders. Making digital payments faster, safer, and more accessible.',
};

export default function AboutPage() {
    return <AboutClient />;
}
