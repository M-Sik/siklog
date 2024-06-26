export type PostInfo = {
  _id: string;
  title: string;
  subtitle: string;
  createdAt: string;
  pw: string;
  category: string;
  markdown: string;
  keywords: string[];
};

export type SearchPostInfo = {
  posts: PostInfo[];
  totalPage: number;
  curPage: number;
};
