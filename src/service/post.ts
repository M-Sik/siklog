import { PostInfo } from '@/types/postType';
import { axiosCommon } from '@/utils/axios';

export async function addPost(
  title: string,
  subtitle: string,
  createdAt: string,
  pw: string,
  category: string,
  markdown: string,
  keywords: string[],
) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_CLIENT_API_URL}/api/post`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      subtitle,
      createdAt,
      pw,
      category,
      markdown,
      keywords,
    }),
  });
  const data = await response.json();
  return data;
}

export async function getRecentPosts(): Promise<PostInfo[]> {
  const url = '/api/posts/recent';
  const method = 'get';
  const cache = 'no-store';

  const res = await axiosCommon(url, method, {}, cache);
  return res.data;
}

export async function getAllPosts(): Promise<PostInfo[]> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_CLIENT_API_URL}/api/posts/all`, {
    method: 'GET',
    cache: 'no-store',
  });
  const data = await response.json();
  if (Object.keys(data).length === 0) return [];
  return data;
}

export async function getPostDetail(
  postId: string,
): Promise<{ prevPost: PostInfo | null; currentPost: PostInfo; nextPost: PostInfo | null }> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_CLIENT_API_URL}/api/post/${postId}`, {
    method: 'GET',
    cache: 'no-store',
  });
  const data = await response.json();
  return data;
}
