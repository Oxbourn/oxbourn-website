import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="site-container">
        <div className="footer-grid">
          <p className="footer-copy">
            Copyright © {new Date().getFullYear()} {site.legalName}
          </p>
          <div className="footer-meta">
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a href={site.phoneHref}>{site.phone}</a>
          </div>
          <div className="footer-links">
            <Link href="/#what-we-do">What We Do</Link>
            <Link href="/about">About</Link>
            <Link href="/blog">Insight</Link>
            <Link href="/#contact">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
