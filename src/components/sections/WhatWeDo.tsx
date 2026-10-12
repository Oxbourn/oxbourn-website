import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="page-section bg-ox-mist">
      <div className="site-container">
        <SectionHeading
          kicker="Family office services designed around your wealth, governance and continuity."
          title="What We Do"
        />
        <div className="services-grid">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/what-we-do/${service.slug}`}
              className="service-card"
            >
              <div className="service-card-top">
                <h3 className="service-title">{service.title}</h3>
                <span className="service-card-arrow" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path
                      d="M5 12h12M13 6l6 6-6 6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
              <p className="service-copy">{service.summary}</p>
              <Image
                src={service.image}
                alt={service.title}
                width={900}
                height={560}
                className="service-card-photo"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
