/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "media.tenor.com",
      "png.pngtree.com",
      "www.setindiabiz.com",
      "cdn.dribbble.com", // For meditation GIF
      "gifyard.com" // Optional: keep if you use old GIF
    ],
  },
};

export default nextConfig;
