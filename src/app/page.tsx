import PostsCard from '@/components/cards/PostsCard';
import ProfileCard from '@/components/cards/ProfileCard';
import { getRecentPosts } from '@/service/post';

// export const dynamic = 'force-dynamic';

export default async function Home() {
  // 여기 아래
  const posts = await getRecentPosts();

  return (
    <section>
      <h2 className="font-bold text-4xl">😎 Dev Sik</h2>
      <ProfileCard />
      <h2 className="font-bold text-4xl pt-6">✏️ Recent Posts</h2>
      {/* 여기 아래 */}
      <PostsCard posts={posts} />
    </section>
  );
}
