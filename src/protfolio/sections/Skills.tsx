import { motion } from "framer-motion";
import skillsData from "../data/skills";

const Skills = () => {
	return (
		<section id='skills' className='py-20 relative overflow-hidden'>
			{/* Background Decoration */}
			<div className='absolute top-1/4 -left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none' />

			<div className='container mx-auto px-6 relative z-10'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className='text-center mb-16'>
					<h2 className='text-3xl md:text-5xl font-bold text-white mb-4'>
						My Tech <span className='text-cyan-400'>Stack</span>
					</h2>
					<p className='text-slate-400 max-w-2xl mx-auto'>
						A curated list of technologies I use to build performant and
						scalable applications.
					</p>
				</motion.div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
					{skillsData.map((category, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							whileHover={{ y: -5 }}
							className='group relative p-6 rounded-2xl bg-slate-900/50 border border-white/5 hover:border-cyan-500/30 transition-all duration-300'>
							{/* Glow Effect on Hover */}
							<div className='absolute inset-0 bg-linear-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl' />

							<div className='relative z-10'>
								{/* Header */}
								<div className='flex items-center gap-3 mb-6 border-b border-white/5 pb-4'>
									<div className='p-2 rounded-lg bg-slate-800 group-hover:bg-slate-700 transition-colors'>
										{category.icon}
									</div>
									<h3 className='text-lg font-bold text-slate-200 group-hover:text-white transition-colors'>
										{category.category}
									</h3>
								</div>

								{/* Skills Tags */}
								<div className='flex flex-wrap gap-2'>
									{category.skills.map((skill, idx) => (
										<span
											key={idx}
											className='px-3 py-1 text-xs md:text-sm font-medium rounded-full bg-slate-800/80 text-slate-400 border border-white/5 group-hover:border-white/10 group-hover:text-cyan-200 transition-all cursor-default hover:bg-cyan-500/10'>
											{skill}
										</span>
									))}
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};
export default Skills;
