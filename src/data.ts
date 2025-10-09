import type {
  ExternalLinks,
  Experience,
  PortfolioProject,
  Skills,
  Testimonial,
} from "./types";

export const externalLinks: ExternalLinks = {
  github: "https://github.com/jillo-abdullahi",
  linkedIn: "https://linkedin.com/in/jilloabdullahi/",
  twitter: "https://x.com/shrewd_turtle",
  facebook: "https://www.facebook.com/p/Shrewd-Turtle-61570536062535/",
  stackoverflow: "https://stackoverflow.com/users/7300926/jillo-abdullahi",
  repositories: "https://github.com/jillo-abdullahi?tab=repositories",
  instagram: "https://www.instagram.com/jillo_woche/",
  calLink: "https://cal.com/jillowoche/15min",
  email: "jayloabdullahi@gmail.com",
  telegram: "https://t.me/shrewdTurtle",
};

export const experiences: Experience[] = [
  {
    isCurrent: true,
    type: "work",
    workType: "Full-time",
    title: "Senior Developer FE (React)",
    company: "Rainforest Alliance",
    companyUrl: "https://www.linkedin.com/company/rainforest-alliance",
    companyLogo: "rainforestLogo.jpg",
    location: "Nairobi, Kenya - Hybrid",
    date: "Oct 2025 - present",
    description: [
      "Turning coffee into code and generally making the world a better place.",
    ],
    technologies: ["React", "TypeScript"],
  },

  {
    isCurrent: false,
    type: "work",
    workType: "Contract",
    title: "Full Stack Software Engineer",
    company: "GasHawk",
    companyUrl: "https://www.linkedin.com/company/gashawk/",
    companyLogo: "gashawkLogo.jpeg",
    location: "Remote",
    date: "Apr 2024 - Aug 2025",
    description: [
      "Rebuilt and redesigned the core web application (React, TypeScript), improving reliability and reducing load times for a smoother user experience.",
      "Implemented a secure authentication system and optimized REST APIs, cutting latency and eliminating recurring timeout errors.",
      "Developed multi-chain interoperability and a quota plan system, enabling seamless support across multiple EVM-compatible networks.",
      "Enhanced the Framer-powered marketing site with a streamlined gas savings checker, increasing developer engagement and improving product visibility.",
    ],
    technologies: [
      "React",
      "Chakra UI",
      "Zustand",
      "TypeScript",
      "Wagmi",
      "ethers.js",
      "Express.js",
      "Postgres",
      "Framer",
    ],
  },
  {
    isCurrent: false,
    type: "work",
    workType: "Contract",
    title: "Full Stack Software Engineer",
    company: "IOTA",
    companyUrl: "https://www.linkedin.com/company/iotafoundation/",
    companyLogo: "iotaLogo.jpeg",
    location: "Nairobi, Kenya",
    date: "Nov 2023 - Mar 2024",
    description: [
      "Built backend systems to automate the exchange of SPS documents between IOTA and partners, reducing manual steps and improving process reliability.",
      "Revamped the TLIP web app frontend with React and TypeScript, enhancing usability and delivering a smoother, more responsive user experience.",
    ],
    technologies: ["React", "TypeScript", "DynamoDB", "Express.js", "RabbitMQ"],
  },
  {
    isCurrent: false,
    type: "work",
    workType: "Contract",
    title: "Full Stack Software Engineer",
    company: "Syndicate",
    companyUrl: "https://www.linkedin.com/company/syndicate-protocol/",
    companyLogo: "syndicateLogo.jpeg",
    location: "Remote",
    date: "Apr 2021 - Mar 2023",
    description: [
      "Built and deployed a production-ready Web3 dApp in under 3 months (TypeScript, React, Ethereum/Polygon), accelerating Syndicate's go-to-market timeline.",
      "Launched Collectives, enabling NFT-based communities to organize around generative art and driving early engagement among creators and collectors.",
      "Designed and delivered a GraphQL backend for storing off-chain data in just one month, improving data accessibility and reducing integration complexity.",
      "Increased smart contract reliability by implementing a comprehensive automated testing suite, reducing the risk of regressions and strengthening security.",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "GraphQL",
      "TailwindCSS",
      "Redux",
      "Postgres",
      "Solidity",
      "ethers.js",
      "Metamask",
    ],
  },
  {
    isCurrent: false,
    type: "work",
    workType: "Full-time",
    title: "Front-end Software Engineer",
    company: "Cellulant",
    companyUrl: "https://www.linkedin.com/company/cellulant/",
    companyLogo: "cellulantLogo.jpeg",
    location: "Nairobi, Kenya",
    date: "Nov 2019 - Mar 2021",
    description: [
      "Improved accessibility and usability of payment apps by redesigning flows in React/Next.js.",
      "Optimized checkout UX across 6+ payment options, leading to smoother transaction completion.",
    ],
    technologies: ["React", "Redux", "Next.js", "TypeScript", "Express.js"],
  },
  {
    isCurrent: false,
    type: "work",
    workType: "Full-time",
    title: "Full Stack Software Engineer",
    company: "Andela",
    companyUrl: "https://www.linkedin.com/company/andela/",
    companyLogo: "andelaLogo.jpeg",
    location: "Nairobi, Kenya",
    date: "Nov 2018 - Sep 2019",
    description: [
      "Delivered multiple front-end applications with ReactJS on tight sprint cycles, enabling faster product iterations and improving user experience.",
      "Developed and deployed a REST API with Python/Django that supported scalable data handling and reduced backend response times under production load.",
    ],
    technologies: ["React", "TypeScript", "Django", "Postgres"],
  },
  {
    isCurrent: false,
    type: "work",
    workType: "Full-time",
    title: "Team Leader",
    company: "Sama",
    companyUrl: "https://www.linkedin.com/company/sama-ai/",
    companyLogo: "samaLogo.jpeg",
    location: "Nairobi, Kenya",
    date: "Jun 2016 - Nov 2018",
    description: [
      "Led a 22-person team in executing a large-scale web crawling project for Glassdoor.",
      "Coordinated workflows, evaluated team performance, and delivered constructive feedback that improved accuracy and efficiency.",
    ],
    technologies: [
      "JavaScript",
      "HTML/CSS",
      "Ms Excel",
      "Regular Expressions",
      "Xpath",
    ],
  },
  {
    isCurrent: false,
    type: "work",
    workType: "Full-time",
    title: "Quality Analyst",
    company: "Sama",
    companyUrl: "https://www.linkedin.com/company/sama-ai/",
    companyLogo: "samaLogo.jpeg",
    location: "Nairobi, Kenya",
    date: "Nov 2015 - May 2016",
    description: [
      "Improved quality across multiple work streams by analyzing compliance gaps and recommending corrective actions.",
      "Boosted agent performance by assessing transactions, giving feedback, and driving measurable quality gains.",
      "Delivered clear quality reports to managers and stakeholders, ensuring consistent performance standards.",
    ],
    technologies: [
      "JavaScript",
      "HTML/CSS",
      "Ms Excel",
      "Regular Expressions",
      "Xpath",
    ],
  },
  {
    isCurrent: false,
    type: "work",
    workType: "Full-time",
    title: "Agent Junior Developer",
    company: "Sama",
    companyUrl: "https://www.linkedin.com/company/sama-ai/",
    companyLogo: "samaLogo.jpeg",
    location: "Nairobi, Kenya",
    date: "July 2015 - Nov 2015",
    description: [
      "Optimized and maintained client job feeds using HTML, CSS, XPaths, and regular expressions, ensuring accurate integrations and reliable updates.",
      "Streamlined error resolution processes by reviewing feed issues, escalating complex cases, and recommending improvements that enhanced data quality and detection.",
      "Delivered consistent, high-quality results in a fast-paced environment by verifying large data volumes, eliminating duplication, and supporting overall team performance.",
    ],
    technologies: [
      "JavaScript",
      "HTML/CSS",
      "Ms Excel",
      "Regular Expressions",
      "Xpath",
    ],
  },
  {
    isCurrent: false,
    type: "education",
    title: "Bachelor of Science in Information Technology",
    company: "Jomo Kenyatta University of Agriculture and Technology",
    companyUrl: "https://www.linkedin.com/school/jkuat/",
    companyLogo: "jkuatLogo.jpeg",
    location: "Nairobi, Kenya",
    date: "Jan 2012 - Jan 2015",
    description: ["Graduated with First Class Honors."],
    isEducational: true,
  },
];

export const portfolioProjects: PortfolioProject[] = [
  {
    title: "dApp for managing GasHawk transactions",
    description:
      "GasHawk is saving retails and institutions up to 95% on transaction gas fees on Ethereum, Optimism, and Base.",
    image: "gashawk.png",
    preview: "https://app.gashawk.io/",
    stacks: ["React", "Vite", "Chakra UI", "TypeScript", "Express.js"],
    completed: true,
  },
  {
    title: "Ethereum dApp for AI insights into any wallet",
    description:
      "A comprehensive Ethereum wallet analytics application that provides AI-powered insights into blockchain activity.",
    image: "blockwise.png",
    preview: "https://blockwise-ai.vercel.app/",
    github: "https://github.com/jillo-abdullahi/blockwise-ai",
    stacks: ["React", "Vite", "TailwindCSS", "TypeScript", "OpenAI", "Viem"],
    completed: true,
  },
  {
    title: "Ballot app for decentralized voting",
    description:
      "A modern, decentralized voting platform built on Ethereum that enables communities to create and vote on proposals.",
    image: "ballot.png",
    preview: "https://ballot-box-green.vercel.app/",
    github: "https://github.com/jillo-abdullahi/ballotBox",
    contract: "https://github.com/jillo-abdullahi/ballotBox-contracts",
    stacks: ["React", "Vite", "Solidity", "TailwindCSS", "TypeScript", "Wagmi"],
    completed: true,
  },
  {
    title: "A link sharing app for developers",
    description:
      "A link-sharing app for developers. You can now consolidate and share your links to different platforms with just one URL.",
    image: "devlinks.png",
    preview: "https://my-links-amber.vercel.app/",
    github: "https://github.com/jillo-abdullahi/my-links",
    stacks: ["Nest.js", "Vue.js", "TailwindCSS", "TypeScript", "Postgres"],
    completed: true,
  },
  {
    title: "Memory Game",
    description:
      "A fun memory game where players try to match pairs against each other or against the CPU.",
    image: "memory.png",
    preview: "https://memory-game-green-nine.vercel.app/",
    github: "https://github.com/jillo-abdullahi/memory-game",
    stacks: ["React", "TypeScript", "Next.js", "TailwindCSS"],
    completed: true,
  },
  {
    title: "Dictionary web app solution",
    description:
      "A dictionary web app built with TailwindCSS and Next.js. It uses a free Dictionary API to fetch data for the searched word. It also uses the Web Speech API to play the audio file for the searched word.",
    image: "dictionary.png",
    preview: "https://dictionary-web-app-ashy.vercel.app/",
    github: "https://github.com/jillo-abdullahi/dictionary-web-app",
    stacks: ["React", "TypeScript", "Next.js", "TailwindCSS"],
    completed: true,
  },
];

export const skills: Skills = {
  backend: [
    { name: "Express.js", level: "85%" },
    { name: "GraphQL", level: "90%" },
    { name: "Nest.js", level: "70%" },
    { name: "Django", level: "60%" },
    { name: "Flask", level: "50%" },
  ],
  frontend: [
    { name: "React", level: "90%" },
    { name: "Redux/Zustand", level: "90%" },
    { name: "Next.js", level: "85%" },
    { name: "Vue.js", level: "80%" },
    { name: "TailwindCSS", level: "90%" },
  ],
  "databases/devops": [
    { name: "Postgres", level: "80%" },
    { name: "MySQL", level: "75%" },
    { name: "Google Firebase", level: "80%" },
    { name: "Docker", level: "70%" },
    { name: "Github Actions", level: "80%" },
  ],
  web3: [
    { name: "Wagmi", level: "85%" },
    { name: "ethers.js", level: "85%" },
    { name: "Foundry", level: "70%" },
    { name: "Viem", level: "80%" },
    { name: "WalletConnect", level: "85%" },
  ],
};

export const testimonials: Testimonial[] = [
  {
    name: "Dr. Daniel Pfeffer",
    image: "daniel.jpeg",
    role: "CTO",
    date: "July 31, 2025",
    level: "Directly managed Jillo",
    company: "GasHawk",
    quote: `I had the pleasure of working with Jillo Woche at GasHawk, where he was our go-to Web Developer from April 2024 to August 2025. During that time, he made a massive impact across both the frontend and backend of our product.

Jillo fully refactored our web application (React with ChakraUI) and significantly elevated the user experience with a keen eye for design language and user flow. On the backend, he contributed to our Node.js codebase, working with REST APIs (OpenAPI) and WebSockets - bringing clarity and quality to the entire stack.

What stood out most was Jillo's ability to translate vague feature ideas into actionable tasks and even go beyond the brief to improve our product. He worked seamlessly across the frontend, backend, and leadership teams - bringing smart ideas, strong execution, and high-quality code to everything he touched. His pull request reviews were thoughtful and often included insights that benefited the whole team.

Jillo doesn't just "do the job"- he owns it. He operates with autonomy, yet never in a silo. Communication was always crisp, feedback loops short, and his drive to iterate quickly without sacrificing quality made him a very valuable asset of our development efforts.

He's a fantastic hire for any team looking for a versatile, proactive, and high-impact developer. While he's currently working in the web3 space, his skills and mindset are broadly applicable across any tech stack or industry.

Highly recommended!`,
  },
  {
    name: "Nathan Hausman",
    role: "CTO",
    image: "nathan.jpeg",
    date: "March 7, 2023",
    level: "Directly managed Jillo",
    company: "Syndicate",
    quote:
      "Jillo's positive attitude resonates across the engineering teams he works on! In addition to being a great fullstack engineer technically, Jillo is never afraid to take on new project scope and is able to energize those around him towards action. During his 2 year tenure on my team, Jillo successfully lead the development of numerous new components and user flows and ensured the quality of his work and those around him. In short, you'd be lucky to have Jillo on your team!",
  },
];
