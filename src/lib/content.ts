import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Types for the content structure
export interface HeroData {
  title: string;
  subtitle: string;
  image: string;
  ctaText: string;
  ctaLink: string;
}

export interface AboutData {
  title: string;
  text: string;
  image: string;
}

export interface WorkflowStep {
  title: string;
  description: string;
  icon: string;
}

export interface WorkflowData {
  title: string;
  subtitle: string;
  steps: WorkflowStep[];
}

export interface ServiceItem {
  title: string;
  text: string;
  icon: string;
}

export interface ServicesData {
  title: string;
  subtitle: string;
  items: ServiceItem[];
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface TeamData {
  title: string;
  subtitle: string;
  description: string;
  members: TeamMember[];
}

export interface ContactData {
  title: string;
  subtitle: string;
  email: string;
  phone: string;
  address: string;
  formTitle: string;
}

export interface FooterLink {
  text: string;
  url: string;
}

export interface FooterData {
  copyright: string;
  links: FooterLink[];
}

export interface HomePageData {
  title: string;
  description: string;
  hero: HeroData;
  about: AboutData;
  workflow: WorkflowData;
  services: ServicesData;
  team: TeamData;
  contact: ContactData;
  footer: FooterData;
}

/**
 * Loads and parses the home page content from Markdown file
 * @returns Parsed home page data with frontmatter
 */
export function getHomePageContent(): HomePageData {
  const contentDirectory = path.join(process.cwd(), "content/pages");
  const filePath = path.join(contentDirectory, "home.md");

  // Read the markdown file
  const fileContents = fs.readFileSync(filePath, "utf8");

  // Parse the frontmatter using gray-matter
  const { data } = matter(fileContents);

  return data as HomePageData;
}

/**
 * Gets a specific section from the home page content
 * @param section - The section key to retrieve
 * @returns The section data
 */
export function getHomeSection<K extends keyof HomePageData>(
  section: K
): HomePageData[K] {
  const content = getHomePageContent();
  return content[section];
}

