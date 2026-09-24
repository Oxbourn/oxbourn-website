import Link from "next/link";
import { PostCard } from "@/components/blog/PostCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { blog } from "@/lib/site";
import { getPosts } from "@/lib/wordpress";

export async function LatestFromBlog() {
  const posts = (await getPosts(3)).slice(0, 3);

  return (
    <section id="insights" className="bg-white px-5 py-24">
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

        <div className="mt-14 text-center">
          <Link
            href="/blog"
            className="inline-flex rounded bg-ox-teal px-8 py-4 font-display text-sm font-bold tracking-[0.18em] text-white uppercase transition-colors hover:bg-ox-teal-dark"
          >
            View the blog
          </Link>
        </div>
      </div>
    </section>
  );
}
