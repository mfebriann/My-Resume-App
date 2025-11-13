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

interface SkillDetail {
	name: string;
	level: 'Basic' | 'Intermediate' | 'Advanced' | 'Expert';
}

interface SkillsInterface {
	programmingLanguages: SkillDetail[];
	libraryFramework: SkillDetail[];
	data: SkillDetail[];
	tools: SkillDetail[];
	design: SkillDetail[];
	runtimeEnvironment: SkillDetail[];
}

interface LanguageDetail {
	name: string;
	level: string;
}

interface ProjectsInterface {
	name: string;
	description: string;
	previewUrl?: string;
	repoUrl?: string;
}

interface ResumeDataInterface {
	name: string;
	title: string;
	description: string;
	contact: ContactInterface;
	experience: ExperienceInterface[];
	education: EducationInterface[];
	skills: SkillsInterface;
	projects: ProjectsInterface[];
	interests: string[];
	languages: LanguageDetail[];
}

export const resumeData: ResumeDataInterface = {
	name: 'Muhammad Febrian',
	title: 'Frontend Developer',
	description:
		'A Frontend Developer with more than 3 years of experience specializing in building modern, responsive, and user-friendly web interfaces. Skilled in ReactJS, TypeScript, TailwindCSS, Bootstrap, PHP, and UI/UX design using Figma, with additional experience in mobile development using React Native and backend environment using NodeJS. Passionate about continuous learning, exploring new technologies, and delivering high-quality digital experiences that solve real-world problems.',
	contact: {
		email: 'mfebriann18@gmail.com',
		phone: '0838-7496-8672',
		website: 'mfebrian.com',
		github: 'mfebriann',
		linkedin: 'Muhammad Febrian',
	},
	experience: [
		{
			title: 'IT Developer',
			company: 'PT Kreasi Potensi Indonesia',
			duration: 'May 2025 - Present',
			location: 'Jakarta, Indonesia',
			responsibilities: [
				'Develop and maintain the youtzmedia.id news portal using Laravel and TailwindCSS.',
				'Build and optimize multiple agency websites with a focus on clean architecture and responsive UI.',
				'Improve website performance, SEO structure, and user experience across various company projects.',
				'Collaborate closely with internal teams to deliver scalable and production-ready web solutions.',
			],
		},
		{
			title: 'Web Developer',
			company: 'XRUN Metaverse Indonesia',
			duration: 'September 2022 - May 2025',
			location: 'Pantai Indah Kapuk, West Jakarta',
			responsibilities: [
				'Revamped the company profile website to enhance UI consistency, loading speed, and SEO rankings.',
				'Developed mobile applications using React Native with NodeJS as backend for XRUN and MetaHint.',
				'Built the XRUN mobile app, an AR-based crypto token hunting app using React Native, Google Maps API, and NodeJS backend.',
				'Developed the MetaHint crypto wallet app for managing MetaHint tokens, released on Google Play Store.',
				'Worked on the Afterlife AI communication app using Speech-to-Text, ChatGPT, and ElevenLabs (backend not yet implemented).',
				'Created UI systems in Unreal Engine using Blueprint for metaverse-related features and internal prototypes.',
			],
		},
		{
			title: 'Volunteer Frontend Developer',
			company: 'Youth Ranger Indonesia',
			duration: 'March - August 2022',
			location: 'Banten, South Tangerang',
			responsibilities: [
				'Collaborated with a team of designers and backend developers to build the Youth Ranger Indonesia company profile website using Figma and Laravel.',
				'Converted multi-iteration UI designs into a responsive frontend with clean and modern layouts.',
				'Improved on-page SEO structure to boost search visibility and content performance.',
			],
		},
		{
			title: 'Internship Frontend Developer',
			company: 'Boosternesia',
			duration: 'January - March 2022',
			location: 'Bandung, West Java',
			responsibilities: [
				'Created the first company profile website for Boosternesia’s English course program using Figma.',
				'Built the website using HTML5, CSS3, JavaScript, SwiperJS, and AOS, ensuring a modern and responsive interface.',
				'Collaborated with a Laravel backend developer to integrate dynamic content and successfully launch the website within one month.',
			],
		},
	],
	education: [
		{
			school: 'Open University',
			duration: '2024 - Present',
			location: 'Jakarta',
			major: 'Information Systems',
		},
		{
			school: 'Vocational High School 54 Jakarta',
			duration: '2017 - 2020',
			location: 'Jakarta',
			major: 'Computer and Network Engineering who learn about network systems and learn about programming',
		},
	],
	skills: {
		programmingLanguages: [
			{ name: 'HTML5', level: 'Advanced' },
			{ name: 'CSS3', level: 'Advanced' },
			{ name: 'JavaScript', level: 'Intermediate' },
			{ name: 'TypeScript', level: 'Basic' },
			{ name: 'PHP', level: 'Intermediate' },
		],
		libraryFramework: [
			{ name: 'TailwindCSS', level: 'Intermediate' },
			{ name: 'Bootstrap', level: 'Intermediate' },
			{ name: 'ReactJS', level: 'Intermediate' },
			{ name: 'React Native', level: 'Intermediate' },
			{ name: 'WordPress', level: 'Intermediate' },
			{ name: 'jQuery', level: 'Intermediate' },
			{ name: 'Sass/SCSS', level: 'Basic' },
		],
		data: [{ name: 'MySQL', level: 'Intermediate' }],
		tools: [
			{ name: 'Git', level: 'Expert' },
			{ name: 'Visual Studio Code', level: 'Expert' },
			{ name: 'Laragon', level: 'Intermediate' },
			{ name: 'Tabby', level: 'Intermediate' },
			{ name: 'Linux', level: 'Intermediate' },
		],
		design: [{ name: 'Figma', level: 'Basic' }],
		runtimeEnvironment: [{ name: 'NodeJS', level: 'Basic' }],
	},
	projects: [
		{
			name: 'Sopwerhos',
			description: 'Company profile website built with modern Next.js stack. Showcasing services, clean design, and responsive layout optimized for businesses in Indonesia.',
			previewUrl: 'https://sopwerhos.vercel.app/',
		},
		{
			name: 'Gemilang Taruna',
			description:
				'A modern website for Gemilang Taruna, a local food stall established in 2023. It showcases the brands identity, menu offerings, and story with a clean design. Key features include a responsive layout, product gallery, and contact section, making it easy for customers to explore the menu and connect with the business.',
			previewUrl: 'https://gemilang-taruna-website.vercel.app/',
			repoUrl: 'https://github.com/mfebriann/GemilangTaruna_Website',
		},
		{
			name: 'MCKY Studio Labs',
			description:
				"A creative studio dedicated to developing original games. Focus on strong storytelling and striking visuals, believing that games can convey extraordinary messages, emotions, and experiences. The game includes 'Echoes Of Paur' and 'PARMAN'.",
			previewUrl: 'https://www.mckystudiolabs.com/',
		},
	],
	interests: ['Playing Game', 'Football', 'Chess'],
	languages: [
		{ name: 'Indonesian', level: 'Native' },
		{ name: 'English', level: 'Pre-Intermediate' },
	],
};
