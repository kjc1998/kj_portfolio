import { buildProject } from '@/app/features/project/factory';
import sortProject from '@/app/features/project/sort';
import { SortCategory } from '@/app/models/enums';
import { StaticImageData } from 'next/image';

describe(`test sort projects functionality`, () => {
	const mockStaticImageData: StaticImageData = {
		src: '/test.jpg',
		height: 1,
		width: 1,
	};

	const pOne = buildProject('A', new Date(2020, 1, 1), new Date(2020, 2, 1), 'TEST_LINK', mockStaticImageData, 'done', 'TEST_DESCRIPTION', [], []);
	const pTwo = buildProject('D', new Date(2020, 3, 1), new Date(2020, 4, 1), 'TEST_LINK', mockStaticImageData, 'done', 'TEST_DESCRIPTION', [], []);
	const pThree = buildProject('E', new Date(2020, 1, 1), new Date(2020, 2, 1), 'TEST_LINK', mockStaticImageData, 'done', 'TEST_DESCRIPTION', [], []);
	const pFour = buildProject('B', new Date(2020, 7, 1), new Date(2020, 9, 1), 'TEST_LINK', mockStaticImageData, 'done', 'TEST_DESCRIPTION', [], []);
	const pFive = buildProject('A', new Date(2020, 7, 1), new Date(2020, 8, 1), 'TEST_LINK', mockStaticImageData, 'done', 'TEST_DESCRIPTION', [], []);

	test.each`
		isAscending | expected
		${true}     | ${[pOne, pFive, pFour, pTwo, pThree]}
		${false}    | ${[pThree, pTwo, pFour, pOne, pFive]}
	`('sort by project name', ({ isAscending, expected }) => {
		const actual = sortProject([pOne, pTwo, pThree, pFour, pFive], SortCategory.Title, isAscending);
		expect(actual).toStrictEqual(expected);
	});

	test.each`
		isAscending | expected
		${true}     | ${[pOne, pThree, pTwo, pFive, pFour]}
		${false}    | ${[pFour, pFive, pTwo, pOne, pThree]}
	`('sort by project date', ({ isAscending, expected }) => {
		const actual = sortProject([pOne, pTwo, pThree, pFour, pFive], SortCategory.Date, isAscending);
		expect(actual).toStrictEqual(expected);
	});
});
