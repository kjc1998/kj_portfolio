import { buildProject } from '@/app/features/project/factory';
import KaiJie from '@/public/projects/kai jie.jpg';

const Home = buildProject(
	'Home',
	new Date(2025, 6, 1),
	null,
	'https://kj1chow.zapto.org/home/',
	KaiJie,
	'ongoing',
	'Portfolio showcasing projects, skills and professional journey',
	['nextjs', 'react', 'nginx', 'front-end'],
	null,
);

export default Home;
