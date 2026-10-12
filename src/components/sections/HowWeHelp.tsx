import { helpsYou } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function HowWeHelp() {
  return (
    <section id="how-we-help" className="page-section bg-white">
      <div className="site-container">
        <SectionHeading
          kicker="Organize, protect, preserve and govern wealth as a whole."
          title="Oxbourn Consulting Helps You"
        />
        <div className="help-accordion">
          {helpsYou.map((item) => (
            <details key={item.title} className="help-item">
              <summary>
                <span>{item.title}</span>
                <svg
                  className="help-chevron"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M6 9l6 6 6-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </summary>
              <p className="help-body">{item.body}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
