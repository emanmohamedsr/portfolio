import { Navbar } from "@/shared/layout/Navbar";
import {
	AboutSection,
	EducationSection,
	ExperiencesSection,
	HeroSection,
	SkillsSection,
	ProjectsSection,
	ContactSection,
} from "./sections";
import { BackgroundBeams } from "@/components/ui/background-beams";

const PortfilioPage = () => {
	return (
		<div>
			<div>
				<Navbar />
				<HeroSection />
				<BackgroundBeams />
			</div>
			<AboutSection />
			<ProjectsSection />
			<SkillsSection />
			<ExperiencesSection />
			<EducationSection />
			<ContactSection />
		</div>
	);
};

export default PortfilioPage;
