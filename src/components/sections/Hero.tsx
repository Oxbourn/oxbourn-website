import Image from "next/image";
import Link from "next/link";
import { hero } from "@/lib/site";

export function Hero() {
  return (
    <header className="masthead" id="page-top">
      <Image
        src={hero.image}
        alt={hero.heading}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="masthead-overlay" />
      <div className="site-container relative z-10">
        <div className="masthead-subheading">{hero.subheading}</div>
        <h1 className="masthead-heading">{hero.heading}</h1>
        <p className="masthead-body">{hero.body}</p>
        <Link href="#insights" className="btn-agency btn-agency-xl">
          Insights
        </Link>
      </div>
    </header>
  );
}
