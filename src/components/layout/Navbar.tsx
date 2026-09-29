"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navItems, site } from "@/lib/site";

const logoSrc =
  "https://res.cloudinary.com/dnfwbgfih/images/f_auto,q_auto/v1724523743/Oxbourn-Consulting-Logo-main/Oxbourn-Consulting-Logo-main.png";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-ox-cream transition-shadow duration-300 ${
        scrolled || open ? "shadow-md" : ""
      }`}
    >
      <nav className="site-container flex items-center justify-between py-3 lg:py-4">
        <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
          <Image
            src={logoSrc}
            alt={site.name}
            width={56}
            height={56}
            className="h-12 w-12 object-contain sm:h-14 sm:w-14"
            priority
          />
        </Link>

        <button
          type="button"
          className="inline-flex items-center gap-2 rounded border border-ox-navy/30 px-3 py-2 font-display text-[0.95rem] font-normal tracking-[0.0625em] text-ox-navy uppercase lg:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((value) => !value)}
        >
          Menu
          <span className="block h-3 w-3 border-y-2 border-ox-navy" />
        </button>

        <ul className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="font-display text-[0.95rem] font-normal tracking-[0.0625em] text-ox-navy uppercase transition-colors hover:text-ox-teal"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {open ? (
        <div className="border-t border-ox-navy/10 bg-ox-cream px-5 py-6 lg:hidden">
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block font-display text-[0.95rem] font-normal tracking-[0.0625em] text-ox-navy uppercase"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
