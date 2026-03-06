import { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';

interface MetadataProps {
    title?: string;
    description?: string;
    image?: string;
    icons?: Metadata['icons'];
    noIndex?: boolean;
}

export function constructMetadata({
    title = SITE_CONFIG.name,
    description = SITE_CONFIG.description,
    image = SITE_CONFIG.ogImage,
    icons = '/favicon.ico',
    noIndex = false,
}: MetadataProps = {}): Metadata {
    return {
        title: {
            default: title,
            template: `%s | ${SITE_CONFIG.name}`,
        },
        description,
        openGraph: {
            title,
            description,
            url: SITE_CONFIG.url,
            siteName: SITE_CONFIG.name,
            images: [
                {
                    url: image,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
            type: 'website',
            locale: 'en_US',
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [image],
            creator: '@example',
        },
        icons,
        metadataBase: new URL(SITE_CONFIG.url),
        ...(noIndex && {
            robots: {
                index: false,
                follow: false,
            },
        }),
    };
}
