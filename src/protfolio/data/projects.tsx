import { Layers, ShoppingBag, Code, Layout, Gamepad2 } from "lucide-react";
import { images } from "../assets";

export default [
	{
		title: "SprintifAI",
		subtitle: "AI-Powered Productivity Workspace",
		description:
			"An AI-powered productivity workspace for smart calendar and task management.",
		longDescription:
			"Engineered a standardized data synchronization layer using Model Context Protocol (MCP) to optimize bi-directional Google Calendar integration. Developed a dynamic Calendar module capable of rendering 50+ concurrent task events seamlessly through optimized memoization. Implemented a robust client-side Notification system utilizing Zustand, offloading scheduling logic to ensure highly reliable user reminder delivery. Designed a modular dashboard architecture that maximized UI space efficiency, enabling seamless interaction between AI-generated insights and task management.",
		src: images.sprintifai,
		width: 1906,
		height: 939,
		icon: <Layout className='text-purple-400' size={24} />,
		repoUrl: "https://github.com/XCloud69",
		demoUrl: "https://x-cloud-frontend-2wj3.vercel.app/",
		stack: ["React 19", "TypeScript", "MCP", "Zustand"],
	},
	{
		title: "Axon",
		subtitle: "AI-Powered ERP Dashboard",
		description:
			"A scalable, modular ERP dashboard integrating AI decision-making.",
		longDescription:
			"Solo-architected and designed the entire ERP platform from scratch — including custom UI/UX, theming, and branding — utilizing a scalable feature-based structure with React and shadcn/ui. Integrated Google Gemini via Vercel AI SDK, implementing a custom backend pipeline to deliver 'EVE', a real-time streaming AI assistant. Engineered advanced data modules, including a fully interactive dnd-kit Kanban board and a Leaflet geospatial map, optimizing global state and caching with Zustand and TanStack Query. Kept the interface responsive and keyboard-accessible across desktop and mobile, using semantic HTML and ARIA roles for the drag-and-drop and streaming-chat interactions.",
		src: images.axon,
		width: 600,
		height: 449,
		icon: <Layers className='text-cyan-400' size={24} />,
		repoUrl: "https://github.com/emanmohamedsr/axon-dashboard",
		demoUrl: "https://axon-dashboard-wpvz.vercel.app/",
		stack: [
			"React",
			"TypeScript",
			"shadcn/ui",
			"Vercel AI SDK",
			"Zustand",
			"TanStack Query",
			"dnd-kit",
			"Leaflet",
		],
	},
	{
		title: "Ma7al",
		subtitle: "Full Stack E-commerce",
		description:
			"A robust platform featuring secure JWT & Google OAuth authentication.",
		longDescription:
			"Spearheaded the end-to-end development of a custom e-commerce solution, establishing the visual identity and seamlessly connecting a React/TypeScript interface with a Strapi backend. Engineered a comprehensive authentication flow (JWT, Email, Google OAuth) with strict client-side validation using React Hook Form and Yup. Managed complex global state and API caching using Redux Toolkit and RTK Query, ensuring seamless cart persistence, advanced filtering, and secure protected routes. Verified responsive layouts across mobile, tablet, and desktop viewports to ensure a seamless cross-device user experience.",
		src: images.ma7al,
		width: 600,
		height: 454,
		icon: <ShoppingBag className='text-purple-400' size={24} />,
		repoUrl: "https://github.com/emanmohamedsr/full-stack-ecommerce",
		demoUrl: "https://full-stack-ecommerce-neon.vercel.app/",
		stack: [
			"React",
			"TypeScript",
			"Redux Toolkit",
			"RTK Query",
			"Strapi",
			"Chakra UI",
			"React Hook Form",
			"JWT",
		],
	},
	{
		title: "Game Hub",
		subtitle: "Video Game Discovery App",
		description:
			"A responsive game discovery platform with real-time search and filtering.",
		longDescription:
			"A feature-rich application fetching data from the RAWG API. It implements advanced caching and state management using TanStack Query and Zustand. Features include game filtering by genre/platform, sorting, and infinite scrolling for a seamless user experience.",
		src: images.gamehub,
		width: 600,
		height: 281,
		icon: <Gamepad2 className='text-yellow-400' size={24} />,
		repoUrl: "https://github.com/emanmohamedsr/game-hub",
		demoUrl: "https://game-hub-two-sandy.vercel.app/",
		stack: [
			"React 19",
			"TypeScript",
			"React Query",
			"Zustand",
			"Chakra UI",
			"Axios",
		],
	},
	{
		title: "VSCode Clone",
		subtitle: "High-Fidelity Web IDE",
		description:
			"Replicates core functionality including file exploration and syntax highlighting.",
		longDescription:
			"Built with React and Vite. Replicates core functionality including file exploration, syntax highlighting, and the command palette. Focuses on performance and complex UI component architecture.",
		src: images.vscode,
		width: 600,
		height: 445,
		icon: <Code className='text-blue-400' size={24} />,
		repoUrl: "https://github.com/emanmohamedsr/vscode",
		demoUrl: "https://vscode-ashen.vercel.app/",
		stack: [
			"React",
			"TypeScript",
			"Vite",
			"Tailwind CSS",
			"React Resize Panel",
			"React Syntax Highlighter",
		],
	},
	{
		title: "Productivity Dash",
		subtitle: "Personal Task Tracker",
		description:
			"A clean interface for tracking projects and team collaboration.",
		longDescription:
			"Features a responsive sidebar layout, progress bars, and reminders. Built with semantic HTML5 and modern CSS layouts, without external frameworks.",
		src: images.htmlDashboard,
		width: 600,
		height: 395,
		icon: <Layout className='text-green-400' size={24} />,
		repoUrl: "https://github.com/emanmohamedsr/Dashboard",
		demoUrl: "https://emanmohamedsr.github.io/Dashboard/",
		stack: ["HTML5", "CSS3", "Responsive Design", "Grid/Flexbox"],
	},
];
