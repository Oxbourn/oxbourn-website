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

const panels = [
  "from-[#0a4a5c] to-[#0197b2]",
  "from-[#0d3d4a] to-[#01717d]",
  "from-[#134e5e] to-[#2a9bb0]",
  "from-[#0b3a48] to-[#0197b2]",
  "from-[#163f4c] to-[#0e7a8c]",
  "from-[#0a4554] to-[#35a8bc]",
] as const;

export function Expertise() {
  return (
    <section id="expertise" className="page-section bg-ox-mist">
      <div className="site-container">
        <SectionHeading kicker="How we can help" title="Expertise" />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {expertise.map((item, index) => {
            const Mark = marks[item.title];
            return (
              <article key={item.title} className="mx-auto w-full max-w-[26rem]">
                <div className="group relative aspect-[4/3] overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${panels[index % panels.length]}`}
                    aria-hidden
                  />
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.35) 1px, transparent 1px), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.2) 1px, transparent 1px)",
                      backgroundSize: "18px 18px, 28px 28px",
                    }}
                    aria-hidden
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-white">
                    <Mark />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center bg-ox-teal/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="font-display text-sm font-bold tracking-[0.0625em] text-white uppercase">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="px-2 py-6 text-center">
                  <h3 className="font-display text-[1.35rem] font-bold text-ox-navy">{item.title}</h3>
                  <p className="mt-2 font-sans text-base italic text-ox-muted">{item.body}</p>
                </div>
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
    <svg viewBox="0 0 24 24" className="size-14" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 16l5-5 3 3 8-8" />
      <path d="M14 6h6v6" />
    </svg>
  );
}

function LeadershipMark() {
  return (
    <svg viewBox="0 0 24 24" className="size-14" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="8" r="3" />
      <path d="M6 19c1.2-2.6 3.3-4 6-4s4.8 1.4 6 4" />
    </svg>
  );
}

function OperationsMark() {
  return (
    <svg viewBox="0 0 24 24" className="size-14" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3v2.2M12 18.8V21M3 12h2.2M18.8 12H21M5.6 5.6l1.6 1.6M16.8 16.8l1.6 1.6M18.4 5.6l-1.6 1.6M7.2 16.8l-1.6 1.6" />
    </svg>
  );
}

function ProductMark() {
  return (
    <svg viewBox="0 0 24 24" className="size-14" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 3l7 4v6c0 4.2-3 6.8-7 8-4-1.2-7-3.8-7-8V7l7-4z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

function PeopleMark() {
  return (
    <svg viewBox="0 0 24 24" className="size-14" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="9" cy="9" r="2.4" />
      <circle cx="16" cy="10" r="2" />
      <path d="M4.5 18.5c.8-2.4 2.6-3.5 4.5-3.5s3.7 1.1 4.5 3.5" />
      <path d="M14 15.2c1.3-.4 2.5-.2 3.6.8.8.7 1.4 1.6 1.9 2.5" />
    </svg>
  );
}

function TechnologyMark() {
  return (
    <svg viewBox="0 0 24 24" className="size-14" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="4" y="5" width="16" height="11" rx="1.5" />
      <path d="M8 20h8M12 16v4" />
    </svg>
  );
}
