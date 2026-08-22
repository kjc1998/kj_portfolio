import AppHubLogo from '@/public/projects/app-hub.jpeg';
import { buildProject } from '@/src/features/project/factory';

const AppHub = buildProject(
	'AppHub',
	new Date(2026, 8, 1),
	null,
	'https://kj1chow.zapto.org/apps/',
	AppHubLogo,
	'ongoing',
	'Cluster app page',
	['kubernetes', 'traefik', 'argocd', 'postgresql', 'jenkins'],
	null,
);

export default AppHub;
