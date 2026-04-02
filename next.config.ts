// next.config.ts
import type { NextConfig } from 'next';
import { Configuration } from 'webpack';

const nextConfig: NextConfig = {
  // Modern Turbopack config (correct syntax)
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.jsx'
        }
      }
    }
  },

  // Webpack fallback config
  webpack: (config: Configuration) => {
    config.module?.rules?.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack']
    });
    return config;
  },

  // Disable static image optimization for SVGs
  images: {
    disableStaticImages: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "arthur-01-09-2025.s3.ap-south-1.amazonaws.com",
        pathname: "/**"
      }
    ]
  }
};

export default nextConfig;