import { notFound, permanentRedirect } from "next/navigation";
import { getPostBySlug, getPosts } from "@/lib/wordpress";

export const revalidate = 60;
export const dynamicParams = true;

type LegacyPostPageProps = {
  params: Promise<{ slug: string }>;
};

const reservedSlugs = new Set([
  "about",
  "about-us",
  "services",
  "get-in-touch",
  "blog",
  "contact",
]);

export async function generateStaticParams() {
  const posts = await getPosts(50);
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function LegacyPostPage({ params }: LegacyPostPageProps) {
  const { slug } = await params;

  if (reservedSlugs.has(slug)) {
    notFound();
  }

  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  permanentRedirect(`/blog/${post.slug}`);
}
