import PostsCard from '@/components/cards/PostsCard';
import ProfileCard from '@/components/cards/ProfileCard';

// export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <section>
      <h2 className="font-bold text-4xl">😎 Dev Sik</h2>
      <ProfileCard />
      <h2 className="font-bold text-4xl pt-6">✏️ Recent Posts</h2>
      {/* @ts-expect-error Server Component */}
      <PostsCard />
    </section>
  );
}
