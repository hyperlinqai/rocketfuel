import React from 'react';
import { Container } from '@/components/layout/Container';

interface BlogLayoutProps {
    children: React.ReactNode;
}

export function BlogLayout({ children }: BlogLayoutProps) {
    return (
        <Container className="py-10">
            <div className="prose prose-lg dark:prose-invert max-w-none">
                {children}
            </div>
        </Container>
    );
}
