// 'use client';

import PostsCard from '@/components/cards/PostsCard';
import SearchInput from '@/components/inputs/SearchInput';
import { getAllPosts } from '@/service/post';
// import React, { useState } from 'react';

// get 메서드에 파라미터가 없어 자동 캐싱되므로 ssr로 만들기 위함
// export const dynamic = 'force-dynamic';

export default async function BlogsPage() {
  // const [searchWord, setSearchWord] = useState('');

  const allPosts = await getAllPosts();

  return (
    <section>
      <h2 className="font-bold text-4xl">📒 Blog</h2>
      <div className=" my-12">
        {/* <SearchInput searchWord={searchWord} handleSetSearchWord={setSearchWord} /> */}
      </div>
      <PostsCard posts={allPosts} />
    </section>
  );
}
