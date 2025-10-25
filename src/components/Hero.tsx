import { Button } from '@/components/ui/button';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto text-center animate-fade-in">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
          Hi, I'm <span className="gradient-text">Nishchal Marur</span>
        </h1>
        
        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-muted-foreground mb-6">
          Machine Learning Engineer
        </h2>
        
        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          3+ Years Production ML Experience | MS in ML at UMD | Seeking Full-Time Roles May 2026
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="gradient-primary shadow-glow" asChild>
            <a href="#projects">View Projects</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </a>
          </Button>
        </div>
        
        <div className="flex gap-6 justify-center">
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
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
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
