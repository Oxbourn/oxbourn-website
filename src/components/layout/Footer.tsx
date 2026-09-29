import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-ox-navy py-8 text-center text-white">
      <div className="site-container flex flex-col items-center gap-3">
        <p className="text-sm text-white/80">
          Copyright © {new Date().getFullYear()} {site.legalName}
        </p>
        <p className="text-sm text-ox-sky">{site.tagline}</p>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 font-display text-[0.95rem] tracking-[0.0625em] text-white/70 uppercase">
          <Link href="/#what-we-do" className="hover:text-white">
            What We Do
          </Link>
          <Link href="/blog" className="hover:text-white">
            Blog
          </Link>
          <Link href="/#contact" className="hover:text-white">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
