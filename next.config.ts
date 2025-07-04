import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	/* config options here */
	basePath: process.env.BASE_PATH,
	output: 'export',
	/* only valid for absolut URL (CDN cases) */
	// assetPrefix: './',
};

export default nextConfig;
