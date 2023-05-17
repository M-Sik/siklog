import React from 'react';
import PostListCard from './PostListCard';
import { recentPosts } from '@/service/post';

export default async function PostsCard() {
  const posts = await recentPosts();
  // console.log('최근 포스트 조회 결과 => ', posts);
  // console.log('zzzzzzzz', Object.keys(posts).length);
  return (
    <section className="mt-8">
      {posts.map((post) => (
        <PostListCard key={post._id} post={post} />
      ))}
    </section>
  );
}
