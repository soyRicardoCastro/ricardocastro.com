import { withContentlayer } from "next-contentlayer";
import "./app/env.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
	experimental: {
		appDir: true,
		mdxRs: true,
	},
};

export default withContentlayer(nextConfig);
