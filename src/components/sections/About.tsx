import Image from "next/image";
import Link from "next/link";
import { about } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section id="about" className="page-section bg-white">
      <div className="site-container">
        <SectionHeading kicker={about.kicker} title={about.title} />
        <ul className="timeline">
          {about.milestones.map((milestone, index) => (
            <li
              key={milestone.title}
              className={index % 2 === 1 ? "timeline-inverted" : undefined}
            >
              <div className="timeline-image">
                <Image
                  src={milestone.image}
                  alt={milestone.title}
                  width={170}
                  height={170}
                  className="size-full rounded-full object-cover"
                />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>{milestone.label}</h4>
                  <h4 className="subheading">{milestone.title}</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-ox-muted">{milestone.body}</p>
                </div>
              </div>
            </li>
          ))}
          <li className="timeline-inverted">
            <div className="timeline-image timeline-image-cta">
              <Link href="/#contact" className="timeline-cta">
                Be Part
                <br />
                Of Our
                <br />
                Story!
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
