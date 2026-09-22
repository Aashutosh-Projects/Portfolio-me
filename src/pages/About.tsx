import { siteConfig } from "../config/site";

export default function About(){
    return(
        <div className="px-4 py-12">
            <section className="mb-12">
                <p className="font-mono text-terminal-text-dim text-sm mb-2">
                    $ cat about.md
                </p>

                <h1 className="font-mono text-terminal-text-bright text-2xl font-medium mb-4">
                    About
                </h1>

                <p className="text-terminal-text-dim text-sm leading-relaxed w-full">
                    {siteConfig.bio}
                </p>
            </section>

            <section>
                <p className="font-mono text-terminal-text-dim text-sm mb-4">
                    $ cat skills.txt
                </p>
                
                <div className="flex flex-wrap gap-2">
                    {siteConfig.skills.map((skill) =>(
                        <span key={skill} className="text-xs font-mono bg-tag-bg text-tag-text px-3 py-1.5">
                            {skill}
                        </span>
                    ))}
                </div>
            </section>
        </div>
    )
}