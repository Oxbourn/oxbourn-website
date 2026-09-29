import { approach } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

const marks = [OrbitMark, BridgeMark, TargetMark] as const;

export function Approach() {
  return (
    <section id="approach" className="page-section bg-white">
      <div className="site-container">
        <SectionHeading kicker="Consulting as a Service" title="Our Approach" />
        <ol className="relative grid gap-12 lg:grid-cols-3 lg:gap-8">
          <div
            className="pointer-events-none absolute top-10 right-[12%] left-[12%] hidden h-px bg-ox-navy/15 lg:block"
            aria-hidden
          />
          {approach.map((item, index) => {
            const Mark = marks[index];
            return (
              <li key={item.title} className="relative text-center">
                <div className="relative mx-auto mb-6 flex size-20 items-center justify-center">
                  <div className="absolute inset-0 rounded-full border border-ox-navy/15 bg-ox-mist" />
                  <div className="absolute -top-2 -right-2 flex size-8 items-center justify-center rounded-full bg-ox-teal font-display text-sm font-bold text-white">
                    {index + 1}
                  </div>
                  <Mark />
                </div>
                <h3 className="font-display text-2xl font-bold text-ox-navy">{item.title}</h3>
                <p className="mt-3 text-base leading-7 text-ox-muted">{item.body}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

function OrbitMark() {
  return (
    <svg viewBox="0 0 48 48" className="relative size-10 text-ox-teal" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="24" cy="24" r="6" />
      <ellipse cx="24" cy="24" rx="16" ry="8" transform="rotate(-30 24 24)" />
      <circle cx="36" cy="17" r="2.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function BridgeMark() {
  return (
    <svg viewBox="0 0 48 48" className="relative size-10 text-ox-teal" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M8 32h32" />
      <path d="M12 32V20M24 32V14M36 32V20" />
      <path d="M8 20c5-8 11-8 16 0 5-8 11-8 16 0" />
    </svg>
  );
}

function TargetMark() {
  return (
    <svg viewBox="0 0 48 48" className="relative size-10 text-ox-teal" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="24" cy="24" r="14" />
      <circle cx="24" cy="24" r="8" />
      <circle cx="24" cy="24" r="2.5" fill="currentColor" stroke="none" />
      <path d="M24 6v4M24 38v4M6 24h4M38 24h4" />
    </svg>
  );
}
