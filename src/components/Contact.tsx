import { Card } from '@/components/ui/card';
import { Mail, Github, Linkedin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-4 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[400px] bg-gradient-to-t from-primary/10 via-secondary/5 to-transparent blur-3xl -z-10" />

      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-5xl font-bold mb-8">
          Ready to build <span className="gradient-text">something amazing?</span>
        </h2>
        
        <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
          I'm currently looking for full-time Machine Learning Engineering roles starting <span className="text-foreground font-semibold">May 2026</span>. 
          If you have a complex data problem or just want to chat about the latest in AI, my inbox is open.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-12">
            <a href="mailto:nmarur21@umd.edu" className="group">
              <Card className="p-6 glass-card hover:bg-primary/10 transition-all border-primary/20 flex items-center justify-center gap-4 h-full">
                <div className="p-3 rounded-full bg-primary/10 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-muted-foreground">Email Me</p>
                  <p className="font-semibold">nmarur21@umd.edu</p>
                </div>
              </Card>
            </a>

            <a href="tel:+12404381916" className="group">
              <Card className="p-6 glass-card hover:bg-secondary/10 transition-all border-secondary/20 flex items-center justify-center gap-4 h-full">
                <div className="p-3 rounded-full bg-secondary/10 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-secondary" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-muted-foreground">Call Me</p>
                  <p className="font-semibold">+1 (240) 438-1916</p>
                </div>
              </Card>
            </a>
        </div>

        <div className="flex justify-center gap-8">
          <SocialLink href="https://linkedin.com/in/nishchal-mn" icon={<Linkedin />} label="LinkedIn" />
          <SocialLink href="https://github.com/NishchalMN" icon={<Github />} label="GitHub" />
        </div>
      </div>
    </section>
  );
};

const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-4 rounded-full bg-background/50 border border-white/5 hover:border-primary/50 hover:text-primary transition-all hover:scale-110 shadow-lg"
    aria-label={label}
  >
    {icon}
  </a>
);

export default Contact;