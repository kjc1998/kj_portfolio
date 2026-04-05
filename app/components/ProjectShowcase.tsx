'use client';

import JenkinsLogo from '@/public/projects/jenkins.svg';
import KaiJie from '@/public/projects/kai jie.jpg';
import TeslaTurbine from '@/public/projects/tesla turbine logo.jpg';
import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { ProjectI } from './project/interface';
import ProjectSection from './project/ProjectSection';
import { filterProjects } from './project/search';

const projects: ProjectI[] = [
	{
		name: 'Jenkins',
		link: 'https://kj1chow.zapto.org/jenkins/',
		status: 'done',
		image: JenkinsLogo,
		description: 'A CI/CD pipeline to automate build, test, and deployment processes',
		tags: ['Jenkins', 'CICD', 'nginx', 'docker'],
		others: [],
	},
	{
		name: 'Home',
		link: 'https://kj1chow.zapto.org/home/',
		status: 'ongoing',
		image: KaiJie,
		description: 'Portfolio showcasing projects, skills and professional journey',
		tags: ['nextjs', 'react', 'nginx', 'front-end'],
		others: [],
	},
	{
		name: 'Tesla Turbine Simulation',
		link: 'https://github.com/kjc1998/Tesla-Turbine-Flow-Simulation',
		status: 'done',
		image: TeslaTurbine,
		description: '100W pico-scaled Tesla Turbine for  £100',
		tags: ['fluid dynamics', 'python', 'numpy', 'numerical simulation', 'CFD'],
		others: [],
	},
];

const ProjectShowcase = () => {
	const [query, setQuery] = useState('');
	const [isFocused, setIsFocused] = useState(false);

	const filteredProjects = useMemo(() => filterProjects(projects, query), [query]);
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
					<ProjectSection projects={filteredProjects} />
				</div>
			</div>
		</section>
	);
};

export default ProjectShowcase;
