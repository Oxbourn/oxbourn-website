import { about } from "@/lib/site";

export function About() {
  return (
    <section id="about" className="page-section bg-white">
      <div className="site-container">
        <div className="about-copy">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
