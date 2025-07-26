import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	/* config options here */
	basePath: process.env.BASE_PATH,
	output: 'export',

	images: { unoptimized: true },
	/* only valid for absolut URL (CDN cases) */
	// assetPrefix: './',

	publicRuntimeConfig: {
		basePath: process.env.BASE_PATH,
	},
};

export default nextConfig;
