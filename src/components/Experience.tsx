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
    title: 'AI Engineer Intern',
    company: 'Connyct Inc.',
    logo: '/connyct.jpeg',
    website: 'https://www.connyct.com',
    location: 'New York, NY',
    period: 'Nov 2025 - Jan 2026',
    metrics: [
      { value: '40ms', label: 'p95 Latency' },
      { value: '0.85', label: 'Recall@10' },
    ],
    achievements: [
      'Built a two-tower recommendation engine and hybrid RAG retrieval pipeline on AWS Lambda using Elasticsearch BM25 and dense vector kNN retrieval, achieving Recall@10 of 0.85 and <40ms p95 latency for personalized college events recommendations',
      'Deployed location-aware reranking and A/B testing frameworks for an LLM orchestrator with MCP tools, directly optimizing CTR and search relevance through composite scoring and Redis caching',
    ],
    featured: false,
  },
  {
    title: 'Research Assistant',
    company: 'PRG Lab (PI: Cornelia Fermuller)',
    logo: '/prg-lab.png',
    website: 'https://prg.cs.umd.edu',
    location: 'College Park, Maryland',
    period: 'Jun 2025 - Aug 2025',
    metrics: [
      { value: '3', label: 'Modalities' },
      { value: '30', label: 'FPS Pose Input' },
    ],
    achievements: [
      'Developed a cross-modal generation pipeline converting performer pose sequences to violin audio using DDSP, Transformer encoders, and autoencoder-based MIDI synthesis, enabling audio generation directly from motion capture',
      'Implemented calibrated multi-view reprojection of 3D pose data, validating extrinsic conventions to maintain metric and orientation consistency across views',
    ],
    featured: false,
  },
  {
    title: 'Machine Learning Engineer II',
    company: 'Entrupy Inc.',
    logo: '/entrupy-icon.webp',
    website: 'https://www.entrupy.com',
    location: 'Bangalore, India',
    period: 'Aug 2021 - Aug 2024',
    metrics: [
      { value: '$1M+', label: 'Revenue growth' },
      { value: '150K+', label: 'Luxury Items/mo' },
      { value: '95%', label: 'Automation Rate' },
    ],
    achievements: [
      'Automated 95% of manual verification for 150K+ monthly luxury items by building a sneaker, box label, and size tag authentication pipeline leveraging SAM, Monocular Depth Estimation, LoFTR, and AutoEncoders, achieving 96% TPR at 5% FPR',
      'Led R&D of a 3D document unwarping system using DenseNet with spatial attention mechanisms and synthetic data, outperforming SOTA benchmarks with a 23% increase in OCR accuracy and 0.84 SSIM for real-world documents',
      'Deployed edge inference for real-time auto-capture on iOS by distilling SAM-HQ into a compact EfficientNet and applying FP16 quantization, achieving 10x model compression and 2x inference speedup through CoreML',
      'Improved macro fingerprinting pipeline for luxury goods return fraud detection using patch embedding similarity, boosting TPR by 15% and reducing latency by 40% with Ray parallel processing',
      'Reduced time-to-production for new models from weeks to days by designing synthetic data pipelines using Blender, Stable Diffusion and VLM-assisted annotation (LLaVA) to eliminate large-scale manual labeling',
      'Reduced model drift response time from days to under 2 hours by designing automated monitoring with FP analysis, GradCAM interpretability checks, and DynamoDB-backed performance tracking, with Lambda and SQS triggers for real-time alerting',
      'Built an end-to-end SKU identification pipeline using OCR on size tags and box labels, achieving 97% accuracy across 100K+ sneaker SKUs with template-based classification handling 50+ label variations',
      'Implemented DINOv2-based similar image search with Pinecone vector indexing, enabling instant visual comparison across the authentication catalog',
      'Reduced cloud infrastructure costs by 40% by implementing automated monitoring and alerts on DataCrunch to identify and shut down idle GPU resources across R&D training workloads',
      'Architected auto-scaling ML serving infrastructure on AWS EKS and Ray Serve to process 150K+ monthly authentication requests, dynamically scaling inference pods based on CPU load and time-based policies with models versioned in S3',
      'Built pose-estimation models for sneaker pre-alignment, increasing LoFTR+RANSAC inlier ratio by 18%',
    ],
    featured: true,
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
      'Reduced inference latency by 15ms in IBM Watson Cloud deployments by optimizing batch prediction pipelines using Go concurrency and chunked downloads on Kubernetes',
      'Evaluated performance trade-offs across TensorFlow, PyTorch and ONNX runtimes to drive the design of a new internal inference architecture for enterprise-scale deployments',
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
      'Eliminated 10+ hours of weekly debugging time by building a centralized log aggregation system using ELK Stack, Filebeat, and Node.js across distributed components',
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
      'Developed a real-time CNN-based gaze tracking system for driver drowsiness detection using transposed convolutions and Gaussian heatmap regression, achieving 1.3px mean error across diverse lighting and occlusion conditions',
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
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
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
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
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
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
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
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-mono text-primary mb-2 block">02</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Work Experience
          </h2>
          <p className="text-muted-foreground max-w-lg">
            4+ years building production ML systems across Computer Vision, LLMs, and MLOps
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
