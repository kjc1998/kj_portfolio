import ProjectI from '@/app/components/project/ProjectI';
import getProjectKeywords from '@/app/components/project/search';
import { StaticImageData } from 'next/image';

test(`get project keywords functionality`, () => {
	const mockStaticImageData: StaticImageData = {
		src: '/test.jpg',
		height: 1,
		width: 1,
	};

	const project: ProjectI = {
		id: 1,
		name: 'Jenkins Pipeline',
		link: 'https://kj1chow.zapto.org/jenkins/',
		status: 'done',
		image: mockStaticImageData,
		description: 'A CI/CD pipeline to automate build, test, and deployment processes',
		tags: ['Jenkins', 'CICD', 'nginx', 'docker'],
	};

	const actual = getProjectKeywords(project);
	expect(actual).toBe('a ci/cd cicd jenkins jenkins pipeline and automate build, deployment docker done nginx pipeline processes test, to');
});
