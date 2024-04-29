'use client';

export const dynamic = 'force-dynamic';

import SearchInput from '@/components/inputs/SearchInput';
import SearchedPostArticle from '@/components/articles/SearchedPostArticle';
import React, { useState } from 'react';
import ApiQueryWrapper from '@/components/wrappers/ApiQueryWrapper';

export default function BlogsPage() {
  const [searchWord, setSearchWord] = useState('');

  return (
    <section>
      <h1 className="font-bold text-4xl">📒 Blog</h1>
      <div className="my-12">
        <SearchInput searchWord={searchWord} handleSetSearchWord={setSearchWord} />
      </div>
      <ApiQueryWrapper>
        <SearchedPostArticle searchWord={searchWord} />
      </ApiQueryWrapper>
    </section>
  );
}
