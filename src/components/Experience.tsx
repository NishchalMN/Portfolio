import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Calendar, ChevronDown, ExternalLink, TrendingUp } from 'lucide-react';

interface Experience {
  title: string;
  company: string;
  logo: string;
  website: string;
  location: string;
  period: string;
  achievements: string[];
  featured: boolean;
  metrics?: { value: string; label: string }[];
}

const experiences: Experience[] = [
  {
    title: 'Machine Learning Engineer II',
    company: 'Entrupy Inc.',
    logo: '/entrupy-icon.webp',
    website: 'https://www.entrupy.com',
    location: 'Bangalore, India',
    period: 'Aug 2021 - Aug 2024',
    metrics: [
      { value: '$1M+', label: 'Revenue growth' },
      { value: '50K+', label: 'Items/mo' },
      { value: '96%', label: 'TPR' },
    ],
    achievements: [
      'Built ML Pipelines for sneaker authentication in luxury resale marketplaces, reducing manual expert reviews with sub-minute AI inference, across 200+ enterprise clients over 90 countries',
      'Achieved 96% TPR at 5% FPR on authentication models processing 50K+ items monthly, enabling Entrupy to scale to $1.4B in annual authenticated inventory',
      'Developed 3D document unwarping pipeline with DenseNet, boosting OCR accuracy by 23% and achieving 0.84 SSIM',
      'Optimized on-device CoreML inference with dynamic overlays, delivering 2x faster real-time processing',
      'Reduced cloud infrastructure costs by 40% through automated monitoring and alerts to shut down idle GPU resources',
      'Improved macro fingerprinting TPR by 15% for return fraud detection using patch embedding similarity',
      'Built pose-estimation models for sneaker pre-alignment, increasing LoFTR+RANSAC inlier ratio by 18%',
      'Trained monocular depth estimation and semantic segmentation models using SAM for automated quality inspection',
      'Built synthetic data pipelines using Blender Python simulating camera intrinsics, lighting, and material textures',
    ],
    featured: true,
  },
  {
    title: 'AI Engineer Intern',
    company: 'Connyct Inc.',
    logo: '/connyct.jpeg',
    website: 'https://www.connyct.com',
    location: 'New York, NY',
    period: 'Nov 2025 - Jan 2026',
    metrics: [
      { value: '<42ms', label: 'Latency' },
      { value: '50+', label: 'RPS' },
    ],
    achievements: [
      'Built Two-Tower hybrid recommendation system using sentence transformers, achieving Recall@10 of 0.85 at <40ms latency',
      'Implemented multi-factor reranking with Redis caching, supporting 50+ RPS with A/B testing framework',
      'Integrated system as MCP tool for LLM orchestrator, enabling adaptive querying and real-time semantic scoring',
    ],
    featured: false,
  },
  {
    title: 'MLOps Intern',
    company: 'IBM',
    logo: '/ibm.webp',
    website: 'https://www.ibm.com',
    location: 'Bangalore, India',
    period: 'Jan 2021 - Jul 2021',
    metrics: [
      { value: '15ms', label: 'Latency Drop' },
    ],
    achievements: [
      'Reduced inference latency by 15ms in IBM Watson Cloud by optimizing batch prediction pipelines using Go concurrency',
      'Benchmarked TensorFlow, PyTorch, and ONNX runtimes to evaluate performance trade-offs for production migration',
      'Contributed to the design of a new internal ML serving architecture based on benchmark findings',
    ],
    featured: false,
  },
  {
    title: 'Software Engineering Intern',
    company: 'SLK Software',
    logo: '/slk.jpeg',
    website: 'https://slksoftware.com/',
    location: 'Bangalore, India',
    period: 'May 2020 - Jul 2020',
    metrics: [
      { value: '10+', label: 'hrs/week saved' },
    ],
    achievements: [
      'Saved developers 10+ hours weekly by building centralized log aggregation using ELK Stack and Filebeat',
      'Built Node.js APIs for log retrieval across 5+ distributed components with automated aggregation',
    ],
    featured: false,
  },
  {
    title: 'Machine Learning Intern',
    company: 'PathPartner Technology',
    logo: '/pathpartner_logo.jpeg',
    website: 'https://www.linkedin.com/company/pathpartnertechnology',
    location: 'Bangalore, India',
    period: 'May 2019 - Jul 2019',
    metrics: [
      { value: '1.3px', label: 'Error Rate' },
    ],
    achievements: [
      'Developed real-time CNN-based gaze tracking for driver drowsiness detection using transposed convolutions and Gaussian heatmap regression',
      'Achieved mean error rate of 1.3px across diverse lighting and occlusion scenarios',
    ],
    featured: false,
  },
];

const ExperienceCard = ({ exp, index }: { exp: Experience; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const visibleAchievements = isExpanded ? exp.achievements : exp.achievements.slice(0, 3);
  const hasMore = exp.achievements.length > 3;

  return (
    <motion.div
      className={`p-6 rounded-xl border transition-all duration-300 ${
        exp.featured
          ? 'bg-card border-primary/20 glow-primary'
          : 'bg-card/50 border-border/50 hover:border-border'
      }`}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0}}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      {/* Header */}
      <div className="flex gap-4 mb-4">
        <motion.a
          href={exp.website}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex-shrink-0 w-12 h-12 rounded-lg bg-muted/30 overflow-hidden group"
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={exp.logo}
            alt={`${exp.company} logo`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <ExternalLink size={14} className="text-primary" />
          </div>
        </motion.a>

        <div className="flex-grow">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-semibold text-foreground">{exp.title}</h3>
              <a
                href={exp.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base text-muted-foreground hover:text-primary transition-colors"
              >
                {exp.company}
              </a>
            </div>
            {exp.featured && (
              <span className="px-2 py-0.5 text-xs font-mono bg-primary/10 text-primary rounded">
                Featured
              </span>
            )}
          </div>
          <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <MapPin size={14} />
              {exp.location}
            </span>
            <span className="flex items-center gap-1">
              <Calendar size={14} />
              {exp.period}
            </span>
          </div>
        </div>
      </div>

      {/* Metrics */}
      {exp.metrics && exp.metrics.length > 0 && (
        <div className="flex flex-wrap gap-3 mb-4">
          {exp.metrics.map((metric, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/5 border border-primary/20"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.1 }}
            >
              <TrendingUp size={12} className="text-primary" />
              <span className="text-sm font-mono font-semibold text-primary">{metric.value}</span>
              <span className="text-xs text-muted-foreground">{metric.label}</span>
            </motion.div>
          ))}
        </div>
      )}

      {/* Achievements */}
      <ul className="space-y-2">
        <AnimatePresence mode="sync">
          {visibleAchievements.map((achievement, i) => (
            <motion.li
              key={i}
              className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ delay: i * 0.03 }}
            >
              <span className="text-primary flex-shrink-0">•</span>
              <span>{achievement}</span>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>

      {/* Expand button */}
      {hasMore && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-4 flex items-center gap-1 text-xs font-mono text-muted-foreground hover:text-primary transition-colors"
        >
          {isExpanded ? 'Show less' : `+${exp.achievements.length - 3} more`}
          <motion.span
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown size={14} />
          </motion.span>
        </button>
      )}
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 lg:px-12 relative">
      <div className="absolute inset-0 grid-overlay" />

      <div className="container mx-auto max-w-4xl relative">
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0}}
          viewport={{ once: true }}
        >
          <span className="text-sm font-mono text-primary mb-2 block">02</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Work Experience
          </h2>
          <p className="text-muted-foreground max-w-lg">
            4+ years building production ML systems across computer vision, NLP, and MLOps
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
