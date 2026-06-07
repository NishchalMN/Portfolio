import { motion } from 'framer-motion';
import {
  AudioLines,
  ChefHat,
  CircleDot,
  Gauge,
  ScanSearch,
  Workflow,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface ProfileSignal {
  icon: LucideIcon;
  label: string;
  title: string;
  detail: string;
}

const focusAreas = [
  'LLMs & Agents',
  'Multimodal AI',
  'Evaluation',
  'ML Infrastructure',
];

const profileSignals: ProfileSignal[] = [
  {
    icon: Gauge,
    label: 'Production ML',
    title: 'Systems with measurable constraints',
    detail: 'Scale, latency, quality, and operational reliability are part of the model design.',
  },
  {
    icon: ScanSearch,
    label: 'Evaluation-first AI',
    title: 'Measure before trust',
    detail: 'Retrieval metrics, DeepEval workflows, grounding checks, and monitoring.',
  },
  {
    icon: Workflow,
    label: 'Full lifecycle ownership',
    title: 'From prototype to production',
    detail: 'Research, optimization, deployment, and observability across one system.',
  },
];

const interests = [
  { icon: CircleDot, label: 'Basketball' },
  { icon: AudioLines, label: 'Singing' },
  { icon: ChefHat, label: 'Cooking' },
];

const About = () => {
  return (
    <section id="about" className="relative overflow-hidden px-6 py-24 lg:px-12">
      <div className="absolute inset-0 dot-grid opacity-50" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />

      <div className="container relative mx-auto max-w-5xl">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="mb-2 block font-mono text-sm text-primary">01</span>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            About Me
          </h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(340px,0.9fr)] lg:gap-12">
          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            
            <div className="mb-5 border-l border-primary/45 pl-5 sm:pl-7">
              <span className="font-mono text-xs uppercase tracking-[0.16em] text-primary">
                Applied AI / ML Systems
              </span>
            </div>
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                I have worked across multiple waves of ML, with a focus on production constraints, careful evaluation, and measurable outcomes.
              </p>
              <p>
                My work spans computer vision pipelines used on 150K+ luxury items per month,
                edge inference, and hybrid retrieval systems running below 150ms p95 latency.
              </p>
              <p>
                I am most interested in evaluation-driven AI: LLM agents, RAG, multimodal systems,
                and ML infrastructure where retrieval quality, monitoring, and reliability matter as
                much as the model itself.
              </p>
            </div>

            <div className="mt-8 border-y border-border/45 py-4">
              <span className="mb-3 block font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                Current focus
              </span>
              <div className="flex flex-wrap gap-2">
                {focusAreas.map((area) => (
                  <span
                    key={area}
                    className="rounded-md border border-primary/15 bg-primary/5 px-2.5 py-1 font-mono text-xs text-primary"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                Outside ML
              </span>
              {interests.map((interest) => {
                const Icon = interest.icon;

                return (
                  <span
                    key={interest.label}
                    className="inline-flex items-center gap-1.5 text-sm text-muted-foreground"
                  >
                    <Icon size={14} className="text-primary/80" />
                    {interest.label}
                  </span>
                );
              })}
            </div>
          </motion.div>

          <motion.aside
            className="overflow-hidden rounded-lg border border-border/55 bg-card/55"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="border-b border-border/55 bg-background/25 px-5 py-4">
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-primary">
                Operating profile
              </span>
              <h3 className="mt-1 text-lg font-semibold text-foreground">What I bring</h3>
            </div>

            {profileSignals.map((signal, index) => {
              const Icon = signal.icon;

              return (
                <motion.div
                  key={signal.label}
                  className="relative grid grid-cols-[auto_1fr] gap-4 border-b border-border/45 px-5 py-4 last:border-b-0"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25 + index * 0.08 }}
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-md border border-primary/20 bg-primary/5">
                    <Icon size={17} className="text-primary" />
                  </div>
                  <div className="min-w-0 pr-5">
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-primary">
                      {signal.label}
                    </span>
                    <h4 className="mt-1 text-sm font-semibold text-foreground">{signal.title}</h4>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {signal.detail}
                    </p>
                  </div>
                  <span className="absolute right-4 top-4 font-mono text-[10px] text-border">
                    0{index + 1}
                  </span>
                </motion.div>
              );
            })}
          </motion.aside>
        </div>

        <motion.div
          className="mt-8 h-px bg-border/35"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        />
      </div>
    </section>
  );
};

export default About;
