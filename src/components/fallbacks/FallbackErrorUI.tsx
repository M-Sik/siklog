'use client';

import { FallbackProps } from 'react-error-boundary';

export default function FallbackErrorUI({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div>
      <pre className="text-xl font-bold text-center">
        {error.message}...
        <br />
        게시글을 불러오는 중 오류가 발생했습니다! 아래 버튼을 통해 재시도를 해보세요!
      </pre>
      <div className="flex justify-center mt-8">
        <button
          className="bg-yellow-400 text-white py-3 px-4 rounded-lg"
          onClick={() => resetErrorBoundary()}
        >
          다시 불러오기!
        </button>
      </div>
    </div>
  );
}
