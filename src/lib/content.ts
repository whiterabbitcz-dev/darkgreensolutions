import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Types matching the new content structure
export interface ThemeItem {
  title: string;
  text: string;
}

export interface ThemesData {
  sectionLabel: string;
  items: ThemeItem[];
}

export interface HeroData {
  title: string;
}

export interface AboutParagraph {
  text: string;
  bold?: boolean;
  underline?: boolean;
  boldWords?: string[];
}

export interface AboutData {
  sectionLabel: string;
  title: string;
  paragraphs: AboutParagraph[];
}

export interface ConsultantMember {
  name: string;
  image: string;
  bio: string;
}

export interface ConsultantsData {
  title: string;
  members: ConsultantMember[];
}

export interface FooterContact {
  title: string;
  company: string;
  street: string;
  city: string;
}

export interface FooterBilling {
  title: string;
  company: string;
  street: string;
  city: string;
  ico: string;
}

export interface FooterData {
  contact: FooterContact;
  billing: FooterBilling;
  copyright: string;
}

export interface HomePageData {
  title: string;
  description: string;
  logo?: string;
  hero: HeroData;
  themes: ThemesData;
  about: AboutData;
  consultants: ConsultantsData;
  footer: FooterData;
}

/**
 * Loads and parses the home page content from Markdown file
 */
export function getHomePageContent(): HomePageData {
  const contentDirectory = path.join(process.cwd(), "content/pages");
  const filePath = path.join(contentDirectory, "home.md");
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data } = matter(fileContents);
  return data as HomePageData;
}
