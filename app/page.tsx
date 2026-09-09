import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import EducationSkills from "@/components/EducationSkills";
import FeaturedExperience from "@/components/FeaturedExperience";
import ImpactStrip from "@/components/ImpactStrip";
import Ledger from "@/components/Ledger";
import Leadership from "@/components/Leadership";
import EventsPeople from "@/components/EventsPeople";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <EducationSkills />
      <FeaturedExperience />
      <ImpactStrip />
      <Ledger />
      <Leadership />
      <EventsPeople />
      <Contact />
    </main>
  );
}
