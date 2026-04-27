import ContactIcon from '@/public/sections/contact.png';
import ProfileIcon from '@/public/sections/profile.png';
import ProjectsIcon from '@/public/sections/projects.png';
import ResumeIcon from '@/public/sections/resume.png';
import SkillsIcon from '@/public/sections/skills.png';
import WorkflowIcon from '@/public/sections/workflow.png';
import Resume from '@/public/shared/pdfs/resume.pdf';
import Image from 'next/image';
import { Section } from '../models/enums';

const HeaderSection = (prop: { isUnlocked: boolean }) => {
	const sections = Object.values(Section);
	const images = {
		[Section.Profile]: ProfileIcon,
		[Section.Skills]: SkillsIcon,
		[Section.Projects]: ProjectsIcon,
		[Section.Workflow]: WorkflowIcon,
		[Section.Contact]: ContactIcon,
	};

	return (
		<section className="fixed inset-x-0 top-4 z-10 mx-auto w-fit px-4 sm:px-5 py-2 bg-gray-700/5 backdrop-blur-md rounded-full shadow-lg">
			<nav className="flex justify-center flex-wrap gap-2 sm:gap-4 md:gap-6">
				{sections.map((value, index) => (
					<a key={index} href={`#${value}`} className="py-1.5 rounded-full hover:bg-white hover:shadow-sm transition-all duration-200">
						<Image src={images[value]} alt="section icon" className="mx-1 block md:hidden rounded-lg" width={30} />
						<p className="mx-4 hidden md:block text-lg hover:text-gray-500">{value}</p>
					</a>
				))}
				{prop.isUnlocked ? (
					<a
						key={sections.length}
						href={Resume}
						target="_blank"
						className="py-1.5 rounded-full hover:bg-white hover:shadow-sm transition-all duration-200 animate-unlock"
					>
						<Image src={ResumeIcon} alt="section icon" className="mx-1 block md:hidden rounded-lg" width={30} />
						<p className="mx-4 hidden md:block text-lg hover:text-gray-500">Resume</p>
					</a>
				) : (
					<></>
				)}
			</nav>
		</section>
	);
};

export default HeaderSection;
