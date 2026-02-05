import { Navbar } from "@/shared/layout/Navbar";
import { HeroSection } from "./components";
import { BackgroundBeams } from "@/components/ui/background-beams";

const PortfilioPage = () => {
	return (
		<div>
			<Navbar />
			<HeroSection />
			<BackgroundBeams />
		</div>
	);
};

export default PortfilioPage;
