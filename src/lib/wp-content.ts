function stripTags(value: string) {
  return value.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
}

function decodeLight(value: string) {
  return value
    .replace(/&#(\d+);/g, (_, code: string) =>
      String.fromCharCode(Number(code)),
    )
    .replace(/&nbsp;/g, " ");
}

function tidyInline(html: string) {
  let value = html
    .replace(/<\/?(?:span|font)[^>]*>/gi, "")
    .replace(/<(strong|b|em|i)\b[^>]*>\s*<\/\1>/gi, "");

  if (!/<a\b/i.test(value)) {
    value = value.replace(/<\/a>/gi, "");
  }

  return value.replace(/\s+/g, " ").trim();
}

function looksLikeHeading(text: string) {
  const value = decodeLight(text);
  if (value.length < 4 || value.length > 80) {
    return false;
  }

  if (/[.!?]|https?:\/\//i.test(value)) {
    return false;
  }

  const words = value.split(/\s+/);
  if (words.length > 12) {
    return false;
  }

  const titled = words.filter((word) => /^[A-Z0-9]/.test(word)).length;
  return titled >= Math.ceil(words.length * 0.55);
}

function looksLikeTerm(text: string) {
  const value = decodeLight(text);
  if (value.length < 2 || value.length > 70) {
    return false;
  }

  const words = value.split(/\s+/);
  return words.length <= 8 && !/[.!?]$/.test(value);
}

function headingHtml(title: string) {
  return `<h2>${title}</h2>`;
}

function termHtml(label: string, body: string) {
  return `<p class="wp-term"><strong>${label}</strong> ${body}</p>`;
}

function closeOrphans(html: string) {
  let value = html;

  for (const tag of ["strong", "b", "em", "i"]) {
    const openMatches = value.match(new RegExp(`<${tag}\\b[^>]*>`, "gi")) ?? [];
    const closeMatches = value.match(new RegExp(`</${tag}>`, "gi")) ?? [];
    let extraCloses = closeMatches.length - openMatches.length;
    let extraOpens = openMatches.length - closeMatches.length;

    if (extraCloses > 0) {
      value = value.replace(new RegExp(`</${tag}>`, "gi"), (match) =>
        extraCloses-- > 0 ? "" : match,
      );
    }

    if (extraOpens > 0) {
      value = value.replace(new RegExp(`<${tag}\\b[^>]*>`, "gi"), (match) =>
        extraOpens-- > 0 ? "" : match,
      );
    }
  }

  return value;
}

function takeMarkedHeading(value: string) {
  const wrapped = value.match(
    /^(?:<(?:strong|b)>)([\s\S]+?)(?:<\/(?:strong|b)>)(?:\s*)([\s\S]*)$/i,
  );
  if (wrapped && looksLikeHeading(stripTags(wrapped[1]))) {
    return { title: stripTags(wrapped[1]), rest: wrapped[2].trim() };
  }

  const leftover = value.match(/^([\s\S]{4,80}?)<\/(?:strong|b)>(?:\s*)([\s\S]*)$/i);
  if (leftover && looksLikeHeading(stripTags(leftover[1]))) {
    return { title: stripTags(leftover[1]), rest: leftover[2].trim() };
  }

  return null;
}

function takeMarkedTerm(value: string) {
  const patterns = [
    /^(?:<(?:em|i)>)([\s\S]+?)(?::)?(?:<\/(?:em|i)>)?:?\s+([\s\S]+)$/i,
    /^([\s\S]{2,70}?):?\s*<\/(?:em|i)>:?\s*([\s\S]+)$/i,
  ];

  for (const pattern of patterns) {
    const match = value.match(pattern);
    if (match && looksLikeTerm(stripTags(match[1])) && stripTags(match[2]).length > 8) {
      return { label: stripTags(match[1]), body: match[2].trim() };
    }
  }

  return null;
}

const markedTermToken =
  /(?:<(?:em|i)>)?([A-Z][\w](?:[\w'’/-]|[ \t](?=[A-Z])){0,58})(?::\s*<\/(?:em|i)>|<\/(?:em|i)>:|:<\/(?:em|i)>)\s*/gi;

function splitMarkedTerms(value: string) {
  const matches = [...value.matchAll(markedTermToken)];

  if (matches.length === 0) {
    const term = takeMarkedTerm(value);
    return term
      ? termHtml(term.label, term.body)
      : `<p>${closeOrphans(value)}</p>`;
  }

  const pieces: string[] = [];
  const leading = value.slice(0, matches[0].index).trim();
  if (leading) {
    pieces.push(`<p>${closeOrphans(leading)}</p>`);
  }

  matches.forEach((match, index) => {
    const start = (match.index ?? 0) + match[0].length;
    const end = matches[index + 1]?.index ?? value.length;
    const body = value.slice(start, end).trim();
    const label = stripTags(match[1]);

    if (looksLikeTerm(label) && body) {
      pieces.push(termHtml(label, closeOrphans(body)));
      return;
    }

    pieces.push(`<p>${closeOrphans(`${match[0]}${body}`)}</p>`);
  });

  return pieces.join("");
}

function formatParagraph(inner: string) {
  const cleaned = tidyInline(inner);
  if (!stripTags(cleaned)) {
    return "";
  }

  const heading = takeMarkedHeading(cleaned);
  if (heading) {
    if (!heading.rest) {
      return headingHtml(heading.title);
    }
    return `${headingHtml(heading.title)}${splitMarkedTerms(heading.rest)}`;
  }

  if (/<\/?(?:em|i)\b/i.test(cleaned)) {
    return splitMarkedTerms(cleaned);
  }

  return `<p>${closeOrphans(cleaned)}</p>`;
}

function groupDefinitionItems(html: string) {
  return html.replace(
    /(?:<p class="wp-term">[\s\S]*?<\/p>\s*){2,}/g,
    (block) => {
      const items = [
        ...block.matchAll(
          /<p class="wp-term"><strong>([\s\S]*?)<\/strong>\s*([\s\S]*?)<\/p>/g,
        ),
      ];

      if (items.length < 2) {
        return block;
      }

      const entries = items
        .map(
          ([, label, body]) =>
            `<div class="wp-defs-item"><dt>${label}</dt><dd>${body}</dd></div>`,
        )
        .join("");

      return `<dl class="wp-defs">${entries}</dl>`;
    },
  );
}

export function formatWpContent(html: string) {
  let content = html
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<p>(?:\s|&nbsp;|<br\s*\/?>)*<\/p>/gi, "")
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/&nbsp;/g, " ");

  content = content.replace(/<p\b[^>]*>([\s\S]*?)<\/p>/gi, (_, inner: string) =>
    formatParagraph(inner),
  );

  content = groupDefinitionItems(content);
  content = content.replace(/<p>\s*<\/p>/g, "");

  return content.replace(/\n{3,}/g, "\n\n").trim();
}
