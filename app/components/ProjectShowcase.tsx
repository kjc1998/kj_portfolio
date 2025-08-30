'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectI from './project/ProjectI';
import getProjectKeywords from './project/search';
import Project from './project/Project';
import JenkinsLogo from '@/public/projects/jenkins.svg';
import HomePage from '@/public/projects/laptop.jpg';

const projects: ProjectI[] = [
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

const ProjectShowcase = () => {
	const [query, setQuery] = useState('');
	const [isFocused, setIsFocused] = useState(false);

	const filteredProjects = projects.filter((p) => getProjectKeywords(p).includes(query));
	return (
		<section className="py-16 md:py-20 relative">
			<div className="container mx-auto px-4">
				<h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">Projects</h2>
				<div className="bg-gray-900 sm:rounded-2xl p-8">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
						<div className="flex mt-4 mb-4">
							<motion.div initial={{ width: '80%' }} animate={{ width: isFocused ? '100%' : '80%' }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
								<input
									type="text"
									value={query}
									placeholder="search"
									onChange={(e) => setQuery(e.target.value)}
									onFocus={() => setIsFocused(true)}
									onBlur={() => setIsFocused(false)}
									className="w-full px-4 py-2 rounded text-white bg-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-700"
								/>
							</motion.div>
						</div>
					</div>

					<div className="flex flex-col min-h-[500px]">
						{filteredProjects.length > 0 ? (
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
								{filteredProjects.map((project) => (
									<Project key={project.id} project={project} />
								))}
							</div>
						) : (
							<div className="flex flex-1 items-center justify-center">
								<p className="text-center text-[2rem] text-gray-400 text-xl font-semi-bold">No Result</p>
							</div>
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProjectShowcase;
