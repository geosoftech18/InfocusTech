import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
      {
        source: "/NewsandEvent/News",
        destination: "/News",
        permanent: true,
      },
      {
        source: "/NewsandEvent/Events",
        destination: "/Events",
        permanent: true,
      },

    ];
  },
};

export default nextConfig;
