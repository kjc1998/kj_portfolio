'use-client';

import ProjectI from './ProjectI';

const getProjectKeywords = (project: ProjectI) => {
	const keywords = [project.name, project.status, ...project.description.split(' '), ...project.tags];
	const sortedKeywords = [...new Set(keywords)].sort();
	return sortedKeywords.map((i) => i.trim().toLowerCase()).join(' ');
};

export default getProjectKeywords;
