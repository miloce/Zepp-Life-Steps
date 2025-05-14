/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    'rc-util', 
    '@rc-component/util',
    'rc-pagination',
    'rc-table',
    'rc-select',
    'rc-tree',
    'rc-dropdown',
    'rc-menu',
    'rc-field-form',
    'rc-picker',
    '@ant-design/icons-svg',
    '@ant-design/icons'
  ],
  devIndicators: false,
  experimental: {
    webVitalsAttribution: [],
    disablePostcssPresetEnv: true
  },
  output: 'export',
}

module.exports = nextConfig 