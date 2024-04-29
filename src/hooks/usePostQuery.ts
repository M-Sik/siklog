import { useSuspenseQuery } from '@tanstack/react-query';
import { PostInfo } from '@/types/postType';
import { getAllPosts } from '@/service/post';

export default function usePostQuery() {
  const getPostsQuery = useSuspenseQuery<PostInfo[]>({
    queryKey: ['posts'],
    queryFn: () => getAllPosts(),
  });

  return { getPostsQuery };
}
