import { resumeData } from './data/resumeData';

type SkillItem = {
	name: string;
	level: string;
};

const SkillList = ({ items }: { items: SkillItem[] }) => (
	<ul className="space-y-1 text-sm text-gray-700">
		{items.map((item) => (
			<li key={item.name} className="flex items-center justify-between gap-2">
				<span>{item.name}</span>
				<span className="text-xs font-semibold uppercase tracking-wide text-gray-500">{item.level}</span>
			</li>
		))}
	</ul>
);

const App: React.FC = () => {
	return (
		<div className="min-h-screen bg-white p-6 font-sans max-w-6xl mx-auto">
			<header>
				<h1 className="text-4xl font-bold text-sky-600 mb-2">{resumeData.name}</h1>
				<p className="text-xl text-gray-700 mb-4">{resumeData.title}</p>
				<div className="flex flex-wrap items-center gap-4 text-gray-600">
					<div className="flex items-center gap-1">
						<span>
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
								<path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
							</svg>
						</span>
						<a href="mailto:mfebriann18@gmail.com">{resumeData.contact.email}</a>
					</div>
					<div className="flex items-center gap-1">
						<span>
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
								<path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
							</svg>
						</span>
						<span>{resumeData.contact.phone}</span>
					</div>
					<div className="flex items-center gap-1">
						<span>
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-globe" viewBox="0 0 16 16">
								<path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z" />
							</svg>
						</span>
						<a href={`http://${resumeData.contact.website}`} className="text-gray-700" target="_blank" rel="noopener noreferrer">
							{resumeData.contact.website}
						</a>
					</div>
					<div className="flex items-center gap-1">
						<span>
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
								<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
							</svg>
						</span>
						<a href={`https://github.com/${resumeData.contact.github}`} className="text-gray-700" target="_blank" rel="noopener noreferrer">
							{resumeData.contact.github}
						</a>
					</div>
					<div className="flex items-center gap-1">
						<span>
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
								<path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
							</svg>
						</span>
						<a href={'https://www.linkedin.com/in/mfebriann/'} className="text-gray-700" target="_blank" rel="noopener noreferrer">
							{resumeData.contact.linkedin}
						</a>
					</div>
				</div>
			</header>
			<p className="text-gray-700 my-5">{resumeData.description}</p>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
				<div className="md:col-span-2 space-y-8">
					<section>
						<h2 className="text-2xl font-semibold text-sky-600 border-b-2 border-sky-600 pb-2 mb-6">Experience</h2>
						<div className="space-y-6">
							{resumeData.experience.map((exp, index) => (
								<div key={index}>
									<h3 className="text-lg font-semibold text-gray-800">
										{exp.title} @{exp.company}
									</h3>
									<p className="text-gray-600 text-sm mb-2">
										{exp.duration} // {exp.location}
									</p>
									<ul className="space-y-1">
										{exp.responsibilities.map((resp, i) => (
											<li key={i} className="text-gray-700 text-sm flex items-start">
												<span className="text-sky-600 mr-2">▶</span>
												{resp}
											</li>
										))}
									</ul>
								</div>
							))}
						</div>
					</section>

					<section>
						<h2 className="text-2xl font-semibold text-sky-600 border-b-2 border-sky-600 pb-2 mb-6">Education</h2>
						<div className="flex flex-col gap-y-6">
							{resumeData.education.map((data) => {
								return (
									<div key={data.school}>
										<h3 className="text-lg font-semibold text-gray-800">{data.school}</h3>
										<p className="text-gray-600 text-sm mb-2">
											{data.duration} // {data.location}
										</p>
										<p className="text-gray-700">{data.major}</p>
									</div>
								);
							})}
						</div>
					</section>
					<section>
						<h2 className="text-2xl font-semibold text-sky-600 border-b-2 border-sky-600 pb-2 mb-6">Languages</h2>
						<ul className="space-y-1 text-gray-700 text-sm">
							{resumeData.languages.map((language) => (
								<li key={language.name} className="flex items-center justify-between">
									<span>{language.name}</span>
									<span className="uppercase text-xs font-semibold tracking-wide text-gray-500">{language.level}</span>
								</li>
							))}
						</ul>
					</section>
					<section>
						<h2 className="text-2xl font-semibold text-sky-600 border-b-2 border-sky-600 pb-2 mb-6">Hobbies</h2>
						<p className="text-gray-700">{resumeData.interests.join(', ')}</p>
					</section>
				</div>

				<div className="space-y-8">
					<section>
						<h2 className="text-2xl font-semibold text-sky-600 border-b-2 border-sky-600 pb-2 mb-6">Skills</h2>
						<div className="space-y-4">
							<div>
								<h3 className="font-semibold text-gray-800 mb-2">Programming Languages</h3>
								<SkillList items={resumeData.skills.programmingLanguages} />
							</div>
							<div>
								<h3 className="font-semibold text-gray-800 mb-2">Runtime Environment</h3>
								<SkillList items={resumeData.skills.runtimeEnvironment} />
							</div>
							<div>
								<h3 className="font-semibold text-gray-800 mb-2">Library & Framework</h3>
								<SkillList items={resumeData.skills.libraryFramework} />
							</div>
							<div>
								<h3 className="font-semibold text-gray-800 mb-2">Data</h3>
								<SkillList items={resumeData.skills.data} />
							</div>
							<div>
								<h3 className="font-semibold text-gray-800 mb-2">Tools</h3>
								<SkillList items={resumeData.skills.tools} />
							</div>
							<div>
								<h3 className="font-semibold text-gray-800 mb-2">Design</h3>
								<SkillList items={resumeData.skills.design} />
							</div>
						</div>
					</section>

					<section>
						<h2 className="text-2xl font-semibold text-sky-600 border-b-2 border-sky-600 pb-2 mb-6">Projects</h2>
						<div className="space-y-4">
							{resumeData.projects.map((project, index) => (
								<div key={index}>
									<h3 className="font-semibold text-gray-800 mb-1">{project.name}</h3>
									<p className="text-gray-700 text-sm">{project.description}</p>
									{(project.previewUrl || project.repoUrl) && (
										<div className="flex flex-col gap-1 mt-2 text-sm">
											{project.previewUrl && (
												<a href={project.previewUrl} target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">
													{project.previewUrl}
												</a>
											)}
											{project.repoUrl && (
												<a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline break-all">
													{project.repoUrl}
												</a>
											)}
										</div>
									)}
								</div>
							))}
						</div>
					</section>
				</div>
			</div>
		</div>
	);
};

export default App;
