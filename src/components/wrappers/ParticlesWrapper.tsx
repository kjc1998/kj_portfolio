import { Engine } from '@tsparticles/engine/lazy';
import { loadResponsivePlugin } from '@tsparticles/plugin-responsive';
import { ParticlesProvider } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

export default function ParticlesWrapper({ children }: { children: React.ReactNode }) {
	const init = async (engine: Engine): Promise<void> => {
		await loadResponsivePlugin(engine);
		await loadSlim(engine);
	};

	return <ParticlesProvider init={init}>{children}</ParticlesProvider>;
}
