import ProjectCard from "../components/projectcard";
import { siteConfig } from "../config/site";
import { Link } from "react-router-dom";

export default function Home() {
    const featuredProject = siteConfig.projects.filter((p) => p.featured);
    return (
        <div className="px-4 py-12">
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
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {featuredProject.map((project) => (
                            <ProjectCard key={project.slug} project={project}/>
                        ))}
                    </div>
                ): (
                    <p className="font-mono text-terminal-text-dim text-sm">
                        No featured Projects yet.
                    </p>   
                )}
                
                <Link to="/projects" className="inline-block mt-6 font-mono text-terminal-text-dim hover:text-terminal-text-bright focus-visible:text-terminal-text-bright transition-colors text-sm">
                   $ view all projects <span className="text-accent">→</span> 
                </Link>
            </section>
           
        </div>
    );
}