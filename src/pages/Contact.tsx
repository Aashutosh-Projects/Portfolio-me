import { siteConfig } from "../config/site";

export default function Contact() {
    return(
        <div className="px-4 py-12">
            <p className="font-mono text-terminal-text-dim text-sm mb-2">
                $ cat contact.md
            </p>

            <h1 className="font-mono text-terminal-text-bright text-2xl font-medium mb-4">
                Get in touch
            </h1>

            <p className="text-terminal-text-dim text-sm leading-relaxed max-w-2xl mb-8">
                Feel free to reach out - happy to talk about projects, oppourtunities, or just say hi.
            </p>

            <div className="flex flex-col gap-3 max-w-sm">
                <a href={`mailto:${siteConfig.email}`} className="flex items-center justify-between bg-terminal-surface border border-terminal-border rounded-lg px-4 py-3 hover:border-accent transition-colors font-mono text-sm">
                    <span className="text-terminal-text-dim">email</span>
                    <span className="text-terminal-text-bright">{siteConfig.email}</span>
                </a>

                {
                    siteConfig.socials.map((social) =>(
                        <a key={social.label} href={social.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between bg-terminal-surface border border-terminal-border rounded-lg px-4 py-3 hover:border-accent transition-colors font-mono text-sm">
                            <span className="text-terminal-text-dim">
                                {social.label}
                            </span>
                            <span className="text-accent">
                                →
                            </span>
                        </a>
                    ))
                }
            </div>
        </div>
    )
}