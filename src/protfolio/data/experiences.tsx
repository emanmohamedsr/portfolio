import { images } from "../assets";
import ExperienceCard from "../components/ExperienceCard";

export default [
	// 1. ITI Experience
	{
		title: "Summer 2024",
		content: (
			<ExperienceCard
				role='Frontend Developer Trainee'
				company='Information Technology Institute (ITI)'
				date='Jul 2024 - Sep 2024. 3 mos'
				location='El Mansoura, Egypt'
				type='Internship (Remote)'
				logo={images.iti}
				description={[
					"Completed an intensive 150-hour training program focused on modern web development.",
					"Developed responsive web applications using React.js and Tailwind CSS.",
					"Implemented clean code practices and reusable components architecture.",
				]}
				skills={["React.js", "Bootstrap", "JavaScript"]}
				certificateUrl='https://drive.google.com/file/d/1OPQnPg7RaLkpcu6m_YTQguo3RAncQT8s/view'
			/>
		),
	},
	// 2. ICPC Experience
	{
		title: "Feb 2025 - Apr 2025",
		content: (
			<ExperienceCard
				role='Problem Solving Trainee'
				company='ICPC Zagazig Community'
				date='Feb 2025 - Apr 2025. 3 mos'
				location='Zagazig, Egypt'
				type='Training'
				logo={images.icpc}
				description={[
					"Ranked among the Top 10 Trainees in the community.",
					"Solved complex algorithmic problems using C++ and Data Structures.",
					"Participated in competitive programming contests under time pressure.",
				]}
				skills={["C++", "Algorithms", "Data Structures", "Problem Solving"]}
				certificateUrl='https://icpczagazig.org/certificate/67f0ab5418de8fbbff95f070'
			/>
		),
	},
	// 3. GDG Experience
	{
		title: "Dec 2024 - Sep 2025",
		content: (
			<ExperienceCard
				role='Core Team Member (Frontend)'
				company='GDG on Campus Zagazig'
				date='Dec 2024 - Sep 2025. 10 mos'
				location='Zagazig, Egypt'
				type='Volunteering (Hybrid)'
				logo={images.gdg}
				description={[
					"Selected as a Core Member for the 2024-2025 season.",
					"Organizing technical workshops and mentoring students in Frontend technologies.",
					"Collaborating with the team to facilitate hands-on labs and sessions.",
				]}
				skills={["Leadership", "Mentoring", "Event Planning"]}
				certificateUrl='https://drive.google.com/file/d/12YFLNJdjH5WxXFLVSMjXINaiQGSHDdaL/view'
			/>
		),
	},
];
