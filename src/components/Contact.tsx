import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Github, Linkedin, Phone, Send, Calendar, MapPin } from 'lucide-react';
import { staggerContainer, staggerItem, viewportConfig } from '@/lib/animations';

const socialLinks = [
  {
    name: 'Email',
    href: 'mailto:nmarur21@umd.edu',
    icon: Mail,
    label: 'nmarur21@umd.edu',
    color: 'hover:text-red-400 hover:border-red-400/50',
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/nishchal-mn',
    icon: Linkedin,
    label: '/in/nishchal-mn',
    color: 'hover:text-blue-400 hover:border-blue-400/50',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/NishchalMN',
    icon: Github,
    label: 'NishchalMN',
    color: 'hover:text-purple-400 hover:border-purple-400/50',
  },
  {
    name: 'Phone',
    href: 'tel:+12404381916',
    icon: Phone,
    label: '(240) 438-1916',
    color: 'hover:text-emerald-400 hover:border-emerald-400/50',
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-muted/10 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto max-w-4xl relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.span
            className="inline-block text-sm font-mono text-primary mb-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            {'<contact>'}
          </motion.span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Let's <span className="gradient-text">Connect</span>
          </h2>
        </motion.div>

        {/* Main CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Card className="relative overflow-hidden border-primary/30 bg-gradient-to-br from-card via-card to-primary/5">
            {/* Gradient accent line */}
            <div className="absolute top-0 left-0 right-0 h-1 gradient-primary" />

            <div className="p-8 md:p-10">
              {/* Intro */}
              <motion.div
                className="text-center mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
                  I'm always interested in discussing new opportunities, collaborating on ML projects,
                  or just connecting with fellow engineers and researchers.
                </p>
              </motion.div>

              {/* Status Badges */}
              <motion.div
                className="flex flex-wrap justify-center gap-3 mb-8"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-sm text-emerald-400 font-medium">Open to Opportunities</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border/50">
                  <Calendar size={14} className="text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Available May 2026</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border/50">
                  <MapPin size={14} className="text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">College Park, MD</span>
                </div>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                className="flex justify-center mb-10"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              >
                <motion.a
                  href="mailto:nmarur21@umd.edu"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    className="gradient-primary text-primary-foreground shadow-glow px-8 py-6 text-base font-semibold gap-2 group"
                  >
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    Get In Touch
                  </Button>
                </motion.a>
              </motion.div>

              {/* Divider */}
              <div className="relative mb-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border/50" />
                </div>
                <div className="relative flex justify-center">
                  <span className="px-4 text-sm text-muted-foreground bg-card">or reach out directly</span>
                </div>
              </div>

              {/* Social Links */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                className="grid sm:grid-cols-2 gap-3"
              >
                {socialLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      target={link.name !== 'Email' && link.name !== 'Phone' ? '_blank' : undefined}
                      rel={link.name !== 'Email' && link.name !== 'Phone' ? 'noopener noreferrer' : undefined}
                      variants={staggerItem}
                      className={`group flex items-center gap-4 p-4 rounded-xl bg-muted/30 border border-border/50 transition-all duration-300 ${link.color} hover:bg-muted/50`}
                      whileHover={{ x: 4 }}
                    >
                      <div className="w-10 h-10 rounded-lg bg-background/50 flex items-center justify-center group-hover:bg-background transition-colors">
                        <Icon size={20} className="text-muted-foreground group-hover:text-current transition-colors" />
                      </div>
                      <div className="flex-grow">
                        <span className="text-xs text-muted-foreground block">{link.name}</span>
                        <span className="text-sm font-medium text-foreground group-hover:text-current transition-colors">
                          {link.label}
                        </span>
                      </div>
                      <motion.div
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                        initial={{ x: -10 }}
                        whileHover={{ x: 0 }}
                      >
                        <span className="text-muted-foreground">→</span>
                      </motion.div>
                    </motion.a>
                  );
                })}
              </motion.div>
            </div>
          </Card>
        </motion.div>

        {/* Closing tag */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-mono text-primary/50">{'</contact>'}</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
