import Image from "next/image";
import Link from "next/link";
import { helpsYou } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function HowWeHelp() {
  return (
    <section id="how-we-help" className="page-section bg-ox-mist">
      <div className="site-container">
        <SectionHeading
          kicker="Organize, protect, preserve and govern wealth as a whole."
          title="Oxbourn Consulting Helps You"
        />
        <div className="portfolio-grid">
          {helpsYou.map((item) => (
            <article key={item.title} className="portfolio-item">
              <Link href="/#contact" className="portfolio-link">
                <span className="portfolio-hover">
                  <span className="portfolio-hover-label">Contact us</span>
                </span>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={700}
                  height={500}
                  className="portfolio-image"
                />
              </Link>
              <div className="portfolio-caption">
                <h3 className="portfolio-caption-heading">{item.title}</h3>
                <p className="portfolio-caption-subheading">{item.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
