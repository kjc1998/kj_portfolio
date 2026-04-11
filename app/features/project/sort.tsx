'use-client';

import { SortCategory } from '@/app/models/enums';
import { ProjectI } from '../../models/project';

const sortProject = (projects: ProjectI[], category: SortCategory, isAscending: boolean) => {
	const compareFunc = (a: ProjectI, b: ProjectI) => {
		let result: number;
		switch (category) {
			case SortCategory.Title: {
				result = a.name.localeCompare(b.name);
				break;
			}
			case SortCategory.Date: {
				if (a.startDate.getTime() === b.startDate.getTime()) {
					const today = new Date();
					const endA = a.endDate ?? today;
					const endB = b.endDate ?? today;
					result = endA.getTime() - endB.getTime();
				} else {
					result = a.startDate.getTime() - b.startDate.getTime();
				}
				break;
			}
		}
		return isAscending ? result : -result;
	};
	return projects.sort(compareFunc);
};

export default sortProject;
