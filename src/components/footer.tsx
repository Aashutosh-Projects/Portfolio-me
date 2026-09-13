import { useState } from 'react';

interface SocialLinks {
    label: string;
    link : string;
}

const socialLinks: SocialLinks[] = [
    {label: "github", link: ""},
    {label: "linkedin", link: ""},
    {label: "email", link: ""}
];

export default function Footer() {
    // define variables
    const runningYear = new Date().getFullYear();

    return(
        <footer className="border-t border-terminal-border bg-terminal-bg">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 font-mono text-sm">
                
                <span className="text-terminal-text-dim">
                    © {runningYear} Aashutosh Bista
                </span>
                
                <ul className="flex items-center gap-6">
                    {
                        socialLinks.map((social) => {
                            return (
                                <li key = {social.label}>
                                    <a 
                                    href={social.link} target={social.link.startsWith('http') ? '_blank' : undefined} rel={social.link.startsWith('http') ? 'noopener noreferre': undefined} className="text-terminal-text-dim hover:text-terminal-text-bright cous-visible:text-terminal-text-bright transition-colors"
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