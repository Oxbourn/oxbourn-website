import Image from "next/image";
import Link from "next/link";
import { formatPostDate, type WordPressPost } from "@/lib/wordpress";

type PostCardProps = {
  post: WordPressPost;
};

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden bg-white shadow-sm">
      <Link href={`/blog/${post.slug}`} className="relative block h-52 bg-ox-navy">
        {post.featuredImage ? (
          <Image
            src={post.featuredImage.url}
            alt={post.featuredImage.alt}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          />
        ) : (
          <div className="h-full bg-gradient-to-br from-ox-teal to-ox-navy" />
        )}
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <p className="section-kicker text-[0.7rem] text-ox-teal">
          {post.category ?? "Insight"}
        </p>
        <p className="mt-2 text-xs tracking-[0.16em] text-ox-muted uppercase">
          {formatPostDate(post.date)}
          <span className="mx-2 text-ox-teal">•</span>
          {post.readingMinutes} min read
        </p>
        <h3 className="mt-3 font-display text-xl font-bold text-ox-navy">
          <Link href={`/blog/${post.slug}`} className="transition-colors hover:text-ox-teal">
            {post.title}
          </Link>
        </h3>
        <p className="mt-3 line-clamp-3 flex-1 text-sm leading-6 text-ox-muted">
          {post.excerpt}
        </p>
        <Link
          href={`/blog/${post.slug}`}
          className="mt-6 inline-flex font-display text-xs font-bold tracking-[0.18em] text-ox-teal uppercase transition-colors hover:text-ox-teal-dark"
        >
          Read article
        </Link>
      </div>
    </article>
  );
}
