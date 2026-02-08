import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
} from "@/components/ui/sheet";
import { useState } from "react";

export default function Preloader() {
	const [isOpen, setIsOpen] = useState(true);

	const handleClose = () => setIsOpen(false);
	const handleVideoEnd = () => setTimeout(handleClose, 500);

	return (
		<Sheet defaultOpen={true} open={isOpen} onOpenChange={handleClose}>
			<SheetContent
				side='top'
				aria-label='Loading'
				className='z-1000 flex h-screen w-screen items-center justify-center border-none bg-black p-0 overflow-hidden [&>button:not(.skip)]:hidden'>
				<SheetHeader className='hidden'>
					<SheetTitle>Loading</SheetTitle>
					<SheetDescription>Eman's Portfolio is loading...</SheetDescription>
				</SheetHeader>

				{/* Decorative Background */}
				<div className='absolute top-0 z-0 w-full flex-1 scale-y-125 items-center justify-center isolate hidden md:flex'>
					<div
						style={{
							backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
						}}
						className='absolute inset-auto right-1/2 h-56 overflow-visible w-120 bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top] opacity-100'>
						<div className='absolute w-screen left-0 bg-black h-40 bottom-0 z-20 mask-[linear-gradient(to_top,white,transparent)]' />
						<div className='absolute w-40 h-screen left-0 bg-black bottom-0 z-20 mask-[linear-gradient(to_right,white,transparent)]' />
					</div>

					<div
						style={{
							backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
						}}
						className='absolute inset-auto left-1/2 h-56 w-120 bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top] opacity-100'>
						<div className='absolute w-40 h-screen right-0 bg-black bottom-0 z-20 mask-[linear-gradient(to_left,white,transparent)]' />
						<div className='absolute w-screen right-0 bg-black h-40 bottom-0 z-20 mask-[linear-gradient(to_top,white,transparent)]' />
					</div>

					<div className='absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-black blur-2xl'></div>
					<div className='absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md'></div>
					<div className='absolute inset-auto z-50 h-36 w-md -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl'></div>
					<div className='absolute inset-auto z-30 h-36 w-64 -translate-y-24 rounded-full bg-cyan-400 blur-2xl'></div>
					<div className='absolute inset-auto z-50 h-0.5 w-120 -top-50 md:top-12 -translate-y-28 bg-cyan-400'></div>
				</div>

				{/* SKIP BUTTON */}
				<Button
					onClick={handleClose}
					variant='ghost'
					className='skip fixed bottom-8 right-8 z-1002 font-script border-none bg-linear-to-br from-white to-cyan-400 bg-clip-text text-transparent text-center font-bold tracking-tight 
            text-[clamp(1rem,1vw,1.5rem)] leading-tight outline-none ring-0 focus-visible:ring-0 hover:bg-transparent shadow-none'>
					Skip intro
				</Button>

				{/* VIDEO */}
				<div className='relative z-1001 flex flex-col items-center mt-12.5 md:mt-0'>
					<video
						src='/loader.webm'
						autoPlay
						muted
						playsInline
						preload='auto'
						// @ts-expect-error fetchPriority is a valid attribute but missing in React types
						fetchPriority='high'
						onEnded={handleVideoEnd}
						className='w-30 sm:w-60 h-auto object-contain'
					/>
				</div>
			</SheetContent>
		</Sheet>
	);
}
