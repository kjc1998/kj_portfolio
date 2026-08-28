import AppHubLogo from '@/public/projects/app-hub.jpeg';
import { buildProject } from '@/src/features/project/factory';
import Link from 'next/link';
import TextComponent from '../layouts/TextComponent';

const AppHubLayout = () => {
	enum Pages {
		JENKINS,
		ARGOCD,
		KEYCLOAK,
		TRAEFIK,
	}

	const getPageLink = (page: Pages, title: string) => {
		const pageLinks: Record<Pages, string> = {
			[Pages.JENKINS]: 'https://kj1chow.zapto.org/admin/jenkins',
			[Pages.ARGOCD]: 'https://kj1chow.zapto.org/admin/argocd',
			[Pages.KEYCLOAK]: 'https://kj1chow.zapto.org/keycloak/admin/kj-server/console',
			[Pages.TRAEFIK]: 'https://kj1chow.zapto.org/admin/traefik/dashboard',
		};
		return (
			<Link href={pageLinks[page]} className="items-center px-1 bg-gray-700 rounded-full transition-all duration-200 hover:bg-gray-400 hover:shadow-md active:scale-95">
				{title}
			</Link>
		);
	};

	const summary = (
		<>
			A single-page application for discovering and launching services deployed in the cluster. <br />
			The platform runs on Kubernetes with a GitOps workflow managed by {getPageLink(Pages.ARGOCD, 'ArgoCD')}, and uses {getPageLink(Pages.KEYCLOAK, 'Keycloak')} for OIDC &
			Oauth2 proxy authentication.
			<br />
			{getPageLink(Pages.TRAEFIK, 'Traefik')} publishes application endpoints through the Kubernetes Gateway API, while {getPageLink(Pages.JENKINS, 'Jenkins')} automates the
			delivery pipeline.
		</>
	);
	return (
		<>
			<TextComponent content={summary} />
		</>
	);
};

const AppHub = buildProject(
	'AppHub',
	new Date(2025, 6, 1),
	null,
	'https://kj1chow.zapto.org/apps/',
	AppHubLogo,
	'ongoing',
	'Cluster app page',
	['kubernetes', 'argocd', 'oidc', 'keycloak', 'jenkins', 'nginx', 'gitops'],
	<AppHubLayout />,
);

export default AppHub;
