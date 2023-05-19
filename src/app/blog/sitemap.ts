import { getAllPosts } from '@/service/post';
import { MetadataRoute } from 'next';

export default async function sitemap() {
  const allPosts = await getAllPosts();

  const allPostsMap = allPosts.map(({ _id }) => ({
    url: `${process.env.NEXT_PUBLIC_CLIENT_API_URL}/blog/${_id}`,
    lastModified: new Date().toISOString(),
  }));
  return [...allPostsMap];
}
