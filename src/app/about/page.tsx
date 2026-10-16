import type { Metadata } from "next";
import { About } from "@/components/sections/About";
import { Hero } from "@/components/sections/Hero";
import { LatestFromBlog } from "@/components/sections/LatestFromBlog";
import { about } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: about.kicker,
};

export default function AboutPage() {
  return (
    <>
      <Hero
        heading={about.title}
        subheading={about.kicker}
        cta="Contact us"
        ctaHref="/#contact"
        image={about.heroImage}
      />
      <About />
      <LatestFromBlog surface="mist" />
    </>
  );
}
