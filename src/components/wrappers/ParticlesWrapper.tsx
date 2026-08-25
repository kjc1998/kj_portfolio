import { loadSlim } from '@tsparticles/slim';
import { ParticlesProvider } from '@tsparticles/react';
import { Engine } from '@tsparticles/engine/lazy';


export default function ParticlesWrapper({ children }: { children: React.ReactNode }) {
    const init = async (engine: Engine): Promise<void> => {
        await loadSlim(engine);
    };

    return (
        <ParticlesProvider init={init}>
            {children}
        </ParticlesProvider>
    );
}