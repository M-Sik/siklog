import React from 'react';

type Props = {
  searchWord: string;
  handleSetSearchWord: React.Dispatch<React.SetStateAction<string>>;
};

export default function SearchInput({ searchWord, handleSetSearchWord }: Props) {
  return (
    <input
      type="text"
      placeholder="검색어를 입력해주세요."
      className="w-full border-2 border-yellow-400 px-6 py-4 outline-none rounded-xl"
      value={searchWord}
      onChange={(e) => handleSetSearchWord(e.target.value)}
    ></input>
  );
}
