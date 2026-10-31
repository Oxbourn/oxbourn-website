import Image from "next/image";
import Link from "next/link";
import { hero } from "@/lib/site";

type HeroProps = {
  heading?: string;
  subheading?: string;
  cta?: string | null;
  ctaHref?: string;
  image?: string;
  objectPosition?: "banner" | "center";
};

export function Hero({
  heading = hero.heading,
  subheading = hero.subheading,
  cta = hero.cta,
  ctaHref = hero.ctaHref,
  image = hero.image,
  objectPosition = "banner",
}: HeroProps) {
  return (
    <header className="masthead" id="page-top">
      <Image
        src={image}
        alt={heading}
        fill
        priority
        quality={90}
        sizes="100vw"
        className={`object-cover masthead-photo${objectPosition === "center" ? " masthead-photo-center" : ""}`}
      />
      <div className="masthead-overlay" />
      <div className="site-container relative z-10">
        <div className="masthead-copy">
          <h1 className="masthead-heading">{heading}</h1>
          {subheading ? <p className="masthead-subheading">{subheading}</p> : null}
          {cta ? (
            <Link href={ctaHref} className="btn-agency">
              {cta}
            </Link>
          ) : null}
        </div>
      </div>
    </header>
  );
}
