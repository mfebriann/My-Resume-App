interface ContactInterface {
	email: string;
	phone: string;
	website: string;
	github: string;
	linkedin: string;
}

interface ExperienceInterface {
	title: string;
	company: string;
	duration: string;
	location: string;
	responsibilities: string[];
}

interface EducationInterface {
	school: string;
	duration: string;
	location: string;
	major: string;
}

interface SkillsInterface {
	programmingLanguages: string[];
	libraryFramework: string[];
	data: string[];
	tools: string[];
	design: string[];
}

interface ProjectsInterface {
	name: string;
	description: string;
}

interface ResumeDataInterface {
	name: string;
	title: string;
	contact: ContactInterface;
	experience: ExperienceInterface[];
	education: EducationInterface;
	skills: SkillsInterface;
	projects: ProjectsInterface[];
	interests: string[];
}

export const resumeData: ResumeDataInterface = {
	name: 'Muhammad Febrian',
	title: 'Front-End Developer',
	contact: {
		email: 'mfebriann18@gmail.com',
		phone: '0838-7496-8672',
		website: 'mfebrian.com',
		github: 'mfebriann',
		linkedin: 'Muhammad Febrian',
	},
	experience: [
		{
			title: 'Web Developer',
			company: 'XRUN Metaverse Indonesia',
			duration: 'September 2022-May 2025',
			location: 'Pantai Indah Kapuk, West Jakarta',
			responsibilities: ['Make website company profile', 'Make games with Unreal Engine 5', 'Make mobile application with React Native'],
		},
		{
			title: 'Volunteer Frontend Developer',
			company: 'Youth Ranger Indonesia',
			duration: 'March-August 2022',
			location: 'Banten, South Tangerang',
			responsibilities: [
				'Collaborate create a design for a Company Profile website using Figma',
				'Website repair according to design',
				'Improve website SEO',
				'Communicate and collaborate with Backend Developer, UI/UX, Copywriting and Graphic Designer',
			],
		},
		{
			title: 'Internship Frontend Developer',
			company: 'Boosternesia',
			duration: 'January March 2022',
			location: 'Bandung, West Java',
			responsibilities: [
				'Create a design for a Company Profile website using Figma',
				'Slicing from design company profile become a website using HTML, CSS, Javascript, Swiperjs and AOS',
				'Create a design dashboard for a Employee Management using Figma',
				'Slicing from design dashboard employee management become a website using HTML, CSS and Javascript',
				'Communicate and collaborate with Backend Developer',
			],
		},
	],
	education: {
		school: 'Vocational High School 54 Jakarta',
		duration: '2017-2020',
		location: 'Jakarta',
		major: 'Computer and Network Engineering who learn about network systems and learn about programming',
	},
	skills: {
		programmingLanguages: ['HTML5', 'CSS3', 'Javascript', 'PHP', 'Typescript'],
		libraryFramework: ['TailwindCSS', 'Bootstrap', 'ReactJS', 'React Native', 'Jquery'],
		data: ['MySQL'],
		tools: ['Git', 'Visual Studio Code', 'XAMPP', 'MySQL WorkBench', 'Vite'],
		design: ['Figma'],
	},
	projects: [
		{
			name: 'MCKY Studio Labs',
			description:
				"A creative studio dedicated to developing original games. Focus on strong storytelling and striking visuals, believing that games can convey extraordinary messages, emotions, and experiences. The game includes 'Echoes Of Paur' and 'PARMAN'.",
		},
		{
			name: 'Cari FilmNyok',
			description: 'A simple website for search movies and know about the details of the movie. This website just for me to learn about Javascript async/await, Module Bundler (Webpack), LocalStorage and TailwindCSS.',
		},
		{
			name: 'Pokedek?',
			description: 'Simple website about finding pokemon and learning about API. API used is PokeAPI.',
		},
		{
			name: 'Youth Ranger Indonesia',
			description: 'Improved the appearance of the Youth Ranger Indonesia website to make it look cooler.',
		},
	],
	interests: ['Playing Game', 'Football', 'Chess'],
};
