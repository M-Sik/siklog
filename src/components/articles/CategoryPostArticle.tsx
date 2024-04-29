'use client';

import usePostQuery from '@/hooks/usePostQuery';
import React from 'react';
import PostListCard from '../cards/PostListCard';

type Props = {
  selectedCategory: string;
};

export default function CategoryPostArticle({ selectedCategory }: Props) {
  const { getPostsQuery } = usePostQuery();
  const { data: allPost } = getPostsQuery;

  const filterPost = allPost?.filter((post) => {
    if (selectedCategory === '') return post;
    else return post.category === selectedCategory;
  });

  return (
    <article>
      {filterPost && filterPost.map((post) => <PostListCard key={post._id} post={post} />)}
    </article>
  );
}
