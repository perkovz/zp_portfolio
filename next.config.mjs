import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {},
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  transpilePackages: ["next-mdx-remote"],
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    localPatterns: [{ pathname: "/images/**" }],
  },
};

export default withMDX(nextConfig);
