import { PostCard } from "@/components/blog/PostCard";
import { site } from "@/lib/site";
import { formatPostDate, getPostBySlug, getPosts } from "@/lib/wordpress";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

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
    <article className="bg-white pt-28 pb-24">
      <div className="site-container">
        <header>
          <p className="section-kicker text-[0.7rem] text-ox-teal">
            <Link href="/blog" className="hover:text-ox-teal-dark">
              Insights
            </Link>
            <span className="mx-2 text-ox-ice">/</span>
            {post.category ?? "Insights"}
          </p>
          <h1 className="article-title mt-4 tracking-tight">{post.title}</h1>
          <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-ox-muted">
            <span>{formatPostDate(post.date)}</span>
            <span aria-hidden="true" className="h-1 w-1 rounded-full bg-ox-teal/70" />
            <span>{post.readingMinutes} min read</span>
            <span aria-hidden="true" className="h-1 w-1 rounded-full bg-ox-teal/70" />
            <span>
              By <span className="font-medium text-ox-navy">{post.author || site.name}</span>
            </span>
          </div>
        </header>

        <div className="mt-10 grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_18.5rem] lg:gap-16">
          <div>
            {post.featuredImage ? (
              <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-2xl bg-ox-navy">
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
              className="wp-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>

          <aside className="lg:sticky lg:top-28">
            <div className="rounded-2xl bg-ox-navy px-7 py-8 text-white">
              <p className="font-display text-lg font-bold tracking-tight text-white">
                Have questions?
              </p>
              <p className="mt-3 text-sm leading-6 text-white/70">
                Discuss your family’s wealth, governance and continuity with Oxbourn Consulting.
              </p>
              <Link href="/contact" className="btn-agency mt-6">
                Contact us
              </Link>
            </div>
            {related[0] ? (
              <div className="mt-8 hidden overflow-hidden rounded-2xl border border-ox-ice lg:block [&>article]:shadow-none">
                <PostCard post={related[0]} />
              </div>
            ) : null}
          </aside>
        </div>
      </div>

      {related.length > 0 ? (
        <section className="mt-20 border-t border-ox-ice bg-ox-mist py-20">
          <div className="site-container">
            <p className="section-kicker text-center text-[0.7rem] text-ox-teal">
              More Insights
            </p>
            <h2 className="page-title mt-3 text-center">Keep reading</h2>
            <span className="mx-auto mt-5 block h-0.5 w-16 bg-ox-teal" />
            <div className="mt-12 grid gap-8 md:grid-cols-2">
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
