import Link from "next/link";
import { PostCard } from "@/components/blog/PostCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { blog } from "@/lib/site";
import { getPosts } from "@/lib/wordpress";

type LatestFromBlogProps = {
  surface?: "white" | "mist";
};

export async function LatestFromBlog({ surface = "white" }: LatestFromBlogProps) {
  const posts = (await getPosts(3)).slice(0, 3);

  return (
    <section
      id="insights"
      className={`page-section ${surface === "mist" ? "bg-ox-mist" : "bg-white"}`}
    >
      <div className="site-container">
        <SectionHeading kicker={blog.intro} title={blog.title} />

        {posts.length === 0 ? (
          <p className="text-center text-ox-muted">
            New articles will appear here as they are published.
          </p>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        )}

        <div className="mt-14 text-center">
          <Link
            href="/blog"
            className="inline-flex rounded bg-ox-teal px-10 py-5 font-display text-[1.125rem] font-bold text-white uppercase transition-colors hover:bg-ox-teal-dark"
          >
            View the blog
          </Link>
        </div>
      </div>
    </section>
  );
}
