import Image from 'next/image';
import { useState } from 'react';
import { ProjectI } from './interface';

const MoreOverlay = (prop: { project: ProjectI; activate: [boolean, (value: React.SetStateAction<boolean>) => void] }) => {
	const [isActivate, setIsActivate] = prop.activate;
	const project = prop.project;
	return isActivate ? (
		<div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80">
			<div className="relative w-11/12 max-w-2xl h-[80vh] bg-gray-900 border border-white/10 p-8 rounded-2xl shadow-2xl overflow-y-auto">
				<button onClick={() => setIsActivate(false)} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors">
					<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
				<h2 className="text-2xl font-bold text-white mb-4">{project.name}</h2>
				<div className="flex items-center justify-center">
					<div className="aspect-square h-[25vh] p-2  rounded-2xl bg-gray-700/30">
						<Image alt="application image" src={project.image} className="rounded-2xl" />
					</div>
				</div>
				{project.others}
			</div>
		</div>
	) : (
		<></>
	);
};

const MoreSection = (prop: { project: ProjectI }) => {
	const [showMore, setShowMore] = useState(false);

	return (
		<>
			<div className="absolute w-12 h-8 m-1 top-0 right-0 sm:h-48rounded-2xl">
				<div className="text-center hover:scale-110">
					<u className="cursor-pointer hover:text-blue-400 transition-colors" onClick={() => setShowMore(!showMore)}>
						more
					</u>
				</div>
			</div>
			<MoreOverlay project={prop.project} activate={[showMore, setShowMore]} />
		</>
	);
};

export default MoreSection;
