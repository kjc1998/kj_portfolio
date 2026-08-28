import KaiJie from '@/public/projects/kai jie.jpg';
import { buildProject } from '@/src/features/project/factory';

const Home = buildProject(
	'Home',
	new Date(2025, 7, 1),
	null,
	'https://kj1chow.zapto.org/home/',
	KaiJie,
	'ongoing',
	'Portfolio showcasing skills and professional journey',
	['nextjs', 'react', 'nginx', 'front-end'],
	null,
);

export default Home;
