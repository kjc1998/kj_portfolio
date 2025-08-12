'use client';

import { StaticImageData } from 'next/image';
import Image from 'next/image';
import Link from 'next/link';
import JenkinsLogo from '@/public/projects/jenkins.svg';
import HomePage from '@/public/projects/laptop.jpg';

interface Project {
	id: number;
	name: string;
	link: string | null;
	image: StaticImageData;
	status: 'ongoing' | 'done';
	description: string;
	tags: string[];
}

const projects: Project[] = [
	{
		id: 1,
		name: 'Jenkins Pipeline',
		link: 'https://kj1chow.zapto.org/jenkins/',
		status: 'done',
		image: JenkinsLogo,
		description: 'A CI/CD pipeline to automate build, test, and deployment processes',
		tags: ['Jenkins', 'CICD', 'nginx', 'docker'],
	},
	{
		id: 2,
		name: 'HomePage',
		link: 'https://kj1chow.zapto.org/home/',
		status: 'ongoing',
		image: HomePage,
		description: 'Portfolio showcasing projects, skills and professional journey',
		tags: ['nextjs', 'nginx', 'front-end'],
	},
];

const ProjectIcon = (prop: { project: Project }) => {
	return (
		<div className="w-16 sm:w-20 h-16 sm:h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 p-1 flex-shrink-0">
			<div className="w-full h-full rounded-xl bg-gray-900 flex items-center justify-center overflow-hidden relative">
				<Image alt="application image" src={prop.project.image} fill />
				{/* Animated Glow Effect */}
				<div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-purple-500/0 animate-shimmer"></div>
			</div>
			{/* Corner Decorations */}
			<div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full blur-[2px]"></div>
			<div className="absolute -bottom-1 -left-1 w-3 h-3 bg-purple-400 rounded-full blur-[2px]"></div>
		</div>
	);
};

const ProjectInfo = (prop: { project: Project }) => {
	const project = prop.project;
	const statusColour = project.status === 'done' ? 'green' : 'blue';
	return (
		<div className="flex-grow w-full sm:w-auto">
			<div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 mb-2">
				<Link href={project.link ?? '#'} style={{ pointerEvents: project.link !== null ? 'auto' : 'none' }}>
					<h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors text-center sm:text-left break-words">{project.name}</h3>
				</Link>
				<span className={`px-2 py-0.5 rounded-full text-xs bg-${statusColour}-500/10 text-${statusColour}-400 border border-${statusColour}-500/20 whitespace-nowrap`}>
					{project.status}
				</span>
			</div>
			<p className="text-gray-400 mb-4 text-center sm:text-left">{project.description}</p>

			{/* Tags */}
			<div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-4">
				{project.tags.map((tag) => (
					<span
						key={tag}
						className="px-3 py-1 text-sm rounded-full bg-gray-800 text-gray-400 border border-gray-700/50 group-hover:border-gray-600/50 group-hover:text-gray-300 transition-colors whitespace-nowrap"
					>
						{tag}
					</span>
				))}
			</div>
		</div>
	);
};

const AppShowcase = () => {
	return (
		<section className="py-16 md:py-20 relative">
			<div className="container mx-auto px-4">
				<h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">Featured Apps</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
					{projects.map((project) => {
						return (
							<div key={project.id} className="group bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-xl sm:rounded-2xl p-1">
								<div className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-xl sm:rounded-2xl overflow-hidden p-4 sm:p-6 relative">
									<div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
										<ProjectIcon project={project} />
										<ProjectInfo project={project} />
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default AppShowcase;
