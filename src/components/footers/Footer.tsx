import React from 'react';
import GitHubIcon from '../icons/GitHubIcon';
import TistoryIcon from '../icons/TistoryIcon';

const links = [
  { url: 'https://github.com/m-sik', label: '깃허브 링크', icon: <GitHubIcon /> },
  { url: 'https://sikk.tistory.com/', label: '티스토리 링크', icon: <TistoryIcon /> },
];

export default function Footer() {
  return (
    <footer className="flex justify-center border-t py-6">
      <div>
        <nav>
          <ul className="flex justify-center items-center gap-6">
            {links.map(({ url, label, icon }, i) => (
              <li key={i}>
                <a href={url} target="_blank" aria-label={label}>
                  {icon}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <p className="mt-2">Copyright 2023. MyeongSik Kim</p>
        <p className="text-center mt-2">dev.sik</p>
      </div>
    </footer>
  );
}
