import { motion } from 'framer-motion';
import { Code2, Brain, Cloud, Database } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: typeof Code2;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    icon: Code2,
    skills: ['Python', 'C++', 'SQL', 'Go', 'Scala', 'JavaScript', 'Node.js'],
  },
  {
    title: 'ML Frameworks',
    icon: Brain,
    skills: [
      'PyTorch', 'TensorFlow', 'Keras', 'Transformers', 'HuggingFace',
      'LangChain', 'LangGraph', 'Ray', 'OpenCV', 'CLIP', 'LoRA',
      'SAM', 'LoFTR', 'CoreML', 'ONNX', 'Scikit-Learn',
    ],
  },
  {
    title: 'MLOps & Cloud',
    icon: Cloud,
    skills: [
      'AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes',
      'Ray Serve', 'MLflow', 'WandB', 'Airflow', 'Triton', 'CI/CD',
    ],
  },
  {
    title: 'Data & Tools',
    icon: Database,
    skills: [
      'Redis', 'Elasticsearch', 'FAISS', 'Pinecone', 'MongoDB',
      'PostgreSQL', 'Apache Spark', 'Pandas', 'Git', 'Blender', 'Open3D', 'AirSim',
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 lg:px-12 relative">
      <div className="absolute inset-0 chart-lines opacity-30" />

      <div className="container mx-auto max-w-6xl relative">
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-mono text-primary mb-2 block">04</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Technical Skills
          </h2>
          <p className="text-muted-foreground max-w-lg">
            Tools and technologies I use to build production ML systems
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                className="p-6 bg-card/50 rounded-xl border border-border/50 card-hover"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Icon size={20} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {category.title}
                  </h3>
                  <span className="ml-auto text-xs font-mono text-muted-foreground">
                    {category.skills.length} skills
                  </span>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      className="tag"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.02 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
