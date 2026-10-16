import Image from "next/image";
import Link from "next/link";
import { hero } from "@/lib/site";

type HeroProps = {
  heading?: string;
  subheading?: string;
  cta?: string;
  ctaHref?: string;
  image?: string;
};

export function Hero({
  heading = hero.heading,
  subheading = hero.subheading,
  cta = hero.cta,
  ctaHref = hero.ctaHref,
  image = hero.image,
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
        className="object-cover object-[center_30%]"
      />
      <div className="masthead-overlay" />
      <div className="site-container relative z-10">
        <div className="masthead-copy">
          <h1 className="masthead-heading">{heading}</h1>
          <p className="masthead-subheading">{subheading}</p>
          <Link href={ctaHref} className="btn-agency btn-agency-xl">
            {cta}
          </Link>
        </div>
      </div>
    </header>
  );
}
