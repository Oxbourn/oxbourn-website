import { approach } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Approach() {
  return (
    <section id="approach" className="bg-ox-mist px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="Consulting as a Service" title="Our Approach" />
        <div className="mt-16 grid gap-10 sm:grid-cols-3">
          {approach.map((item) => (
            <article key={item.title} className="text-center">
              <div className="mx-auto h-40 w-40 rounded-full bg-gradient-to-br from-ox-sky to-ox-teal" />
              <h3 className="mt-6 font-display text-lg font-bold text-ox-navy uppercase">
                {item.title}
              </h3>
              <p className="mt-3 leading-7 text-ox-muted">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
