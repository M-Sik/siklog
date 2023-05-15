import Link from 'next/link';
import React from 'react';
import PostListCard from './PostListCard';

export default function PostsCard() {
  return (
    <section className="mt-8">
      <PostListCard />
      <PostListCard />
      <PostListCard />
      <PostListCard />
    </section>
  );
}
