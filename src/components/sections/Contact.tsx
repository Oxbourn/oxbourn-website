"use client";

import { FormEvent } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Contact() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <section id="contact" className="page-section">
      <div className="site-container">
        <SectionHeading
          kicker="Discuss your family’s wealth, governance and continuity objectives with Oxbourn Consulting."
          title="Contact Us"
          light
        />
        <form id="contactForm" onSubmit={handleSubmit}>
          <div className="contact-form-grid">
            <div>
              <div className="form-group">
                <label className="sr-only" htmlFor="name">
                  Name
                </label>
                <input id="name" name="name" type="text" placeholder="Your Name *" required />
              </div>
              <div className="form-group">
                <label className="sr-only" htmlFor="email">
                  Email
                </label>
                <input id="email" name="email" type="email" placeholder="Your Email *" required />
              </div>
              <div className="form-group form-group-last">
                <label className="sr-only" htmlFor="phone">
                  Phone
                </label>
                <input id="phone" name="phone" type="tel" placeholder="Your Phone *" required />
              </div>
            </div>
            <div className="form-group form-group-textarea form-group-last">
              <label className="sr-only" htmlFor="message">
                Message
              </label>
              <textarea id="message" name="message" placeholder="Your Message *" required />
            </div>
          </div>
          <div className="text-center">
            <button type="submit" className="btn-agency">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
