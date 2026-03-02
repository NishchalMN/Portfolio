import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import SectionReveal from '@/components/SectionReveal';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <SectionReveal><About /></SectionReveal>
      <SectionReveal><Experience /></SectionReveal>
      <SectionReveal><Projects /></SectionReveal>
      <SectionReveal><Skills /></SectionReveal>
      <SectionReveal><Education /></SectionReveal>
      <SectionReveal><Contact /></SectionReveal>
      <Footer />
    </div>
  );
};

export default Index;
