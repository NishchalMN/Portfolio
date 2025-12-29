import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { href: 'https://github.com/NishchalMN', icon: Github, label: 'GitHub' },
    { href: 'https://linkedin.com/in/nishchal-mn', icon: Linkedin, label: 'LinkedIn' },
    { href: 'mailto:nmarur21@umd.edu', icon: Mail, label: 'Email' },
  ];

  return (
    <footer className="py-12 px-6 border-t border-border/30">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Tagline */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <a href="#hero" className="text-lg font-semibold text-foreground hover:text-primary transition-colors">
              Nishchal Marur
            </a>
            <p className="text-sm text-muted-foreground mt-1">
              ML Engineer · Building systems that ship
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.label !== 'Email' ? '_blank' : undefined}
                  rel={link.label !== 'Email' ? 'noopener noreferrer' : undefined}
                  className="w-10 h-10 rounded-lg bg-muted/30 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
                  whileHover={{ y: -2 }}
                  aria-label={link.label}
                >
                  <Icon size={18} />
                </motion.a>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          className="mt-8 pt-6 border-t border-border/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <p>Built with React + Tailwind</p>
          <p>&copy; {currentYear} Nishchal Marur</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
