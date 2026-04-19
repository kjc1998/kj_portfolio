'use client';

import ContactSection from './components/ContactSection';
import DevelopmentProcess from './components/DevelopmentProcess';
import HeaderSection from './components/HeaderSection';
import HeroSection from './components/HeroSection';
import ProjectShowcase from './components/ProjectShowcase';
import SkillsSection from './components/SkillsSection';

export default function MobileDevPortfolio() {
	return (
		<main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white overflow-x-clip">
			<HeaderSection />
			<HeroSection />
			<SkillsSection />
			<ProjectShowcase />
			<DevelopmentProcess />
			<ContactSection />
		</main>
	);
}
