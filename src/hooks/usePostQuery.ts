import { useInfiniteQuery, useSuspenseQuery } from '@tanstack/react-query';
import { PostInfo, SearchPostInfo } from '@/types/postType';
import { getAllPosts, getSearchPosts } from '@/service/post';

export default function usePostQuery(keyword = '') {
  const getPostsQuery = useSuspenseQuery<PostInfo[]>({
    queryKey: ['posts'],
    queryFn: () => getAllPosts(),
  });
  const getSearchPostsQuery = useInfiniteQuery<SearchPostInfo>({
    queryKey: ['searchPost'],
    queryFn: ({ pageParam }) => getSearchPosts(keyword, pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage) =>
      lastPage.curPage === lastPage.totalPage ? undefined : lastPage.curPage + 1,
  });

  return { getPostsQuery, getSearchPostsQuery };
}
