'use client';

import { addPost } from '@/service/post';
import React, { FormEvent, useState } from 'react';

export default function AddPostPage() {
  const [title, setTitle] = useState('');
  const [subtitle, setSubTitle] = useState('');
  const [creatdAt, setCreatdAt] = useState('');
  const [pw, setPw] = useState('');
  const [markdown, setMarkdown] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(title, subtitle, creatdAt, pw, markdown);
    addPost(title, subtitle, creatdAt, pw, markdown)
      .then((res) => console.log('성공 => ', res))
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
    <section className="mt-6">
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
        <input
          type="text"
          placeholder="마크다운"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          className={inputStyle}
          required
        />
        <button className="bg-yellow-400 w-full mt-6 py-4 text-xl rounded-2xl">등록</button>
      </form>
    </section>
  );
}

const inputStyle = 'w-full text-2xl p-3 border border-yellow-400 outline-yellow-400 mt-4';
