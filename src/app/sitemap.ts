import { getRecentPosts } from '@/service/post';
import { MetadataRoute } from 'next';

const URL = 'http://localhost:3000';

export default async function sitemap() {
  const posts = await getRecentPosts();

  const routesMap = ['', '/blog'].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
  }));

  const postsMap = posts.map(({ _id }) => ({
    url: `${URL}/blog/${_id}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routesMap, ...postsMap];
}
