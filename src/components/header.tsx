import { useState } from 'react';

// defining interface for the nav items
interface NavItem{
    label: string;
    path: string;
    // isExternal?: boolean;
}

// items in the navbar
const navLinks: NavItem[] = [
    // {label: 'guest@portfolio', path: '#home'}
    {label: 'home', path: '#home'},
    {label: 'projects', path: '#projects'},
    {label: 'about', path: '#about'},
    {label: 'contact', path: '#contact'},
]

export default function Header() {
    // hamburger or menu status

    return(
        <header className="flex items-center justify-between p-4 bg-terminal-bg">
            {/* user name */}
            <div className="font-mono text-accent">
                guest@portfolio:~$
            </div>

            <nav>
                <ul className="flex itmes-center gap-6">
                    {
                        navLinks.map(
                            (item) => (
                                <li key={item.path}>
                                    <a href={item.path} className="text-terminal-text-dim font-mono hover:text-terminal-text-bright transition-colors">
                                        {item.label}
                                    </a>
                                </li>
                            )
                        )
                    }
                </ul>
            </nav>

        </header>
    )
}