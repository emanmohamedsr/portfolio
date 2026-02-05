import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../lib/utils";
import { images } from "../assets";
import { TextAlignJustify, X } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const navLinks = [
	{ name: "About", href: "#about" },
	{ name: "Experience", href: "#experience" },
	{ name: "Work", href: "#work" },
	{ name: "Contact", href: "#contact" },
];

export const Navbar = () => {
	const [scrolled, setScrolled] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<motion.nav
			initial={{ y: -100, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.8, delay: 0.5 }}
			className={cn(
				"fixed top-0 w-full z-100 transition-all duration-300 ease-in-out px-6 py-4",
				scrolled ?
					"bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50 shadow-lg"
				:	"bg-transparent border-transparent",
			)}>
			<div className='max-w-7xl mx-auto flex justify-between items-center'>
				{/* --- Logo Section --- */}
				<a href='#' className='flex items-center justify-start '>
					<img
						src={images.logo}
						alt='Logo'
						className='w-10 h-10 xs:w-12 xs:h-12 md:w-18 md:h-18 object-contain'
					/>
				</a>

				{/* --- Desktop Menu --- */}
				<div className='hidden md:flex items-center gap-8'>
					<ul className='flex gap-8'>
						{navLinks.map((link, index) => (
							<li key={index}>
								<a
									href={link.href}
									className='relative text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors duration-300'>
									<span className='mr-1 text-cyan-500/80'>0{index + 1}.</span>
									{link.name}
								</a>
							</li>
						))}
					</ul>

					{/* Resume Button */}
					<a
						href='/resume.pdf'
						target='_blank'
						className='px-5 py-2 text-sm font-medium text-cyan-400 border border-cyan-500/30 rounded-md hover:bg-cyan-500/10 transition-all duration-300'>
						Resume
					</a>
				</div>

				{/* --- Mobile Menu Toggle --- */}
				<button
					className='md:hidden text-slate-300 hover:text-cyan-400 transition'
					onClick={() => setIsOpen(!isOpen)}>
					{isOpen ?
						<X className='mr-2' size={23} />
					:	<TextAlignJustify className='mr-4' size={23} />}
				</button>
			</div>

			{/* --- Mobile Menu Dropdown --- */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						className='md:hidden mt-2 rounded-md  bg-slate-950/95 backdrop-blur-xl overflow-hidden'>
						<div className='relative h-full rounded-xl border p-2 md:rounded-3xl md:p-3'>
							<GlowingEffect
								borderWidth={4}
								spread={40}
								glow={true}
								disabled={false}
								proximity={64}
								inactiveZone={0.01}
							/>
							<ul className='relative z-10 flex flex-col items-center gap-6 py-8 border-0.75 h-full justify-between overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]'>
								{navLinks.map((link, index) => (
									<li key={index}>
										<a
											href={link.href}
											onClick={() => setIsOpen(false)}
											className='text-lg text-slate-300 hover:text-cyan-400 transition-colors'>
											<span className='text-cyan-500 mr-2'>0{index + 1}.</span>
											{link.name}
										</a>
									</li>
								))}
								<a
									href='/resume.pdf'
									className='px-8 py-3 text-cyan-400 border border-cyan-500/30 rounded-md hover:bg-cyan-500/10 transition-all'>
									Resume
								</a>
							</ul>
						</div>
						{/* <ul className='relative z-10 flex flex-col items-center gap-6 py-8'>
							{navLinks.map((link, index) => (
								<li key={index}>
									<a
										href={link.href}
										onClick={() => setIsOpen(false)}
										className='text-lg text-slate-300 hover:text-cyan-400 transition-colors'>
										<span className='text-cyan-500 mr-2'>0{index + 1}.</span>
										{link.name}
									</a>
								</li>
							))}
							<a
								href='/resume.pdf'
								className='px-8 py-3 text-cyan-400 border border-cyan-500/30 rounded-md hover:bg-cyan-500/10 transition-all'>
								Resume
							</a>
						</ul> */}
					</motion.div>
				)}
			</AnimatePresence>
		</motion.nav>
	);
};
