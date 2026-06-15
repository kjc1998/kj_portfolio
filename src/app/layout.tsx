import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Kai Jie Chow',
	description:
		'Welcome to my portfolio! I’m a software engineer with expertise in Python, Full-Stack Web Development, and DevOps, specialising in building web applications across the stack from backend to cloud infrastructure and frontend interfaces.',
	keywords: [
		// Title
		'Software Engineer',
		'Full-Stack',
		'DevOps',
		// Languages
		'Python',
		'TypeScript',
		'React',
		'Kotlin',
		'Nextjs',
		'Magik',
		'SQL',
		// Tools
		'Django',
		'Flask',
		'SqlAlchemy',
		// Methodologies
		'Clean-Code',
		'Test-Driven Development',
		'Kai Jie Chow',
	],
	authors: [{ name: 'Kai Jie Chow' }],
	creator: 'Kai Jie Chow',
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
