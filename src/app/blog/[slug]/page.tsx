import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PostCard } from "@/components/blog/PostCard";
import { site } from "@/lib/site";
import { formatPostDate, getPostBySlug, getPosts } from "@/lib/wordpress";

export const revalidate = 60;
export const dynamicParams = true;

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = await getPosts(50);
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return { title: "Post not found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const [post, posts] = await Promise.all([getPostBySlug(slug), getPosts(6)]);

  if (!post) {
    notFound();
  }

  const related = posts.filter((item) => item.id !== post.id).slice(0, 2);

  return (
    <article className="bg-white px-5 pt-28 pb-24">
      <div className="mx-auto max-w-7xl">
        <header className="mx-auto max-w-4xl text-center">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center justify-center gap-2 text-sm text-ox-muted">
              <li>
                <Link href="/blog" className="text-ox-teal hover:text-ox-teal-dark">
                  Blog
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="max-w-[28rem] truncate">{post.title}</li>
            </ol>
          </nav>
          <p className="mt-6 text-xs tracking-[0.16em] text-ox-muted uppercase">
            {formatPostDate(post.date)}
            <span className="mx-2 text-ox-teal">•</span>
            {post.category ?? "Insight"}
            <span className="mx-2 text-ox-teal">•</span>
            {post.readingMinutes} min read
          </p>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight text-ox-navy sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-6 text-sm text-ox-muted">
            By <span className="font-semibold text-ox-navy">{post.author || site.name}</span>
          </p>
        </header>

        <div className="mt-14 grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-16">
          <div>
            {post.featuredImage ? (
              <div className="relative aspect-[16/9] overflow-hidden bg-ox-navy">
                <Image
                  src={post.featuredImage.url}
                  alt={post.featuredImage.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1280px) 880px, (min-width: 1024px) 70vw, 100vw"
                  priority
                />
              </div>
            ) : null}

            <div
              className="wp-content mt-10"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>

          <aside className="lg:sticky lg:top-28">
            <div className="bg-ox-navy px-6 py-8 text-white">
              <p className="font-display text-2xl font-bold uppercase">
                Have questions?
              </p>
              <p className="mt-3 text-sm leading-6 text-white/75">
                We can help you act on this — strategy, operations, or technology.
              </p>
              <Link
                href="/#contact"
                className="mt-6 inline-flex rounded bg-ox-teal px-6 py-3 font-display text-xs font-bold tracking-[0.16em] text-white uppercase transition-colors hover:bg-ox-teal-dark"
              >
                Contact us
              </Link>
            </div>
            {related[0] ? (
              <div className="mt-8 hidden lg:block">
                <p className="section-kicker text-[0.7rem] text-ox-teal">
                  More from the blog
                </p>
                <div className="mt-4">
                  <PostCard post={related[0]} />
                </div>
              </div>
            ) : null}
          </aside>
        </div>
      </div>

      {related.length > 0 ? (
        <section className="mt-20 border-t border-ox-ice bg-ox-mist px-5 py-20">
          <div className="mx-auto max-w-7xl">
            <p className="text-center text-sm text-ox-muted">You may also like</p>
            <h2 className="mt-3 text-center font-display text-3xl font-bold text-ox-navy uppercase">
              Related posts
            </h2>
            <span className="mx-auto mt-5 block h-0.5 w-20 bg-ox-teal" />
            <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-2">
              {related.map((item) => (
                <PostCard key={item.id} post={item} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </article>
  );
}
