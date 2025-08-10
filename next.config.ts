// next.config.ts
import type { NextConfig } from 'next';
import { Configuration } from 'webpack';

const nextConfig: NextConfig = {
  // Your existing Next.js config options
  
  // For Turbopack
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
  
  webpack: (config: Configuration, { isServer }: { isServer: boolean }) => {
    config.module?.rules?.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  }
};

export default nextConfig;