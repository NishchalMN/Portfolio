import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Github, Download } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        
        <Card className="p-8 shadow-glow text-center">
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm actively seeking full-time Machine Learning Engineer positions starting May 2026. 
            Feel free to reach out if you'd like to discuss opportunities, collaborate on projects, 
            or just connect!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="gradient-primary shadow-glow" asChild>
              <a href="mailto:nmarur21@umd.edu">
                <Mail className="mr-2 h-5 w-5" />
                Email Me
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
          </div>
          
          <div className="flex gap-6 justify-center pt-6 border-t border-border">
            <a
              href="https://linkedin.com/in/nishchal-mn"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={20} />
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
              <span>nmarur21@umd.edu</span>
            </a>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
