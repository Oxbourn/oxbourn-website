"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    src: "https://oxbournconsulting.com/wp-content/uploads/2024/09/Enterprise-Applications-.avif",
    alt: "Enterprise Applications",
    position: "22% 46%",
  },
  {
    src: "https://oxbournconsulting.com/wp-content/uploads/2024/08/Strategic-Adversary.jpg",
    alt: "Strategic Advisory",
    position: "22% 46%",
  },
  {
    src: "https://oxbournconsulting.com/wp-content/uploads/2024/08/Operational-Efficiency.jpg",
    alt: "Operational Efficiency",
    position: "22% 46%",
  },
  {
    src: "https://oxbournconsulting.com/wp-content/uploads/2024/08/Organizational-Transformation-1.jpg",
    alt: "Organizational Transformation",
    position: "22% 46%",
  },
  {
    src: "https://oxbournconsulting.com/wp-content/uploads/2024/08/Technology-Integration.jpg",
    alt: "Technology Integration",
    position: "22% 46%",
  },
  {
    src: "https://oxbournconsulting.com/wp-content/uploads/2024/08/Talent-Development.avif",
    alt: "Talent Development",
    position: "75% 45%",
  },
] as const;

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 8000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section
      id="page-top"
      className="relative overflow-hidden pt-[10.5rem] pb-24 text-center text-white md:pt-[17rem] md:pb-[12.5rem]"
      aria-roledescription="carousel"
      aria-label="Featured"
    >
      {slides.map((slide, slideIndex) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={slideIndex === index ? slide.alt : ""}
          fill
          priority={slideIndex === 0}
          sizes="100vw"
          className={`object-cover transition-opacity duration-700 ${
            slideIndex === index ? "opacity-100" : "opacity-0"
          }`}
          style={{ objectPosition: slide.position }}
        />
      ))}
      <div className="absolute inset-0 bg-black/80" />
      <div className="site-container relative">
        <p className="mb-[25px] font-sans text-[1.5rem] leading-[1.5rem] font-normal italic md:mb-8 md:text-[2.25rem] md:leading-[2.25rem]">
          Consulting as a Service
        </p>
        <h1 className="mb-8 font-display text-[clamp(1.75rem,7vw,3.25rem)] leading-[1.15] font-bold uppercase md:mb-16 md:text-[clamp(2rem,3.4vw,4.5rem)]">
          Providing the right solution, right when you need it.
        </h1>
        <Link
          href="#insights"
          className="inline-flex rounded bg-ox-teal px-10 py-5 font-display text-[1.125rem] leading-none font-bold text-white uppercase transition-colors hover:bg-ox-teal-dark"
        >
          Latest
        </Link>
      </div>
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((slide, slideIndex) => (
          <button
            key={slide.src}
            type="button"
            aria-label={`Show ${slide.alt}`}
            aria-current={slideIndex === index ? "true" : undefined}
            className={`h-2.5 w-2.5 rounded-full border-2 border-white/80 ${
              slideIndex === index ? "bg-ox-teal" : "bg-ox-teal/30"
            }`}
            onClick={() => setIndex(slideIndex)}
          />
        ))}
      </div>
    </section>
  );
}
