import ProjectCard from "../components/projectcard";
import { siteConfig } from "../config/site";

export default function Home() {
    const featuredProject = siteConfig.projects.filter((p) => p.featured);
    return (
        <div className="max-w-5x1 mx-auto px-4 py-12">
            <section className="mb-16">
                <p className="font-mono text-terminal-text-dim text-sm mb-2">
                    $ whoami
                </p>
                
                <h1 className="font-mono text-terminal-text-bright text-3xl sm:text-4xl">
                    {siteConfig.name}
                </h1>

                <p className="font-mono text-accent text-base">
                    {siteConfig.role}
                    <span className="animate-pulse">_</span>
                </p>
            </section>

            {/* featured projects */}
            <section>
                <p className="font-mono text-terminal-text-dim text-sm mb-4">
                    $ ls ./featured-projects
                </p>
                
                {featuredProject.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols2 lg:grid-cols3 gap-4">
                        {featuredProject.map((project) => (
                            <ProjectCard key={project.slug} project={project}/>
                        ))}
                    </div>
                ): (
                    <p className="font-mono text-terminal-text-dim text-sm">
                        No featured Projects yet.
                    </p>   
                )}
                
            </section>
           
        </div>
    );
}