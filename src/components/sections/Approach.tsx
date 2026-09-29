import Image from "next/image";
import { approach } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

const portraits = ["/agency/team/1.jpg", "/agency/team/2.jpg", "/agency/team/3.jpg"];

export function Approach() {
  return (
    <section id="approach" className="page-section bg-white">
      <div className="site-container">
        <SectionHeading kicker="Consulting as a Service" title="Our Approach" />
        <div className="grid gap-y-12 text-center lg:grid-cols-3">
          {approach.map((item, index) => (
            <article key={item.title} className="text-center">
              <Image
                src={portraits[index]}
                alt=""
                width={224}
                height={224}
                className="mx-auto size-56 rounded-full border-[0.5rem] border-black/10 object-cover"
              />
              <h3 className="mt-6 mb-0 font-display text-2xl font-bold text-ox-navy">{item.title}</h3>
              <p className="mt-2 text-base leading-7 text-ox-muted">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
