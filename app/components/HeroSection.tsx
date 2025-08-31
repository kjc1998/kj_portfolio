'use client';

const HeroSection = () => {
	return (
		<section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden py-16 sm:py-20">
			<div className="absolute inset-0 z-0">
				<div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent"></div>
				<div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent"></div>
			</div>

			<div className="container mx-auto px-4 z-10">
				<div className="text-center mb-8">
					<h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-16">
						<span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 text-transparent bg-clip-text bg-[size:200%] animate-gradient">
							Kai Jie Chow
						</span>
					</h1>
					<div className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed px-8 flex justify-center">
						<div className="flex-1 text-blue-400">Python Engineer</div>
						<div className="flex-1 text-purple-400">Web Developer</div>
						<div className="flex-1 text-blue-400">DevOps Engineer</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
