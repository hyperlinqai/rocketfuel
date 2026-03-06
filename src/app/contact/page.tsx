import type { Metadata } from 'next';
import { ContactHero } from '@/components/contact/ContactHero';
import { ContactOptions } from '@/components/contact/ContactOptions';
import { ContactForm } from '@/components/contact/ContactForm';
import { ContactGlobal } from '@/components/contact/ContactGlobal';
import { ContactResources } from '@/components/contact/ContactResources';

export const metadata: Metadata = {
    title: 'Contact RocketFuel | Request a Demo or Talk to Sales',
    description: 'Contact RocketFuel to learn more about global crypto and stablecoin payments. Request a demo, talk to sales, or get connected with our partner team.',
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white">
            <ContactHero />
            <ContactOptions />
            <ContactForm />
            <ContactGlobal />
            <ContactResources />
        </main>
    );
}
