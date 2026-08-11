import { images } from "../assets";
import ExperienceCard from "../components/ExperienceCard";

export default [
	// 1. GDG Experience
	{
		title: "Dec 2024 - Sep 2025",
		content: (
			<ExperienceCard
				role='Front-End Developer, Core Team Member'
				company='GDG On-Campus Zagazig'
				date='Dec 2024 - Sep 2025. 10 mos'
				location='Zagazig, Egypt'
				type='Volunteering (Hybrid)'
				logo={images.gdg}
				description={[
					"Mentored 20+ students on modern web development practices, focusing on frontend fundamentals, resulting in an accelerated learning curve and the successful deployment of multiple student projects.",
					"Organized and led 5+ technical workshops and events to strengthen the local developer community's frontend engineering skills.",
					"Shipped community web solutions with the core team, working through weekly code reviews and pair-programming sessions to keep quality consistent across tasks.",
				]}
				skills={["Mentoring", "Cross-functional Collaboration", "Event Planning"]}
				certificateUrl='https://drive.google.com/file/d/12YFLNJdjH5WxXFLVSMjXINaiQGSHDdaL/view'
			/>
		),
	},
	// 2. ICPC Experience
	{
		title: "Feb 2025 - Apr 2025",
		content: (
			<ExperienceCard
				role='Competitive Programming Trainee'
				company='ICPC'
				date='Feb 2025 - Apr 2025. 3 mos'
				location='Zagazig, Egypt'
				type='Training'
				logo={images.icpc}
				description={[
					"Ranked Top 10 trainee (2,321 points) by solving 139 algorithmic challenges in C++, applying advanced Data Structures and Algorithms to optimize time and space complexity.",
				]}
				skills={["C++", "Algorithms", "Data Structures", "Problem Solving"]}
				certificateUrl='https://icpczagazig.org/certificate/67f0ab5418de8fbbff95f070'
			/>
		),
	},
	// 3. ITI Experience
	{
		title: "Jul 2024 - Sep 2024",
		content: (
			<ExperienceCard
				role='Front-End Developer Intern'
				company='Information Technology Institute (ITI)'
				date='Jul 2024 - Sep 2024. 3 mos'
				location='El Mansoura, Egypt'
				type='Internship (Remote)'
				logo={images.iti}
				description={[
					"Completed 150 hours of intensive hands-on frontend engineering training, mastering React hooks, component lifecycles, and API integrations.",
					"Delivered 10+ practical tasks and one full-stack graduation project with a cross-functional team, successfully meeting strict industry-standard UI/UX requirements and project deadlines.",
				]}
				skills={["React.js", "TypeScript", "JavaScript (ES6+)"]}
				certificateUrl='https://drive.google.com/file/d/1OPQnPg7RaLkpcu6m_YTQguo3RAncQT8s/view'
			/>
		),
	},
];
