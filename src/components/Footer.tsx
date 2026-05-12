import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-border/30">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p>Built with React + Tailwind</p>
          <p>&copy; {currentYear} Nishchal Marur</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
