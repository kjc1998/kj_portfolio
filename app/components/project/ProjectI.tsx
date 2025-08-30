'use-client';

import { StaticImageData } from 'next/image';

export default interface ProjectI {
	id: number;
	name: string;
	link: string | null;
	image: StaticImageData;
	status: 'ongoing' | 'done';
	description: string;
	tags: string[];
}
