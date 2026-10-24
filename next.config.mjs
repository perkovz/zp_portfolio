import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {},
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  transpilePackages: ["next-mdx-remote"],
  // Keep react-icons out of webpack's server vendor-chunks. Next.js 15 can
  // emit a require for `./vendor-chunks/react-icons.js` without writing the
  // file, which then crashes routes like /work/[slug] in the static-paths worker.
  serverExternalPackages: ["react-icons"],
  eslint: {
    ignoreDuringBuilds: false,
  },
  images: {
    localPatterns: [{ pathname: "/images/**" }],
    qualities: [75, 90],
  },
};

export default withMDX(nextConfig);
