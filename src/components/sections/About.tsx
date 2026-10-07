import Image from "next/image";
import { about } from "@/lib/site";

export function About() {
  return (
    <section id="about" className="page-section bg-white">
      <div className="site-container">
        <p className="section-kicker mb-3 text-ox-teal">{about.kicker}</p>
        <h1 className="page-title">{about.title}</h1>
        <div className="about-layout">
          <div className="about-copy">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="about-media">
            <Image
              src={about.image}
              alt="Oxbourn Consulting"
              width={900}
              height={1100}
              className="about-photo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
