import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Calendar, ChevronDown, ExternalLink } from 'lucide-react';
import {
  staggerContainer,
  staggerItem,
  fadeInUp,
  viewportConfig,
} from '@/lib/animations';

// Metric extraction helper - finds numbers and percentages in text
const extractMetrics = (text: string): string[] => {
  const patterns = [
    /\d+%\s*TPR/gi,
    /\d+%\s*FPR/gi,
    /\d+%/g,
    /\d+x\s*faster/gi,
    /\d+K\+/gi,
    /<?\d+ms/gi,
    /\d+\+?\s*(hours|items|components|RPS)/gi,
    /\d+\.\d+\s*(SSIM|px|MSE)/gi,
  ];

  const metrics: string[] = [];
  patterns.forEach(pattern => {
    const matches = text.match(pattern);
    if (matches) {
      metrics.push(...matches);
    }
  });

  return [...new Set(metrics)].slice(0, 3); // Return unique metrics, max 3
};

interface Experience {
  title: string;
  company: string;
  logo: string;
  website: string;
  location: string;
  period: string;
  achievements: string[];
  featured: boolean;
  highlights?: string[]; // Key metrics to show prominently
}

const experiences: Experience[] = [
  {
    title: 'Machine Learning Engineer II',
    company: 'Entrupy Inc.',
    logo: '/entrupy-icon.webp',
    website: 'https://www.entrupy.com',
    location: 'Bangalore, India',
    period: 'Aug 2021 - Aug 2024',
    highlights: ['96% TPR', '50K+ Items/mo', '2x Speedup'],
    achievements: [
      'Built end-to-end luxury authentication system achieving 96% TPR at 5% FPR, processing 50K+ items monthly in production',
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
    title: 'AI Intern',
    company: 'Connyct',
    logo: '/connyct.jpeg',
    website: 'https://www.connyct.com',
    location: 'New York, NY (Remote)',
    period: 'Jun 2025 - Aug 2025',
    highlights: ['<42ms Latency', '50+ RPS', 'Recall@10: 0.85'],
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
    highlights: ['15ms Latency Drop', 'Go + K8s'],
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
    highlights: ['10+ hrs/week saved', 'ELK Stack'],
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
    highlights: ['1.3px Error Rate', 'Real-time CNN'],
    achievements: [
      'Developed real-time CNN-based gaze tracking using transposed convolutions and Gaussian heatmap regression',
      'Achieved mean error rate of 1.3px across diverse lighting and occlusion scenarios',
    ],
    featured: false,
  },
];

// Experience Card Component
const ExperienceCard = ({
  exp,
  index,
  isLast,
}: {
  exp: Experience;
  index: number;
  isLast: boolean;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const visibleAchievements = isExpanded ? exp.achievements : exp.achievements.slice(0, 3);
  const hasMoreAchievements = exp.achievements.length > 3;

  return (
    <motion.div
      variants={staggerItem}
      className="relative pl-8 md:pl-12"
    >
      {/* Timeline connector */}
      <div className="absolute left-0 top-0 bottom-0 w-px">
        {/* Vertical line */}
        <div
          className={`absolute left-0 top-8 w-px bg-gradient-to-b from-primary/50 via-secondary/30 to-transparent ${
            isLast ? 'h-8' : 'h-full'
          }`}
        />
        {/* Timeline dot */}
        <motion.div
          className={`absolute left-0 top-6 w-3 h-3 -translate-x-[5px] rounded-full ${
            exp.featured
              ? 'bg-gradient-to-r from-secondary to-primary shadow-[0_0_12px_hsl(163,64%,60%)]'
              : 'bg-muted-foreground/50 border-2 border-background'
          }`}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: index * 0.1, type: 'spring', stiffness: 300 }}
          viewport={{ once: true }}
        />
      </div>

      {/* Card */}
      <motion.div
        whileHover={{ x: 4 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <Card
          className={`p-5 md:p-6 transition-all duration-300 ${
            exp.featured
              ? 'border-primary/50 bg-gradient-to-br from-card via-card to-primary/5 shadow-[0_0_30px_hsl(210,85%,40%,0.1)]'
              : 'border-border/50 hover:border-border'
          }`}
        >
          {/* Header */}
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            {/* Logo */}
            <motion.a
              href={exp.website}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-xl bg-muted/50 overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <img
                src={exp.logo}
                alt={`${exp.company} logo`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <ExternalLink size={16} className="text-primary" />
              </div>
            </motion.a>

            {/* Title & Meta */}
            <div className="flex-grow">
              <div className="flex flex-wrap items-start gap-2 mb-1">
                <h3 className="text-lg md:text-xl font-bold text-foreground">
                  {exp.title}
                </h3>
                {exp.featured && (
                  <Badge className="gradient-primary text-xs px-2 py-0.5 shadow-glow">
                    Featured
                  </Badge>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
                <span className="font-semibold text-foreground/80">{exp.company}</span>
                <span className="hidden sm:inline text-muted-foreground/50">•</span>
                <span className="flex items-center gap-1">
                  <MapPin size={12} className="text-primary/70" />
                  {exp.location}
                </span>
                <span className="hidden sm:inline text-muted-foreground/50">•</span>
                <span className="flex items-center gap-1">
                  <Calendar size={12} className="text-primary/70" />
                  {exp.period}
                </span>
              </div>
            </div>
          </div>

          {/* Metric Highlights */}
          {exp.highlights && exp.highlights.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {exp.highlights.map((metric, i) => (
                <motion.span
                  key={i}
                  className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-medium bg-primary/10 text-primary border border-primary/20"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  viewport={{ once: true }}
                >
                  {metric}
                </motion.span>
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
                  transition={{ delay: i * 0.05 }}
                >
                  <span className="text-secondary mt-1 flex-shrink-0">▹</span>
                  <span>{achievement}</span>
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>

          {/* Expand/Collapse Button */}
          {hasMoreAchievements && (
            <motion.div className="mt-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-xs text-muted-foreground hover:text-foreground gap-1 px-2 h-7"
              >
                {isExpanded ? 'Show less' : `+${exp.achievements.length - 3} more`}
                <motion.span
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown size={14} />
                </motion.span>
              </Button>
            </motion.div>
          )}
        </Card>
      </motion.div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/5 to-transparent pointer-events-none" />

      <div className="container mx-auto max-w-4xl relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            className="inline-block text-sm font-mono text-primary mb-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            {'<experience>'}
          </motion.span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            4+ years building production ML systems across computer vision, NLP, and MLOps
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="space-y-6"
        >
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={index}
              exp={exp}
              index={index}
              isLast={index === experiences.length - 1}
            />
          ))}
        </motion.div>

        {/* Closing tag */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-mono text-primary/50">{'</experience>'}</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
