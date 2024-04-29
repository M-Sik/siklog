import { QueryErrorResetBoundary } from '@tanstack/react-query';
import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import PostCardLoading from '../loadings/PostCardLoading';
import FallbackErrorUI from '../fallbacks/FallbackErrorUI';

export default function ApiQueryWrapper({ children }: { children: React.ReactNode }) {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary onReset={reset} FallbackComponent={FallbackErrorUI}>
          <Suspense fallback={<PostCardLoading />}>{children}</Suspense>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
}
