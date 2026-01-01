/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'api.dicebear.com',
        pathname: '/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    qualities: [75, 85, 90], // Add custom qualities
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // React strict mode for better error detection
  reactStrictMode: true,
  
  // Optimize package imports
  optimizePackageImports: ['lucide-react', 'framer-motion'],
  
  // Turbopack configuration
  turbopack: {
    root: process.cwd(),
  },
};

module.exports = nextConfig;
