import arraySearch from '@/app/components/search';

describe(`search functionality`, () => {
	const array = [1, 2, 3, 4, 5];
	it(`standard case`, () => {
		expect(arraySearch(array, 4)).toBe(true);
	});

	it(`not present case`, () => {
		expect(arraySearch(array, 100)).toBe(false);
	});

	it(`length 0 case`, () => {
		expect(arraySearch([], 100)).toBe(false);
	});

	it(`length 1 case`, () => {
		expect(arraySearch([100], 100)).toBe(true);
	});
});
