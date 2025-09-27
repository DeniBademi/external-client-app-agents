import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Output build artifacts to ./build instead of default .next
  distDir: 'build',
  devIndicators: false,
};

export default nextConfig;
