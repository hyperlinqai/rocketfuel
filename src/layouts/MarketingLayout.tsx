import React from 'react';
import { Container } from '@/components/layout/Container';

interface MarketingLayoutProps {
    children: React.ReactNode;
}

export function MarketingLayout({ children }: MarketingLayoutProps) {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Marketing specific wrappers could go here */}
            <main className="flex-1">
                {children}
            </main>
        </div>
    );
}
