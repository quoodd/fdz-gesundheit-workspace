/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Ersetzt deprecated domains mit remotePatterns
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
    ],
  },
  env: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL || 'http://localhost:3000',
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET || 'your-secret-key-here',
  },
  // CORS und Iframe-Header für Joomla-Integration
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN', // Erlaubt Einbettung in Iframes derselben Domain
          },
          {
            key: 'Content-Security-Policy',
            value: "frame-ancestors 'self' https://*.fdz-gesundheit.de https://*.risikoanalytik.de;",
          },
        ],
      },
    ];
  },
}

module.exports = nextConfig
