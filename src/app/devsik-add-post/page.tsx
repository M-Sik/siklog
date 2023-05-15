'use client';

import { addPost } from '@/service/post';
import dynamic from 'next/dynamic';
import React, { FormEvent, useState } from 'react';
import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';
import { categorys } from '@/data/categorys';
// import MDEditor from '@u iw/react-md-editor';

const MDEditor = dynamic(() => import('@uiw/react-md-editor'), {
  ssr: false,
});

export default function AddPostPage() {
  const [title, setTitle] = useState('');
  const [subtitle, setSubTitle] = useState('');
  const [creatdAt, setCreatdAt] = useState('');
  const [pw, setPw] = useState('');
  const [category, setCategory] = useState('');
  const [markdown, setMarkdown] = useState<string | undefined>('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // console.log(title, subtitle, creatdAt, pw, category, markdown);

    if (!markdown) return;

    addPost(title, subtitle, creatdAt, pw, category, markdown)
      .then((res) => alert('등록에 성공하였습니다.'))
      .catch((err) => console.log('여기로오면 레전드 => ', err));
    resetInputs();
  };
  const resetInputs = () => {
    setTitle('');
    setSubTitle('');
    setCreatdAt('');
    setPw('');
    setMarkdown('');
  };

  return (
    <section className="py-6">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="포스트 제목을 입력해주세요."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={inputStyle}
          autoFocus
          required
        />
        <input
          type="text"
          placeholder="포스트 부제목을 입력해주세요."
          value={subtitle}
          onChange={(e) => setSubTitle(e.target.value)}
          className={inputStyle}
          required
        />
        <input
          type="date"
          placeholder="날짜를 입력해주세요."
          value={creatdAt}
          onChange={(e) => setCreatdAt(e.target.value)}
          className={inputStyle}
          required
        />
        <input
          type="text"
          placeholder="비밀번호를 입력해주세요."
          value={pw}
          onChange={(e) => setPw(e.target.value)}
          className={inputStyle}
          required
        />
        <select
          onChange={(e) => setCategory(e.target.value)}
          name="categorys"
          className="my-4 border border-yellow-400 p-4"
        >
          {categorys.map(({ title, keyword }) => (
            <option key={title} value={keyword}>
              {title}
            </option>
          ))}
        </select>
        <div>
          <MDEditor height={600} value={markdown} onChange={setMarkdown} />
        </div>
        <button className="bg-yellow-400 w-full mt-6 py-4 text-xl rounded-2xl">등록</button>
      </form>
    </section>
  );
}

const inputStyle = 'w-full text-2xl p-3 border border-yellow-400 outline-yellow-400 mt-4';
