import { expertise } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

const marks = {
  "Grow with Oxbourn": GrowthMark,
  "CEO Advisory": LeadershipMark,
  "Process Optimization": OperationsMark,
  "Product Strategy": ProductMark,
  "PAT Workforce": PeopleMark,
  "Digital Technology": TechnologyMark,
} as const;

export function Expertise() {
  return (
    <section id="expertise" className="page-section bg-ox-mist">
      <div className="site-container">
        <SectionHeading kicker="How we can help" title="Expertise" />
        <div className="grid gap-y-12 text-center sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3">
          {expertise.map((item) => {
            const Mark = marks[item.title];
            return (
              <article key={item.title} className="mx-auto w-full max-w-[26rem]">
                <div className="mx-auto flex size-32 items-center justify-center rounded-full bg-ox-teal text-white">
                  <Mark />
                </div>
                <h3 className="my-4 font-display text-2xl font-bold text-ox-navy">{item.title}</h3>
                <p className="font-sans text-base italic text-ox-muted">{item.category}</p>
                <p className="mt-3 text-base leading-7 text-ox-muted">{item.body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function GrowthMark() {
  return (
    <svg viewBox="0 0 24 24" className="size-12" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M4 16l5-5 3 3 8-8" />
      <path d="M14 6h6v6" />
    </svg>
  );
}

function LeadershipMark() {
  return (
    <svg viewBox="0 0 24 24" className="size-12" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="12" cy="8" r="3" />
      <path d="M6 19c1.2-2.6 3.3-4 6-4s4.8 1.4 6 4" />
      <path d="M12 11v2" />
    </svg>
  );
}

function OperationsMark() {
  return (
    <svg viewBox="0 0 24 24" className="size-12" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3v2.2M12 18.8V21M3 12h2.2M18.8 12H21M5.6 5.6l1.6 1.6M16.8 16.8l1.6 1.6M18.4 5.6l-1.6 1.6M7.2 16.8l-1.6 1.6" />
    </svg>
  );
}

function ProductMark() {
  return (
    <svg viewBox="0 0 24 24" className="size-12" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M12 3l7 4v6c0 4.2-3 6.8-7 8-4-1.2-7-3.8-7-8V7l7-4z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

function PeopleMark() {
  return (
    <svg viewBox="0 0 24 24" className="size-12" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="9" cy="9" r="2.4" />
      <circle cx="16" cy="10" r="2" />
      <path d="M4.5 18.5c.8-2.4 2.6-3.5 4.5-3.5s3.7 1.1 4.5 3.5" />
      <path d="M14 15.2c1.3-.4 2.5-.2 3.6.8.8.7 1.4 1.6 1.9 2.5" />
    </svg>
  );
}

function TechnologyMark() {
  return (
    <svg viewBox="0 0 24 24" className="size-12" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="4" y="5" width="16" height="11" rx="1.5" />
      <path d="M8 20h8M12 16v4" />
    </svg>
  );
}
