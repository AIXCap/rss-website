import createNextIntlPlugin from 'next-intl/plugin'
import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev'

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:3000', '*.pages.dev']
    }
  }
}

if (process.env.NODE_ENV === 'development') {
  await setupDevPlatform()
}

export default withNextIntl(nextConfig)
