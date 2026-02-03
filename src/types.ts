/**
 * Percentage type that ensures values are between 0 and 100
 * @example "85%" | "100%" | "0%"
 */
export type Percentage = `${number}%`;

/**
 * Available technology stacks used in projects
 */
export type TechStack =
  | "React"
  | "Vue.js"
  | "Next.js"
  | "Nest.js"
  | "TypeScript"
  | "JavaScript"
  | "Node.js"
  | "GraphQL"
  | "REST APIs"
  | "TailwindCSS"
  | "Chakra UI"
  | "Postgres"
  | "MySQL"
  | "MongoDB"
  | "Firebase"
  | "AWS"
  | "Docker"
  | "Vite"
  | "Python"
  | "Django"
  | "Prisma"
  | "Express.js"
  | "Solidity"
  | "DynamoDB"
  | "Google Firestore"
  | "SQLite"
  | "Github Actions"
  | "CircleCI"
  | "Vercel"
  | "Component libraries"
  | "Flask"
  | "Zustand"
  | "ethers.js"
  | "Metamask"
  | "Wagmi"
  | "RabbitMQ"
  | "Redux"
  | "HTML/CSS"
  | "Regular Expressions"
  | "Xpath"
  | "Framer"
  | "Ms Excel"
  | "Viem"
  | "OpenAI"
  | "Tanstack Query"
  | "Tanstack Router"
  | "Supabase"
  | "Redis"
  | "Apollo Client"
  | "Apollo Server"
  | "Sass"
  | "Styled Components"
  | "Ethers.js"
  | "Hardhat"
  | "Foundry"
  | "The Graph"
  | "IPFS"
  | "Socket.io"
  | "Fastify";

/**
 * External social and professional links
 */
export interface ExternalLinks {
  github: string;
  linkedIn: string;
  twitter: string;
  facebook: string;
  stackoverflow: string;
  repositories: string;
  instagram: string;
  calLink: string;
  email: string;
  telegram: string;
  sneakerHeadImage: string;
}

/**
 * Work or education experience entry
 */
export interface Experience {
  /** Whether this is the current position */
  isCurrent: boolean;
  /** Type of experience */
  type: "work" | "education";
  /** Position or degree title */
  title: string;
  /** Company or institution name */
  company: string;
  /** URL to company/institution profile */
  companyUrl: string;
  /** Company/institution logo file name */
  companyLogo: string;
  /** Location of the experience */
  location: string;
  /** Start date of the experience */
  startDate: string;
  /** End date of the experience (optional if current) */
  endDate?: string;
  /** List of achievements or responsibilities */
  description: string[];
  /** Nature of the work (if applicable) */
  workType?:
  | "Full-time"
  | "Part-time"
  | "Contract"
  | "Internship"
  | "Consultancy";
  /** List of technologies used */
  technologies?: TechStack[];
  /** Whether the experience is educational */
  isEducational?: boolean;
}

/**
 * Portfolio project entry
 */
export interface PortfolioProject {
  /** Project title */
  title: string;
  /** Detailed project description */
  description: string;
  /** Optional deeper dive into how the app works */
  moreDetails?: string;
  /** Project preview image file name */
  image: string;
  /** Live demo URL */
  preview: string;
  /** Optional GitHub repository URL */
  github?: string;
  /** Technologies used in the project */
  stacks: TechStack[];
  /** Whether the project is completed */
  completed: boolean;
  /** Optional link to smart contracts code if applicable */
  contract?: string;
  /** Project category for filtering */
  category?: ProjectCategory;
  /** Optional custom text for the demo button */
  demoButtonText?: string;
  /** Optional custom icon for the demo button */
  demoButtonIcon?: React.ElementType;
}

/**
 * Project categories for filtering
 */
export type ProjectCategory = "Web3" | "Full Stack" | "Frontend" | "Backend";

/**
 * Valid skill names used in the portfolio
 * Update this type when adding new skills to data.ts
 */
export type SkillName =
  // Backend
  | "Express.js/Fastify"
  | "Apollo GraphQL"
  | "Nest.js"
  | "Django"
  | "Flask"
  // Frontend
  | "Vite/Next.js"
  | "Tanstack Query/Router"
  | "Redux/Zustand"
  | "Tailwind/ChakraUI"
  | "Vue.js"
  // Databases/DevOps
  | "Prisma ORM"
  | "Google Firebase"
  | "Supabase"
  | "Docker"
  | "Github Actions"
  // Web3
  | "Wagmi"
  | "ethers.js"
  | "Viem"
  | "WalletConnect"
  | "Foundry";

/**
 * Individual skill entry
 */
export interface Skill {
  /** Name of the technology or skill */
  name: SkillName;
  /** Proficiency level as a percentage */
  level: Percentage;
}

/**
 * Categorized technical skills
 */
export interface Skills {
  /** Backend development skills */
  backend: Skill[];
  /** Frontend development skills */
  frontend: Skill[];
  /** Database technology skills */
  infra?: Skill[];
  /** DevOps and deployment skills */
  "databases/devops"?: Skill[];
  /** Web3 and blockchain skills */
  web3?: Skill[];
}

/**
 * Testimonial entry
 */
export interface Testimonial {
  /** Full name of the person giving the testimonial */
  name: string;
  /** Job title */
  role: string;
  /** Profile image file name */
  image: string;
  /** Date of the testimonial */
  date: string;
  /** Company name */
  company: string;
  /** Relationship level (e.g., "Directly managed", "Peer", etc.) */
  level: string;
  /** The testimonial quote as an array of paragraphs */
  quote: string[];
  /** Optional LinkedIn profile URL */
  linkedInUrl?: string;
  /** Optional background image for the testimonial card */
  bgImage?: string;
}

export interface NavigationItem {
  name: string;
  href: string;
  isActive: boolean;
}
