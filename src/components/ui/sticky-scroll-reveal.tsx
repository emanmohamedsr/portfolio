"use client";
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
	content,
	contentClassName,
}: {
	content: {
		title: string;
		description: string;
		content?: React.ReactNode | any;
	}[];
	contentClassName?: string;
}) => {
	const [activeCard, setActiveCard] = React.useState(0);
	const ref = useRef<any>(null);

	const { scrollYProgress } = useScroll({
		container: ref,
		offset: ["start start", "end start"],
	});

	const cardLength = content.length;

	useMotionValueEvent(scrollYProgress, "change", (latest) => {
		const cardsBreakpoints = content.map((_, index) => index / cardLength);
		const closestBreakpointIndex = cardsBreakpoints.reduce(
			(acc, breakpoint, index) => {
				const distance = Math.abs(latest - breakpoint);
				if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
					return index;
				}
				return acc;
			},
			0,
		);
		setActiveCard(closestBreakpointIndex);
	});

	return (
		<motion.div
			className='relative flex h-[30rem] justify-center space-x-10 overflow-y-auto rounded-md p-10 no-scrollbar'
			ref={ref}>
			<div className='div relative flex items-start px-4'>
				<div className='max-w-2xl'>
					{content.map((item, index) => (
						<div key={item.title + index} className='my-10 lg:my-20'>
							<motion.h2
								initial={{ opacity: 0 }}
								animate={{ opacity: activeCard === index ? 1 : 0.3 }}
								className='text-2xl font-bold text-white'>
								{item.title}
							</motion.h2>
							<motion.p
								initial={{ opacity: 0 }}
								animate={{ opacity: activeCard === index ? 1 : 0.3 }}
								className='text-kg mt-4 lg:mt-10 max-w-sm text-slate-400 leading-relaxed'>
								{item.description}
							</motion.p>

							{/* 👇 التعديل المهم هنا: */}
							{/* ده الجزء الخاص بالموبايل - هيظهر الصورة تحت الكلام مباشرة */}
							<div className='block lg:hidden mt-6 w-full h-60 rounded-xl overflow-hidden border border-white/10 bg-slate-900'>
								{item.content}
							</div>
						</div>
					))}
					<div className='h-40' />
				</div>
			</div>

			{/* ده الجزء الخاص بالديسك توب - هيفضل زي ما هو */}
			<div
				className={cn(
					"sticky top-10 hidden h-60 w-80 overflow-hidden rounded-2xl bg-slate-900 border border-white/10 lg:block",
					contentClassName,
				)}>
				{content[activeCard].content ?? null}
			</div>
		</motion.div>
	);
};
