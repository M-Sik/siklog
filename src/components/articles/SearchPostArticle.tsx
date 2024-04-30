'use client';

export const dynamic = 'force-dynamic';

import React, { useRef } from 'react';
import PostListCard from '../cards/PostListCard';
import usePostQuery from '@/hooks/usePostQuery';
import { useIntersectionObserver } from '@/hooks/useInterSection';

type Props = {
  searchWord: string;
};

export default function SearchPostArticle({ searchWord }: Props) {
  const observeBox = useRef<HTMLDivElement>(null);

  const { getSearchPostsQuery } = usePostQuery(searchWord);
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = getSearchPostsQuery;

  useIntersectionObserver({
    target: observeBox,
    onIntersect: fetchNextPage,
    enabled: hasNextPage && !isFetchingNextPage,
  });
  console.log('??? => ', data?.pages);

  return (
    <article>
      {data && (
        <ul>
          {data.pages.map(({ posts }) =>
            posts.map((post) => (
              <li key={post._id}>
                <PostListCard post={post} />
              </li>
            )),
          )}
        </ul>
      )}
      {/* 여기 div가 관찰 대상 */}
      <div ref={observeBox} />
    </article>
  );
}
