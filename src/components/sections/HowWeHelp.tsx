import { helpsYou } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function HowWeHelp() {
  return (
    <section id="how-we-help" className="page-section help-section">
      <div className="site-container">
        <SectionHeading title="Oxbourn Consulting Helps You" light />
        <div className="help-accordion">
          {helpsYou.map((item) => (
            <details key={item.title} className="help-item">
              <summary>
                <span className="help-item-lead">
                  <svg
                    className="help-check"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.7" />
                    <path
                      d="M8 12.2l2.6 2.6L16.2 9.4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>{item.title}</span>
                </span>
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
