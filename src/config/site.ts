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
    email: string;
    role: string;
    bio : string;
    skills: string[];
    navLinks: NavLink[];
    socials: Social[];
    projects: Project[];
}
export const siteConfig: SiteConfig = {
    name: "Aashutosh Bista",
    email: "aashutoshb803@gmail.com",
    role: "AI Learnee",
    bio: "Aashutosh Bista is an ambitious and technically proficient Artificial Intelligence professional with a proven track record of translating complex algorithmic theories into real-world software solutions. Having recently completed a rigorous 9-month tenure as an Artificial Intelligence Intern at [Company Name], Aashutosh has developed a deep, practical understanding of building, deploying, and optimizing intelligent systems within enterprise environments.During this extended internship, Aashutosh was not just a learner but a key contributor to the development lifecycle. He actively collaborated with cross-functional teams of data scientists, software engineers, and product managers to design and fine-tune state-of-the-art AI models. From engineering robust data pipelines and preprocessing massive datasets to implementing machine learning frameworks and optimizing neural network architectures, Aashutosh gained hands-on experience navigating the nuances and edge cases of real-world AI deployment. This experience sharpened his skills in modern frameworks such as Python, TensorFlow, PyTorch, and Hugging Face, while instilling a strong foundation in MLOps best practices and cloud-based AI infrastructure.Driven by an insatiable curiosity about cognitive technologies, Aashutosh pairs his practical industry experience with a solid academic background in [Your Degree, e.g., Computer Science / Data Science / Artificial Intelligence] from [Your University]. His technical expertise spans deep learning, natural language processing (NLP), computer vision, and predictive analytics. Beyond technical execution, Aashutosh possesses a unique ability to bridge the gap between complex engineering concepts and business outcomes, ensuring that AI initiatives drive tangible value and seamless user experiences.As the AI landscape rapidly evolves, Aashutosh is actively seeking a full-time role as an AI Engineer, Machine Learning Engineer, or Data Scientist. He is eager to bring his fresh perspective, foundational industry experience, and relentless drive for innovation to a forward-thinking organization dedicated to pushing the boundaries of what intelligence can achieve.",
    skills: ['Python','Linux','Algorithms','skimage','sklearn','tensorflow','numpy','pytorch'],
    navLinks: [
        {label: 'home', path: '/'},
        {label: 'projects', path: '/projects'},
        {label: 'about', path: '/about'},
        {label: 'contact', path: '/contact'},
    ],
    socials: [
        {label: "github", link: "https://github.com/Aashutosh347777"},
        {label: "linkedin", link: "https://www.linkedin.com/in/aashutosh-bista-1946892a1/"},
        {label: "X", link: "https://x.com/bista_aash45194"}
    ],
    projects: [
        {
            slug: "Project 1",
            title: "Project 1",
            description: "A simple project",
            tags : ["Used stack 1","Used stack 2"],
            demoUrl: "https://something",
            githubUrl: "https://github.com",
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