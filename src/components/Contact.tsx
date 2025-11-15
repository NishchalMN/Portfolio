import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Github, Download, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        
        <Card className="p-8 shadow-glow text-center">
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm actively seeking full-time Machine Learning related roles starting May 2026.
            Feel free to reach out if you'd like to discuss opportunities, collaborate on projects,
            or just connect!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="gradient-primary shadow-glow gradient-hover" asChild>
              <a href="mailto:nmarur21@umd.edu">
                <Mail className="mr-2 h-5 w-5" />
                Email Me
              </a>
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
                Download Resume
              </a>
            </Button>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-6 border-t border-border">
            <a
              href="https://linkedin.com/in/nishchal-mn"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="font-bold text-xl leading-none" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 700 }}>in</span>
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/NishchalMN"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <a
              href="mailto:nmarur21@umd.edu"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={20} />
              <span className="text-sm sm:text-base">nmarur21@umd.edu</span>
            </a>
            <a
              href="tel:+12404381916"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone size={20} />
              <span className="text-sm sm:text-base">(240) 438-1916</span>
            </a>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
