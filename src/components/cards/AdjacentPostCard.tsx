import Link from 'next/link';
import React from 'react';
import ArrowLeftIcon from '../icons/ArrowLeftIcon';
import ArrowRightIcon from '../icons/ArrowRightIcon';

type Props = {
  type: 'prev' | 'next';
  title: string;
  postId: string;
};

export default function AdjacentPostCard({ type, title, postId }: Props) {
  return (
    <Link
      href={`/blog/${postId}`}
      aria-label={`${type === 'prev' ? '이전 포스트 링크' : '다음 포스트 링크'}`}
      className="bg-yellow-50 w-full rounded-lg p-6 shadow-md"
    >
      <div className="w-full h-full flex flex-nowrap justify-between items-center">
        {type === 'prev' && <ArrowLeftIcon />}
        <p className="w-[80%]">{title}</p>
        {type === 'next' && <ArrowRightIcon />}
      </div>
    </Link>
  );
}
