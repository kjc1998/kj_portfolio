'use client';

import JenkinsLogo from '@/public/projects/jenkins.svg';
import KaiJie from '@/public/projects/kai jie.jpg';
import TeslaTurbine from '@/public/projects/tesla turbine logo.jpg';
import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { buildProject } from '../features/project/factory';
import { ProjectI } from '../features/project/interface';
import { filterProjects } from '../features/project/search';
import sortProject from '../features/project/sort';
import { SortCategory } from '../models/enums';
import ProjectSection from './project/ProjectSection';
import SortSection from './project/SortSection';

const projects: ProjectI[] = [
	buildProject(
		'Jenkins',
		new Date(2025, 6, 1),
		new Date(2025, 7, 1),
		'https://kj1chow.zapto.org/jenkins/',
		JenkinsLogo,
		'done',
		'A CI/CD pipeline to automate build, test, and deployment processes',
		['Jenkins', 'CICD', 'nginx', 'docker'],
		[],
	),
	buildProject(
		'Home',
		new Date(2025, 6, 1),
		null,
		'https://kj1chow.zapto.org/home/',
		KaiJie,
		'ongoing',
		'Portfolio showcasing projects, skills and professional journey',
		['nextjs', 'react', 'nginx', 'front-end'],
		[],
	),
	buildProject(
		'Tesla Turbine Simulation',
		new Date(2020, 9, 1),
		new Date(2021, 6, 1),
		'https://github.com/kjc1998/Tesla-Turbine-Flow-Simulation',
		TeslaTurbine,
		'done',
		'100W pico-scaled Tesla Turbine for  £100',
		['fluid dynamics', 'python', 'numpy', 'numerical simulation', 'CFD'],
		[],
	),
];

const ProjectShowcase = () => {
	const [query, setQuery] = useState('');
	const [isFocused, setIsFocused] = useState(false);
	const [sortBy, setSortBy] = useState(SortCategory.Date);
	const [isAsc, setIsAsc] = useState(false);

	const filteredProjects = useMemo(() => filterProjects(projects, query), [query]);
	const sortedProjects = sortProject(
		filteredProjects.map(([project]) => project),
		sortBy,
		isAsc,
	);
	const filteredSorted = sortedProjects.map((pSorted) => filteredProjects.find((pFiltered) => pFiltered[0] === pSorted)!);

	return (
		<section className="py-16 md:py-20 relative">
			<div className="container mx-auto px-4">
				<h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">Projects</h2>
				<div className="bg-gray-900 sm:rounded-2xl p-8">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
						<div className="md:col-start-3">
							<SortSection sort={[sortBy, setSortBy]} asc={[isAsc, setIsAsc]} />
						</div>
					</div>
					<ProjectSection projects={filteredSorted} />
				</div>
			</div>
		</section>
	);
};

export default ProjectShowcase;
