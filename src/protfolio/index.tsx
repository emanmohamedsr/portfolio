import { Navbar } from "@/shared/layout/Navbar";
import { AboutSection, ExperiencesSection, HeroSection } from "./sections";
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
			<ExperiencesSection />
		</div>
	);
};

export default PortfilioPage;
