import { lazy, Suspense } from "react";
import { Navbar } from "@/shared/layout/Navbar";
import { HeroSection } from "./sections";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { LoaderOne } from "@/components/ui/loader";

const About = lazy(() => import("./sections/About"));
const Projects = lazy(() => import("./sections/Projects"));
const Skills = lazy(() => import("./sections/Skills"));
const Experiences = lazy(() => import("./sections/Experiences"));
const Education = lazy(() => import("./sections/Education"));
const Contact = lazy(() => import("./sections/Contact"));

const PortfolioPage = () => {
	return (
		<main className='bg-slate-950 relative w-full overflow-hidden'>
			<div className='relative z-10'>
				<Navbar />
				<HeroSection />
				<BackgroundBeams />
			</div>

			<div className='relative z-10 flex flex-col gap-10 md:gap-20'>
				<Suspense fallback={<SectionLoader />}>
					<About />
				</Suspense>

				<Suspense fallback={<SectionLoader />}>
					<Projects />
				</Suspense>

				<Suspense fallback={<SectionLoader />}>
					<Skills />
				</Suspense>

				<Suspense fallback={<SectionLoader />}>
					<Experiences />
				</Suspense>

				<Suspense fallback={<SectionLoader />}>
					<Education />
				</Suspense>

				<Suspense fallback={<SectionLoader />}>
					<Contact />
				</Suspense>
			</div>
		</main>
	);
};

const SectionLoader = () => (
	<div className='flex h-[50vh] w-full items-center justify-center'>
		<LoaderOne />
	</div>
);

export default PortfolioPage;
