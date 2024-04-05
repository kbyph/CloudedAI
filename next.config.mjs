/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "img.clerk.com",
      },
    ],
  },
  basePath: "/clouded-ai",
  output: "export",
};

export default nextConfig;
