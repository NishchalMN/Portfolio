import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Phone, Send, Calendar, MapPin } from 'lucide-react';

const socialLinks = [
  {
    name: 'Email',
    href: 'mailto:nmarur21@umd.edu',
    icon: Mail,
    label: 'nmarur21@umd.edu',
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/nishchal-mn',
    icon: Linkedin,
    label: '/in/nishchal-mn',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/NishchalMN',
    icon: Github,
    label: 'NishchalMN',
  },
  {
    name: 'Phone',
    href: 'tel:+12404381916',
    icon: Phone,
    label: '(240) 438-1916',
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 lg:px-12 relative">
      <div className="absolute inset-0 dot-grid opacity-30" />

      <div className="container mx-auto max-w-4xl relative">
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-mono text-primary mb-2 block">05</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Let's Connect
          </h2>
        </motion.div>

        {/* Main Card */}
        <motion.div
          className="p-8 md:p-10 bg-card/50 rounded-2xl border border-border/50"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {/* Intro */}
          <p className="text-lg text-muted-foreground max-w-xl mb-8">
            I am always interested in discussing new opportunities, collaborating on ML projects,
            or just connecting with fellow engineers and researchers.
          </p>

          {/* Status Badges */}
          <div className="flex flex-wrap gap-3 mb-10">
            <div className="status-active px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30">
              <span className="text-sm font-medium text-emerald-400">Open to Opportunities</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/30 border border-border/50">
              <Calendar size={14} className="text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Available May 2026</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/30 border border-border/50">
              <MapPin size={14} className="text-muted-foreground" />
              <span className="text-sm text-muted-foreground">College Park, MD</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-start mb-10">
            <motion.a
              href="mailto:nmarur21@umd.edu"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Send size={16} />
              Get In Touch
            </motion.a>
          </div>

          {/* Divider */}
          <div className="section-divider mb-10" />

          {/* Social Links Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target={link.name !== 'Email' && link.name !== 'Phone' ? '_blank' : undefined}
                  rel={link.name !== 'Email' && link.name !== 'Phone' ? 'noopener noreferrer' : undefined}
                  className="group flex items-center gap-4 p-4 bg-muted/20 border border-border/30 rounded-xl transition-all hover:border-primary/30 hover:bg-muted/30"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  whileHover={{ x: 4 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <Icon size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div className="flex-grow">
                    <span className="text-xs font-mono text-muted-foreground block">{link.name}</span>
                    <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      {link.label}
                    </span>
                  </div>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground">
                    →
                  </span>
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
