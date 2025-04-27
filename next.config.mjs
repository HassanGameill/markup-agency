import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https", // Specify the protocol explicitly
        hostname: "res.cloudinary.com",
        pathname: "/**", // Allow all paths under this hostname
      },
    ],
    domains: [
      "lh3.googleusercontent.com", // Google profile images
      "avatars.githubusercontent.com", // GitHub avatars
    ],
  },
};

export default withNextIntl(nextConfig);
