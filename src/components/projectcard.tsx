import { Link } from "react-router-dom";
import type { Project } from "../config/site";

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project } : ProjectCardProps){
    return(
        <Link to={`/projects/${project.slug}`} className="block bg-terminal-surface border border-terminal rounded-lg p-4 hover:border-accent focus-visible:border-accent transition-all duration-300 ease-out hover:-translate-y-1 focus-visible:-translate-y-1 active:scale-[.98]">
            {/* traffic light dots */}
            <div className="flex gap-1.5 mb-3">
                <span className="w-2 h-2 rounded-full bg-red-500" />
                <span className="w-2 h-2 rounded-full bg-yellow-500" />
                <span className="w-2 h-2 rounded-full bg-green-500" />
            </div>

            <h3 className="font-mono text-terminal-text-bright text-sm font-medium mb-2">
                {project.title}
            </h3>

            <p className="text-terminal-text-dim text-xs leading-relaxed mb-4 line-clamp-2">
                {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                    <span key={tag} className="text-[10px] bg-tag-bg text-tag-text px-2.5 py-0.5 rounded-full">
                        {tag}
                    </span>
                )
                )}
            </div>
        </Link>
    );
}