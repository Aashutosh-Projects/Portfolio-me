import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

// defining interface for the nav items
interface NavItem{
    label: string;
    path: string;
    // isExternal?: boolean;
}

// items in the navbar
const navLinks: NavItem[] = [
    // applying multi-page routing
    {label: 'home', path: '/'},
    {label: 'projects', path: '/projects'},
    {label: 'about', path: '/about'},
    {label: 'contact', path: '/contact'},
]

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return(
        <header className="border-b border-terminal-border bg-terminal-bg">
            {/* user name */}
            <div className="flex items-center justify-between p-4">
                <Link to="/" className="font-mono text-accent text-sm sm:text-base">
                    guest@portfolio:~$
                </Link>

                <nav className="hidden sm:block">
                   <ul className="flex items-center gap-6">
                        {navLinks.map((item) => {
                        return (
                            <li key={item.path}>
                            <NavLink
                                to={item.path}
                                className={({isActive}) => `font-mono transition-colors ${
                                isActive
                                    ? 'text-accent'
                                    : 'text-terminal-text-dim hover:text-terminal-text-bright'
                                }`}
                            >
                                {item.label}
                            </NavLink>
                            </li>
                        );
                        })}
                    </ul>
                </nav>

                {/* mobile menu toggle */}
                <button onClick={() => setIsMenuOpen(!isMenuOpen)}className="sm:hidden font-mono text-terminal-text-dim" arial-lable="Toggle Menu">
                    {isMenuOpen ? '[x]': '[≡]'}
                </button>

            </div>
            
            {/* mobile nav */}
            {
                isMenuOpen && (
                    <nav className="sm:hidden border-t border-terminal-border">
                        <ul className="flex flex-col p-4 gap-4">
                            {navLinks.map((item) => {
                            return (
                                <li key={item.path}>
                                <NavLink
                                    to={item.path}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={({isActive}) => `font-mono ${
                                    isActive ? 'text-accent' : 'text-terminal-text-dim'
                                    }`}
                                >
                                    {item.label}
                                </NavLink>
                                </li>
                            );
                            })}
                        </ul>
                     </nav>
                )
            }

        </header>
    )
}