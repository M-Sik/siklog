import PostsCard from '@/components/cards/PostsCard';
import ProfileCard from '@/components/cards/ProfileCard';
import { getRecentPosts } from '@/service/post';

// get 메서드에 파라미터가 없어 자동 캐싱되므로 ssr로 만들기 위함
// export const dynamic = 'force-dynamic';

export default async function Home() {
  const posts = await getRecentPosts();
  console.log('????');

  if (!posts) return <div>loading</div>;

  return (
    <section>
      <h2 className="font-bold text-4xl">😎 Dev Sik</h2>
      <ProfileCard />
      <h2 className="font-bold text-4xl pt-6">✏️ Recent Posts</h2>
      <PostsCard posts={posts} />
    </section>
  );
}
