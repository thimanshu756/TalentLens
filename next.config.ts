import type { NextConfig } from "next";

// ============================================================================
// NEXT.JS CONFIGURATION FOR SEO & PERFORMANCE OPTIMIZATION
// ============================================================================

const nextConfig: NextConfig = {
  // ============================================================================
  // COMPRESSION - Enable gzip/brotli compression for faster page loads
  // ============================================================================
  compress: true, // Compresses all responses (HTML, CSS, JS) for faster delivery

  // ============================================================================
  // IMAGE OPTIMIZATION CONFIGURATION
  // ============================================================================
  images: {
    // Allowed image formats (Next.js automatically serves WebP/AVIF when supported)
    formats: ['image/avif', 'image/webp'],

    // Image optimization device sizes (used for responsive images)
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],

    // Image optimization breakpoints for srcset
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

    // Minimum cache time for optimized images (in seconds)
    // 31536000 = 1 year - images are cached with immutable URLs
    minimumCacheTTL: 31536000,

    // Allow images from external domains (if needed)
    // REPLACE_ME: Add your image CDN domains here
    remotePatterns: [
      // Example for CDN:
      // {
      //   protocol: 'https',
      //   hostname: 'cdn.rakriai.com',
      //   port: '',
      //   pathname: '/images/**',
      // },
      // Example for CMS:
      // {
      //   protocol: 'https',
      //   hostname: 'your-cms-domain.com',
      //   pathname: '/uploads/**',
      // },
    ],
  },

  // ============================================================================
  // CUSTOM HTTP HEADERS FOR SEO & SECURITY
  // ============================================================================
  async headers() {
    return [
      {
        // Apply headers to all routes
        source: '/:path*',
        headers: [
          // ============================================================================
          // SEO HEADERS
          // ============================================================================
          {
            key: 'X-Robots-Tag',
            // Allow all crawlers to index and follow links
            value: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
          },

          // ============================================================================
          // SECURITY HEADERS
          // ============================================================================
          {
            key: 'X-Content-Type-Options',
            // Prevent MIME type sniffing attacks
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            // Prevent clickjacking attacks by disallowing iframe embedding
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            // Enable browser's XSS filter
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            // Control referrer information sent to other sites
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            // Disable sensitive browser features not needed
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
          },

          // ============================================================================
          // PERFORMANCE HEADERS
          // ============================================================================
          {
            key: 'X-DNS-Prefetch-Control',
            // Enable DNS prefetching for faster external resource loading
            value: 'on',
          },
        ],
      },
      {
        // Static assets caching (immutable files with hashed names)
        source: '/assets/:path*',
        headers: [
          {
            key: 'Cache-Control',
            // Cache static assets for 1 year (immutable)
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Public folder assets caching
        source: '/:file(favicon.ico|robots.txt|sitemap.xml|manifest.json|site.webmanifest)',
        headers: [
          {
            key: 'Cache-Control',
            // Cache these files for 1 day, allow revalidation
            value: 'public, max-age=86400, must-revalidate',
          },
        ],
      },
      {
        // HTML page caching strategy
        source: '/:path((?!api|_next).*)*',
        headers: [
          {
            key: 'Cache-Control',
            // Don't cache HTML pages (allows fresh content for crawlers)
            // Use stale-while-revalidate for better UX
            value: 'public, max-age=0, must-revalidate',
          },
        ],
      },
    ];
  },

  // ============================================================================
  // PERFORMANCE OPTIMIZATIONS
  // ============================================================================

  // Generate unique build IDs for cache busting
  // This ensures browsers fetch new assets after deployment
  generateBuildId: async () => {
    // Use timestamp or git commit hash in production
    return `build-${Date.now()}`;
    // For git-based build IDs:
    // const { execSync } = require('child_process');
    // return execSync('git rev-parse HEAD').toString().trim();
  },

  // ============================================================================
  // EXPERIMENTAL FEATURES (Optional - Test before enabling)
  // ============================================================================
  // experimental: {
  //   // Optimize package imports for faster builds
  //   optimizePackageImports: ['framer-motion', '@headlessui/react'],
  //
  //   // Enable React Server Components optimizations
  //   serverActions: {
  //     bodySizeLimit: '2mb',
  //   },
  // },

  // ============================================================================
  // PRODUCTION OPTIMIZATIONS
  // ============================================================================
  poweredByHeader: false, // Remove X-Powered-By header for security
  reactStrictMode: true, // Enable React strict mode for better development

  // ============================================================================
  // OUTPUT CONFIGURATION
  // ============================================================================
  // output: 'standalone', // Uncomment for Docker deployments
};

export default nextConfig;
