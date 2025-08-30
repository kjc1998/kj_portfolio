'use-client';

import { HighlightI, ProjectHighlightI, ProjectI } from './interface';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProjectIcon = (prop: { project: ProjectI }) => {
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

const HighlightWord = (prop: { word: string; highlights: HighlightI[] }) => {
	const highlights = prop.highlights;
	let substrings = [prop.word];
	for (let i = highlights.length - 1; i >= 0; i--) {
		const highlight = highlights[i];
		const substring = substrings[0];
		const breaks = [substring.slice(0, highlight.start), substring.slice(highlight.start, highlight.end), substring.slice(highlight.end)];
		substrings = breaks.concat(substrings.slice(1));
	}
	return (
		<>
			{substrings.map((substring, i) =>
				i % 2 !== 0 ? (
					<span key={i} className="bg-white/20 rounded">
						{substring}
					</span>
				) : (
					substring
				),
			)}
		</>
	);
};

const ProjectInfo = (prop: { project: ProjectI; highlight: ProjectHighlightI }) => {
	const project = prop.project;
	const hightlight = prop.highlight;
	const statusColour = project.status === 'done' ? 'green' : 'blue';
	return (
		<div className="flex-grow w-full sm:w-auto">
			<div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 mb-2">
				<Link href={project.link ?? '#'} style={{ pointerEvents: project.link !== null ? 'auto' : 'none' }}>
					<h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors text-center sm:text-left break-words">
						<HighlightWord word={project.name} highlights={hightlight.name} />
					</h3>
				</Link>
				<span className={`px-2 py-0.5 rounded-full text-xs bg-${statusColour}-500/10 text-${statusColour}-400 border border-${statusColour}-500/20 whitespace-nowrap`}>
					<HighlightWord word={project.status} highlights={hightlight.status} />
				</span>
			</div>
			<p className="text-gray-400 mb-4 text-center sm:text-left">
				<HighlightWord word={project.description} highlights={hightlight.description} />
			</p>

			{/* Tags */}
			<div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-4">
				{project.tags.map((tag, i) => (
					<span
						key={i}
						className="px-3 py-1 text-sm rounded-full bg-gray-800 text-gray-400 border border-gray-700/50 group-hover:border-gray-600/50 group-hover:text-gray-300 transition-colors whitespace-nowrap"
					>
						<HighlightWord word={tag} highlights={hightlight.tags[i]} />
					</span>
				))}
			</div>
		</div>
	);
};

const Project = (prop: { project: ProjectI; highlight: ProjectHighlightI }) => {
	return (
		<div className="group bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-xl sm:rounded-2xl p-1">
			<div className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-xl sm:rounded-2xl overflow-hidden p-4 sm:p-6 relative">
				<div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
					<ProjectIcon project={prop.project} />
					<ProjectInfo project={prop.project} highlight={prop.highlight} />
				</div>
			</div>
		</div>
	);
};

const ProjectSection = (prop: { projects: [ProjectI, ProjectHighlightI][] }) => {
	return (
		<div className="flex flex-col min-h-[500px]">
			{prop.projects.length > 0 ? (
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
					{prop.projects.map(([project, highlight]) => (
						<Project key={project.id} project={project} highlight={highlight} />
					))}
				</div>
			) : (
				<div className="flex flex-1 items-center justify-center">
					<p className="text-center text-[2rem] text-gray-400 text-xl font-semi-bold">No Result</p>
				</div>
			)}
		</div>
	);
};

export default React.memo(ProjectSection);
