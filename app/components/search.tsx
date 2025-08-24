type Comparable = number | string | bigint | Date;

function arraySearch<T extends Comparable>(array: T[], item: T) {
	const sorted = array.sort();

	function binarySearch(array: T[]): boolean {
		if (array.length <= 1) return item === array.at(0);

		const midpoint = Math.floor(array.length / 2);
		const left = array.slice(0, midpoint);
		const right = array.slice(midpoint);

		if (item <= left.at(-1)!) return binarySearch(left);
		return binarySearch(right);
	}
	return binarySearch(sorted);
}

export default arraySearch;
