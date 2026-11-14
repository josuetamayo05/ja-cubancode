import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Projects from "../components/sections/Projects";
import Services from "../components/sections/Services";
import Process from "../components/sections/Process";
import FAQ from "../components/sections/FAQ";
import Contact from "../components/sections/Contact";
import { siteData } from "../data/siteData";
import { useDocumentTitle } from "../lib/useDocumentTitle";

export default function HomePage() {
  useDocumentTitle();

  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Services />
      <Process />
      <FAQ items={siteData.faq} />
      <Contact />
    </>
  );
}
