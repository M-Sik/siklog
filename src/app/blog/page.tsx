'use client';

export const dynamic = 'force-dynamic';

import SearchInput from '@/components/inputs/SearchInput';
import SearchPostArticle from '@/components/articles/SearchPostArticle';
import React, { useEffect, useState } from 'react';
import ApiQueryWrapper from '@/components/wrappers/ApiQueryWrapper';
import useDebounce from '@/hooks/useDebounce';

export default function BlogsPage() {
  const sessionSearchWord = window.sessionStorage.getItem('searchWord');
  const [searchWord, setSearchWord] = useState(sessionSearchWord || '');
  const debouncedSearchWord = useDebounce(searchWord);

  useEffect(() => {
    window.sessionStorage.setItem('searchWord', debouncedSearchWord);
  }, [debouncedSearchWord]);

  return (
    <section>
      <h1 className="font-bold text-4xl">📒 Blog</h1>
      <div className="my-12">
        <SearchInput searchWord={searchWord} handleSetSearchWord={setSearchWord} />
      </div>
      <ApiQueryWrapper>
        <SearchPostArticle searchWord={debouncedSearchWord} />
      </ApiQueryWrapper>
    </section>
  );
}
