'use client';

import React, { MouseEvent, useEffect, useState } from 'react';
import { categorys } from '@/data/categorys';
import { PostInfo } from '@/types/postType';
import { getAllPosts } from '@/service/post';
import PostCardLoading from '@/components/loadings/PostCardLoading';
import PostListCard from '@/components/cards/PostListCard';
import usePostQuery from '@/hooks/usePostQuery';

export default function CategoryPage() {
  const [selectCategory, setSelectCategory] = useState('');
  const { getPostsQuery } = usePostQuery();
  const { data: allPost } = getPostsQuery;

  const handleCategory = (updateCategory: string) => {
    setSelectCategory(updateCategory);
  };

  const filterPost = allPost?.filter((post) => {
    if (selectCategory === '') return post;
    else return post.category === selectCategory;
  });

  return (
    <section>
      <h1 className="font-bold text-4xl">📚 Category</h1>
      <div className="my-12 flex gap-3 md:gap-6 flex-wrap text-sm md:text-base">
        {categorys.map(({ title, category }) => (
          <button
            key={title}
            className={`border-2 border-yellow-400 px-2 md:px-3 py-1 md:py-2 rounded-xl md:hover:bg-yellow-200 ${
              category === selectCategory && 'bg-yellow-400 text-white'
            }`}
            onClick={() => handleCategory(category)}
          >
            {title}
          </button>
        ))}
      </div>
      {!filterPost && <PostCardLoading />}
      {filterPost && filterPost.map((post) => <PostListCard key={post._id} post={post} />)}
    </section>
  );
}
