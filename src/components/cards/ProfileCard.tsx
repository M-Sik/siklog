import Image from 'next/image';
import React from 'react';
import ProfileImg from '../../../public/images/home/siklog_profile.jpeg';
import GitHubIcon from '../icons/GitHubIcon';
import TistoryIcon from '../icons/TistoryIcon';

export default function ProfileCard() {
  return (
    <section className="flex flex-col md:flex-row gap-6 justify-center items-center my-12">
      <article>
        <Image
          src={ProfileImg}
          alt="프로필 이미지"
          height={300}
          width={300}
          className=" object-contain rounded-3xl"
        />
      </article>
      <article>
        <h3 className="font-bold text-xl">프론트엔드 개발자 김명식 입니다.</h3>
        <p className="mt-4">
          만랩이 없는 프로그래밍이라는 게임을 즐기며 <br />
          높은 레벨을 달성하기 위해 열심히 레벨업 하고있습니다.
        </p>
        <div className="flex gap-4 items-center mt-2">
          <a href={'https://github.com/m-sik'} target="_blank" aria-label="깃허브 링크">
            <GitHubIcon />
          </a>
          <a href={'https://sikk.tistory.com/'} target="_blank" aria-label="티스토리 링크">
            <TistoryIcon />
          </a>
        </div>
      </article>
    </section>
  );
}
