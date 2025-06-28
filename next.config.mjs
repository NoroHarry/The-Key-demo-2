/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/The-Key-demo-2',
  assetPrefix: '/The-Key-demo-2/',
  trailingSlash: true,

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
