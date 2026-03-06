import type { Metadata } from 'next';
import { TalkToSalesHero } from '@/components/talk-to-sales/TalkToSalesHero';
import { TalkToSalesBenefits } from '@/components/talk-to-sales/TalkToSalesBenefits';
import { TalkToSalesForm } from '@/components/talk-to-sales/TalkToSalesForm';
import { TalkToSalesTrusted } from '@/components/talk-to-sales/TalkToSalesTrusted';
import { TalkToSalesCTA } from '@/components/talk-to-sales/TalkToSalesCTA';

export const metadata: Metadata = {
    title: 'Talk to Sales | Connect with RocketFuel’s Payment Experts',
    description: 'Speak directly with RocketFuel’s sales team to learn how our crypto and stablecoin payment solutions can simplify global transactions and grow your business.',
};

export default function TalkToSalesPage() {
    return (
        <main className="min-h-screen bg-white">
            <TalkToSalesHero />
            <TalkToSalesBenefits />
            <TalkToSalesForm />
            <TalkToSalesTrusted />
            <TalkToSalesCTA />
        </main>
    );
}
