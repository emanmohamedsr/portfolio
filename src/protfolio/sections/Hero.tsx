import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { ChevronDown } from "lucide-react";

export default function Hero() {
	return (
		<div className='h-100vh'>
			<LampContainer>
				<motion.div
					initial={{ opacity: 0.5, y: 100 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{
						delay: 0.3,
						duration: 0.8,
						ease: "easeInOut",
					}}
					className='flex flex-col items-center'>
					<h1
						className='font-script pt-20 md:pt-0 mt-20 md:mt-0 bg-linear-to-br from-white to-cyan-400 bg-clip-text text-transparent text-center font-bold tracking-tight 
            text-[clamp(2.5rem,6vw,4.5rem)] leading-tight'>
						Building Exceptional <br /> Digital Experiences
					</h1>
					<p
						className='mt-4 font-normal text-slate-300 max-w-lg mx-auto text-center
            text-[clamp(1rem,2vw,1.5rem)]'>
						Hi, I'm
						<span className='font-script text-cyan-400 font-semibold'>
							{" "}
							Eman Soliman
						</span>
						. A Frontend Engineer <br /> focused on creating intuitive web
						applications using React and Next.js.
					</p>

					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 1.5, duration: 1 }}
						className='hidden md:block mt-16 sm:mt-20'>
						<a
							href='#about'
							aria-label='Scroll down'
							className='cursor-pointer'>
							<motion.div
								animate={{ y: [0, 10, 0] }}
								transition={{
									duration: 1.5,
									repeat: Infinity,
									repeatType: "loop",
									ease: "easeInOut",
								}}>
								<ChevronDown className='w-10 h-10 text-cyan-400/80 hover:text-cyan-400 cursor-pointer transition-colors' />
							</motion.div>
						</a>
					</motion.div>
				</motion.div>
			</LampContainer>
		</div>
	);
}
