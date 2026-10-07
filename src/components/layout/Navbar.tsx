"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navItems, site } from "@/lib/site";

const logoSrc =
  "https://res.cloudinary.com/dnfwbgfih/images/f_auto,q_auto/v1724523743/Oxbourn-Consulting-Logo-main/Oxbourn-Consulting-Logo-main.png";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const onHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = !onHome || scrolled || open;

  return (
    <nav
      id="mainNav"
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? "bg-[#212529] py-4 shadow-md" : "bg-[#212529] py-4 md:bg-transparent md:py-6"
      }`}
    >
      <div className="site-container flex items-center justify-between">
        <Link href="/#page-top" className="flex items-center" onClick={() => setOpen(false)}>
          <Image
            src={logoSrc}
            alt={site.name}
            width={48}
            height={48}
            className="h-10 w-10 object-contain sm:h-12 sm:w-12"
            priority
          />
        </Link>

        <button
          type="button"
          className="navbar-toggler"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((value) => !value)}
        >
          Menu
          <span className="navbar-toggler-icon" />
        </button>

        <ul className="navbar-desktop">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="nav-link">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {open ? (
        <div className="navbar-collapse">
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="nav-link" onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </nav>
  );
}
