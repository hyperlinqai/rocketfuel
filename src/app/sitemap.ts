import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
    const routes = [
        '',
        '/blog',
        '/about',
        '/contact',
    ].map((route) => ({
        url: `${SITE_CONFIG.url}${route}`,
        lastModified: new Date().toISOString().split('T')[0],
    }));

    return [...routes];
}
