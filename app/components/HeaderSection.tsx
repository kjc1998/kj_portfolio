import Resume from '@/public/shared/pdfs/resume.pdf';
import { Section } from '../models/enums';

const HeaderSection = (prop: { isUnlocked: boolean }) => {
	const sections = Object.values(Section);

	return (
		<section className="sticky top-4 z-10 mx-auto w-[92%] sm:w-fit px-4 sm:px-5 py-2 bg-gray-700/5 backdrop-blur-md rounded-full shadow-lg">
			<nav className="flex justify-center flex-wrap gap-3 sm:gap-6">
				{sections.map((value, index) => (
					<a key={index} href={`#${value}`} className="px-4 py-1.5 text-lg rounded-full hover:bg-white hover:text-gray-500 hover:shadow-sm transition-all duration-200">
						{value}
					</a>
				))}
				{prop.isUnlocked ? (
					<a
						key={sections.length}
						href={Resume}
						target="_blank"
						className="px-4 py-1.5 text-lg rounded-full hover:bg-white hover:text-gray-500 hover:shadow-sm transition-all duration-200 animate-unlock"
					>
						Resume
					</a>
				) : (
					<></>
				)}
			</nav>
		</section>
	);
};

export default HeaderSection;
