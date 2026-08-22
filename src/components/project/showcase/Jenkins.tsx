import JenkinsLogo from '@/public/projects/jenkins.svg';
import { buildProject } from '@/src/features/project/factory';

const Jenkins = buildProject(
	'Jenkins',
	new Date(2025, 6, 1),
	new Date(2025, 7, 1),
	'https://kj1chow.zapto.org/admin/jenkins/',
	JenkinsLogo,
	'done',
	'A CI/CD pipeline to automate build, test, and deployment processes',
	['jenkins', 'nginx', 'docker'],
	null,
);

export default Jenkins;
