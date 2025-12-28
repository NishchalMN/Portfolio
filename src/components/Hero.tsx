import { Button } from '@/components/ui/button';
import { ArrowDown, Download, Github, Mail, MapPin, Phone, Linkedin } from 'lucide-react';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "Machine Learning Engineer II";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-16 px-4 relative overflow-hidden"
    >
      {/* Dynamic Background Gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-secondary/20 blur-[120px] animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto text-center relative z-10">
        <div className="inline-block mb-4 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium animate-fade-in">
          🚀 Open to full-time roles starting May 2026
        </div>

        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
          Hi, I'm <span className="gradient-text">Nishchal!</span>
        </h1>

        <div className="h-12 mb-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-muted-foreground font-light">
            {text}<span className="animate-pulse">|</span>
          </h2>
        </div>
        
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Specializing in <span className="text-foreground font-medium">Multimodal LLMs</span>, <span className="text-foreground font-medium">Computer Vision</span>, and <span className="text-foreground font-medium">MLOps</span>. 
          Translating complex data into production-ready intelligence at the University of Maryland.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="gradient-primary shadow-glow hover:scale-105 transition-transform duration-200 text-white border-0" asChild>
            <a href="#projects">View Projects</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="hover:bg-secondary/10 hover:text-secondary hover:border-secondary transition-all duration-200"
          >
            <a href="/Nishchal_Resume.pdf" target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-5 w-5" />
               Resume
            </a>
          </Button>
        </div>

        {/* Social Icons Bar */}
        <div className="flex items-center justify-center gap-6 p-4 rounded-2xl bg-background/50 backdrop-blur-sm border border-border/50 inline-flex">
          <SocialLink href="https://github.com/NishchalMN" icon={<Github size={20} />} label="GitHub" />
          <SocialLink href="https://linkedin.com/in/nishchal-mn" icon={<Linkedin size={20} />} label="LinkedIn" />
          <SocialLink href="mailto:nmarur21@umd.edu" icon={<Mail size={20} />} label="Email" />
          <div className="w-px h-6 bg-border mx-2"></div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin size={16} className="text-primary" />
            <span>College Park, MD</span>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground/50">
        <ArrowDown size={24} />
      </div>
    </section>
  );
};

const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-lg"
    aria-label={label}
  >
    {icon}
  </a>
);

export default Hero;