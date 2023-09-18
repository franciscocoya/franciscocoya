/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  i18n: {
    locales: ['en-GB', 'es-ES'],
    defaultLocale: 'en-GB',
    localeDetection: false,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, '_styles')],
  },
  trailingSlash: true,
}

module.exports = nextConfig
