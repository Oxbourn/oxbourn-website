import Link from "next/link";
import { PostCard } from "@/components/blog/PostCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { blog } from "@/lib/site";
import { getPosts } from "@/lib/wordpress";

type LatestFromBlogProps = {
  surface?: "white" | "mist";
};

export async function LatestFromBlog({ surface = "white" }: LatestFromBlogProps) {
  const posts = (await getPosts(4)).slice(0, 4);

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
          <div className="insight-grid">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        )}

        <div className="mt-14 text-center">
          <Link
            href="/blog"
            className="btn-agency"
          >
            More Insight
          </Link>
        </div>
      </div>
    </section>
  );
}
