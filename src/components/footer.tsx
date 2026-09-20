import { siteConfig } from "../config/site";

export default function Footer() {
    // define variables
    const runningYear = new Date().getFullYear();

    return(
        <footer className="border-t border-terminal-border bg-terminal-bg">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 font-mono text-sm">
                
                <span className="text-terminal-text-dim">
                    © {runningYear} {siteConfig.name}
                </span>
                
                <ul className="flex items-center gap-6">
                    {
                        siteConfig.socials.map((social) => {
                            return (
                                <li key = {social.label}>
                                    <a 
                                    href={social.link} target={social.link.startsWith('http') ? '_blank' : undefined} rel={social.link.startsWith('http') ? 'noopener noreferrer': undefined} className="text-terminal-text-dim hover:text-terminal-text-bright focus-visible:text-terminal-text-bright transition-colors"
                                    >
                                        {social.label}
                                    </a>
                                </li>
                            )
                        })
                        
                    }
                    
                </ul>

            </div>

        </footer>
    );
}