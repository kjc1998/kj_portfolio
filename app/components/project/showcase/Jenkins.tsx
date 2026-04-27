import { buildProject } from '@/app/features/project/factory';
import JenkinsLogo from '@/public/projects/jenkins.svg';

const Jenkins = buildProject(
	'Jenkins',
	new Date(2025, 6, 1),
	new Date(2025, 7, 1),
	'https://kj1chow.zapto.org/jenkins/',
	JenkinsLogo,
	'done',
	'A CI/CD pipeline to automate build, test, and deployment processes',
	['Jenkins', 'CICD', 'nginx', 'docker'],
	null,
);

export default Jenkins;
