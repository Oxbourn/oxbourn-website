import type { Metadata } from "next";
import Image from "next/image";
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
      <article className="bg-white pt-28 pb-16 md:pt-32 md:pb-20">
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
          <div className="service-page-grid">
            <div>
              <h1 className="page-title mt-6">{service.title}</h1>
              <div className="page-prose mt-8 space-y-5">
                {service.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-10 border-t border-ox-ice pt-8">
                <h2 className="page-subtitle">What we cover</h2>
                <p className="page-prose mt-4">{service.cover}</p>
              </div>
            </div>
            <div className="service-page-media">
              <Image
                src={service.image}
                alt={service.title}
                width={900}
                height={1100}
                className="service-page-photo"
              />
            </div>
          </div>
        </div>
      </article>
      <LatestFromBlog surface="mist" />
    </>
  );
}
