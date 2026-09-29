import { about } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section id="about" className="page-section relative bg-ox-navy text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(1,151,178,0.22),_transparent_55%)]" />
      <div className="site-container relative">
        <SectionHeading kicker={about.kicker} title={about.title} light />
        <div className="space-y-6">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-[1.05rem] leading-8 text-white/85">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
