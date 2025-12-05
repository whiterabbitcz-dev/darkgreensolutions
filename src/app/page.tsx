import { getHomePageContent } from "@/lib/content";
import {
  Header,
  Hero,
  About,
  Workflow,
  Services,
  Team,
  Contact,
  Footer,
} from "@/components/sections";

export default function Home() {
  // Load content from Markdown file
  const content = getHomePageContent();

  // Navigation links for header
  const navLinks = [
    { text: "Služby", url: "#sluzby" },
    { text: "O nás", url: "#o-nas" },
    { text: "Tým", url: "#tym" },
    { text: "Kontakt", url: "#kontakt" },
  ];

  return (
    <>
      <Header links={navLinks} />
      <main>
        <Hero data={content.hero} />
        <About data={content.about} />
        <Workflow data={content.workflow} />
        <Services data={content.services} />
        <Team data={content.team} />
        <Contact data={content.contact} />
      </main>
      <Footer data={content.footer} />
    </>
  );
}
