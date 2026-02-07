import { cn } from "@/lib/utils";

const SocialButton = ({ href, icon, label, colorClass }: any) => (
	<a
		href={href}
		target='_blank'
		rel='noopener noreferrer'
		className={cn(
			"p-3 rounded-full border border-transparent transition-all duration-300 text-slate-400 bg-slate-800/30",
			colorClass,
		)}
		title={label}>
		{icon}
	</a>
);
export default SocialButton;
