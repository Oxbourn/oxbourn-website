import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { HowWeHelp } from "@/components/sections/HowWeHelp";
import { LatestFromBlog } from "@/components/sections/LatestFromBlog";
import { WhatWeDo } from "@/components/sections/WhatWeDo";

export const revalidate = 60;

export default function Home() {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <HowWeHelp />
      <LatestFromBlog />
      <Contact />
    </>
  );
}
