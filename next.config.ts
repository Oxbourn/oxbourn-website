import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(process.cwd()),
  },
  async redirects() {
    return [
      { source: "/about-us", destination: "/#about", permanent: true },
      { source: "/services", destination: "/#what-we-do", permanent: true },
      { source: "/get-in-touch", destination: "/#contact", permanent: true },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "oxbournconsulting.com",
      },
      {
        protocol: "https",
        hostname: "cms.oxbournconsulting.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

export default nextConfig;
