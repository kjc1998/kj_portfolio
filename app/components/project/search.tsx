'use-client';

import { buildHighlight, buildProjectHighlight } from './factory';
import { ProjectI, HighlightI, ProjectHighlightI } from './interface';

const searchHighlights = (paragraph: string, search: string): HighlightI[] => {
	if (search === '') return [];

	const result = [];
	let searchIndex = paragraph.indexOf(search);
	while (searchIndex !== -1) {
		const highlight = buildHighlight(searchIndex, searchIndex + search.length);
		result.push(highlight);
		searchIndex = paragraph.indexOf(search, searchIndex + 1);
	}
	return result;
};

const filterProjects = (projects: ProjectI[], search: string): [ProjectI, ProjectHighlightI][] => {
	const searchTerm = search.toLowerCase();
	const projectSearch = (project: ProjectI): ProjectHighlightI => {
		return buildProjectHighlight(
			searchHighlights(project.name.toLowerCase(), searchTerm),
			searchHighlights(project.status.toLowerCase(), searchTerm),
			searchHighlights(project.description.toLowerCase(), searchTerm),
			project.tags.map((tag) => searchHighlights(tag.toLowerCase(), searchTerm)),
		);
	};
	const hasSearchTerm = (result: ProjectHighlightI) => {
		const nameFound = result.name.length;
		const statusFound = result.status.length;
		const descriptionFound = result.description.length;
		const tagsIndices = result.tags.reduce((sum, t) => sum + t.length, 0);
		return nameFound !== 0 || statusFound !== 0 || descriptionFound !== 0 || tagsIndices !== 0;
	};

	const result = projects.map((p): [ProjectI, ProjectHighlightI] => [p, projectSearch(p)]);
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	return search === '' ? result : result.filter(([_, s]) => hasSearchTerm(s));
};

export { searchHighlights, filterProjects };
