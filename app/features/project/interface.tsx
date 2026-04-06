'use-client';

import { StaticImageData } from 'next/image';
import React from 'react';

interface ProjectI {
	name: string;
	startDate: Date;
	endDate: Date | null;
	link: string | null;
	image: StaticImageData;
	status: 'ongoing' | 'done';
	description: string;
	tags: string[];
	others: React.JSX.Element[];
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

export type { HighlightI, ProjectHighlightI, ProjectI };
