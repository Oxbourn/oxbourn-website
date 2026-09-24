import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-ox-navy py-8 text-center text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-5">
        <p className="text-sm text-white/80">
          Copyright © {new Date().getFullYear()} {site.legalName}
        </p>
        <p className="text-sm text-ox-sky">{site.tagline}</p>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs tracking-[0.16em] text-white/70 uppercase">
          <Link href="/#services" className="hover:text-white">
            Services
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
