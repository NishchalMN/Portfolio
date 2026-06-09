import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ChevronDown, ExternalLink, Layers3, MapPin, TrendingUp } from 'lucide-react';

interface ImpactSignal {
  area: string;
  headline: string;
  result: string;
  tech: string[];
}

interface Experience {
  id: string;
  shortLabel: string;
  title: string;
  company: string;
  logo: string;
  website: string;
  location: string;
  period: string;
  whyCare: string;
  areas: string[];
  metrics: { value: string; label: string }[];
  impact: ImpactSignal[];
  featured: boolean;
  previewCount?: number;
}

const summaryStats = [
  { value: '4+', label: 'Years' },
  { value: '150K+', label: 'Items/mo' },
  { value: '95%', label: 'Automated' },
  { value: 'sub-150ms', label: 'Retrieval p95' },
];

const experiences: Experience[] = [
  {
    id: 'experience-connyct',
    shortLabel: 'Connyct',
    title: 'AI Engineer Intern',
    company: 'Connyct Inc.',
    logo: '/connyct.jpeg',
    website: 'https://www.connyct.com',
    location: 'New York, NY',
    period: 'Nov 2025 - Jan 2026',
    whyCare: 'Shipped a product-grade RAG system with low-latency retrieval, tool routing, and measurable evaluation.',
    areas: ['Agentic RAG', 'Hybrid Search', 'Evaluation'],
    metrics: [
      { value: 'sub-150ms', label: 'p95 latency' },
      { value: '0.85', label: 'Recall@10' },
      { value: '83%', label: 'tool correctness' },
    ],
    impact: [
      {
        area: 'Search Quality',
        headline: 'Hybrid retrieval for personalized events',
        result: 'Combined BM25, dense vectors, reranking, and Redis caching to reach 0.85 Recall@10 at sub-150ms p95.',
        tech: ['Elasticsearch', 'Dense Retrieval', 'Redis', 'AWS Lambda'],
      },
      {
        area: 'Quality',
        headline: 'Evaluation harness for retrieval answers',
        result: 'Built DeepEval workflows measuring 83% tool-call correctness and 95% answer completeness.',
        tech: ['DeepEval', 'LangSmith', 'Grounding'],
      },
      {
        area: 'LLM Systems',
        headline: 'Tool-routed event search',
        result: 'Implemented MCP tool servers for location-aware retrieval and profile-based scoring.',
        tech: ['MCP', 'LLM Tools', 'RAG'],
      },
    ],
    featured: false,
    previewCount: 2,
  },
  {
    id: 'experience-prg',
    shortLabel: 'PRG',
    title: 'Graduate Researcher',
    company: 'PRG Lab',
    logo: '/prg-lab.png',
    website: 'https://prg.cs.umd.edu',
    location: 'College Park, MD',
    period: 'Jun 2025 - Aug 2025',
    whyCare: 'Research work linking monocular 3D pose understanding with pitch-accurate audio reconstruction.',
    areas: ['Multimodal ML', '3D Pose', 'Audio'],
    metrics: [
      { value: '99.7%', label: 'raw pitch accuracy' },
      { value: 'sub-cent', label: 'pitch precision' },
    ],
    impact: [
      {
        area: 'Multimodal ML',
        headline: 'Pose-driven audio understanding',
        result: 'Mapped SMPL-X body and hand motion from monocular video into audio reconstruction targets, reaching up to 99.7% raw pitch accuracy.',
        tech: ['SMPL-X', 'Monocular Video', 'Audio Reconstruction'],
      },
      {
        area: '3D Vision',
        headline: 'Long-range motion encoding',
        result: 'Built a Conformer-based 3D vision encoder with a differentiable decoder to align joint rotations and pitch at sub-cent precision.',
        tech: ['Conformer', 'Self-Attention', 'Differentiable Decoding'],
      },
    ],
    featured: false,
    previewCount: 2,
  },
  {
    id: 'experience-entrupy',
    shortLabel: 'Entrupy',
    title: 'Machine Learning Engineer II',
    company: 'Entrupy Inc.',
    logo: '/entrupy-icon.webp',
    website: 'https://www.entrupy.com',
    location: 'Bangalore, India',
    period: 'Aug 2021 - Aug 2024',
    whyCare: 'Largest ownership: production CV and ML infrastructure with direct scale, automation, and business impact.',
    areas: ['Computer Vision', 'Edge AI', 'MLOps', 'Search'],
    metrics: [
      { value: '150K+', label: 'items/mo' },
      { value: '95%', label: 'automation' },
      { value: '96%', label: 'TPR at 5% FPR' },
      { value: '$1M+', label: 'impact' },
    ],
    impact: [
      {
        area: 'Product CV',
        headline: 'Luxury authentication at scale',
        result: 'Automated 95% of manual review for 150K+ monthly luxury items using multi-stage vision pipelines, reaching 96% TPR at 5% FPR.',
        tech: ['SAM', 'LoFTR', 'Depth', 'Autoencoders'],
      },
      {
        area: 'Edge AI',
        headline: 'Real-time iOS auto-capture',
        result: 'Distilled and quantized segmentation models for 10x compression and double faster CoreML inference.',
        tech: ['CoreML', 'EfficientNet', 'FP16'],
      },
      {
        area: 'Document AI',
        headline: 'Document unwarping for OCR',
        result: 'Led R&D efforts to improve OCR accuracy by 23% through 3D document unwarping using synthetic data.',
        tech: ['DenseNet', 'Attention', 'Synthetic Data'],
      },
      {
        area: 'Monitoring',
        headline: 'Model drift response',
        result: 'Reduced drift response from days to under 2 hours with FP analysis, GradCAM checks, Lambda, and SQS.',
        tech: ['GradCAM', 'Lambda', 'SQS'],
      },
      {
        area: 'Data Flywheel',
        headline: 'Faster model production',
        result: 'Reduced new-model delivery from weeks to days with Blender, Stable Diffusion, and VLM-assisted annotation.',
        tech: ['Blender', 'Stable Diffusion', 'LLaVA'],
      },
      {
        area: 'Fraud Detection',
        headline: 'Faster visual fingerprinting',
        result: 'Boosted return-fraud TPR by 15% while reducing latency by 40% using Ray-parallel similarity matching.',
        tech: ['Ray', 'Embeddings', 'Similarity'],
      },
      {
        area: 'Visual Search',
        headline: 'Instant catalog comparison',
        result: 'Built DINOv2 + Pinecone similar-image search for authentication catalog review.',
        tech: ['DINOv2', 'Pinecone', 'Vector Search'],
      },
      {
        area: 'Serving',
        headline: 'Autoscaling ML inference',
        result: 'Architected EKS and Ray Serve infrastructure for 150K+ monthly authentication requests.',
        tech: ['AWS EKS', 'Ray Serve', 'S3'],
      },
    ],
    featured: true,
    previewCount: 4,
  },
  {
    id: 'experience-ibm',
    shortLabel: 'IBM',
    title: 'MLOps Intern',
    company: 'IBM',
    logo: '/ibm.webp',
    website: 'https://www.ibm.com',
    location: 'Bangalore, India',
    period: 'Jan 2021 - Jul 2021',
    whyCare: 'Early production-inference experience in enterprise cloud deployment workflows.',
    areas: ['MLOps', 'Inference', 'Kubernetes'],
    metrics: [
      { value: '15ms', label: 'latency drop' },
    ],
    impact: [
      {
        area: 'Inference',
        headline: 'Faster batch prediction',
        result: 'Reduced Watson Cloud inference latency by 15ms using Go concurrency and chunked downloads on Kubernetes.',
        tech: ['Go', 'Kubernetes', 'Batch Inference'],
      },
      {
        area: 'Architecture',
        headline: 'Runtime trade-off analysis',
        result: 'Benchmarked TensorFlow, PyTorch, and ONNX to guide internal inference architecture decisions.',
        tech: ['TensorFlow', 'PyTorch', 'ONNX'],
      },
    ],
    featured: false,
    previewCount: 2,
  },
  {
    id: 'experience-slk',
    shortLabel: 'SLK',
    title: 'Software Engineering Intern',
    company: 'SLK Software',
    logo: '/slk.jpeg',
    website: 'https://slksoftware.com/',
    location: 'Bangalore, India',
    period: 'May 2020 - Jul 2020',
    whyCare: 'Backend observability work that made distributed debugging faster and less manual.',
    areas: ['Observability', 'Backend', 'Logs'],
    metrics: [
      { value: '10+', label: 'hrs/week saved' },
    ],
    impact: [
      {
        area: 'Observability',
        headline: 'Centralized log aggregation',
        result: 'Saved 10+ debugging hours per week with ELK Stack, Filebeat, and Node.js log pipelines.',
        tech: ['ELK Stack', 'Filebeat', 'Node.js'],
      },
    ],
    featured: false,
    previewCount: 1,
  },
  {
    id: 'experience-pathpartner',
    shortLabel: 'PathPartner',
    title: 'Machine Learning Intern',
    company: 'PathPartner Technology',
    logo: '/pathpartner_logo.jpeg',
    website: 'https://www.linkedin.com/company/pathpartnertechnology',
    location: 'Bangalore, India',
    period: 'May 2019 - Jul 2019',
    whyCare: 'First real-time CV system: precise perception under lighting and occlusion constraints.',
    areas: ['Computer Vision', 'Driver Monitoring', 'Real-Time'],
    metrics: [
      { value: '1.3px', label: 'mean error' },
    ],
    impact: [
      {
        area: 'Real-Time CV',
        headline: 'Driver gaze tracking',
        result: 'Reached 1.3px mean error with CNN heatmap regression for drowsiness-detection gaze estimation.',
        tech: ['CNNs', 'Heatmaps', 'Gaze Tracking'],
      },
    ],
    featured: false,
    previewCount: 1,
  },
];

const ImpactRow = ({ signal }: { signal: ImpactSignal }) => (
  <motion.div
    className="rounded-lg border border-border/45 bg-background/35 p-3"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <div>
      <div>
        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-primary">
          {signal.area}
        </span>
        <h4 className="mt-1 text-sm font-semibold text-foreground">{signal.headline}</h4>
      </div>
    </div>
    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{signal.result}</p>
    <div className="mt-2 hidden flex-wrap gap-1.5 sm:flex">
      {signal.tech.slice(0, 4).map((tech) => (
        <span key={tech} className="tag py-0.5 text-[10px]">
          {tech}
        </span>
      ))}
    </div>
  </motion.div>
);

const ExperienceCard = ({ exp, index }: { exp: Experience; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const previewCount = Math.min(exp.previewCount ?? 2, exp.impact.length);
  const hiddenCount = exp.impact.length - previewCount;
  const visibleImpact = isExpanded ? exp.impact : exp.impact.slice(0, previewCount);
  const hasMore = hiddenCount > 0;

  return (
    <motion.article
      id={exp.id}
      className={`scroll-mt-36 rounded-lg border p-5 transition-all duration-300 ${
        exp.featured
          ? 'border-primary/25 bg-card glow-primary'
          : 'border-border/50 bg-card/50 hover:border-border'
      }`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-start">
        <motion.a
          href={exp.website}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-lg border border-border/50 bg-muted/30"
          whileHover={{ scale: 1.04 }}
        >
          <img
            src={exp.logo}
            alt={`${exp.company} logo`}
            className="h-full w-full object-cover"
          />
          <span className="absolute inset-0 flex items-center justify-center bg-background/75 opacity-0 transition-opacity group-hover:opacity-100">
            <ExternalLink size={14} className="text-primary" />
          </span>
        </motion.a>

        <div className="min-w-0 flex-1">
          <div className="flex flex-col gap-2 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-lg font-semibold text-foreground">{exp.title}</h3>
              </div>
              <a
                href={exp.website}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {exp.company}
              </a>
            </div>

            <div className="flex flex-wrap gap-3 text-sm text-muted-foreground lg:justify-end">
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

          <div className="mt-3 grid gap-3 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start">
            <div>
              <p className="max-w-3xl text-sm leading-relaxed text-foreground/85">
                {exp.whyCare}
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                {exp.areas.map((area) => (
                  <span
                    key={area}
                    className="inline-flex items-center gap-1.5 rounded-md border border-primary/15 bg-primary/5 px-2 py-1 font-mono text-[11px] text-primary"
                  >
                    <Layers3 size={11} />
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 lg:max-w-[380px] lg:justify-end">
              {exp.metrics.map((metric) => (
                <span
                  key={`${exp.company}-${metric.label}`}
                  className="inline-flex items-center gap-1.5 rounded-md border border-primary/10 bg-primary/[0.03] px-2 py-1"
                >
                  <TrendingUp size={10} className="text-primary/80" />
                  <span className="font-mono text-xs font-semibold text-primary">{metric.value}</span>
                  <span className="text-[11px] text-muted-foreground">{metric.label}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={`mt-4 grid gap-2.5 ${exp.featured ? 'lg:grid-cols-2' : ''}`}>
        <AnimatePresence mode="sync">
          {visibleImpact.map((signal) => (
            <ImpactRow key={`${exp.company}-${signal.headline}`} signal={signal} />
          ))}
        </AnimatePresence>
      </div>

      {hasMore && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-4 flex items-center gap-1 font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
        >
          {isExpanded
            ? 'Show less'
            : exp.featured
              ? `Show ${hiddenCount} more impact signals`
              : `Show ${hiddenCount} more`}
          <motion.span animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
            <ChevronDown size={14} />
          </motion.span>
        </button>
      )}
    </motion.article>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="relative px-6 py-24 lg:px-12">
      <div className="absolute inset-0 grid-overlay" />

      <div className="container relative mx-auto max-w-5xl">
        <motion.div
          className="mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="mb-2 block font-mono text-sm text-primary">02</span>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Work Experience
          </h2>
          <p className="max-w-xl text-muted-foreground">
            Why each role matters, what area it maps to, and the measurable signal it produced.
          </p>
        </motion.div>

        <motion.div
          className="mb-6 flex flex-wrap gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {summaryStats.map((stat) => (
            <span
              key={stat.label}
              className="inline-flex items-baseline gap-2 rounded-lg border border-border/50 bg-card/50 px-3 py-2"
            >
              <span className="font-mono text-lg font-semibold text-primary">{stat.value}</span>
              <span className="text-xs text-muted-foreground">{stat.label}</span>
            </span>
          ))}
        </motion.div>

        <motion.nav
          aria-label="Experience role index"
          className="sticky top-16 z-20 mb-6 overflow-x-auto rounded-lg border border-border/50 bg-background/85 px-2 py-2 shadow-sm backdrop-blur md:top-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex min-w-max items-center">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="flex items-center">
                {index > 0 && (
                  <span aria-hidden="true" className="mx-1 text-border/80">
                    |
                  </span>
                )}
                <a
                  href={`#${exp.id}`}
                  className="rounded-md px-2.5 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                >
                  {exp.shortLabel}
                </a>
              </div>
            ))}
          </div>
        </motion.nav>

        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <ExperienceCard key={exp.company} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
