import { useOutsideClick } from "@/hooks/use-outside-click";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useId, useRef, useState } from "react";
import { AnimatedHeader } from "../components";
import { ExternalLink, Github, X } from "lucide-react";
import projects from "../data/projects";

const ProjectsSection = () => {
	const [active, setActive] = useState<(typeof projects)[0] | boolean | null>(
		null,
	);
	const ref = useRef<HTMLDivElement>(null);
	const id = useId();

	// Close on Escape key
	useEffect(() => {
		function onKeyDown(event: KeyboardEvent) {
			if (event.key === "Escape") {
				setActive(false);
			}
		}
		if (active && typeof active === "object") {
			document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
		} else {
			document.body.style.overflow = "auto";
		}
		window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	}, [active]);

	// Close on click outside
	useOutsideClick(ref as React.RefObject<HTMLDivElement>, () =>
		setActive(null),
	);

	return (
		<div id='projects' className='py-20 w-full relative bg-black/20'>
			<AnimatedHeader
				header='My Work'
				subtext='A showcase of my projects and professional work.'
				highlight='Work'
			/>

			{/* --- 1. Overlay (Backdrop) --- */}
			<AnimatePresence>
				{active && typeof active === "object" && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className='fixed inset-0 bg-black/80 backdrop-blur-sm z-110'
					/>
				)}
			</AnimatePresence>

			{/* --- 2. Expanded Card (Modal) --- */}
			<AnimatePresence>
				{active && typeof active === "object" ?
					<div className='fixed inset-0 grid place-items-center z-120 p-4'>
						<motion.button
							key={`button-${active.title}-${id}`}
							layout
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0, transition: { duration: 0.05 } }}
							className='flex absolute top-4 right-4 lg:hidden items-center justify-center bg-white rounded-full h-8 w-8 z-130'
							onClick={() => setActive(null)}>
							<X className='text-black' size={18} />
						</motion.button>

						<motion.div
							layoutId={`card-${active.title}-${id}`}
							ref={ref}
							className='w-full max-w-150 h-fit max-h-[90vh] flex flex-col bg-slate-900 border border-white/10 sm:rounded-3xl overflow-hidden shadow-[0_0_30px_rgba(6,182,212,0.15)]'>
							{/* Image Area */}
							<motion.div
								layoutId={`image-${active.title}-${id}`}
								className='relative h-48 sm:h-64 w-full bg-slate-800'>
								<img
									src={active.src}
									alt={active.title}
									className='w-full h-full object-cover'
								/>
								{/* Gradient Overlay for text readability if needed */}
								<div className='absolute inset-0 bg-linear-to-t from-slate-900 to-transparent opacity-60' />
							</motion.div>

							<div className='p-6 flex flex-col h-full overflow-y-auto custom-scrollbar'>
								<div className='flex justify-between items-start mb-4'>
									<div>
										<motion.h3
											layoutId={`title-${active.title}-${id}`}
											className='font-bold text-white text-2xl flex items-center gap-2'>
											{active.title}
										</motion.h3>
										<motion.p
											layoutId={`subtitle-${active.title}-${id}`}
											className='text-cyan-400 text-sm font-medium'>
											{active.subtitle}
										</motion.p>
									</div>

									{/* Desktop Actions */}
									<div className='hidden md:flex gap-2'>
										<a
											aria-label='Project live demo'
											href={active.demoUrl}
											target='_blank'
											rel='noreferrer'
											className='px-4 py-2 text-sm rounded-full font-bold bg-cyan-500 text-slate-900 hover:bg-cyan-400 transition-colors flex items-center gap-2'>
											<ExternalLink size={16} /> Live Demo
										</a>
										<a
											aria-label='View project code on GitHub'
											href={active.repoUrl}
											target='_blank'
											rel='noreferrer'
											className='px-3 py-2 rounded-full bg-slate-800 text-white border border-white/10 hover:bg-slate-700 transition-colors'>
											<Github size={18} />
										</a>
									</div>
								</div>

								<motion.div
									layout
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									className='text-slate-400 text-sm leading-relaxed'>
									<p className='mb-6'>{active.longDescription}</p>

									{/* Tech Stack Chips */}
									<div className='mb-2 text-xs font-bold text-slate-400 uppercase tracking-wider'>
										Tech Stack
									</div>
									<div className='flex flex-wrap gap-2 mb-8'>
										{active.stack.map((t, i) => (
											<span
												key={i}
												className='px-2 py-1 bg-slate-800 border border-white/5 rounded-md text-xs text-slate-300'>
												{t}
											</span>
										))}
									</div>

									{/* Mobile Actions Footer */}
									<div className='flex md:hidden gap-4 mt-auto'>
										<a
											aria-label='Project live demo'
											href={active.demoUrl}
											target='_blank'
											className='flex-1 bg-cyan-500 text-slate-900 py-3 rounded-xl text-center font-bold text-sm flex items-center justify-center gap-2'>
											<ExternalLink size={16} /> Live Demo
										</a>
										<a
											aria-label='View project code on GitHub'
											href={active.repoUrl}
											target='_blank'
											className='flex-1 bg-slate-800 text-white py-3 rounded-xl text-center font-bold text-sm border border-white/10 flex items-center justify-center gap-2'>
											<Github size={18} /> Code
										</a>
									</div>
								</motion.div>
							</div>
						</motion.div>
					</div>
				:	null}
			</AnimatePresence>

			{/* --- 3. Grid View (Collapsed) --- */}
			<div className='max-w-7xl mx-auto px-6 mt-12'>
				<ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
					{projects.map((project) => (
						<li key={project.title}>
							<motion.div
								layoutId={`card-${project.title}-${id}`}
								onClick={() => setActive(project)}
								className='group p-4 flex flex-col bg-slate-900/40 hover:bg-slate-900/80 border border-white/5 hover:border-cyan-500/30 rounded-3xl cursor-pointer transition-all duration-300'>
								<div className='flex gap-4 flex-col w-full h-full'>
									{/* Thumbnail */}
									<motion.div
										layoutId={`image-${project.title}-${id}`}
										className='w-full h-52 rounded-2xl overflow-hidden relative'>
										<img
											src={project.src}
											alt={project.title}
											className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
										/>
										<div className='absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors' />
									</motion.div>

									<div className='flex flex-col justify-between grow mt-2'>
										<div>
											<div className='flex items-center gap-2 mb-2'>
												{project.icon}
												<motion.h3
													layoutId={`title-${project.title}-${id}`}
													className='font-bold text-slate-100 text-lg group-hover:text-cyan-400 transition-colors'>
													{project.title}
												</motion.h3>
											</div>
											<motion.p
												layoutId={`subtitle-${project.title}-${id}`}
												className='text-slate-400 text-sm line-clamp-2'>
												{project.description}
											</motion.p>
										</div>

										<div className='mt-4 pt-4 border-t border-white/5 flex items-center justify-between'>
											<span className='text-xs text-slate-400'>
												{project.stack.length} Technologies
											</span>
											<span className='text-xs font-bold text-cyan-500 group-hover:underline'>
												View Details &rarr;
											</span>
										</div>
									</div>
								</div>
							</motion.div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default ProjectsSection;
