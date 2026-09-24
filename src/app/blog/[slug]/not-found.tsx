import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Post not found",
};

export default function BlogNotFound() {
  return (
    <section className="px-5 pt-36 pb-24 text-center">
      <h1 className="font-display text-3xl font-bold text-ox-navy uppercase">
        Post not found
      </h1>
      <p className="mt-4 text-ox-muted">That article is not available.</p>
      <Link
        href="/blog"
        className="mt-8 inline-flex rounded bg-ox-teal px-6 py-3 font-display text-sm font-bold tracking-[0.16em] text-white uppercase"
      >
        View the blog
      </Link>
    </section>
  );
}
