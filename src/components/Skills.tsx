import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Brain, Cloud, Sparkles, Layers, ChevronDown } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: typeof Code2;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    icon: Code2,
    skills: ['Python', 'C++', 'Go', 'SQL', 'Scala', 'Node.js', 'Bash'],
  },
  {
    title: 'ML Frameworks',
    icon: Brain,
    skills: [
      'PyTorch', 'TensorFlow', 'HuggingFace', 'OpenCV', 'TensorRT', 'ONNX',
      'Scikit-Learn', 'Pandas', 'NumPy', 'CLIP', 'SAM', 'CoreML',
      'Transformers', 'LoFTR',
    ],
  },
  {
    title: 'GenAI & Retrieval',
    icon: Sparkles,
    skills: [
      'LangChain', 'LangGraph', 'LlamaIndex', 'vLLM', 'LoRA/Fine-Tuning',
      'MCP', 'Stable Diffusion', 'Elasticsearch', 'Pinecone', 'FAISS',
    ],
  },
  {
    title: 'Cloud & Infrastructure',
    icon: Cloud,
    skills: [
      'AWS', 'Docker', 'Kubernetes', 'Ray', 'Kubeflow', 'MLflow', 'Redis',
      'Triton', 'CUDA', 'PostgreSQL', 'MongoDB', 'ChromaDB', 'Spark', 'Kafka',
      'Databricks', 'Airflow', 'FastAPI', 'Git', 'Blender', 'CI/CD',
    ],
  },
  {
    title: 'ML Domains',
    icon: Layers,
    skills: [
      'Computer Vision', 'Multimodal AI', 'Large Language Models', 'Recommendation Systems',
      'Edge AI', 'Model Optimization', 'Agentic RAG', 'Reinforcement Learning',
      'Generative AI', 'Information Retrieval', 'Semantic Search', 'AI Agents',
      'Vision Language Models', 'Federated Learning', 'Synthetic Data Generation',
    ],
  },
];

const Skills = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleCategories = showAll ? skillCategories : skillCategories.slice(0, 4);

  return (
    <section id="skills" className="py-24 px-6 lg:px-12 relative">
      <div className="absolute inset-0 chart-lines opacity-30" />

      <div className="container mx-auto max-w-6xl relative">
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
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
          <AnimatePresence mode="sync">
            {visibleCategories.map((category, categoryIndex) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.title}
                  className="p-6 bg-card/50 rounded-xl border border-border/50 card-hover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: categoryIndex < 4 ? categoryIndex * 0.1 : (categoryIndex - 4) * 0.1 }}
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
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: (categoryIndex < 4 ? categoryIndex * 0.1 : (categoryIndex - 4) * 0.1) + skillIndex * 0.02 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Show More Button */}
        {skillCategories.length > 4 && (
          <motion.div
            className="flex justify-center mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="flex items-center gap-2 px-5 py-2.5 font-mono text-sm text-muted-foreground border border-border/50 rounded-lg hover:border-primary/50 hover:text-primary transition-all"
            >
              {showAll ? 'Show Less' : `View ${skillCategories.length - 4} More Categories`}
              <motion.span
                animate={{ rotate: showAll ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown size={16} />
              </motion.span>
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Skills;
