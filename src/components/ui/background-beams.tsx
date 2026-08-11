"use client";
import React from "react";
import { cn } from "../../lib/utils";

const BEAMS = [
	{ left: "3%", width: "1px", height: "9rem", duration: 4.5, delay: 0, opacity: 0.5 },
	{ left: "12%", width: "2px", height: "12rem", duration: 6, delay: 1.2, opacity: 0.35 },
	{ left: "20%", width: "1px", height: "8rem", duration: 3.8, delay: 0.6, opacity: 0.45 },
	{ left: "28%", width: "3px", height: "15rem", duration: 7, delay: 2, opacity: 0.3 },
	{ left: "37%", width: "1px", height: "10rem", duration: 5, delay: 3, opacity: 0.5 },
	{ left: "46%", width: "2px", height: "11rem", duration: 4.2, delay: 1.5, opacity: 0.4 },
	{ left: "55%", width: "1px", height: "14rem", duration: 6.5, delay: 0.3, opacity: 0.35 },
	{ left: "64%", width: "3px", height: "9rem", duration: 4, delay: 2.5, opacity: 0.3 },
	{ left: "72%", width: "1px", height: "12rem", duration: 5.5, delay: 4, opacity: 0.45 },
	{ left: "81%", width: "2px", height: "10rem", duration: 4.8, delay: 1.8, opacity: 0.4 },
	{ left: "90%", width: "1px", height: "13rem", duration: 6, delay: 3.5, opacity: 0.35 },
	{ left: "97%", width: "2px", height: "8rem", duration: 3.6, delay: 0.9, opacity: 0.4 },
];

export const BackgroundBeams = React.memo(
	({ className }: { className?: string }) => {
		return (
			<div
				className={cn(
					"pointer-events-none absolute inset-0 overflow-hidden",
					className,
				)}>
				{BEAMS.map((beam, index) => (
					<div
						key={index}
						className='absolute rounded-full bg-linear-to-b from-transparent via-cyan-500 to-transparent'
						style={{
							left: beam.left,
							top: "-10rem",
							width: beam.width,
							height: beam.height,
							opacity: beam.opacity,
							willChange: "transform",
							animation: `beam-cross ${beam.duration}s linear ${beam.delay}s infinite`,
						}}
					/>
				))}
			</div>
		);
	},
);

BackgroundBeams.displayName = "BackgroundBeams";
