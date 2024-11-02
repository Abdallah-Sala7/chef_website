import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   loader: "cloudinary",
  //   path: "https://res.cloudinary.com/ugwutotheeshoes/image/upload/",
  // },

  images: {
    domains: ["res.cloudinary.com"],
  },
};

export default withNextIntl(nextConfig);
