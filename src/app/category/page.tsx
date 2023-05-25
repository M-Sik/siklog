'use client';

import React, { MouseEvent, useState } from 'react';
import { categorys } from '@/data/categorys';

export default function CategoryPage() {
  const [selectCategory, setSelectCategory] = useState('');

  const handleCategory = (updateCategory: string) => {
    setSelectCategory(updateCategory);
  };

  return (
    <section>
      <h2 className="font-bold text-4xl">📚 Category</h2>
      <div className="my-12 flex gap-3 md:gap-6 flex-wrap text-sm md:text-base">
        {categorys.map(({ title, category }) => (
          <div
            key={title}
            className={`border-2 border-yellow-400 px-2 md:px-3 py-1 md:py-2 rounded-xl cursor-pointer md:hover:bg-yellow-200 ${
              category === selectCategory && 'bg-yellow-400 text-white'
            }`}
            onClick={() => handleCategory(category)}
          >
            {title}
          </div>
        ))}
      </div>
    </section>
  );
}
