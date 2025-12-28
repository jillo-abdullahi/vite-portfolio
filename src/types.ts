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
  | "Tanstack Router";

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
  /** Time period of the experience */
  date: string;
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
}

/**
 * Project categories for filtering
 */
export type ProjectCategory = "Web3" | "Full Stack" | "Frontend" | "Backend";

/**
 * Individual skill entry
 */
export interface Skill {
  /** Name of the technology or skill */
  name: string;
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
