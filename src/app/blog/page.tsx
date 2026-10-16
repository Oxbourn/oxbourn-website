import type { Metadata } from "next";
import { PostCard } from "@/components/blog/PostCard";
import { Hero } from "@/components/sections/Hero";
import { blog } from "@/lib/site";
import { getPosts } from "@/lib/wordpress";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Insights",
  description: blog.intro,
};

export default async function BlogPage() {
  const posts = await getPosts(50);

  return (
    <>
      <Hero
        heading={blog.title}
        subheading={blog.intro}
        cta="Contact us"
        ctaHref="/#contact"
        image={blog.heroImage}
      />
      <section className="page-section bg-ox-mist">
        <div className="site-container">
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
    </>
  );
}
