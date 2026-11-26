import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    // Cloudflare Pages serves exported assets directly, while existing Image
    // components retain their layout and responsive behaviour.
    unoptimized: true,
  },
};

export default nextConfig;
