'use client';

import { addUser } from '@/service/user';
import React, { FormEvent, useState } from 'react';

export default function AddUserForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    addUser(name, email)
      .then((res) => console.log('성공 => ', res))
      .catch((err) => console.log('여기로오면 레전드 => ', err));

    setName('');
    setEmail('');
  };
  return (
    <form className="p-4 border-2 max-w-screen-sm mt-4" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="이름을 작성해주세요."
        className="w-full h-9 border p-4"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="이메일을 작성해주세요."
        className="w-full h-9 border p-4 mt-4"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className="mt-4 p-4 bg-blue-400">등록하기</button>
    </form>
  );
}
