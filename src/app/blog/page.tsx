import type { Metadata } from "next";
import { PostCard } from "@/components/blog/PostCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { blog } from "@/lib/site";
import { getPosts } from "@/lib/wordpress";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Insight",
  description: blog.intro,
};

export default async function BlogPage() {
  const posts = await getPosts(50);

  return (
    <section className="bg-ox-mist pt-32 pb-24">
      <div className="site-container">
        <SectionHeading kicker={blog.intro} title={blog.title} />

        {posts.length === 0 ? (
          <p className="text-center text-ox-muted">
            New articles will appear here as they are published.
          </p>
        ) : (
          <div className="insight-grid">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
