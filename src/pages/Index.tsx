import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import SectionReveal from '@/components/SectionReveal';
import SiteBackground from '@/components/backgrounds/SiteBackground';

const Index = () => {
  return (
    <div className="min-h-screen">
      <SiteBackground />
      <Navbar />
      <Hero />
      <SectionReveal><About /></SectionReveal>
      <SectionReveal><Experience /></SectionReveal>
      <SectionReveal><Projects /></SectionReveal>
      <SectionReveal><Skills /></SectionReveal>
      <SectionReveal><Education /></SectionReveal>
      <SectionReveal><Contact /></SectionReveal>
    </div>
  );
};

export default Index;
