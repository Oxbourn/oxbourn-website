import { expertise } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Expertise() {
  return (
    <section id="expertise" className="bg-ox-mist px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="How we can help" title="Expertise" />
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3">
          {expertise.map((item, index) => (
            <article
              key={item.title}
              className="group relative min-h-64 overflow-hidden bg-ox-navy text-white"
            >
              <div
                className={`absolute inset-0 ${
                  index % 2 === 0
                    ? "bg-gradient-to-br from-ox-teal to-ox-navy"
                    : "bg-gradient-to-tl from-ox-teal-dark to-ox-navy"
                }`}
              />
              <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-ox-teal/90" />
              <div className="relative flex h-full min-h-64 flex-col items-center justify-center px-8 py-12 text-center">
                <p className="section-kicker text-[0.7rem] text-ox-sky group-hover:text-white">
                  {item.category}
                </p>
                <h3 className="mt-3 font-display text-xl font-bold uppercase">{item.title}</h3>
                <p className="mt-3 max-w-xs text-sm leading-6 text-white/85 opacity-0 transition-opacity group-hover:opacity-100">
                  {item.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
