'use client';

export const dynamic = 'force-dynamic';

import PostListCard from '@/components/cards/PostListCard';
import PostsCard from '@/components/cards/PostsCard';
import SearchInput from '@/components/inputs/SearchInput';
import PostCardLoading from '@/components/loadings/PostCardLoading';
import { getAllPosts } from '@/service/post';
import { PostInfo } from '@/types/postType';
import React, { useEffect, useState } from 'react';

export default function BlogsPage() {
  const [searchWord, setSearchWord] = useState('');
  const [allPost, setAllPost] = useState<PostInfo[]>();
  console.log(searchWord);

  useEffect(() => {
    getAllPosts().then((res) => setAllPost(res));
  }, []);

  const filterPost = allPost?.filter((post) =>
    post.title.toLowerCase().includes(searchWord.toLowerCase()),
  );

  return (
    <section>
      <h2 className="font-bold text-4xl">📒 Blog</h2>
      <div className=" my-12">
        <SearchInput searchWord={searchWord} handleSetSearchWord={setSearchWord} />
      </div>
      {!filterPost && <PostCardLoading />}
      {filterPost && filterPost.map((post) => <PostListCard key={post._id} post={post} />)}
    </section>
  );
}
