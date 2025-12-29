import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Rocket } from 'lucide-react';

const timeline = [
  {
    icon: GraduationCap,
    period: '2017-2021',
    title: 'B.Tech CS',
    org: 'PES University',
    description: 'Data Science specialization',
  },
  {
    icon: Briefcase,
    period: '2021-2024',
    title: 'ML Engineer II',
    org: 'Entrupy',
    description: '3 years building production ML',
  },
  {
    icon: Rocket,
    period: '2024-2026',
    title: 'MS in ML',
    org: 'UMD',
    description: 'Multimodal models & ML systems',
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 px-6 lg:px-12 relative">
      {/* Subtle background */}
      <div className="absolute inset-0 dot-grid opacity-50" />

      <div className="container mx-auto max-w-5xl relative">
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-mono text-primary mb-2 block">01</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            About Me
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <p className="text-xl text-foreground leading-relaxed mb-6">
              ML Engineer with <span className="text-primary font-semibold">4+ years</span> building
              systems that ship to production.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              From authenticating luxury goods at scale to building recommendation engines,
              I focus on taking models from research to production. Currently exploring
              agentic RAG systems, multimodal foundation models, and scalable ML infrastructure.
            </p>

            {/* Currently exploring */}
            <div className="p-5 bg-card rounded-xl border border-border/50">
              <div className="status-active mb-3">
                <span className="text-sm font-medium text-foreground">Currently Exploring</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Agentic RAG', 'Multimodal LLMs', 'MLOps & Infrastructure'].map((topic) => (
                  <span key={topic} className="tag">{topic}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-border to-border" />

              <div className="space-y-8">
                {timeline.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.period}
                      className="relative pl-12"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * index }}
                    >
                      {/* Timeline node */}
                      <div className="absolute left-0 w-8 h-8 rounded-full bg-card border border-border flex items-center justify-center">
                        <Icon size={14} className="text-primary" />
                      </div>

                      {/* Content */}
                      <div className="p-4 bg-card/50 rounded-lg border border-border/50 card-hover">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-mono text-primary">{item.period}</span>
                        </div>
                        <h3 className="font-semibold text-foreground">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.org}</p>
                        <p className="text-sm text-muted-foreground mt-2">{item.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Outside work */}
        <motion.div
          className="mt-16 pt-8 border-t border-border/30 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-muted-foreground font-mono">
            Outside of work: basketball · singing · cooking · keeping up with AI drops
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
