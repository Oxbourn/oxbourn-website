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
        <div className="services-grid">
          {services.map((service) => (
            <article key={service.slug} className="service-item">
              <Link href={`/what-we-do/${service.slug}`} className="service-circle group">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={448}
                  height={448}
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </Link>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-copy">{service.summary}</p>
              <Link href={`/what-we-do/${service.slug}`} className="service-more">
                More →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
