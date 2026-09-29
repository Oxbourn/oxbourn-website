"use client";

import { FormEvent } from "react";
import { site } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Contact() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <section
      id="contact"
      className="page-section bg-[#212529] bg-center bg-no-repeat"
      style={{ backgroundImage: "url(/agency/map-image.png)" }}
    >
      <div className="site-container">
        <SectionHeading
          kicker="Discuss your challenges, explore the CaaS model, and see how we can help you stay ahead."
          title="Contact Us"
          light
        />
        <form className="grid gap-5 sm:grid-cols-2" onSubmit={handleSubmit}>
          <label className="sr-only" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            placeholder="Your Name *"
            required
            className="rounded bg-white px-4 py-3 text-ox-ink outline-none ring-ox-teal focus:ring-2"
          />
          <label className="sr-only" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Your Email *"
            required
            className="rounded bg-white px-4 py-3 text-ox-ink outline-none ring-ox-teal focus:ring-2"
          />
          <label className="sr-only" htmlFor="phone">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            placeholder="Your Phone *"
            required
            className="rounded bg-white px-4 py-3 text-ox-ink outline-none ring-ox-teal focus:ring-2 sm:col-span-2"
          />
          <label className="sr-only" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message *"
            required
            rows={6}
            className="rounded bg-white px-4 py-3 text-ox-ink outline-none ring-ox-teal focus:ring-2 sm:col-span-2"
          />
          <div className="sm:col-span-2 text-center">
            <button
              type="submit"
              className="rounded bg-ox-teal px-10 py-5 font-display text-[1.125rem] font-bold text-white uppercase transition-colors hover:bg-ox-teal-dark"
            >
              Send Message
            </button>
          </div>
        </form>
        <div className="mt-12 grid gap-6 text-center text-sm text-white/80 sm:grid-cols-3">
          <p>{site.address}</p>
          <a href={`mailto:${site.email}`} className="hover:text-ox-sky">
            {site.email}
          </a>
          <a href={site.phoneHref} className="hover:text-ox-sky">
            {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
