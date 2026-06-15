'use-client';

import { StaticImageData } from 'next/image';
import React from 'react';
import { HighlightI, ProjectHighlightI, ProjectI } from '../../models/project';

const buildProject = (
	name: string,
	startDate: Date,
	endDate: Date | null,
	link: string | null,
	image: StaticImageData,
	status: 'ongoing' | 'done',
	description: string,
	tags: string[],
	others: React.JSX.Element | null,
): ProjectI => {
	return {
		name: name,
		startDate: startDate,
		endDate: endDate,
		link: link,
		image: image,
		status: status,
		description: description,
		tags: tags,
		others: others,
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
