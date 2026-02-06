import { CometCard } from "@/components/ui/comet-card";
import { motion } from "framer-motion";

const staggerContainer = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
		},
	},
};

const AboutSection = () => {
	return (
		<section id='about' className='relative py-20 md:py-32 overflow-hidden'>
			<div className='container mx-auto px-6'>
				<motion.div
					variants={staggerContainer}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.3 }}
					className='flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-20'>
					{/* --- 1. Text Section --- */}
					<motion.div
						variants={{
							hidden: { opacity: 0 },
							visible: {
								opacity: 1,
								transition: {
									staggerChildren: 0.2,
								},
							},
						}}
						className='flex-1 text-center md:text-left space-y-6'>
						<h2 className='text-3xl md:text-5xl font-bold text-white'>
							Behind the <span className='text-cyan-400'>Code</span>
						</h2>

						<p className='text-slate-300 text-lg leading-relaxed'>
							I'm <span className='text-white font-medium'>Eman Soliman</span>,
							a passionate Frontend Engineer. My journey involves translating
							creative designs into interactive, high-performance web
							applications.
						</p>

						<p className='text-slate-400 text-base leading-relaxed'>
							Specializing in <span className='text-cyan-400'>React</span> and{" "}
							<span className='text-cyan-400'>Next.js</span>, I focus on
							building intuitive user interfaces that not only look good but
							feel amazing to use. I believe in clean code, accessibility, and
							the magic of small details.
						</p>

						<div className='flex justify-center md:justify-start gap-8 pt-4'>
							<div>
								<h4 className='text-2xl font-bold text-white'>2+</h4>
								<p className='text-sm text-slate-500'>Years Exp.</p>
							</div>
							<div>
								<h4 className='text-2xl font-bold text-white'>10+</h4>
								<p className='text-sm text-slate-500'>Projects</p>
							</div>
						</div>
					</motion.div>

					{/* --- 2. Card Section --- */}
					<motion.div
						variants={{
							hidden: { opacity: 0 },
							visible: {
								opacity: 1,
								transition: {
									staggerChildren: 0.2,
								},
							},
						}}
						className='flex-1 flex justify-center md:justify-end w-full'>
						<CometCard>
							<button
								type='button'
								className='w-72 md:w-80 flex cursor-pointer flex-col items-stretch rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur-md p-4 shadow-2xl transition-transform duration-300 hover:scale-[1.02]'
								aria-label='View About'
								style={{
									transformStyle: "preserve-3d",
									transform: "none",
									opacity: 1,
								}}>
								<div className='flex-1 overflow-hidden rounded-2xl'>
									<div className='relative aspect-3/4 w-full bg-linear-to-br from-slate-800 to-black'>
										<img
											loading='lazy'
											className='absolute inset-0 h-full w-full object-contain p-4'
											alt='Eman Soliman Logo'
											src='/logo.png'
											style={{
												filter:
													"drop-shadow(0px 0px 10px rgba(34, 211, 238, 0.3))",
											}}
										/>
									</div>
								</div>

								<div className='mt-4 flex shrink-0 items-center justify-between font-mono text-white'>
									<div className='flex flex-col items-start'>
										<span className='text-sm font-bold tracking-wide'>
											Eman Soliman
										</span>
										<span className='text-[10px] text-cyan-400 uppercase tracking-widest'>
											Frontend Dev
										</span>
									</div>
									<div className='h-8 w-8 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/30'>
										<span className='text-xs text-cyan-400'>ES</span>
									</div>
								</div>
							</button>
						</CometCard>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default AboutSection;
