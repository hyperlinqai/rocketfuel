import Link from 'next/link';
import { Container } from '@/components/layout/Container';

export default function NotFound() {
    return (
        <Container className="flex min-h-[60vh] flex-col items-center justify-center text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-4">404</h1>
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Page not found</h2>
            <p className="text-base leading-7 text-gray-600 mb-8 max-w-md">
                Sorry, we couldn’t find the page you’re looking for. It might have been moved or deleted.
            </p>
            <div className="flex items-center gap-x-6">
                <Link
                    href="/"
                    className="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                    Go back home
                </Link>
                <Link href="/contact" className="text-sm font-semibold text-gray-900">
                    Contact support <span aria-hidden="true">&rarr;</span>
                </Link>
            </div>
        </Container>
    );
}
