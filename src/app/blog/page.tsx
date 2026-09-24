import type { Metadata } from "next";
import { PostCard } from "@/components/blog/PostCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { blog } from "@/lib/site";
import { getPosts } from "@/lib/wordpress";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Blog",
  description: blog.intro,
};

export default async function BlogPage() {
  const posts = await getPosts(50);

  return (
    <section className="bg-ox-mist px-5 pt-32 pb-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker={blog.kicker} title={blog.title} />
        <p className="mx-auto mt-8 max-w-2xl text-center leading-7 text-ox-muted">
          {blog.intro}
        </p>

        {posts.length === 0 ? (
          <p className="mt-16 text-center text-ox-muted">
            New articles will appear here as they are published.
          </p>
        ) : (
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
