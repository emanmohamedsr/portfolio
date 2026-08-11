import { Code2, Layout, Terminal, Wrench } from "lucide-react";

export default [
	{
		category: "Frontend Frameworks",
		icon: <Layout className='w-6 h-6 text-cyan-400' />,
		skills: ["React 19", "Next.js", "Vite", "React Router DOM"],
	},
	{
		category: "Languages",
		icon: <Code2 className='w-6 h-6 text-rose-400' />,
		skills: ["TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3"],
	},
	{
		category: "State & Data",
		icon: <Wrench className='w-6 h-6 text-yellow-400' />,
		skills: [
			"Zustand",
			"TanStack Query",
			"Redux Toolkit",
			"Context API",
			"RESTful APIs",
		],
	},
	{
		category: "Styling & UI",
		icon: <Layout className='w-6 h-6 text-cyan-400' />,
		skills: ["Tailwind CSS", "shadcn/ui", "Chakra UI", "Framer Motion"],
	},
	{
		category: "AI, Libraries & Auth",
		icon: <Terminal className='w-6 h-6 text-green-400' />,
		skills: [
			"Vercel AI SDK",
			"MCP",
			"dnd-kit",
			"Leaflet",
			"React Hook Form",
			"JWT",
			"OAuth",
		],
	},
	{
		category: "Tools & Version Control",
		icon: <Wrench className='w-6 h-6 text-yellow-400' />,
		skills: ["Git", "GitHub", "Postman", "Strapi CMS", "ESLint", "pnpm"],
	},
];
