import { motion } from "framer-motion";
import { getTheHighlitedWord } from "../utils/getTheHighlitedWord";

interface AnimatedHeaderProps {
	header: string;
	highlight?: string;
	subtext: string;
}

const AnimatedHeader = ({
	header,
	highlight,
	subtext,
}: AnimatedHeaderProps) => {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.3,
			},
		},
	};
	return (
		<motion.div
			variants={containerVariants}
			initial='hidden'
			whileInView='visible'
			viewport={{ amount: 0.2, once: true }}
			className='container mx-auto px-4 mb-10'>
			<motion.h2
				variants={{
					hidden: { opacity: 0, y: 30 },
					visible: {
						opacity: 1,
						y: 0,
						transition: { duration: 0.6, ease: "easeOut" },
					},
				}}
				className='text-3xl md:text-5xl font-bold text-center text-white mb-4'>
				{getTheHighlitedWord(header, highlight || "")}
			</motion.h2>

			<motion.p
				variants={{
					hidden: { opacity: 0, y: 30 },
					visible: {
						opacity: 1,
						y: 0,
						transition: { duration: 0.6, ease: "easeOut" },
					},
				}}
				className='text-slate-400 text-center max-w-2xl mx-auto'>
				{subtext}
			</motion.p>
		</motion.div>
	);
};

export default AnimatedHeader;
