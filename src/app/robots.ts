import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/devsik-add-post'],
    },
    sitemap: `${process.env.NEXT_PUBLIC_CLIENT_API_URL}/sitemap.xml`,
  };
}
