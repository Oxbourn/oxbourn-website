import { About } from "@/components/sections/About";
import { Approach } from "@/components/sections/Approach";
import { Contact } from "@/components/sections/Contact";
import { Expertise } from "@/components/sections/Expertise";
import { Hero } from "@/components/sections/Hero";
import { LatestFromBlog } from "@/components/sections/LatestFromBlog";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
export const revalidate = 60;

export default function Home() {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <Expertise />
      <About />
      <Approach />
      <LatestFromBlog />
      <Contact />
    </>
  );
}
