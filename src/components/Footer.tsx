import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      href: 'https://github.com/NishchalMN',
      icon: Github,
      label: 'GitHub',
    },
    {
      href: 'https://linkedin.com/in/nishchal-mn',
      icon: Linkedin,
      label: 'LinkedIn',
    },
    {
      href: 'mailto:nmarur21@umd.edu',
      icon: Mail,
      label: 'Email',
    },
  ];

  return (
    <footer className="relative py-12 px-4 border-t border-border/50 bg-gradient-to-t from-muted/10 to-transparent">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo & Tagline */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <a href="#hero" className="text-xl font-bold gradient-text inline-block mb-2">
              <span className="font-mono">&lt;</span>NM<span className="font-mono">/&gt;</span>
            </a>
            <p className="text-sm text-muted-foreground">
              ML Engineer building production systems
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.label !== 'Email' ? '_blank' : undefined}
                  rel={link.label !== 'Email' ? 'noopener noreferrer' : undefined}
                  className="w-10 h-10 rounded-lg bg-muted/50 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-muted transition-all"
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={link.label}
                >
                  <Icon size={18} />
                </motion.a>
              );
            })}
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="my-8 border-t border-border/30"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />

        {/* Bottom Row */}
        <motion.div
          className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="flex items-center gap-1">
            Built with <Heart size={14} className="text-red-400 inline" /> using React & Tailwind
          </p>
          <p>
            &copy; {currentYear} Nishchal Marur
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
