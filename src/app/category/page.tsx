import React from 'react';
import CategoryPostArticle from '@/components/articles/CategoryPostArticle';
import { getAllPosts } from '@/service/post';

export const metadata = {
  title: '게시글 카테고리 선택',
  description:
    'siklog 프론트엔드 개발자 김명식의 블로그 게시글을 카테고리 선택을 통해 볼 수 있습니다.',
};

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
