import { buildProject } from '@/app/features/project/factory';
import Frederick from '@/public/profilePics/Frederick.jpg';
import Fung from '@/public/profilePics/Fung.png';
import Jerryl from '@/public/profilePics/Jerryl.jpg';
import Nicholas from '@/public/profilePics/Nicholas.jpg';
import Shawn from '@/public/profilePics/Shawn.jpg';
import TeslaTurbineLogo from '@/public/projects/tesla turbine logo.jpg';
import gdpVideo from '@/public/shared/videos/gdpVideo.mp4';
import LayoutComponent from '../layouts/LayoutComponent';
import ProfileComponent, { ProfileI } from '../layouts/ProfileComponent';
import TextComponent from '../layouts/TextComponent';
import VideoComponent from '../layouts/VideoComponent';

const contributors: ProfileI[] = [
	{
		name: 'Shawn Navarednam',
		pageLink: 'https://www.linkedin.com/in/shawn-navarednam/',
		image: Shawn,
	},
	{
		name: 'Jerryl Ong',
		pageLink: 'https://www.linkedin.com/in/jerryl-ong/',
		image: Jerryl,
	},
	{
		name: 'Nicholas Khor',
		pageLink: 'https://www.linkedin.com/in/nicholas-k-630b12163/',
		image: Nicholas,
	},
	{
		name: 'Frederick Wong',
		pageLink: 'https://www.linkedin.com/in/frederick-wong-720b71122/',
		image: Frederick,
	},
	{
		name: 'Kheng Fung (Michael)',
		pageLink: 'https://www.instagram.com/khengfung97/',
		image: Fung,
	},
];

const TeslaTurbineLayout = () => {
	const summary =
		'This project features the design of a 100W, 8kg Tesla Turbine for pico-hydro applications, made to address the challenge of rural electrification by providing clean, reliable power to rural communities.';
	return (
		<>
			<TextComponent text={summary} />
			<VideoComponent path={gdpVideo} />
			<LayoutComponent>
				<h3 className="font-bold mb-4">Contributors</h3>
				<div className="flex flex-wrap gap-3 max-w-4xl">
					{contributors.map((c, index) => (
						<ProfileComponent key={index} name={c.name} pageLink={c.pageLink} image={c.image} />
					))}
				</div>
			</LayoutComponent>
		</>
	);
};

const TeslaTurbine = buildProject(
	'Tesla Turbine Simulation',
	new Date(2020, 9, 1),
	new Date(2021, 6, 1),
	'https://github.com/kjc1998/Tesla-Turbine-Flow-Simulation',
	TeslaTurbineLogo,
	'done',
	'100W pico-scaled Tesla Turbine for  £100',
	['fluid dynamics', 'python', 'numpy', 'numerical simulation', 'CFD'],
	<TeslaTurbineLayout />,
);

export default TeslaTurbine;
