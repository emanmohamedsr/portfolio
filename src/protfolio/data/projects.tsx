import { Layers, ShoppingBag, Code, Box, Layout } from "lucide-react";
import { images } from "../assets";
export default [
	{
		title: "Axon",
		subtitle: "AI-Powered ERP Dashboard",
		description:
			"A scalable, modular ERP dashboard integrating AI decision-making.",
		longDescription:
			"Features include geospatial team visualization with Leaflet, adaptive Kanban/Table views without logic duplication, and real-time AI assistance via Vercel SDK. Built with a focus on complex state management using Zustand and Zod validation.",
		src: images.axon,
		icon: <Layers className='text-cyan-400' size={24} />,
		repoUrl: "https://github.com/emanmohamedsr/axon-dashboard",
		demoUrl: "https://axon-dashboard-wpvz.vercel.app/",
		stack: [
			"React.js",
			"TypeScript",
			"Zustand",
			"Leaflet",
			"Vercel AI",
			"Shadcn UI",
		],
	},
	{
		title: "Ma7al",
		subtitle: "Full Stack E-commerce",
		description:
			"A robust platform featuring secure JWT & Google OAuth authentication.",
		longDescription:
			"Includes a comprehensive admin dashboard for product management, a persistent smart shopping cart, and a mobile-first UI. Powered by Redux Toolkit for state management and Strapi Cloud for the backend.",
		src: images.ma7al,
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
		],
	},
	{
		title: "VSCode Clone",
		subtitle: "High-Fidelity Web IDE",
		description:
			"Replicates core functionality including file exploration and syntax highlighting.",
		longDescription:
			"Built with React and Vite. replicates core functionality including file exploration, syntax highlighting, and the command palette. Focuses on performance and complex UI component architecture.",
		src: images.vscode,
		icon: <Code className='text-blue-400' size={24} />,
		repoUrl: "https://github.com/emanmohamedsr/vscode",
		demoUrl: "https://vscode-ashen.vercel.app/",
		stack: [
			"React",
			"TypeScript",
			"Vite",
			"Tailwind CSS",
			"React Resize Panel",
		],
	},
	{
		title: "Product Dashboard",
		subtitle: "E-Commerce Inventory Manager",
		description:
			"Streamlined CRUD operations for products with category attributes.",
		longDescription:
			"Facilitates full CRUD operations for products with category and color attributes. Built with Headless UI for accessible components and React Hot Toast for real-time feedback.",
		src: images.ecommerce,
		icon: <Box className='text-orange-400' size={24} />,
		repoUrl: "https://github.com/emanmohamedsr/CURD_ECommerce",
		demoUrl: "https://curd-e-commerce.vercel.app/",
		stack: [
			"React.js",
			"TypeScript",
			"Tailwind CSS",
			"Headless UI",
			"Hot Toast",
		],
	},
	{
		title: "Productivity Dash",
		subtitle: "Personal Task Tracker",
		description:
			"A clean interface for tracking projects and team collaboration.",
		longDescription:
			"Features a responsive sidebar layout, progress bars, and reminders. Demonstrates mastery of semantic HTML5 and modern CSS layouts without external frameworks.",
		src: images.htmlDashboard,
		icon: <Layout className='text-green-400' size={24} />,
		repoUrl: "https://github.com/emanmohamedsr/Dashboard",
		demoUrl: "https://emanmohamedsr.github.io/Dashboard/",
		stack: ["HTML5", "CSS3", "Responsive Design", "Grid/Flexbox"],
	},
];
