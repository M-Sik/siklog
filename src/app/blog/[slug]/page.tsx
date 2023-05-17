import React from 'react';
import { getPostDetail } from '@/service/post';
import MarkdownViewer from '@/components/viewers/MarkdownViewer';

interface IProps {
  params: {
    slug: string;
  };
}
// 다이나믹한 메타데이터
// slug에 따라 메타데이터를 바꾸고 싶을때에는 generateMetadata 사용
export async function generateMetadata({ params: { slug } }: IProps) {
  // 포스트 정보 조회 api
  const { title, subtitle, keywords } = await getPostDetail(slug);
  return {
    title: title,
    description: subtitle,
    keywords: keywords,
  };
}

export default async function BlogPage({ params: { slug } }: IProps) {
  console.log('포스트 상세정보 아이디 => ', slug);
  const post = await getPostDetail(slug);
  console.log('포스트 상세정보 조회 결과 => ', post);
  const { title, markdown, createdAt } = post;

  return (
    <section>
      <p className="text-gray-400 text-sm">{createdAt}</p>
      <h1 className=" text-4xl mt-2 font-bold">{title}</h1>
      {/* <PostContent post={post} /> */}
      {/* <ReactMarkdown children={`${markdown}`} remarkPlugins={[remarkGfm]} /> */}
      <MarkdownViewer content={markdown} />
    </section>
  );
}
