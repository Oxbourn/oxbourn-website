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
        solid ? "bg-[#212529] py-4 shadow-md" : "bg-[#212529] py-4 lg:bg-transparent lg:py-6"
      }`}
    >
      <div className="site-container flex items-center justify-between">
        <Link href="/#page-top" className="flex items-center" onClick={() => setOpen(false)}>
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
          className="inline-flex items-center gap-2 rounded border border-white/70 px-3 py-3 font-display text-xs font-bold tracking-[0.08em] text-white uppercase lg:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((value) => !value)}
        >
          Menu
          <span className="block h-3 w-3 border-y-2 border-current" />
        </button>

        <ul className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="font-display text-[0.95rem] font-normal tracking-[0.0625em] text-white uppercase transition-colors hover:text-ox-teal"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-[#212529] px-5 py-6 lg:hidden">
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block font-display text-[0.95rem] font-normal tracking-[0.0625em] text-white uppercase"
                  onClick={() => setOpen(false)}
                >
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
