import { Navbar } from "@/shared/layout/Navbar";
import {
	AboutSection,
	EducationSection,
	ExperiencesSection,
	HeroSection,
	SkillsSection,
	WorkSection,
} from "./sections";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { ContactSection } from "./sections";

const PortfilioPage = () => {
	return (
		<div>
			<div>
				<Navbar />
				<HeroSection />
				<BackgroundBeams />
			</div>
			<AboutSection />
			<EducationSection />
			<ExperiencesSection />
			<WorkSection />
			<SkillsSection />
			<ContactSection />
		</div>
	);
};

export default PortfilioPage;
