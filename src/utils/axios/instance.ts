// axios를 사용하는데 공통으로 쓸 것들을 모아논 파일
// HTTP Request & Response와 관련된 기본 설정

import axios from 'axios';
import { setInterceptors } from './interceptors';

function createInstance() {
  const instance = axios.create({
    // .env 파일에 작성한 환경변수로 baseURL 설정
    baseURL: process.env.NEXT_PUBLIC_CLIENT_API_URL,
    timeout: 5000,
  });
  return setInterceptors(instance);
}

export const instance = createInstance();
