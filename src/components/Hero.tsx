import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, TrendingUp, Activity, BarChart3 } from 'lucide-react';

// Mini bar chart decoration
const MiniChart = ({ values, color = 'primary' }: { values: number[]; color?: string }) => {
  const colorClass = color === 'primary' ? 'bg-primary' : color === 'secondary' ? 'bg-secondary' : 'bg-accent';
  return (
    <div className="flex items-end gap-0.5 h-8">
      {values.map((v, i) => (
        <motion.div
          key={i}
          className={`w-1 rounded-t ${colorClass}`}
          style={{ opacity: 0.3 + (v / 100) * 0.7 }}
          initial={{ height: 0 }}
          animate={{ height: `${v}%` }}
          transition={{ delay: 1.5 + i * 0.05, duration: 0.4 }}
        />
      ))}
    </div>
  );
};

// Animated trend line SVG
const TrendLine = () => (
  <svg className="absolute bottom-0 left-0 w-full h-16 opacity-20" preserveAspectRatio="none">
    <motion.path
      d="M0 60 Q 100 40, 200 45 T 400 30 T 600 35 T 800 20"
      fill="none"
      stroke="hsl(var(--primary))"
      strokeWidth="2"
      className="trend-line"
    />
  </svg>
);

const Hero = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const words = ['Multimodal LLMs', 'Computer Vision', 'Production ML', 'MLOps'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const metrics = [
    { value: '96%', label: 'TPR Achieved', sub: 'Luxury Authentication', icon: TrendingUp, color: 'primary' },
    { value: '50K+', label: 'Items/Month', sub: 'Production Scale', icon: BarChart3, color: 'secondary' },
    { value: '4+', label: 'Years', sub: 'Industry Experience', icon: Activity, color: 'accent' },
  ];

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Dot grid background */}
      <div className="absolute inset-0 dot-grid" />

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

      {/* Trend line decoration */}
      <TrendLine />

      {/* Main content */}
      <motion.div
        className="container mx-auto px-6 lg:px-12 relative z-10"
        style={{ y, opacity }}
      >
        <div className="max-w-6xl mx-auto">
          {/* Top row - status */}
          <motion.div
            className="flex items-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="status-active">
              <span className="text-sm font-mono text-muted-foreground">
                Available May 2026
              </span>
            </div>
            <span className="text-muted-foreground/30">|</span>
            <span className="text-sm font-mono text-muted-foreground">
              College Park, MD
            </span>
          </motion.div>

          {/* Main heading */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <span className="text-foreground">Nishchal</span>
                <br />
                <span className="gradient-text">Marur</span>
              </motion.h1>

              <motion.p
                className="text-xl text-muted-foreground mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Machine Learning Engineer II
              </motion.p>

              {/* Rotating specialization */}
              <motion.div
                className="flex items-center gap-3 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <span className="text-sm font-mono text-muted-foreground">Focus:</span>
                <div className="relative h-8 w-48">
                  {words.map((word, index) => (
                    <motion.span
                      key={word}
                      className="absolute left-0 top-0 text-lg font-semibold text-primary whitespace-nowrap"
                      initial={false}
                      animate={{
                        opacity: currentWord === index ? 1 : 0,
                        y: currentWord === index ? 0 : currentWord > index ? -20 : 20,
                      }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                      {word}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Description */}
              <motion.p
                className="text-muted-foreground text-lg leading-relaxed max-w-lg mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Building production ML systems that scale. Currently pursuing MS in Machine Learning
                at University of Maryland, previously at Entrupy authenticating luxury goods at scale.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <motion.a
                  href="#experience"
                  className="group relative px-6 py-3 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-medium rounded-lg overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    View Experience
                    <TrendingUp size={16} className="group-hover:translate-x-0.5 transition-transform" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/10 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
                </motion.a>
                <motion.a
                  href="/Nishchal_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:border-primary/50 hover:text-primary transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Resume
                </motion.a>
              </motion.div>

              {/* Quick links */}
              <motion.div
                className="flex gap-4 mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                {[
                  { href: 'https://github.com/NishchalMN', label: 'GitHub' },
                  { href: 'https://linkedin.com/in/nishchal-mn', label: 'LinkedIn' },
                  { href: 'mailto:nmarur21@umd.edu', label: 'Email' },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.label !== 'Email' ? '_blank' : undefined}
                    rel={link.label !== 'Email' ? 'noopener noreferrer' : undefined}
                    className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </motion.div>
            </div>

            {/* Right side - Metrics cards */}
            <div className="space-y-4">
              {metrics.map((metric, index) => {
                const Icon = metric.icon;
                return (
                  <motion.div
                    key={metric.label}
                    className="metric-card p-6 rounded-xl border border-border/50 card-hover"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.15 }}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="metric-value">{metric.value}</div>
                        <div className="text-foreground font-medium mt-1">{metric.label}</div>
                        <div className="text-sm text-muted-foreground">{metric.sub}</div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <Icon className="w-5 h-5 text-muted-foreground" />
                        <MiniChart
                          values={[40, 65, 45, 80, 55, 90, 70, 95, 85, 100]}
                          color={metric.color}
                        />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={20} />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default Hero;
