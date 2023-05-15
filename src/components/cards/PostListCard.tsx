import Link from 'next/link';
import React from 'react';

export default function PostListCard() {
  return (
    <div className="py-6">
      <Link href={'/blog'} aria-label="블로그 상세보기 링크">
        <div>
          <p className=" text-sm text-gray-500">2023-05-05</p>
          <h3 className="font-bold text-2xl mt-2">제목123</h3>
          <p className="text-xl text-neutral-700 mt-1">
            서브타이틀1234123313 댜ㅜ랴두랴ㅜㄹ댜ㅜㄷ루ㅑㄷ루 미미미미밈 가가가가가가가ㅏ 미미미미밈
          </p>
        </div>
      </Link>
    </div>
  );
}
