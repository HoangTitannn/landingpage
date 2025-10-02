import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  experimental: {
    // Enable React 19 support
    reactCompiler: false,
  },
};

export default nextConfig;
