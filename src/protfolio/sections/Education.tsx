import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award, BookOpen } from "lucide-react";
import { images } from "../assets";

const Education = () => {
	return (
		<section id='education' className='py-20 relative'>
			<div className='max-w-4xl mx-auto px-6'>
				<motion.h2
					initial={{ opacity: 0, x: -20 }}
					whileInView={{ opacity: 1, x: 0 }}
					className='text-3xl md:text-4xl font-bold text-white mb-10 flex items-center gap-3'>
					<GraduationCap className='text-cyan-400' size={40} />
					Education
				</motion.h2>

				{/* --- The Tech Card --- */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className='relative group rounded-3xl border border-white/10 bg-slate-900/50 p-8 overflow-hidden'>
					<div className='absolute inset-0 bg-linear-to-br from-cyan-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
					<div className='absolute -right-20 -top-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none' />

					<div className='relative z-10 flex flex-col md:flex-row gap-8 items-start'>
						{/* 1. Logo / Icon Box */}
						<div className='w-16 h-16 rounded-2xl bg-slate-800 border border-white/10 flex items-center justify-center shrink-0'>
							{/* ممكن تحطي لوجو الكلية هنا لو عندك صورة، أو تسيبي الأيقونة دي */}
							<img src={images.university} alt='Zagazig University' />
						</div>

						{/* 2. Content */}
						<div className='flex-1'>
							<div className='flex flex-col md:flex-row md:items-center justify-between mb-2'>
								<h3 className='text-2xl font-bold text-white'>
									Bachelor of Computer Science
								</h3>
								<span className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mt-2 md:mt-0 w-fit'>
									<Calendar size={14} />
									2022 - 2026 (Expected)
								</span>
							</div>

							<h4 className='text-lg text-slate-400 mb-4'>
								Zagazig University, Faculty of Computers & Information
							</h4>

							{/* 3. Stats & Details Grid */}
							<div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-6'>
								{/* GPA Badge */}
								<div className='flex items-center gap-3 p-3 rounded-xl bg-slate-800/50 border border-white/5'>
									<div className='p-2 bg-yellow-500/10 rounded-lg text-yellow-500'>
										<Award size={20} />
									</div>
									<div>
										<p className='text-xs text-slate-500 uppercase font-bold'>
											GPA Score
										</p>
										<p className='text-white font-mono font-bold'>
											3.82{" "}
											<span className='text-xs text-slate-400 font-normal'>
												(Excellent)
											</span>
										</p>
									</div>
								</div>

								{/* Major Badge */}
								<div className='flex items-center gap-3 p-3 rounded-xl bg-slate-800/50 border border-white/5'>
									<div className='p-2 bg-blue-500/10 rounded-lg text-blue-500'>
										<BookOpen size={20} />
									</div>
									<div>
										<p className='text-xs text-slate-500 uppercase font-bold'>
											Major
										</p>
										<p className='text-white font-medium'>Computer Science</p>
									</div>
								</div>
							</div>

							{/* 4. Relevant Coursework (Tags) */}
							<div>
								<p className='text-sm text-slate-500 mb-3 font-medium'>
									Relevant Coursework:
								</p>
								<div className='flex flex-wrap gap-2'>
									{[
										"Data Structures",
										"Algorithms",
										"OOP",
										"Software Engineering",
										"Database Systems",
										"Operating Systems",
										"Image Processing",
										"Embedded Systems",
									].map((course, index) => (
										<span
											key={index}
											className='px-3 py-1 text-xs rounded-full bg-slate-800 text-slate-300 border border-white/5 hover:border-cyan-500/30 hover:text-cyan-400 transition-colors cursor-default'>
											{course}
										</span>
									))}
								</div>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};
export default Education;
