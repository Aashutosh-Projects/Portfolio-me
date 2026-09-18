import { siteConfig } from "../config/site";
import ProjectCard from "../components/projectcard";

export default function Projects(){
    return(
        <div className="px-4 py-12">
            <section>
                <p className="font-mono text-terminal-text-dim text-sm mb-2">
                    $ ls ./projects
                </p>

                <h1 className="font-mono text-terminal-text-bright text-2xl font-medium mb-8">
                    All Projects
                </h1>

                {
                    siteConfig.projects.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {siteConfig.projects.map((project) => (
                                <ProjectCard key={project.slug} project={project} />
                            ))}
                        </div>
                    ): (
                        <p className="font-mono text-terminal-text-dim text-sm">
                            No Projects yet.
                        </p>
                    )
                }
            </section>
        </div>
    );
}