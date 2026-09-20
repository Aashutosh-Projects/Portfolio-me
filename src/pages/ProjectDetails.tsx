import { Link, useParams } from "react-router-dom";
import { siteConfig } from "../config/site";

export default function ProjectDetails() {
    const { slug } = useParams<{ slug: string }>();
    const project = siteConfig.projects.find((p) => p.slug === slug);
    if (!project) {
        return(
            <div className="px-4 py-12">
                <p className="font-mono text-terminal-text-dim text-sm mb-4">
                    $ cd ./projects/{slug}
                </p>

                <p className="font-mono text-terminal-text-bright">
                    404: project not found
                </p>

                <Link to="/projects" className="inline-block mt-4 font-mono text-terminal-text-dim hover:text-terminal-text-bright transition-colors text-sm">
                    $ cd .. <span className="text-accent">← back to all projects</span>
                </Link>
            </div>
    );
    }
    
    return(
        <div className="px-4 py-12">
            <p className="font-mono text-terminal-text-dim text-sm mb-4">
                $ cd ./projects/{project.slug}
            </p>

            <div className="bg-terminal-surface border border-terminal-border rounded-lg overflow-hidden w-full">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-terminal-border">
                <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-accent" />
                </div>
                <span className="text-xs text-terminal-text-dim ml-1.5">
                    {project.slug}/README.md
                </span>
            </div>
                
            <div className="p-6">
                <h1 className="text-terminal-text-bright text-2xl font-medium mb-2">
                    {project.title}
                </h1>

                <p className="text-terminal-text-dim text-sm leading-relaxed mb-5 max-w-xl">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {
                        project.tags.map((tag) => (
                            <span key={tag} className="text-[11px] bg-tag-bg text-tag-text px-2.5 py-1 rounded-full">
                                {tag}   
                            </span>
                        ))
                    }
                </div>
                
                <div className="flex gap-3 mb-6">
                    {
                        project.demoUrl && (
                            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="bg-accent text-terminal-bg text-sm font-medium px-4 py-2 rounded-md hover:opacity-90 transition-opacity">
                                Live Demo 
                            </a>
                            
                        )
                    }

                    {
                        project.githubUrl && (
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="border border-terminal-border text-terminal-text text-sm font-medium px-4 py-2 rounded-md hover:border-accent transition-colors">
                                View Source
                            </a>
                        )
                    }
                </div>

                    {
                        project.image ? (
                            <img src={project.image} alt={project.title} className="w-full rounded-md border border-terminal-border" />
                        ):(
                            <div className="aspect-video bg-terminal-bg border border-terminal-border rounded-md flex items-center justify-center text-terminal-text-dim text-sm">
                                project screenshot
                            </div>
                        )
                    }
            </div>
            </div>
            <Link
                to="/projects"
                className="inline-block mt-6 font-mono text-terminal-text-dim hover:text-terminal-text-bright transition-colors text-sm"
            >
                $ cd .. <span className="text-accent">← back to all projects</span>
            </Link> 
        </div>
    );
}