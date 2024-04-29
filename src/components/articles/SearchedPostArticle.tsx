'use client';

export const dynamic = 'force-dynamic';

import React from 'react';
import PostListCard from '../cards/PostListCard';
import usePostQuery from '@/hooks/usePostQuery';

type Props = {
  searchWord: string;
};

export default function SearchedPostArticle({ searchWord }: Props) {
  const { getPostsQuery } = usePostQuery();
  const { data: allPost } = getPostsQuery;

  const filterPost = allPost?.filter((post) =>
    post.title.toLowerCase().includes(searchWord.toLowerCase()),
  );

  return (
    <article>
      {filterPost && (
        <ul>
          {filterPost.map((post) => (
            <li key={post._id}>
              <PostListCard post={post} />
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
