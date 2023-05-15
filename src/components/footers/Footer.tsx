import React from 'react';
import GitHubIcon from '../icons/GitHubIcon';
import TistoryIcon from '../icons/TistoryIcon';

export default function Footer() {
  return (
    <footer className="flex justify-center border-t py-6">
      <div>
        <div className="flex justify-center items-center gap-6">
          <a href={'https://github.com/m-sik'} target="_blank" aria-label="깃허브 링크">
            <GitHubIcon />
          </a>
          <a href={'https://sikk.tistory.com/'} target="_blank" aria-label="티스토리 링크">
            <TistoryIcon />
          </a>
        </div>
        <p className="mt-2">Copyright 2023. MyeongSik Kim</p>
        <p className="text-center mt-2">dev.sik</p>
      </div>
    </footer>
  );
}
