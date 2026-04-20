'use client';
import type { ISourceOptions } from '@tsparticles/engine';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { useEffect, useState } from 'react';
import { Section } from '../models/enums';

const HeroBackground = () => {
	const [init, setInit] = useState(false);

	useEffect(() => {
		initParticlesEngine(async (engine) => {
			await loadSlim(engine);
		}).then(() => {
			setInit(true);
		});
	}, []);

	const options: ISourceOptions = {
		fpsLimit: 120,
		interactivity: {
			events: {
				onClick: { enable: true, mode: 'push' },
				onHover: { enable: true, mode: 'repulse' },
			},
			modes: {
				push: { quantity: 4 },
				repulse: { distance: 100, duration: 2 },
			},
		},
		particles: {
			color: {
				value: '#ffffff',
			},
			links: {
				color: '#ffffff',
				distance: 150,
				enable: true,
				width: 2,
			},
			move: {
				enable: true,
				speed: 1,
			},
			number: {
				value: 40,
				limit: {
					value: 60,
				},
			},
			shape: {
				type: 'circle',
			},
			size: {
				value: {
					min: 1,
					max: 5,
				},
			},
		},
		fullScreen: false,
		detectRetina: false,
		pauseOnOutsideViewport: true,
		responsive: [
			{
				maxWidth: 768,
				options: {
					particles: {
						links: {
							distance: 75,
							width: 0.5,
						},
						size: {
							value: {
								min: 0.5,
								max: 2,
							},
						},
						move: {
							speed: 0.5,
						},
						number: {
							value: 25,
							limit: {
								value: 40,
							},
						},
					},
				},
			},
		],
	};

	return init ? (
		<div
			className="absolute inset-0"
			style={{
				maskImage: 'radial-gradient(ellipse at center, transparent 30%, black 60%, transparent 90%)',
				WebkitMaskImage: 'radial-gradient(ellipse at center, transparent 30%, black 60%, transparent 90%)',
			}}
		>
			<Particles className="h-full" options={options} />
		</div>
	) : (
		<></>
	);
};

const HeroSection = () => {
	return (
		<section id={Section.Profile} className="relative min-h-[40vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden py-16 sm:py-20">
			<HeroBackground />
			<div className="absolute inset-0">
				<div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent"></div>
				<div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent"></div>
			</div>

			<div className="container mx-auto px-4">
				<div className="text-center mb-4 md:mb-8">
					<h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4 md:mb-16">
						<span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 text-white/40 bg-clip-text bg-[size:200%] animate-gradient">Kai Jie Chow</span>
					</h1>
					<div className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed px-8 flex justify-center">
						<div className="flex-1 text-blue-400">Python Engineer</div>
						<div className="flex-1 text-purple-400">Web Developer</div>
						<div className="flex-1 text-blue-400">DevOps Engineer</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
