export function formatWpContent(html: string) {
  return html
    .replace(/<script\b[\s\S]*?<\/script>/gi, "")
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<p\b([^>]*)>(?:\s|&nbsp;|<br\s*\/?>)*<\/p>/gi, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}
