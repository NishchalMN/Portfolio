import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { GraduationCap, Briefcase, Rocket } from 'lucide-react';
import { staggerContainer, staggerItem, viewportConfig } from '@/lib/animations';

const journeySteps = [
  {
    icon: GraduationCap,
    title: 'Education',
    period: '2017-2021',
    description: 'B.Tech in CS from PES University, Bangalore. Data Science specialization.',
    color: 'text-purple-400',
  },
  {
    icon: Briefcase,
    title: 'Industry',
    period: '2021-2024',
    description: '3 years at Entrupy building production ML systems for luxury authentication.',
    color: 'text-blue-400',
  },
  {
    icon: Rocket,
    title: 'Grad School',
    period: '2024-2026',
    description: 'MS in ML at UMD. Diving into multimodal models, robotics, and agentic systems.',
    color: 'text-emerald-400',
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/5 via-transparent to-transparent pointer-events-none" />

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
            {'<about>'}
          </motion.span>
          <h2 className="text-3xl md:text-4xl font-bold">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        {/* Main Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Card className="p-6 md:p-8 border-border/50">
            {/* Intro */}
            <motion.p
              className="text-lg text-muted-foreground leading-relaxed mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              ML Engineer with <span className="text-foreground font-medium">4+ years</span> building
              systems that ship. From authenticating luxury goods at scale to building recommendation
              engines, I focus on taking models from research to production.
            </motion.p>

            {/* Journey Timeline */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="grid md:grid-cols-3 gap-4 mb-6"
            >
              {journeySteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.title}
                    variants={staggerItem}
                    className="p-4 rounded-lg bg-muted/30 border border-border/30"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Icon size={18} className={step.color} />
                      <span className="font-semibold text-foreground">{step.title}</span>
                    </div>
                    <span className="text-xs font-mono text-primary/70 block mb-2">{step.period}</span>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Current Focus */}
            <motion.div
              className="p-4 rounded-lg bg-primary/5 border border-primary/20"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h4 className="text-sm font-semibold text-primary mb-2">Currently exploring</h4>
              <p className="text-sm text-muted-foreground">
                Agentic RAG systems, multimodal foundation models, and real-time robotics applications.
                Outside of work, I play basketball, cook, and keep up with the latest AI drops.
              </p>
            </motion.div>

            {/* CTA */}
            <motion.p
              className="text-center text-muted-foreground mt-6 pt-6 border-t border-border/30"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-foreground font-medium">Open to full-time roles starting May 2026</span>
              {' '}— let's build something impactful together.
            </motion.p>
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
          <span className="text-sm font-mono text-primary/50">{'</about>'}</span>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
