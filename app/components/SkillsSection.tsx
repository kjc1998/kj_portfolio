'use client';

interface Skill {
	name: string;
	level: number;
}

const skills: Skill[] = [
	{ name: 'Python', level: 95 },
	{ name: 'Django', level: 90 },
	{ name: 'Javascript', level: 80 },
	{ name: 'React', level: 75 },
	{ name: 'Numpy, Pandas', level: 85 },
	{ name: 'Linux', level: 90 },
];

const fields: Skill[] = [
	{ name: 'Full-Stack Development', level: 90 },
	{ name: 'Numerical Simulation', level: 85 },
	{ name: 'TDD - Pytest, Jest', level: 95 },
	{ name: 'DevOps', level: 75 },
	{ name: 'CI/CD - Jenkins, Github Actions', level: 85 },
];

const SkillsSection = () => {
	return (
		<section className="py-16 md:py-20 relative">
			<div className="container mx-auto px-4">
				<h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">Technical Expertise</h2>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-5xl mx-auto p-8">
					{/* Core Technologies */}
					<div className="space-y-4 sm:space-y-6 px-2">
						<h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 flex items-center gap-2">
							<svg className="w-5 h-5 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
								<path d="M12,16L19.36,10.27L21,9L12,2L3,9L4.63,10.27M12,18.54L4.62,12.81L3,14.07L12,21.07L21,14.07L19.37,12.8L12,18.54Z" />
							</svg>
							Core
						</h3>
						{skills.map((skill) => (
							<div key={skill.name} className="group relative">
								<div className="flex flex-wrap sm:flex-nowrap justify-between mb-2 gap-2">
									<div className="flex flex-wrap sm:flex-nowrap items-center gap-2">
										<span className="font-medium">{skill.name}</span>
									</div>
									<span className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">{skill.level}%</span>
								</div>
								<div className="h-2.5 bg-gray-700/50 rounded-full overflow-hidden backdrop-blur-sm relative">
									<div
										className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left transition-transform duration-1000 ease-out scale-x-0 group-hover:scale-x-100"
										style={{ width: `${skill.level}%` }}
									></div>
									<div
										className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left animate-expand"
										style={{ width: `${skill.level}%` }}
									></div>
								</div>
								{/* Hover Card with Details */}
								<div className="hidden lg:block absolute left-full top-0 ml-4 w-48 p-3 rounded-lg bg-gray-800/90 backdrop-blur-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10 border border-gray-700/50">
									<div className="text-sm space-y-2">
										<p className="font-medium">{skill.name}</p>
										<div className="space-y-1 text-xs text-gray-400">
											<p>• {skill.level}% Proficiency</p>
											<p>• {skill.level > 90 ? 'Expert' : skill.level > 80 ? 'Advanced' : 'Intermediate'} Level</p>
											<p>• {Math.round(skill.level / 10)} Years Experience</p>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>

					<div className="space-y-4 sm:space-y-6 px-2">
						<h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 flex items-center gap-2">
							<svg className="w-5 h-5 text-purple-400" viewBox="0 0 24 24" fill="currentColor">
								<path d="M12,0L3,7L4.63,8.27L12,14L19.36,8.27L21,7L12,0M19.37,10.73L12,16.47L4.62,10.73L3,12L12,19L21,12L19.37,10.73M19.37,15.73L12,21.47L4.62,15.73L3,17L12,24L21,17L19.37,15.73" />
							</svg>
							Fields
						</h3>
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
							{fields.map((field) => (
								<div
									key={field.name}
									className="group bg-gray-800/30 backdrop-blur-sm p-4 rounded-xl border border-gray-700/50 hover:border-purple-500/50 transition-colors relative overflow-hidden"
								>
									<div className="relative z-10">
										<h4 className="font-medium mb-2 break-words">{field.name}</h4>
										<div className="flex items-center gap-2">
											<div className="flex-grow h-1.5 bg-gray-700/50 rounded-full overflow-hidden">
												<div
													className="h-full bg-gradient-to-r from-purple-500 to-blue-500 transform origin-left animate-expand"
													style={{ width: `${field.level}%` }}
												></div>
											</div>
											<span className="text-sm text-purple-400 whitespace-nowrap">{field.level}%</span>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SkillsSection;
