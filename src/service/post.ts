import { PostInfo } from '@/types/postType';

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

export async function recentPosts(): Promise<PostInfo[]> {
  const response = await fetch(`${process.env.SERVER_API_URL}/api/posts`, {
    method: 'GET',
    // cache: 'no-store',
    next: { revalidate: 180 },
  });
  const data = await response.json();
  if (Object.keys(data).length === 0) return [];
  return data;
}

export async function getPostDetail(
  postId: string,
): Promise<{ prevPost: PostInfo; currentPost: PostInfo; nextPost: PostInfo }> {
  const response = await fetch(`${process.env.SERVER_API_URL}/api/post/${postId}`, {
    method: 'GET',
    cache: 'force-cache',
  });
  const data = await response.json();
  return data;
}
