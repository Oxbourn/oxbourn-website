type SectionHeadingProps = {
  kicker: string;
  title: string;
  light?: boolean;
};

export function SectionHeading({ kicker, title, light = false }: SectionHeadingProps) {
  return (
    <div className="text-center">
      <h2 className={`section-heading ${light ? "is-light" : ""}`}>{title}</h2>
      <p className={`section-subheading ${light ? "is-light" : ""}`}>{kicker}</p>
    </div>
  );
}
