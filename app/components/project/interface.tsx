'use-client';

import { StaticImageData } from 'next/image';

interface ProjectI {
	id: number;
	name: string;
	link: string | null;
	image: StaticImageData;
	status: 'ongoing' | 'done';
	description: string;
	tags: string[];
}

interface HighlightI {
	start: number;
	end: number;
}

interface ProjectHighlightI {
	name: HighlightI[];
	status: HighlightI[];
	description: HighlightI[];
	tags: HighlightI[][];
}

export type { ProjectI, HighlightI, ProjectHighlightI };
