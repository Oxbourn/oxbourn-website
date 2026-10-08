"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "ox-font-preview";

const PRESETS = [
  {
    id: "agency",
    label: "Agency",
    pair: "Montserrat / Roboto Slab",
  },
  {
    id: "clean",
    label: "Clean",
    pair: "Plus Jakarta Sans / Source Sans 3",
  },
  {
    id: "modern",
    label: "Modern",
    pair: "Outfit / Inter",
  },
  {
    id: "grotesk",
    label: "Grotesk",
    pair: "Space Grotesk / IBM Plex Sans",
  },
  {
    id: "studio",
    label: "Studio",
    pair: "Syne / Manrope",
  },
  {
    id: "instrument",
    label: "Instrument",
    pair: "Instrument Sans / Instrument Serif",
  },
  {
    id: "editorial",
    label: "Editorial",
    pair: "Playfair Display / Newsreader",
  },
] as const;

type FontPreset = (typeof PRESETS)[number]["id"];

function isPreset(value: string | null): value is FontPreset {
  return PRESETS.some((preset) => preset.id === value);
}

function applyPreset(id: FontPreset) {
  document.documentElement.setAttribute("data-fonts", id);
  sessionStorage.setItem(STORAGE_KEY, id);
}

export function FontPreviewToggle() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(true);
  const [active, setActive] = useState<FontPreset>("agency");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const fromQuery = params.get("fonts");
    const saved = sessionStorage.getItem(STORAGE_KEY);
    const next = isPreset(fromQuery) ? fromQuery : isPreset(saved) ? saved : "agency";

    applyPreset(next);
    setActive(next);
    setVisible(params.has("fonts"));
    setOpen(true);

    const onKey = (event: KeyboardEvent) => {
      if (event.altKey && event.key.toLowerCase() === "f") {
        event.preventDefault();
        setVisible((current) => !current);
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div className="font-preview">
      <button
        type="button"
        className="font-preview-toggle"
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
      >
        Aa
      </button>
      {open ? (
        <div className="font-preview-panel">
          <p className="font-preview-kicker">Font preview · remove before live</p>
          {PRESETS.map((preset) => (
            <button
              key={preset.id}
              type="button"
              className={`font-preview-option${active === preset.id ? " is-active" : ""}`}
              onClick={() => {
                applyPreset(preset.id);
                setActive(preset.id);
              }}
            >
              <span>{preset.label}</span>
              <small>{preset.pair}</small>
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
