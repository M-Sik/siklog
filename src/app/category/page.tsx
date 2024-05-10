import React from 'react';
import CategoryPostArticle from '@/components/articles/CategoryPostArticle';
import { getAllPosts } from '@/service/post';

export default async function CategoryPage() {
  const allPost = await getAllPosts();
  console.log(allPost);

  return (
    <section>
      <h1 className="font-bold text-4xl">📚 Category</h1>
      {allPost.length !== 0 && <CategoryPostArticle allPost={allPost} />}
    </section>
  );
}
