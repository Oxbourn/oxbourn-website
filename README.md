# Oxbourn Consulting website

Marketing site for [Oxbourn Consulting](https://oxbournconsulting.com/), rebuilt in the layout of the [Agency](https://themewagon.github.io/agency-2/#portfolio) one-page template, using the live brand colors from the current WordPress/Elementor site.

## Why Next.js

The public pages are static and simple. The blog still lives in WordPress. Next.js lets us keep a custom front end and pull posts from the existing WordPress REST API (`/wp-json/wp/v2/posts`) without putting the whole site back on Elementor. A plain HTML site would work for the brochure pages, but the blog integration would be harder later.

## Brand tokens

Extracted from the current site CSS:

| Token | Hex | Use |
| --- | --- | --- |
| Teal | `#0197B2` | Buttons, icons, accents |
| Teal dark | `#01717D` | Hover / emphasis |
| Navy | `#00171A` | Hero, nav, footer |
| Ice | `#E1ECEE` | Soft surfaces |
| Mist | `#F9F9FB` | Alternating sections |
| Ink | `#171717` | Body text |

Fonts: **Urbanist** (UI/body) and **Josefin Sans** (display/headings), matching the current site.

## Run locally

```bash
cd oxbourn-consulting
cp .env.example .env.local
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## WordPress blog

The brochure site is Next.js. Posts still come from WordPress via `/wp-json/wp/v2/posts` and are rendered in this design. New posts in `wp-admin` show up here within about a minute.

`.env.local`:

```
WORDPRESS_URL=https://oxbournconsulting.com
```

- `/` includes a Latest from our blog section
- `/blog` lists posts
- `/blog/[slug]` renders a single post
- Old WordPress post URLs (`/how-ai-can-enhance-nigerian-businesses/`) redirect to `/blog/[slug]`

When this site becomes the public domain, keep WordPress reachable on a separate host (for example `cms.oxbournconsulting.com`) and change `WORDPRESS_URL`.

## Go live on QServers

QServers is already running WordPress. Do not replace `public_html` with this Next.js app — that would take the blog API down.

The easier cutover:

1. In cPanel, add a subdomain such as `cms.oxbournconsulting.com` that still points at the current WordPress install.
2. Confirm `https://cms.oxbournconsulting.com/wp-json/wp/v2/posts` returns posts, and that `wp-admin` still works there.
3. Host this Next.js app on a Node host (Vercel is the least work; QServers “Setup Node.js App” or a VPS also works).
4. Point `oxbournconsulting.com` at the Next.js host.
5. Set `WORDPRESS_URL=https://cms.oxbournconsulting.com` on the Next.js host.

The client keeps writing posts in WordPress. This site reads them. Old `/slug` URLs redirect to `/blog/slug`.

## Project layout

```
src/
  app/                  # routes: home, blog
  components/
    layout/             # nav + footer
    sections/           # Agency-style homepage blocks
  lib/
    site.ts             # copy and contact details
    wordpress.ts        # WP REST client
```

Homepage sections follow the Agency template: hero, services, expertise (portfolio grid), about timeline, approach (team analog), contact, footer.
