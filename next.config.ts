import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow larger request bodies for photo uploads (base64 images)
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb",
    },
  },

  async redirects() {
    return [
      {
        source: "/truck",
        destination: "https://www.instagram.com/fratelliremodellv/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
