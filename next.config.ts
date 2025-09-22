import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    ppr: true,
    clientSegmentCache: true,
    nodeMiddleware: true
  },
  async rewrites() {
    return [
      {
        source: '/favicon.ico',
        destination: '/favicon.png'
      }
    ];
  }
};

export default nextConfig;
