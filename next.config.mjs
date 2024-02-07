/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'], //只识别到以page开头的文件
  reactStrictMode: true,
};

export default nextConfig;
