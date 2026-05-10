import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow larger request bodies for photo uploads (base64 images)
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb",
    },
  },
};

export default nextConfig;
