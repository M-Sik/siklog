'use client';

import { addPost } from '@/service/post';
import dynamic from 'next/dynamic';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';
import { categorys } from '@/data/categorys';
import { adminCheck } from '@/service/admin';
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
  const [keywords, setKeywords] = useState<string[]>(['', '', '', '', '', '', '', '', '', '']);
  const [adminPw, setAdminPw] = useState('');
  const [adminPwCheck, setAdminPwCheck] = useState(false);

  const handleAdminCheck = () => {
    adminCheck(adminPw)
      .then((res) => {
        if (res) {
          alert('비밀번호가 인증되었습니다.');
          setAdminPwCheck(true);
        } else {
          alert('비밀번호가 일치하지 않습니다.');
          setAdminPwCheck(false);
        }
      })
      .catch((err) => alert(`${err}`));
    // 어드민 확인하는 api 설정 후 성공시 setAdminPwCheck(true)
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // console.log(title, subtitle, creatdAt, pw, category, markdown, keywords);
    if (!adminPwCheck) return alert('관리자 비밀번호 확인을 해주세요');

    if (!markdown) return;
    // 여기 아래
    addPost(title, subtitle, creatdAt, pw, category, markdown, keywords)
      .then((res) => {
        alert('등록에 성공하였습니다.');
        resetInputs();
      })
      .catch((err) => console.log('여기로오면 레전드 => ', err));
  };
  const resetInputs = () => {
    setTitle('');
    setSubTitle('');
    setCreatdAt('');
    setPw('');
    setMarkdown('');
  };
  const handleKeyword = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const copyKeywords = [...keywords];
    copyKeywords[index] = e.target.value;
    setKeywords(copyKeywords);
  };

  return (
    <section className="py-6">
      <div className="my-6 flex gap-6">
        <input
          type="password"
          placeholder="관리자 비밀번호를 입력해주세요."
          value={adminPw}
          onChange={(e) => setAdminPw(e.target.value)}
          className={inputStyle}
          required
        />
        <button
          onClick={handleAdminCheck}
          className="w-[100px] mt-4 bg-yellow-400 rounded-lg text-white font-bold"
        >
          확인
        </button>
      </div>
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
          {categorys.map(({ title, category }) => (
            <option key={title} value={category}>
              {title}
            </option>
          ))}
        </select>
        <div>
          <MDEditor height={600} value={markdown} onChange={setMarkdown} />
        </div>
        <div className="mt-4 grid grid-cols-6">
          {keywords.map((keyword, index) => (
            <input
              key={index}
              value={keywords[index]}
              onChange={(e) => handleKeyword(e, index)}
              type="text"
              placeholder="#"
            />
          ))}
        </div>
        <button className="bg-yellow-400 w-full mt-6 py-4 text-xl rounded-2xl">등록</button>
      </form>
    </section>
  );
}

const inputStyle = 'w-full text-2xl p-3 border border-yellow-400 outline-yellow-400 mt-4';
