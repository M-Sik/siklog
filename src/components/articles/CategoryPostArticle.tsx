'use client';

import usePostQuery from '@/hooks/usePostQuery';
import React, { useState } from 'react';
import PostListCard from '../cards/PostListCard';
import { PostInfo } from '@/types/postType';
import { categorys } from '@/data/categorys';

type Props = {
  allPost: PostInfo[];
};

export default function CategoryPostArticle({ allPost }: Props) {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategory = (updateCategory: string) => {
    setSelectedCategory(updateCategory);
  };

  const filterPost = allPost?.filter((post) => {
    if (selectedCategory === '') return post;
    else return post.category === selectedCategory;
  });

  return (
    <article>
      <div className="my-12 flex gap-3 md:gap-6 flex-wrap text-sm md:text-base">
        {categorys.map(({ title, category }) => (
          <button
            key={title}
            className={`border-2 border-yellow-400 px-2 md:px-3 py-1 md:py-2 rounded-xl md:hover:bg-yellow-200 ${
              category === selectedCategory && 'bg-yellow-400 text-white'
            }`}
            onClick={() => handleCategory(category)}
          >
            {title}
          </button>
        ))}
      </div>
      {filterPost && filterPost.map((post) => <PostListCard key={post._id} post={post} />)}
    </article>
  );
}
