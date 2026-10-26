"use client";

import { useId, useState } from "react";
import { helpsYou } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function HowWeHelp() {
  // Track open items independently, mirroring the previous native <details>
  // behaviour where each item could be toggled on its own.
  const [open, setOpen] = useState<Set<number>>(() => new Set());
  const reactId = useId();

  function toggle(index: number) {
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  }

  return (
    <section id="how-we-help" className="page-section help-section">
      <div className="site-container">
        <SectionHeading title="Oxbourn Consulting Helps You" light />
        <div className="help-accordion">
          {helpsYou.map((item, index) => {
            const isOpen = open.has(index);
            const panelId = `${reactId}-panel-${index}`;
            const triggerId = `${reactId}-trigger-${index}`;

            return (
              <div
                key={item.title}
                className={`help-item${isOpen ? " is-open" : ""}`}
              >
                <button
                  type="button"
                  id={triggerId}
                  className="help-item-trigger"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggle(index)}
                >
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
                </button>
                {isOpen ? (
                  <div id={panelId} className="help-body-wrap" role="region" aria-labelledby={triggerId}>
                    <p className="help-body">{item.body}</p>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
