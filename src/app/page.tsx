import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { OpenSource } from "@/components/open-source";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { PageShell } from "@/components/page-shell";

export default function Home() {
  return (
    <PageShell>
      <Nav />
      <main id="main">
        <Hero />
        <Projects />
        <About />
        <Experience />
        <OpenSource />
        <Contact />
      </main>
      <Footer />
    </PageShell>
  );
}
