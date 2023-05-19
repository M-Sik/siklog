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
  // ${process.env.NEXT_PUBLIC_CLIENT_API_URL}
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
// ${process.env.SERVER_API_URL}
export async function getRecentPosts(): Promise<PostInfo[]> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_CLIENT_API_URL}/api/posts/recent`, {
    method: 'GET',
    // cache: 'no-store',
    next: { revalidate: 30 },
  });
  const data = await response.json();
  if (Object.keys(data).length === 0) return [];
  return data;
}
// ${process.env.NEXT_PUBLIC_CLIENT_API_URL}
export async function getAllPosts(): Promise<PostInfo[]> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_CLIENT_API_URL}/api/posts`, {
    method: 'GET',
    // cache: 'no-store',
    next: { revalidate: 30 },
  });
  const data = await response.json();
  if (Object.keys(data).length === 0) return [];
  return data;
}
// ${process.env.SERVER_API_URL}
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
