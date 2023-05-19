'use client';

import PostsCard from '@/components/cards/PostsCard';
import SearchInput from '@/components/inputs/SearchInput';
import { getAllPosts } from '@/service/post';
import React, { useState } from 'react';

export const revalidate = 30;

export default async function BlogsPage() {
  const [searchWord, setSearchWord] = useState('');

  const allPosts = await getAllPosts();

  return (
    <section>
      <h2 className="font-bold text-4xl">📒 Blog</h2>
      <div className=" my-12">
        <SearchInput searchWord={searchWord} handleSetSearchWord={setSearchWord} />
      </div>
      <PostsCard posts={allPosts} />
    </section>
  );
}
