export interface NavLink {
    label: string;
    path: string;
}

export interface Social {
    label: string;
    link: string;
}

export interface Project {
    slug: string;
    title: string;
    description: string;
    tags : string[];
    demoUrl: string;
    githubUrl: string;
    image?: string; 
    featured: boolean;
}

export interface SiteConfig {
    name: string;
    role: string;
    navLinks: NavLink[];
    socials: Social[];
    projects: Project[];
}
export const siteConfig: SiteConfig = {
    name: "Aashutosh Bista",
    role: "AI Learnee",
    navLinks: [
        {label: 'home', path: '/'},
        {label: 'projects', path: '/projects'},
        {label: 'about', path: '/about'},
        {label: 'contact', path: '/contact'},
    ],
    socials: [
        {label: "github", link: "https://github.com/Aashutosh347777"},
        {label: "linkedin", link: "https://www.linkedin.com/in/aashutosh-bista-1946892a1/"},
        {label: "email", link: "mailto:aashutoshbista998@gmail.com"}
    ],
    projects: [
        {
            slug: "Project 1",
            title: "Project 1",
            description: "A simple project",
            tags : ["Used stack 1","Used stack 2"],
            demoUrl: "https://something",
            githubUrl: "https://githuburl",
            image: "",
            featured: true
        },

        {
            slug: "Project 2",
            title: "Project 2",
            description: "A Complex project",
            tags : ["Used stack 1","Used stack 2"],
            demoUrl: "",
            githubUrl: "",
            image: "",
            featured: true   
        },

        {
            slug: "Project 3",
            title: "Project 3",
            description: "A decent project",
            tags : ["Used stack 1","Used stack 2"],
            demoUrl: "",
            githubUrl: "",
            image: "",
            featured: true  
        },

        {
            slug: "Project 4",
            title: "Project 4",
            description: "A decent project",
            tags : ["Used stack 1","Used stack 2"],
            demoUrl: "",
            githubUrl: "",
            image: "",
            featured: false  
        }
    ]

}

export const siteConfig2: SiteConfig = {
    name: "Aashutosh Bista",
    role: "AI Learnee",
    navLinks: [
        {label: 'home', path: '/'},
        {label: 'projects', path: '/projects'},
        {label: 'about', path: '/about'},
        {label: 'contact', path: '/contact'},
    ],
    socials: [
        {label: "github", link: "https://github.com/Aashutosh347777"},
        {label: "linkedin", link: "https://www.linkedin.com/in/aashutosh-bista-1946892a1/"},
        {label: "email", link: "mailto:aashutoshbista998@gmail.com"}
    ],
    projects: [
        
    ]

}