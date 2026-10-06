"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { heroSlides } from "@/lib/site";

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % heroSlides.length);
    }, 7000);

    return () => window.clearInterval(timer);
  }, []);

  const slide = heroSlides[index];

  return (
    <header className="masthead" id="page-top" aria-roledescription="carousel" aria-label="How Oxbourn Consulting helps you">
      {heroSlides.map((item, slideIndex) => (
        <Image
          key={item.image}
          src={item.image}
          alt={slideIndex === index ? item.title : ""}
          fill
          priority={slideIndex === 0}
          sizes="100vw"
          className={`object-cover transition-opacity duration-700 ${
            slideIndex === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="masthead-overlay" />

      <div className="site-container relative z-10">
        <div className="masthead-subheading">Oxbourn Consulting Helps You:</div>
        <div key={slide.title} className="animate-[fadeIn_500ms_ease]">
          <h1 className="masthead-heading">{slide.title}</h1>
          <p className="masthead-body">{slide.body}</p>
        </div>
        <Link href="#insights" className="btn-agency">
          Insights
        </Link>

        <div className="masthead-dots">
          {heroSlides.map((item, slideIndex) => (
            <button
              key={item.title}
              type="button"
              aria-label={`Show ${item.title}`}
              aria-current={slideIndex === index ? "true" : undefined}
              className={slideIndex === index ? "is-active" : undefined}
              onClick={() => setIndex(slideIndex)}
            />
          ))}
        </div>
      </div>
    </header>
  );
}
