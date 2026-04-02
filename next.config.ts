import type { NextConfig } from "next";
import { Configuration } from "webpack";

const nextConfig: NextConfig = {

  turbopack: {},

  webpack: (config: Configuration) => {
    config.module?.rules?.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    });
    return config;
  },

  images: {
    disableStaticImages: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "arthur-01-09-2025.s3.ap-south-1.amazonaws.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;