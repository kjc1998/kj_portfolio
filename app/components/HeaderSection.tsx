import { Section } from '../models/enums';

const HeaderSection = () => {
	return (
		<section className="sticky top-4 z-10 mx-auto w-[92%] sm:w-fit px-4 sm:px-5 py-2 bg-gray-700/70 backdrop-blur-md rounded-full shadow-lg border border-white/5">
			<nav className="flex justify-center flex-wrap gap-3 sm:gap-6">
				{Object.values(Section).map((value, index) => (
					<a
						key={index}
						href={'#' + value}
						className="px-4 py-1.5 text-sm font-medium rounded-full hover:bg-white hover:text-gray-500 hover:shadow-sm transition-all duration-200"
					>
						{value}
					</a>
				))}
			</nav>
		</section>
	);
};

export default HeaderSection;
