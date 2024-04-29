'use client'; // Error components must be Client Components

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2 className="text-xl font-bold text-center">
        최근 게시글을 불러오는 중 오류가 발생했습니다! 아래 버튼을 통해 재시도를 해보세요!
      </h2>
      <div className="flex justify-center mt-8">
        <button className="bg-yellow-400 text-white py-3 px-4 rounded-lg" onClick={() => reset()}>
          다시 시도하기!
        </button>
      </div>
    </div>
  );
}
