import { Button } from '@/components/ui/button';
import { ArrowDown, Download, Github, Mail, MapPin, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';

const Hero = () => {
  const titles = [
    'Machine Learning Engineer',
    'Data Scientist',
    'MLOps Engineer',
    'Applied Scientist'
  ];

  const [titleIndex, setTitleIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsExiting(true);
      setTimeout(() => {
        setTitleIndex((prev) => (prev + 1) % titles.length);
        setIsExiting(false);
      }, 300); // Exit animation duration
    }, 3100); // Total duration for each title
    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 relative hero-background"
      style={{
        WebkitBackgroundSize: 'cover',
        backgroundAttachment: 'scroll'
      }}
    >
      <div className="absolute inset-0 bg-background/85 sm:bg-background/75"></div>
      <div className="container mx-auto text-center animate-fade-in relative z-10">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
          Hi, I'm <span className="gradient-text">Nishchal!</span>
        </h1>
        
        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-muted-foreground mb-5 min-h-[2.5rem] flex items-center justify-center overflow-hidden">
          <span className="relative inline-block">
            <span
              key={titleIndex}
              className={`inline-block ${isExiting ? 'animate-slide-fade-exit' : 'animate-slide-fade-enter'}`}
            >
              {titles[titleIndex]}
            </span>
          </span>
        </h2>
        
        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Multimodal LLMs • Computer Vision • MLOps<br />
          4+ Years ML Experience | MS in ML at University of Maryland<br /> 
          Open to full-time roles starting May 2026 
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-9">
          <Button size="lg" className="gradient-primary shadow-glow gradient-hover" asChild>
            <a href="#experience">View My Work</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="border-transparent gradient-hover transition-all"
            style={{
              backgroundImage: 'linear-gradient(hsl(222 47% 11%), hsl(222 47% 11%)), linear-gradient(90deg, hsl(163, 64%, 60%) 0%, hsl(220, 74%, 39%) 50%, hsl(163, 64%, 60%) 100%)',
              backgroundOrigin: 'border-box',
              backgroundClip: 'padding-box, border-box',
              backgroundSize: '200% 100%',
            }}
          >
            <a href="/Nishchal_Resume.pdf" target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-5 w-5" />
               Resume
            </a>
          </Button>
        </div>

        <div className="flex gap-6 justify-center mb-4">
          <a
            href="tel:+12404381916"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Phone"
          >
            <Phone size={24} />
          </a>
          <a
            href="mailto:nmarur21@umd.edu"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
          <a
            href="https://linkedin.com/in/nishchal-mn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center justify-center"
            aria-label="LinkedIn"
          >
            <span className="font-bold text-2xl leading-none" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 700 }}>in</span>
          </a>
          <a
            href="https://github.com/NishchalMN"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
        </div>

        <div className="flex items-center justify-center gap-2 text-muted-foreground">
          <MapPin size={20} className="text-primary" />
          <span className="text-sm">College Park, MD, USA</span>
        </div>
        
        <a
          href="#about"
          className="inline-block mt-16 text-muted-foreground hover:text-primary transition-colors animate-bounce"
          aria-label="Scroll to about section"
        >
          <ArrowDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
