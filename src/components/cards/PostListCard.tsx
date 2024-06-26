import { PostInfo } from '@/types/postType';
import Link from 'next/link';
import React from 'react';

type Props = {
  post: PostInfo;
};

export default function PostListCard({ post: { _id, createdAt, title, subtitle } }: Props) {
  return (
    <div className="py-6 md:px-4 group hover:bg-gray-100 rounded-lg">
      <Link href={`/blog/${_id}`} aria-label="블로그 상세보기 링크">
        <div>
          <time className=" text-sm text-gray-500">{createdAt}</time>
          <dl>
            <dt className="font-bold text-2xl mt-2 group-hover:text-yellow-400 transition-all duration-500">
              {title}
            </dt>
            <dd className="text-xl text-neutral-700 mt-1 truncate">{subtitle}</dd>
          </dl>
        </div>
      </Link>
    </div>
  );
}
