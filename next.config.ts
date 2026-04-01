import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/darkgreensolutions",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
