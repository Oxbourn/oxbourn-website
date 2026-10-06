import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="page-section bg-white">
      <div className="site-container">
        <SectionHeading
          kicker="Family office services designed around your wealth, governance and continuity."
          title="What We Do"
        />
        <div className="grid gap-y-16 text-center sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
          {services.map((service) => (
            <article key={service.slug} className="mx-auto max-w-sm">
              <Link href={`/what-we-do/${service.slug}`} className="service-circle group">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={448}
                  height={448}
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </Link>
              <h3 className="my-3 font-display text-[1.5rem] font-bold text-ox-navy">{service.title}</h3>
              <p className="text-base leading-7 text-ox-muted">{service.summary}</p>
              <Link
                href={`/what-we-do/${service.slug}`}
                className="mt-4 inline-flex font-display text-sm font-bold tracking-[0.08em] text-ox-teal uppercase transition-colors hover:text-ox-teal-dark"
              >
                More →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
