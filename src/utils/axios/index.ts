// Http.js 파일에 있는 것 임포트해옴
// instance => 인증이 필요없는 로직에서 사용
// instanceWithAuth => 인증이 필요한 로직에서 사용
import { instance } from './instance';

// RequestData[]
function axiosCommon(url: string, method: string, data?: object, cache?: string) {
  if (method === 'post') {
    return instance.post(url, data);
  }
  // method가 get일시 아래 로직 실행
  else if (method === 'get') {
    return instance.get(url, {
      headers: {
        'Cache-Control': cache,
      },
    });
  } else if (method === 'delete') {
    return instance.delete(url, data);
  } else {
    return instance.put(url, data);
  }
}

export { axiosCommon };
