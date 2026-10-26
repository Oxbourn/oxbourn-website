import { site } from "@/lib/site";
import Link from "next/link";

const footerLinks = [
  { href: "/#what-we-do", label: "What We Do" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Insights" },
  { href: "/contact", label: "Contact" },
] as const;

export function Footer() {
  return (
    <footer className="footer">
      <div className="site-container footer-bar">
        <p className="footer-copy">
          © {new Date().getFullYear()} {site.legalName}
        </p>
        <nav className="footer-links" aria-label="Footer">
          {footerLinks.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="footer-meta">
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href={site.phoneHref}>{site.phone}</a>
        </div>
      </div>
    </footer>
  );
}
