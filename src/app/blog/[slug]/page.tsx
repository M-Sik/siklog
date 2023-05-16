import React from 'react';
import Image from 'next/image';
import { getPostDetail } from '@/service/post';

interface IProps {
  params: {
    slug: string;
  };
}
// 다이나믹한 메타데이터
// slug에 따라 메타데이터를 바꾸고 싶을때에는 generateMetadata 사용
// export async function generateMetadata({ params: { slug } }: IProps) {
//   // 포스트 정보 조회 api
//   const { title, description } = await getPostData(slug);
//   return {
//     title: title,
//     description: description,
//     keywords: '제품 블로그',
//   };
// }

export default async function BlogPage({ params: { slug } }: IProps) {
  console.log('포스트 상세정보 아이디 => ', slug);
  const post = await getPostDetail(slug);
  console.log('포스트 상세정보 조회 결과 => ', post);
  const { title, subtitle, markdown, createdAt } = post;

  return (
    <article className="rounded-2xl overflow-hidden bg-gray-200 shadow-lg m-4">
      <div>
        {title} {subtitle}
      </div>
      {/* <PostContent post={post} /> */}
    </article>
  );
}
