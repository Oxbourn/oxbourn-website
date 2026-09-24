import { formatWpContent } from "@/lib/wp-content";

const wordpressUrl =
  process.env.WORDPRESS_URL?.replace(/\/$/, "") ??
  "https://oxbournconsulting.com";

const apiBase = `${wordpressUrl}/wp-json/wp/v2`;
const publicOrigins = Array.from(
  new Set([wordpressUrl, "https://oxbournconsulting.com"]),
);

export const wordpressRevalidate = 60;

export type WordPressPost = {
  id: number;
  slug: string;
  date: string;
  title: string;
  excerpt: string;
  content: string;
  author?: string;
  category?: string;
  readingMinutes: number;
  featuredImage?: {
    url: string;
    alt: string;
  };
};

type WpRendered = { rendered: string };

type WpTerm = {
  name: string;
  taxonomy: string;
};

type WpPostResponse = {
  id: number;
  slug: string;
  date: string;
  title: WpRendered;
  excerpt: WpRendered;
  content: WpRendered;
  _embedded?: {
    author?: Array<{ name?: string }>;
    "wp:featuredmedia"?: Array<{
      source_url?: string;
      alt_text?: string;
    }>;
    "wp:term"?: WpTerm[][];
  };
};

function decodeEntities(value: string) {
  return value
    .replace(/&#(\d+);/g, (_, code: string) =>
      String.fromCharCode(Number(code)),
    )
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#039;|&apos;/g, "'")
    .replace(/&lsquo;|&#8216;/g, "‘")
    .replace(/&rsquo;|&#8217;/g, "’")
    .replace(/&ldquo;|&#8220;/g, "“")
    .replace(/&rdquo;|&#8221;/g, "”")
    .replace(/&mdash;|&#8212;/g, "—")
    .replace(/&ndash;|&#8211;/g, "–")
    .replace(/&hellip;|&#8230;/g, "…")
    .replace(/&nbsp;/g, " ");
}

export function stripHtml(html: string) {
  return decodeEntities(html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim());
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function rewriteWpLinks(html: string) {
  return publicOrigins.reduce((content, origin) => {
    const escaped = escapeRegExp(origin);

    return content
      .replace(new RegExp(`${escaped}/blog/?`, "g"), "/blog")
      .replace(new RegExp(`${escaped}/about-us/?`, "g"), "/#about")
      .replace(new RegExp(`${escaped}/services/?`, "g"), "/#services")
      .replace(new RegExp(`${escaped}/get-in-touch/?`, "g"), "/#contact")
      .replace(
        new RegExp(
          `${escaped}/(?!wp-|wp/|category/|author/|tag/|feed/?)([^"'\\s/<]+)/?`,
          "g",
        ),
        "/blog/$1",
      );
  }, html);
}

function mapPost(post: WpPostResponse): WordPressPost {
  const media = post._embedded?.["wp:featuredmedia"]?.[0];
  const category = post._embedded?.["wp:term"]
    ?.flat()
    .find((term) => term.taxonomy === "category")?.name;
  const title = stripHtml(post.title.rendered);
  const content = rewriteWpLinks(formatWpContent(post.content.rendered));
  const words = `${title} ${stripHtml(content)}`.split(/\s+/).filter(Boolean).length;

  return {
    id: post.id,
    slug: post.slug,
    date: post.date,
    title,
    excerpt: stripHtml(post.excerpt.rendered),
    content,
    author: formatAuthor(post._embedded?.author?.[0]?.name),
    category,
    readingMinutes: Math.max(1, Math.round(words / 200)),
    featuredImage: media?.source_url
      ? { url: media.source_url, alt: media.alt_text || title }
      : undefined,
  };
}

async function wpFetch<T>(path: string): Promise<T | null> {
  try {
    const response = await fetch(`${apiBase}${path}`, {
      next: { revalidate: wordpressRevalidate },
    });

    if (!response.ok) {
      console.error(`WordPress request failed (${response.status}): ${path}`);
      return null;
    }

    return (await response.json()) as T;
  } catch (error) {
    console.error("WordPress request error:", error);
    return null;
  }
}

export async function getPosts(limit = 12): Promise<WordPressPost[]> {
  const posts = await wpFetch<WpPostResponse[]>(
    `/posts?_embed&per_page=${limit}`,
  );

  return posts?.map(mapPost) ?? [];
}

export async function getPostBySlug(
  slug: string,
): Promise<WordPressPost | null> {
  const posts = await wpFetch<WpPostResponse[]>(
    `/posts?_embed&slug=${encodeURIComponent(slug)}`,
  );

  const post = posts?.[0];
  return post ? mapPost(post) : null;
}

function formatAuthor(name?: string) {
  if (!name || /^(admin|oxbourn)$/i.test(name)) {
    return "Oxbourn Consulting";
  }

  return name;
}

export function formatPostDate(isoDate: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(isoDate));
}
