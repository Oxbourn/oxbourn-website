import type { Metadata } from "next";
import { About } from "@/components/sections/About";
import { about } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: about.kicker,
};

export default function AboutPage() {
  return (
    <div className="pt-20 md:pt-24">
      <About />
    </div>
  );
}
