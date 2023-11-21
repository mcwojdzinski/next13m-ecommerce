const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ["ts", "tsx", "mdx"],
	experimental: {
		typedRoutes: true,
		mdxRs: true,
	},
	images: {
		domains: ["naszsklep-api.vercel.app", "media.graphassets.com"],
	},
};

module.exports = withMDX(nextConfig);
