import { getRecentPosts } from '@/service/post';
import { MetadataRoute } from 'next';

export default async function sitemap() {
  // const posts = await getRecentPosts();
  // const routesMap = ['', '/blog', '/blog/sitemap.xml'].map((route) => ({
  //   url: `${process.env.NEXT_PUBLIC_CLIENT_API_URL}${route}`,
  //   lastModified: new Date().toISOString(),
  // }));
  // const postsMap = posts.map(({ _id }) => ({
  //   url: `${process.env.NEXT_PUBLIC_CLIENT_API_URL}/blog/${_id}`,
  //   lastModified: new Date().toISOString(),
  // }));
  // return [...routesMap, ...postsMap];
  return [
    {
      url: 'https://acme.com',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://acme.com/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://acme.com/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
  ];
}
