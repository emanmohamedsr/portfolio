import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { AnimatedHeader } from "../components";
import work from "../data/work";

const workSection = () => {
	return (
		<div
			id='work'
			className='pt-40 w-full relative overflow-hidden bg-black/20'>
			<AnimatedHeader
				header='My Work'
				subtext='A showcase of my projects and professional work.'
				highlight='Work'
			/>
			<div className='w-full py-4'>
				<StickyScroll content={work} />
			</div>
		</div>
	);
};

export default workSection;
