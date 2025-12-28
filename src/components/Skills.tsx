import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Code2, Brain, Cloud, Database } from 'lucide-react';
import {
  staggerContainer,
  staggerItem,
  viewportConfig,
} from '@/lib/animations';

interface SkillCategory {
  title: string;
  icon: typeof Code2;
  color: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    icon: Code2,
    color: 'text-blue-400',
    skills: ['Python', 'C++', 'SQL', 'Go', 'Scala', 'JavaScript', 'Node.js'],
  },
  {
    title: 'ML Frameworks',
    icon: Brain,
    color: 'text-emerald-400',
    skills: [
      'PyTorch',
      'TensorFlow',
      'Keras',
      'Transformers',
      'HuggingFace',
      'LangChain',
      'LangGraph',
      'Ray',
      'OpenCV',
      'CLIP',
      'LoRA',
      'SAM',
      'LoFTR',
      'CoreML',
      'ONNX',
      'Scikit-Learn',
    ],
  },
  {
    title: 'MLOps & Cloud',
    icon: Cloud,
    color: 'text-orange-400',
    skills: [
      'AWS',
      'Azure',
      'GCP',
      'Docker',
      'Kubernetes',
      'Ray Serve',
      'MLflow',
      'WandB',
      'Airflow',
      'Triton',
      'CI/CD',
    ],
  },
  {
    title: 'Data & Tools',
    icon: Database,
    color: 'text-purple-400',
    skills: [
      'Redis',
      'Elasticsearch',
      'FAISS',
      'Pinecone',
      'MongoDB',
      'PostgreSQL',
      'Apache Spark',
      'Pandas',
      'Git',
      'Blender',
      'Open3D',
      'AirSim',
    ],
  },
];

// Skill Chip Component
const SkillChip = ({ skill, delay }: { skill: string; delay: number }) => (
  <motion.span
    className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium bg-muted/50 text-muted-foreground border border-border/50 hover:border-primary/30 hover:text-foreground hover:bg-muted transition-all duration-200"
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.3 }}
    viewport={{ once: true }}
    whileHover={{ y: -2 }}
  >
    {skill}
  </motion.span>
);

// Category Card Component
const CategoryCard = ({
  category,
  index,
}: {
  category: SkillCategory;
  index: number;
}) => {
  const Icon = category.icon;

  return (
    <motion.div variants={staggerItem}>
      <Card className="p-5 h-full border-border/50 hover:border-border transition-colors">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className={`w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center ${category.color}`}>
            <Icon size={20} />
          </div>
          <h3 className="text-lg font-bold text-foreground">{category.title}</h3>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill, i) => (
            <SkillChip
              key={skill}
              skill={skill}
              delay={0.1 + i * 0.03}
            />
          ))}
        </div>
      </Card>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/5 to-transparent pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative">
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
            {'<skills>'}
          </motion.span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            Tools and technologies I use to build production ML systems
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid md:grid-cols-2 gap-5"
        >
          {skillCategories.map((category, index) => (
            <CategoryCard key={category.title} category={category} index={index} />
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
          <span className="text-sm font-mono text-primary/50">{'</skills>'}</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
