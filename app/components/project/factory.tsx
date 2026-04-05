'use-client';

import { StaticImageData } from 'next/image';
import { HighlightI, ProjectHighlightI, ProjectI } from './interface';

const buildProject = (name: string, link: string | null, image: StaticImageData, status: 'ongoing' | 'done', description: string, tags: string[]): ProjectI => {
	return {
		name: name,
		link: link,
		image: image,
		status: status,
		description: description,
		tags: tags,
	};
};

const buildHighlight = (start: number, end: number): HighlightI => {
	return { start: start, end: end };
};

const buildProjectHighlight = (name: HighlightI[], status: HighlightI[], description: HighlightI[], tags: HighlightI[][]): ProjectHighlightI => {
	return {
		name: name,
		status: status,
		description: description,
		tags: tags,
	};
};

export { buildHighlight, buildProject, buildProjectHighlight };
