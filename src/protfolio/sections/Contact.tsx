"use client";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { motion } from "framer-motion";
import { Check, Copy, Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";
import { AnimatedHeader, SocialButton } from "../components";

const ContactSection = () => {
	const [copied, setCopied] = useState(false);

	const handleCopy = () => {
		navigator.clipboard.writeText("emanmohamedsr72@gmail.com");
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<section id='contact' className='relative bg-slate-950'>
			<BackgroundBeamsWithCollision className='min-h-60 flex flex-col items-center justify-center'>
				<AnimatedHeader
					header='Get in Touch'
					highlight='Touch'
					subtext='Building the future, one pixel at a time.'
				/>

				<motion.div
					initial={{ scale: 0.9, opacity: 0 }}
					whileInView={{ scale: 1, opacity: 1 }}
					transition={{ type: "spring", stiffness: 100 }}
					className='z-20 w-full max-w-2xl px-4'>
					<div className='relative group rounded-md md:rounded-full border border-white/10 bg-slate-900/40 backdrop-blur-md p-2 flex flex-col md:flex-row items-center gap-2 md:gap-0 overflow-hidden'>
						<div className='absolute inset-0 bg-linear-to-r from-cyan-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none' />

						{/* Email Section (Left Side) */}
						<button
							onClick={handleCopy}
							className='flex-1 w-full md:w-auto flex items-center justify-between md:justify-start gap-4 px-6 py-3  rounded-md md:rounded-full bg-slate-800/50 hover:bg-slate-800 border border-white/5 transition-all group/email relative overflow-hidden'>
							<div className='flex items-center gap-3'>
								<div className='p-2  rounded-md md:rounded-full bg-cyan-500/10 text-cyan-400 group-hover/email:bg-cyan-400 group-hover/email:text-slate-900 transition-colors'>
									<Mail size={18} />
								</div>
								<span className='text-slate-300 text-sm font-mono group-hover/email:text-white transition-colors'>
									<span className='hidden sm:block'>
										emanmohamedsr72@gmail.com
									</span>
									<span className='block sm:hidden'>emanmohamedsr72@...</span>
								</span>
							</div>

							{/* Copy Icon Feedback */}
							<div className='text-slate-500 group-hover/email:text-cyan-400 transition-colors'>
								{copied ?
									<Check size={16} className='text-green-400' />
								:	<Copy size={16} />}
							</div>
						</button>

						{/* Divider (Hidden on Mobile) */}
						<div className='hidden md:block w-px h-8 bg-white/10 mx-2' />

						{/* Social Icons (Right Side) */}
						<div className='flex items-center gap-2 w-full md:w-auto justify-center md:justify-end'>
							<SocialButton
								href='https://www.linkedin.com/in/eman-soliman-33a550329/'
								icon={<Linkedin size={20} />}
								label='LinkedIn'
								colorClass='hover:text-blue-400 hover:bg-blue-500/10 hover:border-blue-500/50'
							/>
							<SocialButton
								href='https://github.com/emanmohamedsr'
								icon={<Github size={20} />}
								label='GitHub'
								colorClass='hover:text-slate-200 hover:bg-slate-700/50 hover:border-slate-500/50'
							/>
						</div>
					</div>
				</motion.div>

				{/* Footer Text */}
				<div className='mt-16 text-slate-600 text-xs z-20'>
					© 2026 Eman Soliman.
				</div>
			</BackgroundBeamsWithCollision>
		</section>
	);
};

export default ContactSection;
