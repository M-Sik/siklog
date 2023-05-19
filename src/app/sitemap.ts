import { getRecentPosts } from '@/service/post';
import { MetadataRoute } from 'next';

export default async function sitemap() {
  return [
    {
      url: 'http://localhost:3000',
      lastModified: new Date(),
    },
  ];
  // const posts = await getRecentPosts();
  // const routesMap = ['', '/blog'].map((route) => ({
  //   url: `${process.env.NEXT_PUBLIC_CLIENT_API_URL}${route}`,
  //   lastModified: new Date().toISOString(),
  // }));
  // const postsMap = posts.map(({ _id }) => ({
  //   url: `${URL}/blog/${_id}`,
  //   lastModified: new Date().toISOString(),
  // }));
  // return [...routesMap, ...postsMap];
}
