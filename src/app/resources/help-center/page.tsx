import type { Metadata } from 'next';
import { HelpCenterHero } from '@/components/help-center/HelpCenterHero';
import { HelpCenterFAQ } from '@/components/help-center/HelpCenterFAQ';
import { HelpCenterOnboarding } from '@/components/help-center/HelpCenterOnboarding';
import { HelpCenterContact } from '@/components/help-center/HelpCenterContact';

export const metadata: Metadata = {
    title: 'RocketFuel Help Center | Merchant, Customer, and Technical Support',
    description: 'Find answers to common questions about RocketFuel payments, onboarding, and integrations. Contact support@rocketfuel.inc for help with transactions or account setup.',
};

export default function HelpCenterPage() {
    return (
        <main className="min-h-screen bg-white">
            <HelpCenterHero />
            <HelpCenterFAQ />
            <HelpCenterOnboarding />
            <HelpCenterContact />
        </main>
    );
}
