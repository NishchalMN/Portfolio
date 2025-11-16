import { Card } from '@/components/ui/card';
import { Mail, Github, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold mb-8 text-center">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        
        <Card className="p-8 shadow-glow text-center">
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Feel free to reach out if you'd like to discuss opportunities, collaborate on projects,
            or just connect!
          </p>

          <div className="border-t border-border pt-6">
            <div className="flex flex-wrap gap-6 justify-center items-center">
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
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
