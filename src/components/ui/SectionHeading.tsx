type SectionHeadingProps = {
  kicker: string;
  title: string;
  light?: boolean;
};

export function SectionHeading({ kicker, title, light = false }: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <h2
        className={`font-display text-3xl font-bold uppercase sm:text-4xl ${
          light ? "text-white" : "text-ox-navy"
        }`}
      >
        {title}
      </h2>
      <p className="section-kicker mt-3 text-sm text-ox-teal">{kicker}</p>
      <span
        className={`mx-auto mt-5 block h-0.5 w-20 ${light ? "bg-ox-sky" : "bg-ox-teal"}`}
      />
    </div>
  );
}
