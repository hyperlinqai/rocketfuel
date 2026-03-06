import { SITE_CONFIG } from '@/lib/constants';

export function constructSchemaOrg() {
    return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: SITE_CONFIG.name,
        url: SITE_CONFIG.url,
        logo: `${SITE_CONFIG.url}/logo.png`,
        sameAs: [
            SITE_CONFIG.links.twitter,
            SITE_CONFIG.links.github,
        ],
    };
}

export function constructArticleSchema({
    title,
    description,
    image,
    datePublished,
    dateModified,
    authorName,
}: {
    title: string;
    description: string;
    image: string;
    datePublished: string;
    dateModified?: string;
    authorName: string;
}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description: description,
        image: image,
        datePublished: datePublished,
        dateModified: dateModified || datePublished,
        author: {
            '@type': 'Person',
            name: authorName,
        },
        publisher: {
            '@type': 'Organization',
            name: SITE_CONFIG.name,
            logo: {
                '@type': 'ImageObject',
                url: `${SITE_CONFIG.url}/logo.png`,
            },
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': SITE_CONFIG.url, // Should ideally be the canonical URL of the article
        },
    };
}
