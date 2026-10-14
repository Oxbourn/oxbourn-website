type SectionHeadingProps = {
  title: string;
  light?: boolean;
};

export function SectionHeading({ title, light = false }: SectionHeadingProps) {
  return (
    <div className="text-center">
      <h2 className={`section-heading ${light ? "is-light" : ""}`}>{title}</h2>
    </div>
  );
}
