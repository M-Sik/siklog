import { getAllPosts } from '@/service/post';
import { MetadataRoute } from 'next';

export default async function sitemap() {
  // const allPosts = await getAllPosts();

  // const allPostsMap = allPosts.map(({ _id }) => ({
  //   url: `${process.env.NEXT_PUBLIC_CLIENT_API_URL}/blog/${_id}`,
  //   lastModified: new Date().toISOString(),
  // }));
  // return [...allPostsMap];
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
