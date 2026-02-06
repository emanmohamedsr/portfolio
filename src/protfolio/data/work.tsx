import { images } from "../assets";
import { ProjectVisual } from "../components";

export default [
	{
		title: "Axon — AI-Powered ERP Dashboard",
		description:
			"A scalable, modular ERP dashboard integrating AI decision-making. Features include geospatial team visualization with Leaflet, adaptive Kanban/Table views without logic duplication, and real-time AI assistance via Vercel SDK. Built with a focus on complex state management using Zustand and Zod validation.",
		content: (
			<ProjectVisual
				src={images.axon}
				alt='Axon Dashboard'
				stack={[
					"React.js",
					"TypeScript",
					"Zustand",
					"Leaflet",
					"Vercel AI",
					"Shadcn UI",
				]}
				repoUrl='https://github.com/emanmohamedsr/axon-dashboard'
				demoUrl='https://axon-dashboard-wpvz.vercel.app/'
			/>
		),
	},
	{
		title: "Ma7al — Full Stack E-commerce",
		description:
			"A robust full-stack platform featuring secure JWT & Google OAuth authentication. Includes a comprehensive admin dashboard for product management, a persistent smart shopping cart, and a mobile-first UI. Powered by Redux Toolkit for state management and Strapi Cloud for the backend.",
		content: (
			<ProjectVisual
				src={images.ma7al}
				alt='OmniShop E-commerce'
				stack={[
					"React",
					"TypeScript",
					"Redux Toolkit",
					"RTK Query",
					"Strapi",
					"Chakra UI",
				]}
				repoUrl='https://github.com/emanmohamedsr/full-stack-ecommerce'
				demoUrl='https://full-stack-ecommerce-neon.vercel.app/'
			/>
		),
	},
	{
		title: "VSCode Web Clone",
		description:
			"A high-fidelity Visual Studio Code clone built with React and Vite. Replicates core functionality including file exploration, syntax highlighting, and the command palette. Focuses on performance and complex UI component architecture.",
		content: (
			<ProjectVisual
				src={images.vscode}
				alt='VSCode Clone'
				stack={[
					"React",
					"TypeScript",
					"Vite",
					"Tailwind CSS",
					"React Resize Panel",
					"React Syntax Highlighter",
				]}
				repoUrl='https://github.com/emanmohamedsr/vscode'
				demoUrl='https://vscode-ashen.vercel.app/'
			/>
		),
	},
	{
		title: "E-Commerce Product Dashboard",
		description:
			"A streamlined front-end application for managing e-commerce inventory. Facilitates full CRUD operations (Create, Read, Update, Delete) for products with category and color attributes. Built with Headless UI for accessible components and React Hot Toast for real-time feedback, ensuring a polished user experience.",
		content: (
			<ProjectVisual
				src={images.ecommerce}
				alt='E-Commerce Dashboard'
				stack={[
					"React.js",
					"TypeScript",
					"Tailwind CSS",
					"Headless UI",
					"Hot Toast",
				]}
				repoUrl='https://github.com/emanmohamedsr/CURD_ECommerce'
				demoUrl='https://curd-e-commerce.vercel.app/'
			/>
		),
	},
	{
		title: "Personal Productivity Dashboard",
		description:
			"A clean, organized interface for tracking projects, tasks, and team collaboration. Features a responsive sidebar layout, progress bars, and reminders. Demonstrates mastery of semantic HTML5 and modern CSS layouts without external frameworks.",
		content: (
			<ProjectVisual
				src={images.htmlDashboard}
				alt='Personal Dashboard'
				stack={["HTML5", "CSS3", "Responsive Design", "Grid/Flexbox"]}
				repoUrl='https://github.com/emanmohamedsr/Dashboard'
				demoUrl='https://emanmohamedsr.github.io/Dashboard/'
			/>
		),
	},
];
