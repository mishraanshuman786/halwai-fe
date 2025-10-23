/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",      // usually empty
        pathname: "/**", // allow all paths under this domain
      },
      // add more domains if needed
    ],
  },
};

export default nextConfig;
