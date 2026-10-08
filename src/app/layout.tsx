import type { Metadata, Viewport } from "next";
import { FontPreviewToggle } from "@/components/dev/FontPreviewToggle";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { site } from "@/lib/site";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: `${site.name} | Family Office Consulting`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased" data-fonts="grotesk" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&family=Instrument+Sans:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&family=Inter:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&family=Manrope:wght@300;400;500;600;700&family=Montserrat:wght@400;700&family=Newsreader:ital,opsz,wght@0,6..72,300;0,6..72,400;1,6..72,300;1,6..72,400&family=Outfit:wght@400;500;600;700&family=Playfair+Display:wght@500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Roboto+Slab:wght@100;300;400;700&family=Source+Sans+3:ital,wght@0,300;0,400;1,300;1,400&family=Space+Grotesk:wght@400;500;600;700&family=Syne:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var ids=["agency","clean","modern","grotesk","studio","instrument","editorial"];var p=new URLSearchParams(location.search);var q=p.get("fonts");var s=sessionStorage.getItem("ox-font-preview");var preview=p.has("fonts");var id=ids.indexOf(q)>=0?q:preview&&ids.indexOf(s)>=0?s:"grotesk";document.documentElement.setAttribute("data-fonts",id);}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-full bg-background font-sans text-foreground">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FontPreviewToggle />
      </body>
    </html>
  );
}
