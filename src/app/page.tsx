import PostsCard from '@/components/cards/PostsCard';
import ProfileCard from '@/components/cards/ProfileCard';
import { getRecentPosts } from '@/service/post';

export const revalidate = 30;

export default async function Home() {
  const posts = await getRecentPosts();

  return (
    <section>
      <h2 className="font-bold text-4xl">😎 Dev Sik</h2>
      <ProfileCard />
      <h2 className="font-bold text-4xl pt-6">✏️ Recent Posts</h2>
      <PostsCard posts={posts} />
    </section>
  );
}
