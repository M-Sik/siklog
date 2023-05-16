import { PostInfo } from '@/types/postType';
import Link from 'next/link';
import React from 'react';

type Props = {
  post: PostInfo;
};

export default function PostListCard({ post: { createdAt, title, subtitle } }: Props) {
  return (
    <div className="py-6">
      <Link href={'/blog'} aria-label="블로그 상세보기 링크">
        <div>
          <p className=" text-sm text-gray-500">{createdAt}</p>
          <h3 className="font-bold text-2xl mt-2">{title}</h3>
          <p className="text-xl text-neutral-700 mt-1">{subtitle}</p>
        </div>
      </Link>
    </div>
  );
}
