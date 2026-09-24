import Link from "next/link";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="page-top"
      className="relative flex min-h-screen items-center justify-center bg-ox-navy px-5 text-center text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(1,151,178,0.35),_transparent_55%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(0,23,26,0.2)_0%,_rgba(0,23,26,0.85)_100%)]" />
      <div className="relative mx-auto max-w-4xl">
        <p className="font-display text-lg italic text-ox-sky sm:text-2xl">
          Consulting as a Service
        </p>
        <h1 className="mt-4 font-display text-4xl font-bold tracking-tight uppercase sm:text-6xl lg:text-7xl">
          {site.tagline}
        </h1>
        <Link
          href="#contact"
          className="mt-10 inline-flex rounded bg-ox-teal px-8 py-4 font-display text-sm font-bold tracking-[0.18em] text-white uppercase transition-colors hover:bg-ox-teal-dark"
        >
          Schedule a meeting
        </Link>
      </div>
    </section>
  );
}
