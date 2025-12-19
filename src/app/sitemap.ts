import { MetadataRoute } from 'next';
import { TREATMENT_SLUGS } from '@/lib/tratamientos';
import { getAllArticlePaths } from '@/lib/articles';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://dr-carlos-beiner.vercel.app';

    // Static pages
    const staticPages = [
        '',
        '/servicios',
        '/contacto',
        '/ubicacion',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Treatment pages
    const treatmentPages = TREATMENT_SLUGS.map((slug) => ({
        url: `${baseUrl}/tratamientos/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.9,
    }));

    // Article pages
    const articlePages = getAllArticlePaths().map(({ slug, articleSlug }) => ({
        url: `${baseUrl}/tratamientos/${slug}/guias/${articleSlug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    return [...staticPages, ...treatmentPages, ...articlePages];
}
