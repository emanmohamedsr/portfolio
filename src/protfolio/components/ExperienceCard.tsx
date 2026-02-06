import { LinkPreview } from "@/components/ui/link-preview";
import { Calendar, MapPin, Briefcase } from "lucide-react";

const ExperienceCard = ({
	role,
	company,
	date,
	location,
	type,
	description,
	skills,
	logo,
	certificateUrl,
}: {
	role: string;
	company: string;
	date: string;
	location: string;
	type: string;
	description: string[];
	skills?: string[];
	logo?: string;
	certificateUrl?: string;
}) => {
	return (
		<div className='flex flex-col gap-4 p-4 rounded-xl border border-white/10 bg-slate-900/50 hover:bg-slate-900/80 transition-colors duration-300'>
			{/* Header: Logo & Titles */}
			<div className='flex flex-col sm:flex-row items-start gap-4'>
				{logo && (
					<LinkPreview url={certificateUrl || "#"}>
						<div className='w-12 h-12 md:w-16 md:h-16 shrink-0 rounded-lg bg-white/5 p-2 border border-white/10 flex items-center justify-center overflow-hidden'>
							<img
								src={logo}
								alt={company}
								className='w-full h-full object-contain'
							/>
						</div>
					</LinkPreview>
				)}
				<div className='flex-1'>
					<h3 className='text-lg md:text-xl font-bold text-white'>{role}</h3>
					<p className='text-cyan-400 font-medium text-sm md:text-base'>
						{company}
					</p>
				</div>
			</div>

			{/* Meta Data: Date, Location, Type */}
			<div className='flex flex-wrap gap-3 text-xs md:text-sm text-slate-400 border-y border-white/5 py-3'>
				<div className='flex items-center gap-1.5'>
					<Calendar className='w-4 h-4 text-slate-500' />
					<span>{date}</span>
				</div>
				<div className='flex items-center gap-1.5'>
					<MapPin className='w-4 h-4 text-slate-500' />
					<span>{location}</span>
				</div>
				<div className='flex items-center gap-1.5'>
					<Briefcase className='w-4 h-4 text-slate-500' />
					<span className='capitalize'>{type}</span>
				</div>
			</div>

			{/* Description List */}
			<ul className='list-disc list-outside ml-4 space-y-2 text-slate-300 text-sm md:text-base leading-relaxed'>
				{description.map((item, index) => (
					<li key={index} className='pl-1 marker:text-cyan-500'>
						{item}
					</li>
				))}
			</ul>

			{/* Skills / Tech Stack Tags */}
			{skills && (
				<div className='flex flex-wrap gap-2 mt-2'>
					{skills.map((skill, idx) => (
						<span
							key={idx}
							className='px-2 py-1 text-[10px] md:text-xs font-medium rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20'>
							{skill}
						</span>
					))}
				</div>
			)}
		</div>
	);
};
export default ExperienceCard;
