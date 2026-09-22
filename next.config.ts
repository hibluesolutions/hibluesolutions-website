import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Set basePath for GitHub pages so assets load correctly
  basePath: "/hibluesolutions-website",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hibluesolutions.in",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
