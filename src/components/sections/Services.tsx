import { services } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

const icons = [
  ShoppingIcon,
  CompassIcon,
  GearIcon,
  TransformIcon,
  ChipIcon,
  PeopleIcon,
];

export function Services() {
  return (
    <section id="services" className="bg-white px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="What we deliver" title="Services" />
        <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = icons[index];
            return (
              <article key={service.title} className="text-center">
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-ox-teal text-white">
                  <Icon />
                </div>
                <h3 className="mt-6 font-display text-lg font-bold tracking-wide text-ox-navy uppercase">
                  {service.title}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-7 text-ox-muted">{service.body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ShoppingIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="4" y="7" width="16" height="12" rx="2" />
      <path d="M8 7V6a4 4 0 0 1 8 0v1" />
    </svg>
  );
}

function CompassIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="12" cy="12" r="8" />
      <path d="m14.5 9.5-1.2 4.3-4.3 1.2 1.2-4.3z" />
    </svg>
  );
}

function GearIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 4v2m0 12v2M4 12h2m12 0h2m-2.5-5.5-1.4 1.4M7.9 16.1l-1.4 1.4m0-11.2 1.4 1.4m8.2 8.2 1.4 1.4" />
    </svg>
  );
}

function TransformIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M4 16h10a4 4 0 0 0 0-8H8" />
      <path d="M7 13 4 16l3 3" />
      <path d="M20 8H10a4 4 0 0 0 0 8h6" />
      <path d="m17 11 3-3-3-3" />
    </svg>
  );
}

function ChipIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="7" y="7" width="10" height="10" rx="2" />
      <path d="M9 3v4M12 3v4M15 3v4M9 17v4M12 17v4M15 17v4M3 9h4M3 12h4M3 15h4M17 9h4M17 12h4M17 15h4" />
    </svg>
  );
}

function PeopleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="9" cy="8" r="3" />
      <circle cx="16" cy="9" r="2.5" />
      <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
      <path d="M14 19a4.5 4.5 0 0 1 6.5 0" />
    </svg>
  );
}
