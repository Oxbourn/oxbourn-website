type SectionHeadingProps = {
  kicker: string;
  title: string;
  light?: boolean;
};

export function SectionHeading({ kicker, title, light = false }: SectionHeadingProps) {
  return (
    <div className="text-center">
      <h2
        className={`mb-4 font-display text-[2.5rem] leading-none font-bold uppercase ${
          light ? "text-white" : "text-ox-navy"
        }`}
      >
        {title}
      </h2>
      <p
        className={`mb-16 font-sans text-base font-normal italic ${
          light ? "text-[#6c757d]" : "text-ox-muted"
        }`}
      >
        {kicker}
      </p>
    </div>
  );
}
