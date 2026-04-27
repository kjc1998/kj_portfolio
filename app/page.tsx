'use client';

import React, { useState } from 'react';
import ContactSection from './components/ContactSection';
import HeaderSection from './components/HeaderSection';
import HeroSection from './components/HeroSection';
import ProjectSection from './components/project/ProjectSection';
import SkillsSection from './components/SkillsSection';
import WorkflowSection from './components/WorkflowSection';

const EasterEggLayout = (props: { children: React.ReactNode[] }) => {
	const [isUnlocked, setIsUnlocked] = useState(false);
	return (
		<>
			<HeaderSection isUnlocked={isUnlocked} />
			{props.children}
			<ContactSection unlock={[isUnlocked, setIsUnlocked]} />
		</>
	);
};

export default function MobileDevPortfolio() {
	return (
		<main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white overflow-x-clip">
			<EasterEggLayout>
				<HeroSection />
				<SkillsSection />
				<ProjectSection />
				<WorkflowSection />
			</EasterEggLayout>
		</main>
	);
}
