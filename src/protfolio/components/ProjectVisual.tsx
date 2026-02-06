import { Github, ExternalLink, Code2 } from "lucide-react";

const ProjectVisual = ({
	src,
	alt,
	stack,
	repoUrl,
	demoUrl,
}: {
	src: string;
	alt: string;
	stack: string[];
	repoUrl?: string;
	demoUrl?: string;
}) => {
	return (
		<div className='relative flex h-full w-full items-center justify-center overflow-hidden bg-slate-900 rounded-md border border-white/10 group'>
			<img
				src={src}
				alt={alt}
				className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-40'
			/>

			{/* Overlay Content (Links & Tech) */}
			<div className='absolute inset-0 flex flex-col items-center justify-center gap-6 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
				{/* Action Buttons */}
				<div className='flex items-center gap-4'>
					{repoUrl && (
						<a
							href={repoUrl}
							target='_blank'
							rel='noopener noreferrer'
							className='flex items-center gap-2 rounded-full bg-slate-800 px-4 py-2 text-sm font-medium text-white hover:bg-cyan-500 transition-colors border border-white/10'>
							<Github size={16} />
							<span>Code</span>
						</a>
					)}
					{demoUrl && (
						<a
							href={demoUrl}
							target='_blank'
							rel='noopener noreferrer'
							className='flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-900 hover:bg-cyan-400 transition-colors'>
							<ExternalLink size={16} />
							<span>Live Demo</span>
						</a>
					)}
				</div>

				{/* Tech Stack Tags */}
				<div className='flex flex-wrap justify-center gap-2'>
					{stack.map((tech, idx) => (
						<span
							key={idx}
							className='rounded-md bg-slate-950/80 px-2 py-1 text-[10px] font-mono text-cyan-300 backdrop-blur-sm border border-cyan-500/20'>
							{tech}
						</span>
					))}
				</div>
			</div>

			{/* Default View (Always visible hint) */}
			<div className='absolute bottom-4 right-4 group-hover:opacity-0 transition-opacity'>
				<Code2 className='text-white/20' size={24} />
			</div>
		</div>
	);
};

export default ProjectVisual;
