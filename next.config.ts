import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // AVIF preferred, WebP fallback. Optimized masters are static-imported
    // (WebP) so dimensions + blurDataURL are generated at build time.
    formats: ["image/avif", "image/webp"],
    // Next 16 requires an explicit qualities allowlist when a `quality` prop
    // is used. We mostly pre-compress with sharp, but keep a small allowlist.
    qualities: [60, 75],
  },
};

export default nextConfig;
