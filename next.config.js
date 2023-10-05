/** @type {import('next').NextConfig} */
const path = require('path')

const withNextIntl = require('next-intl/plugin')('./src/i18n.js')

const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'same-origin',
          },
          {
            key: 'Feature-Policy',
            value: 'camera "none"; microphone "none"; geolocation "none";',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },

  images: {
    domains: ['res.cloudinary.com', 'placehold.co'],
  },

  sassOptions: {
    includePaths: [path.join(__dirname, '_styles')],
  },

  trailingSlash: true,
  poweredByHeader: false,
}

module.exports = withNextIntl(nextConfig)
