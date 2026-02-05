import { Navbar } from "@/shared/layout/Navbar";
import { AboutSection, HeroSection } from "./components";
import { BackgroundBeams } from "@/components/ui/background-beams";

const PortfilioPage = () => {
	return (
		<div>
			<Navbar />
			<HeroSection />
			<AboutSection />
			<BackgroundBeams />
		</div>
	);
};

export default PortfilioPage;
