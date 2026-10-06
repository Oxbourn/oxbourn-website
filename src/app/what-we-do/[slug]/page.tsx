import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LatestFromBlog } from "@/components/sections/LatestFromBlog";
import { getService, services } from "@/lib/site";

export const revalidate = 60;

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return { title: "What We Do" };
  }

  return {
    title: service.title,
    description: service.summary,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <article className="bg-white pt-32 pb-20">
        <div className="site-container">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-ox-muted">
              <li>
                <Link href="/#what-we-do" className="text-ox-teal hover:text-ox-teal-dark">
                  What We Do
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>{service.title}</li>
            </ol>
          </nav>
          <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-ox-navy uppercase sm:text-5xl">
            {service.title}
          </h1>
          <div className="mt-10 max-w-3xl space-y-6">
            {service.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-[1.05rem] leading-8 text-ox-muted">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="mt-12 max-w-3xl border-t border-ox-ice pt-10">
            <h2 className="font-display text-xl font-bold text-ox-navy uppercase">
              What we cover
            </h2>
            <p className="mt-4 text-[1.05rem] leading-8 text-ox-muted">{service.cover}</p>
          </div>
          <div className="mt-12">
            <Link
              href="/#contact"
              className="btn-agency"
            >
              Contact us
            </Link>
          </div>
        </div>
      </article>
      <LatestFromBlog surface="mist" />
    </>
  );
}
