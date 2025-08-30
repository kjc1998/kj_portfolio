import { buildHighlight, buildProject, buildProjectHighlight } from '@/app/components/project/factory';
import { searchHighlights, filterProjects } from '@/app/components/project/search';
import { StaticImageData } from 'next/image';

describe(`search functionality`, () => {
	const paragraph = "I think Ruth's dog is cuter than your dog!";

	it('standard case', () => {
		expect(searchHighlights(paragraph, 'dog')).toStrictEqual([buildHighlight(15, 18), buildHighlight(38, 41)]);
	});

	it('single letter case', () => {
		expect(searchHighlights(paragraph, 'u')).toStrictEqual([buildHighlight(9, 10), buildHighlight(23, 24), buildHighlight(35, 36)]);
		expect(searchHighlights('uuuuu', 'u')).toStrictEqual([buildHighlight(0, 1), buildHighlight(1, 2), buildHighlight(2, 3), buildHighlight(3, 4), buildHighlight(4, 5)]);
	});

	it('empty case', () => {
		expect(searchHighlights(paragraph, '')).toStrictEqual([]);
	});
});

describe(`test filter projects functionality`, () => {
	const mockStaticImageData: StaticImageData = {
		src: '/test.jpg',
		height: 1,
		width: 1,
	};

	const projects = [
		buildProject(
			1,
			'Jenkins Pipeline',
			'https://kj1chow.zapto.org/jenkins/',
			mockStaticImageData,
			'done',
			'A CI/CD pipeline to automate build, test, and deployment processes',
			['Jenkins', 'CICD', 'nginx', 'docker'],
		),
	];

	it(`standard case`, () => {
		const actual = filterProjects(projects, 'jenkins');
		const expected = [[projects[0], buildProjectHighlight([buildHighlight(0, 7)], [], [], [[buildHighlight(0, 7)], [], [], []])]];
		expect(actual).toStrictEqual(expected);
	});

	it('single letter case', () => {
		const actual = filterProjects(projects, 'e');
		const expected = [
			[
				projects[0],
				{
					name: [buildHighlight(1, 2), buildHighlight(11, 12), buildHighlight(15, 16)],
					description: [
						buildHighlight(11, 12),
						buildHighlight(15, 16),
						buildHighlight(27, 28),
						buildHighlight(37, 38),
						buildHighlight(47, 48),
						buildHighlight(53, 54),
						buildHighlight(61, 62),
						buildHighlight(64, 65),
					],
					status: [buildHighlight(3, 4)],
					tags: [[buildHighlight(1, 2)], [], [], [buildHighlight(4, 5)]],
				},
			],
		];
		expect(actual).toStrictEqual(expected);
	});

	it('empty case', () => {
		const actual = filterProjects(projects, '');
		const expected = [[projects[0], buildProjectHighlight([], [], [], [[], [], [], []])]];
		expect(actual).toStrictEqual(expected);
	});
});
