import { about } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section id="about" className="page-section relative overflow-hidden bg-ox-navy text-white">
      <div
        className="pointer-events-none absolute inset-0 bg-center bg-no-repeat opacity-[0.18]"
        style={{ backgroundImage: "url(/agency/map-image.png)" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.55) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(1,151,178,0.28),_transparent_55%)]" aria-hidden />
      <div className="site-container relative">
        <SectionHeading kicker={about.kicker} title={about.title} light />
        <div className="mx-auto max-w-3xl space-y-6">
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
