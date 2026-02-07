import { Code2, Layout, Terminal, Wrench } from "lucide-react";

export default [
	{
		category: "Frontend Powerhouse",
		icon: <Layout className='w-6 h-6 text-cyan-400' />,
		skills: [
			"React",
			"Next.js",
			"TypeScript",
			"Tailwind CSS",
			"Chakra UI",
			"Shadcn UI",
			"React Query",
			"Zustand",
			"Redux",
			"Sass",
			"HTML5/CSS3",
		],
	},
	{
		category: "Languages & Core",
		icon: <Code2 className='w-6 h-6 text-rose-400' />,
		skills: ["JavaScript (ES6+)", "C++", "Python", "Dart"],
	},
	{
		category: "Tools & DevOps",
		icon: <Wrench className='w-6 h-6 text-yellow-400' />,
		skills: ["Git", "GitHub", "VS Code", "Postman", "Vite", "Figma"],
	},
	{
		category: "Embedded & Mobile",
		icon: <Terminal className='w-6 h-6 text-green-400' />,
		skills: ["Arduino", "Embedded C", "Flutter (Basics)", "Dart"],
	},
];
