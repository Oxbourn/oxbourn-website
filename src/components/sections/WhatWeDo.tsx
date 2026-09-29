import Link from "next/link";
import { services } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="page-section bg-white">
      <div className="site-container">
        <SectionHeading kicker="Services" title="What We Do" />
        <div className="grid gap-y-12 text-center md:grid-cols-3 md:gap-x-6">
          {services.map((service) => (
            <article key={service.slug}>
              <div className="mx-auto flex size-32 items-center justify-center rounded-full bg-ox-teal text-white">
                <ServiceMark />
              </div>
              <h3 className="my-4 font-display text-2xl font-bold text-ox-navy">{service.title}</h3>
              {service.summary ? (
                <p className="text-base leading-7 text-ox-muted">{service.summary}</p>
              ) : null}
              <Link
                href={`/what-we-do/${service.slug}`}
                className="mt-4 inline-flex font-display text-sm font-bold text-ox-teal uppercase transition-colors hover:text-ox-teal-dark"
              >
                More
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceMark() {
  return (
    <svg viewBox="0 0 24 24" className="size-12" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="12" cy="12" r="7" />
      <path d="M12 8v8M8 12h8" />
    </svg>
  );
}
