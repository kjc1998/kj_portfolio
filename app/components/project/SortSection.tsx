'use-client';

import { SortCategory } from '../../models/enums';

const SortSection = (prop: { sort: [SortCategory, (value: React.SetStateAction<SortCategory>) => void]; asc: [boolean, (value: React.SetStateAction<boolean>) => void] }) => {
	const [sortBy, setSortBy] = prop.sort;
	const [isAsc, setIsAsc] = prop.asc;

	return (
		<div className="flex md:justify-end mt-4 mb-4 gap-2 items-center">
			<div className="flex bg-gray-800 rounded">
				<select
					value={sortBy}
					onChange={(e) => setSortBy(e.target.value as SortCategory)}
					className="bg-transparent text-gray-300 text-sm px-2 py-1 outline-none cursor-pointer hover:text-white"
				>
					<option value={SortCategory.Title} className="bg-gray-800">
						Title
					</option>
					<option value={SortCategory.Date} className="bg-gray-900">
						Date
					</option>
				</select>
				<div className="w-[1px] bg-gray-700 mx-2"></div>
				<button
					onClick={() => setIsAsc(!isAsc)}
					className="p-1 text-gray-400 hover:text-blue-400 hover:bg-gray-700 rounded transition-colors"
					title={isAsc ? 'Sort Ascending' : 'Sort Descending'}
				>
					{isAsc ? (
						<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
							<path d="m3 8 4-4 4 4" />
							<path d="M7 4v16" />
							<path d="M11 12h10" />
							<path d="M11 16h7" />
							<path d="M11 20h4" />
						</svg>
					) : (
						<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
							<path d="m3 16 4 4 4-4" />
							<path d="M7 20V4" />
							<path d="M11 4h4" />
							<path d="M11 8h7" />
							<path d="M11 12h10" />
						</svg>
					)}
				</button>
			</div>
		</div>
	);
};

export default SortSection;
