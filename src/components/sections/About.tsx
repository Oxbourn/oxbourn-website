import { timeline } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section id="about" className="bg-white px-5 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading kicker="Why it matters" title="About" />
        <p className="mx-auto mt-10 max-w-2xl text-center leading-7 text-ox-muted">
          Oxbourn Consulting sits at the intersection of management and technology.
          We use a Consulting-as-a-Service model so organizations can get the right
          expertise at the right moment — and keep moving.
        </p>
        <ol className="relative mt-16 border-l border-ox-ice pl-8 sm:ml-6">
          {timeline.map((item, index) => (
            <li key={item.title} className="relative mb-12 last:mb-0">
              <span className="absolute top-1 -left-[41px] flex h-5 w-5 items-center justify-center rounded-full border-4 border-white bg-ox-teal" />
              <p className="section-kicker text-xs text-ox-teal">{item.label}</p>
              <h3 className="mt-2 font-display text-xl font-bold text-ox-navy uppercase">
                {item.title}
              </h3>
              <p className="mt-2 leading-7 text-ox-muted">{item.body}</p>
              {index === timeline.length - 1 ? (
                <p className="mt-8 font-display text-lg font-bold tracking-wide text-ox-teal uppercase">
                  Be part of the next chapter
                </p>
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
