'use client';

export const dynamic = 'force-dynamic';

import PostListCard from '@/components/cards/PostListCard';
import SearchInput from '@/components/inputs/SearchInput';
import PostCardLoading from '@/components/loadings/PostCardLoading';
import usePostQuery from '@/hooks/usePostQuery';
import React, { useState } from 'react';

export default function BlogsPage() {
  const [searchWord, setSearchWord] = useState('');
  const { getPostsQuery } = usePostQuery();
  const { data: allPost } = getPostsQuery;

  const filterPost = allPost?.filter((post) =>
    post.title.toLowerCase().includes(searchWord.toLowerCase()),
  );

  return (
    <section>
      <h1 className="font-bold text-4xl">📒 Blog</h1>
      <div className="my-12">
        <SearchInput searchWord={searchWord} handleSetSearchWord={setSearchWord} />
      </div>
      {!filterPost && <PostCardLoading />}
      {filterPost && (
        <ul>
          {filterPost.map((post) => (
            <li key={post._id}>
              <PostListCard post={post} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
