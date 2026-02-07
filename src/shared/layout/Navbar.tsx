"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { images } from "../assets";
import { Menu, Eye, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navLinks = [
	{ name: "About", href: "#about" },
	{ name: "Projects", href: "#projects" },
	{ name: "Tech Stack", href: "#skills" },
	{ name: "Experience", href: "#experience" },
	{ name: "Education", href: "#education" },
	{ name: "Contact", href: "#contact" },
];

const ResumeActionMenu = () => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button className='cursor-pointer bg-slate-900 text-white border border-slate-800 hover:bg-slate-800 hover:text-cyan-400 transition-colors px-6 rounded-full'>
					Resume
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				align='end'
				className='w-48 bg-slate-900 border-white/10 text-slate-200 z-200'>
				<DropdownMenuItem
					asChild
					className='focus:bg-cyan-500/10 focus:text-cyan-400 cursor-pointer'>
					<a
						href='/resume.pdf'
						target='_blank'
						rel='noopener noreferrer'
						className='flex items-center gap-2'>
						<Eye size={16} />
						<span>Preview in Browser</span>
					</a>
				</DropdownMenuItem>
				<DropdownMenuItem
					asChild
					className='focus:bg-cyan-500/10 focus:text-cyan-400 cursor-pointer'>
					<a
						href='/resume.pdf'
						download='Eman_Soliman_CV.pdf'
						className='flex items-center gap-2'>
						<Download size={16} />
						<span>Download PDF</span>
					</a>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export const Navbar = () => {
	const [scrolled, setScrolled] = useState(false);
	const [sheetOpen, setSheetOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<motion.nav
			style={{ position: "fixed" }}
			initial={{ y: -100, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.8, delay: 0.5 }}
			className={cn(
				"top-0 w-full z-100 transition-all duration-300 ease-in-out px-6 py-4",
				scrolled ?
					"bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50 shadow-lg"
				:	"bg-transparent border-transparent",
			)}>
			<div className='max-w-7xl mx-auto flex justify-between items-center'>
				{/* Logo */}
				<a href='#' className='flex items-center justify-start'>
					<img
						src={images.logo}
						alt='Logo'
						className='w-10 h-10 xs:w-12 xs:h-12 md:w-18 md:h-18 object-contain'
					/>
				</a>

				{/* --- Desktop Menu --- */}
				<div className='hidden lg:flex items-center gap-8'>
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
					<ResumeActionMenu />
				</div>

				{/* --- Mobile Menu  --- */}
				<div className='lg:hidden'>
					<Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
						<SheetTrigger asChild>
							<button
								aria-label='Open navigation menu'
								className='text-slate-300 hover:text-cyan-400 transition p-2'>
								<Menu className='w-8 h-8' />
							</button>
						</SheetTrigger>

						<SheetContent
							side='right'
							className='
                z-150               
                w-[80vw]              
                max-w-87.5      
                bg-slate-950/95      
                backdrop-blur-xl 
                border-l border-white/10 
                p-6                
                pt-12          
              '>
							<SheetHeader className='mb-8 flex justify-center items-center gap-4'>
								<SheetTitle>
									<img
										src={images.logo}
										alt='Logo'
										className='w-8 h-8 object-contain'
									/>
								</SheetTitle>
								<SheetDescription className='text-left text-sm text-slate-500'>
									Explore the sections and options
								</SheetDescription>
							</SheetHeader>

							<div className='flex flex-col h-full gap-8'>
								{/* Links */}
								<ul className='flex flex-col gap-6'>
									{navLinks.map((link, index) => (
										<li key={index}>
											<a
												href={link.href}
												onClick={() => setSheetOpen(false)} // يقفل المنيو لما تضغطي
												className='text-lg font-medium text-slate-300 hover:text-cyan-400 transition-colors flex items-center gap-4 group'>
												<span className='text-cyan-500/50 text-sm font-mono group-hover:text-cyan-400 transition-colors'>
													0{index + 1}.
												</span>
												{link.name}
											</a>
										</li>
									))}
								</ul>

								{/* Resume Options for Mobile */}
								<div className='mt-auto mb-6 border-t border-white/10 pt-6'>
									<p className='text-slate-500 text-xs mb-4 uppercase tracking-widest font-bold'>
										Resume Options
									</p>
									<div className='flex flex-col gap-3'>
										<a
											href='/resume.pdf'
											target='_blank'
											onClick={() => setSheetOpen(false)}
											className='flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-slate-300 hover:bg-slate-800 hover:text-cyan-400 transition-all active:scale-95'>
											<Eye size={18} className='text-cyan-500' />
											<span className='text-sm font-medium'>Preview PDF</span>
										</a>
										<a
											href='/resume.pdf'
											download='Eman_Soliman_CV.pdf'
											onClick={() => setSheetOpen(false)}
											className='flex items-center gap-3 px-4 py-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 hover:bg-cyan-500/20 transition-all active:scale-95'>
											<Download size={18} />
											<span className='text-sm font-medium'>Download File</span>
										</a>
									</div>
								</div>
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</motion.nav>
	);
};
