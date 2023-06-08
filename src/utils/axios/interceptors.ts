import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';

function setInterceptors(instance: AxiosInstance): AxiosInstance {
  instance.interceptors.request.use(
    async function (config) {
      console.log('요청 잘댐');
      // 요청 보내기 전에 제어할 부분
      // store -> 파일에 저장된 토큰이 있으면
      config.headers = config.headers ?? {};
      //   if (store.state.userInfo.token.accessToeken !== "") {
      //     // config.headers["Authorization"] = "Bearer " + store.state.userInfo.token.accessToeken;
      //     config.headers["token"] = store.state.userInfo.token.accessToeken;
      //   }
      // config.headers.Authorization = store.state.userInfo.token.accessToeken;
      //   store.commit(MutationTypes.setIsLoding, true);
      return config;
    },
    function (error: AxiosError) {
      //   store.commit(MutationTypes.setIsLoding, false);
      return Promise.reject(error);
    },
  );

  // Add a response interceptor
  instance.interceptors.response.use(
    function (response: AxiosResponse) {
      //   store.commit(MutationTypes.setIsLoding, false);
      console.log('응답 잘댐');
      return response;
    },
    function (error: AxiosError) {
      console.log('여기서 찍히는건가', error);
      const originalRequest = error.config;
      const status = error.response?.status;
      console.log('error status => ', status);
      if (status === 401) {
        return axios({
          method: 'get',
          url: `${process.env.VUE_APP_API}/api/util/generate_refresh_token`,
          headers: {
            // 리프레시 토큰 넣어야함
            // token: store.state.userInfo.token.refreshToken,
          },
        })
          .then(async (response) => {
            // refresh token이 유효하여 access, refresh 토큰을 정상 재발급 받은 경우
            console.log('리프레쉬 토큰 넘긴 결과 => ', response);
            //   store.commit(MutationTypes.setToken, {
            //     accessToken: response.data.resData.access_token,
            //     refreshToken: response.data.resData.refresh_token,
            //   });
            //   store.commit(MutationTypes.setIsLoding, false);

            // 기존에 수행하려고 하던 api에 재요청 => originalRequest
            if (originalRequest !== undefined) {
              // 재발급 받은 엑세스토큰으로 다시 보냄
              originalRequest.headers['Authorization'] = 'Bearer ' + 'fefeaf';
              originalRequest.headers['Content-Type'] = 'application/json';
              return await axios(originalRequest);
            }
          })
          .catch((e) => {
            console.log('리프레쉬토큰 체크에서 오류 => ', e);
            // refresh token이 만료되어 재발급 받지 못할경우 로그아웃 시킴
            // vuex 데이터 초기화
            // store.commit(MutationTypes.setInit);
            alert('로그인 시간이 만료되어 로그아웃 되었습니다. 다시 로그인해주세요.');
            // router.replace({
            //   name: 'main-page',
            // });
          });
      }
      //   store.commit(MutationTypes.setIsLoding, false);
      return Promise.reject(error);
    },
  );
  return instance;
}

export { setInterceptors };
