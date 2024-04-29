'use client';

import React, { useState } from 'react';
import { categorys } from '@/data/categorys';
import ApiQueryWrapper from '@/components/wrappers/ApiQueryWrapper';
import CategoryPostArticle from '@/components/articles/CategoryPostArticle';

export default function CategoryPage() {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategory = (updateCategory: string) => {
    setSelectedCategory(updateCategory);
  };

  return (
    <section>
      <h1 className="font-bold text-4xl">📚 Category</h1>
      <div className="my-12 flex gap-3 md:gap-6 flex-wrap text-sm md:text-base">
        {categorys.map(({ title, category }) => (
          <button
            key={title}
            className={`border-2 border-yellow-400 px-2 md:px-3 py-1 md:py-2 rounded-xl md:hover:bg-yellow-200 ${
              category === selectedCategory && 'bg-yellow-400 text-white'
            }`}
            onClick={() => handleCategory(category)}
          >
            {title}
          </button>
        ))}
      </div>
      <ApiQueryWrapper>
        <CategoryPostArticle selectedCategory={selectedCategory} />
      </ApiQueryWrapper>
    </section>
  );
}
