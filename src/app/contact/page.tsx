import type { Metadata } from "next";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Oxbourn Consulting to discuss your family's wealth, governance and continuity.",
};

export default function ContactPage() {
  return (
    <>
      <Hero
        heading="Contact Us"
        subheading="Tell us about your family's wealth, governance and continuity goals — and how we can help."
        cta="Learn more"
        ctaHref="/#what-we-do"
        image="/hero/banner.jpg"
      />

      <section className="page-section bg-white">
        <div className="site-container">
          <ul className="contact-info-grid">
            <li>
              <a className="contact-info-item" href={`mailto:${site.email}`}>
                <svg
                  className="contact-info-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
                <span className="contact-info-label">Email</span>
                <span className="contact-info-value">{site.email}</span>
              </a>
            </li>
            <li>
              <a className="contact-info-item" href={site.phoneHref}>
                <svg
                  className="contact-info-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span className="contact-info-label">Phone</span>
                <span className="contact-info-value">{site.phone}</span>
              </a>
            </li>
          </ul>
        </div>
      </section>

      <Contact />
    </>
  );
}
