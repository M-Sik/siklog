# siklog

### 📑 개요

개인 블로그를 가지고 싶어 Next.js를 이용하여 만든 블로그입니다.

Next.js의 API Route와 MongoDB를 이용하여 데이터 관리를 하였으며, **AWS를 이용하여 호스팅 및 배포 자동화를 진행하였으나 나 비용 문제로 인해 호스팅 서비스를 Vercel로 변경하였습니다.**

블로그라는 특성상 다른 사용자들에게 노출이 되어야 하기 때문에 어떻게 하면 **검색엔진이 읽기 쉬운** 블로그를 만들 수 있을지를 고민을 하였습니다.

**SEO에 대해 고민하고 적용한 결과는 아래와 같습니다.**

- **검색엔진이 블로그의 내용 효율적으로 이해하게 해야 한다. 미리보기를 통해 사용자의 클릭을 유도해야 한다.**

  - 검색엔진에 노출되어야 하는 정보는 SSR 방식을 이용하여 검색엔진이 HTML 문서를 읽을 수 있도록 도움을 주었습니다.
  - 페이지에 따른 title, description, keyword 등 메타태그를 작성하여 검색엔진의 블로그 내용 파악에 도움을 주었습니다.
  - title, description, open graph 등 메타태그를 통해 사용자가 블로그를 미리 볼 수 있도록 구현하였습니다.

- **검색엔진은 버튼을 클릭하지 않고 a 태그를 통해 페이지를 옮겨 다닌다.**

  - Next.js에서 제공하는 Link 태그를 이용해 검색엔진의 페이지 이동에 도움을 주었습니다.

- **검색엔진이 블로그를 효과적으로 크롤링하고 색인하기 위해서는 sitemap이 필요하다.**

  - route 경로에 따른 sitemap 즉, 정적 sitemap을 작성하였습니다.
  - 동적 sitemap 구현, 블로그의 경우 게시글 하나하나의 내용을 검색엔진이 쉽게 파악하기 위해 게시글들의 상세 페이지 경로를 sitemap으로 작성하여 검색엔진에 도움을 주었습니다.

- **블로그 상세 글을 검색엔진이 보고 있을 때 현재 글 및 다른 글로 이동할 수 있는 정보를 주어야 한다.**
  - 검색엔진이 블로그 상세 글을 색인했다면 해당 글을 사용자에게 노출시키기 위해 블로그 게시글 작성 시 title, description, keyword 정보를 입력하였고, 블로그 상세 글 페이지에 메타태그를 추가해주었습니다.
  - 검색엔진이 블로그 상세 글 페이지를 탐색 중 다른 게시글도 노출시키기 위해 이전 게시글 및 다음 게시글의 링크를 넣었습니다.

<br>

### 🛠️ 사용 기술

- Next.js 13.4.3
- React.js 18.2.0
- Typescript
- React Query
- AWS
- MongoDB
- Tailwindcss
  <br>

### 🔗 배포 URL

- https://siklog.shop
  <br>

### 💻 작업 내용

- SEO 최적화

  - 정적 sitemap, 동적 sitemap 작성
  - 페이지별 meta 태그 작성
  - SSR을 이용한 pre-render

- Suspense, ErrorBoundary, QueryErrorResetBoundary를 통한 API 로딩 처리 및 에러핸들링
- CSR 방식으로 게시글 목록을 불러오는 페이지에 React Query 적용
  - 매번 해당 페이지로 이동할때마다 로딩 UI가 보여 캐싱을 이용해 UX를 향상시키기 위해 React Query 적용
- Next.js에서 제공하는 api route를 이용해 게시글 관련 api구현
- AWS ec2, pm2, nginx를 이용한 호스팅과 code pipeline, code deploy를 이용한 배포 자동화를 통하여 운영중이었으나 비용 문제로 인해 호스팅 서비스를 Vercel로 변경
- LightHouse를 통한 웹 성능 및 웹 접근성 측정
- Markdown Editor를 이용한 게시글 작성
- Markdown Viewer를 통한 게시글 상세 조회

### 🚀 미리 보기

### Home 화면👇👇

![image](https://github.com/M-Sik/siklog/assets/77043973/202f1544-7c1a-452b-a21a-a1a4b4663c74)

<br>

### 게시글 상세 조회👇👇

![image](https://github.com/M-Sik/siklog/assets/77043973/d3c2f1ec-fe2e-4ec4-a53f-c673c4a68a41)

<br>

### 게시글 조회👇👇

![image](https://github.com/M-Sik/siklog/assets/77043973/0018c0ef-a5ca-4f06-b1ba-419887d54d09)

<br>
