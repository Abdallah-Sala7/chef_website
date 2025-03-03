import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();
// 

/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  experimental: {
    esmExternals: false,
  },
  distDir: "build",
  images: {
    domains: ["res.cloudinary.com"],
  },
  webpack: (config: {
    watchOptions: { poll: number; aggregateTimeout: number };
    parallelism: number;
    infrastructureLogging: { level: string };
  }) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };
    config.parallelism = 1;
    config.infrastructureLogging = { level: "error" };
    return config;
  },
};

export default withNextIntl(nextConfig);
