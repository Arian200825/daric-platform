import type { NextConfig } from "next";

/**
 * Static export (GitHub Pages / any static host). `transpilePackages` compiles
 * the shared @daric/ui source. `NEXT_PUBLIC_BASE_PATH` is set at build time for
 * project Pages (e.g. "/daric-hotel"); empty for local dev / custom domains.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  transpilePackages: ["@daric/ui"],
};

export default nextConfig;
