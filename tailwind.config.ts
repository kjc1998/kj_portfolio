import scrollbarHide from 'tailwind-scrollbar-hide';
import type { Config } from 'tailwindcss';

export default {
	future: {
		hoverOnlyWhenSupported: true,
	},
	content: ['./src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
			},
		},
	},
	plugins: [scrollbarHide],
} satisfies Config;
