import React from 'react';
import { getPostDetail } from '@/service/post';
import MarkdownViewer from '@/components/viewers/MarkdownViewer';
import AdjacentPostCard from '@/components/cards/AdjacentPostCard';

interface IProps {
  params: {
    slug: string;
  };
}
// 다이나믹한 메타데이터
// slug에 따라 메타데이터를 바꾸고 싶을때에는 generateMetadata 사용
export async function generateMetadata({ params: { slug } }: IProps) {
  // 포스트 정보 조회 api
  const {
    currentPost: { title, subtitle, keywords },
  } = await getPostDetail(slug);
  return {
    title: title,
    description: subtitle,
    keywords: keywords,
  };
}

export default async function BlogPage({ params: { slug } }: IProps) {
  const { prevPost, currentPost, nextPost } = await getPostDetail(slug);
  const { title, markdown, createdAt, keywords } = currentPost;

  return (
    <section className=" h-full">
      <time className="text-gray-400 text-sm">{createdAt}</time>
      <h1 className=" text-4xl mt-2 font-bold">{title}</h1>
      <MarkdownViewer content={markdown} />
      <article>
        <nav className=" mt-28 flex md:flex-row flex-col gap-4 rounded-lg">
          {prevPost && (
            <AdjacentPostCard type="prev" title={prevPost.title} postId={prevPost._id} />
          )}
          {nextPost && (
            <AdjacentPostCard type="next" title={nextPost.title} postId={nextPost._id} />
          )}
        </nav>
      </article>
      <article className=" mt-8">
        <p className="text-sm text-gray-500">태그</p>
        <div className="flex flex-wrap gap-2">
          {keywords &&
            keywords.map((keyword, index) => (
              <p
                key={index}
                className={`text-sm text-gray-500 ${
                  keyword !== '' && 'before:content-["#"] after:content-[",""]'
                } `}
              >
                {keyword}
              </p>
            ))}
        </div>
      </article>
    </section>
  );
}
