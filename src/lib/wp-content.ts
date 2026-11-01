function withClass(attrs: string, extra: string) {
  if (/\bclass\s*=\s*"/i.test(attrs)) {
    if (new RegExp(`\\b${extra}\\b`).test(attrs)) {
      return attrs;
    }
    return attrs.replace(/\bclass\s*=\s*"/i, `class="${extra} `);
  }
  return ` class="${extra}"${attrs}`;
}

function wrapParagraph(attrs: string, inner: string, heading = false) {
  return `<p${heading ? withClass(attrs, "wp-subhead") : attrs}>${inner}</p>`;
}

function isHeadingChunk(inner: string) {
  const trimmed = inner.trim();
  return (
    /^<(strong|b)>[\s\S]*?<\/\1>$/i.test(trimmed) && !/<(br|em|i|a|img)\b/i.test(trimmed)
  );
}

function renderChunk(attrs: string, chunk: string): string {
  const trimmed = chunk.trim();
  if (!trimmed) {
    return "";
  }

  const parts = trimmed
    .split(/<br\s*\/?>\s*(?:&nbsp;\s*)?(?:<br\s*\/?>\s*)+/i)
    .map((part) => part.trim())
    .filter(Boolean);

  if (parts.length > 1) {
    return parts.map((part) => renderChunk(attrs, part)).filter(Boolean).join("\n");
  }

  const titled = trimmed.match(/^<(strong|b)>([\s\S]*?)<\/\1>([\s\S]*)$/i);
  if (titled && !/<(br|em|i|a|img)\b/i.test(titled[2])) {
    const rest = titled[3].replace(/^(?:\s|<br\s*\/?>)+/i, "").trim();
    const heading = wrapParagraph(attrs, `<${titled[1]}>${titled[2]}</${titled[1]}>`, true);
    return rest ? `${heading}\n${renderChunk(attrs, rest)}` : heading;
  }

  const trailing = trimmed.match(
    /^([\s\S]*?)(?:<br\s*\/?>\s*)+<(strong|b)>([\s\S]*?)<\/\2>\s*$/i,
  );
  if (trailing && !/<(br|em|i|a|img)\b/i.test(trailing[3])) {
    const before = trailing[1].trim();
    const heading = wrapParagraph(
      attrs,
      `<${trailing[2]}>${trailing[3]}</${trailing[2]}>`,
      true,
    );
    return before ? `${renderChunk(attrs, before)}\n${heading}` : heading;
  }

  if (isHeadingChunk(trimmed)) {
    return wrapParagraph(attrs, trimmed, true);
  }

  return wrapParagraph(attrs, trimmed);
}

function unpackParagraphs(html: string) {
  return html.replace(/<p\b([^>]*)>([\s\S]*?)<\/p>/gi, (full, attrs: string, inner: string) => {
    if (/\bhas-background\b/i.test(attrs)) {
      return full;
    }

    return renderChunk(attrs, inner) || full;
  });
}

export function formatWpContent(html: string) {
  return unpackParagraphs(
    html
      .replace(/<script\b[\s\S]*?<\/script>/gi, "")
      .replace(/<!--[\s\S]*?-->/g, "")
      .replace(/<p\b([^>]*)>(?:\s|&nbsp;|<br\s*\/?>)*<\/p>/gi, "")
      .replace(/\n{3,}/g, "\n\n")
      .trim(),
  );
}
