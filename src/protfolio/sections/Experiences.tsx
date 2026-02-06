import data from "../data/experiences";
import { Timeline } from "@/components/ui/timeline";
import { AnimatedHeader } from "../components";

const ExperiencesSection = () => {
	return (
		<section
			id='experience'
			className='pt-40 w-full relative overflow-hidden bg-black/20'>
			<AnimatedHeader
				header='My Experience'
				subtext='A timeline of my professional journey, internships, and volunteering activities.'
				highlight='Experience'
			/>

			<Timeline data={data} />
		</section>
	);
};

export default ExperiencesSection;
