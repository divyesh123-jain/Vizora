import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: [
    "@vizora/core",
    "@vizora/intelligence",
    "@vizora/react",
    "@vizora/render-svg",
  ],
  reactCompiler: true,
};

export default nextConfig;
