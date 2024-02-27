import { getRecentPosts } from '@/service/post';
import { MetadataRoute } from 'next';

export default async function sitemap() {
  const posts = await getRecentPosts();
  const routesMap = ['', '/blog', '/blog/sitemap.xml'].map((route) => ({
    url: `${process.env.NEXT_PUBLIC_CLIENT_API_URL}${route}`,
    lastModified: new Date().toISOString(),
  }));
  const postsMap = posts.map(({ _id }) => ({
    url: `${process.env.NEXT_PUBLIC_CLIENT_API_URL}/blog/${_id}`,
    lastModified: new Date().toISOString(),
  }));
  return [...routesMap, ...postsMap];
}
