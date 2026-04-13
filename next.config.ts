import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	/* config options here */
	basePath: process.env.BASE_PATH,
	output: 'export',

	images: { unoptimized: true },
	/* only valid for absolut URL (CDN cases) */
	// assetPrefix: './',
	webpack(config) {
		config.module.rules.push({
			test: /\.(mp4|webm)$/,
			type: 'asset/resource',
			generator: {
				filename: 'static/media/[name].[hash][ext]',
			},
		});
		return config;
	},
};

export default nextConfig;
