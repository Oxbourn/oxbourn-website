import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { LatestFromBlog } from "@/components/sections/LatestFromBlog";
import { WhatWeDo } from "@/components/sections/WhatWeDo";

export const revalidate = 60;

export default function Home() {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <LatestFromBlog surface="mist" />
      <Contact />
    </>
  );
}
