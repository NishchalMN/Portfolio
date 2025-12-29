import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ChevronDown, Trophy, Cpu, Brain, Database, Mic, Satellite, Plane, Search, TrendingUp } from 'lucide-react';

type ProjectCategory = 'llm' | 'cv' | 'systems' | 'audio' | 'robotics' | 'nlp';

interface Project {
  title: string;
  shortTitle?: string;
  description: string;
  metric?: { value: string; label: string };
  tech: string[];
  github: string;
  featured: boolean;
  category: ProjectCategory;
  icon: typeof Brain;
}

const categoryConfig: Record<ProjectCategory, { label: string; color: string }> = {
  llm: { label: 'LLM/RAG', color: 'text-primary' },
  cv: { label: 'Computer Vision', color: 'text-secondary' },
  systems: { label: 'Systems', color: 'text-accent' },
  audio: { label: 'Audio', color: 'text-purple-400' },
  robotics: { label: 'Robotics', color: 'text-red-400' },
  nlp: { label: 'NLP', color: 'text-cyan-400' },
};

const allProjects: Project[] = [
  {
    title: 'CAFBrain: Multimodal LLM Platform',
    shortTitle: 'CAFBrain',
    description: 'LangGraph-based Agentic RAG workflow handling 5000+ multimodal documents (PDFs, Videos) via FAISS, reducing grant proposal creation time from hours to under a minute.',
    metric: { value: 'Top 3', label: 'Hackathon Winner' },
    tech: ['LangGraph', 'RAG', 'FAISS', 'FastAPI', 'AWS'],
    github: 'https://github.com/NishchalMN/CAFBrain',
    featured: true,
    category: 'llm',
    icon: Trophy,
  },
  {
    title: 'Temporal Change Retrieval',
    shortTitle: 'Change Detection',
    description: 'Achieved 64% Recall@10 on satellite imagery by adapting RemoteCLIP with LoRA, multi-scale frequency analysis, and difference attention mechanisms for vision-language alignment.',
    metric: { value: '64%', label: 'Recall@10' },
    tech: ['RemoteCLIP', 'LoRA', 'PyTorch', 'Satellite Imagery'],
    github: 'https://github.com/NishchalMN/temporal-change-retrieval',
    featured: true,
    category: 'cv',
    icon: Satellite,
  },
  {
    title: 'In-Context Learning for Drone Racing',
    shortTitle: 'Drone Racing AI',
    description: 'Transformer-based In-Context Learning policy with cross-attention enabling zero-shot drone adaptation to new tracks using only 3 demonstrations, achieving 0.118 MSE at 60Hz real-time inference.',
    metric: { value: '60Hz', label: 'Real-time' },
    tech: ['Transformers', 'RL', 'AirSim', 'PyTorch'],
    github: 'https://github.com/NishchalMN/drone-icl',
    featured: true,
    category: 'robotics',
    icon: Plane,
  },
  {
    title: 'FedMedVision: Privacy-Preserving Medical Platform',
    shortTitle: 'FedMedVision',
    description: 'Improved global F1 score by 12-15% on class-skewed X-ray data by developing a federated learning system training across 4+ client nodes using MLflow and Docker.',
    metric: { value: '+15%', label: 'F1 Score' },
    tech: ['Federated Learning', 'PyTorch', 'MLflow', 'Docker'],
    github: 'https://github.com/NishchalMN/FedMedVision',
    featured: false,
    category: 'cv',
    icon: Brain,
  },
  {
    title: 'HyDE Retrieval System',
    shortTitle: 'HyDE RAG',
    description: 'Achieved 13.6% improvement in mean retrieval rate over dense baselines by implementing Hypothetical Document Embeddings using Mistral-7B for zero-shot retrieval on MS MARCO.',
    metric: { value: '+13.6%', label: 'Retrieval' },
    tech: ['Mistral-7B', 'HyDE', 'MS MARCO', 'Embeddings'],
    github: 'https://github.com/NishchalMN/hyde-retrieval',
    featured: false,
    category: 'nlp',
    icon: Search,
  },
  {
    title: 'Magic Filler: Image Inpainting',
    shortTitle: 'Magic Filler',
    description: 'Restored complex image occlusions with realistic textures by developing a U-Net based inpainting model with transposed convolutions that reached 0.92 SSIM.',
    metric: { value: '0.92', label: 'SSIM' },
    tech: ['U-Net', 'TensorFlow', 'Image Processing'],
    github: 'https://github.com/NishchalMN/Image-Inpainting',
    featured: false,
    category: 'cv',
    icon: Cpu,
  },
  {
    title: 'Scalable DBaaS for RideShare',
    shortTitle: 'DBaaS',
    description: 'Designed fault-tolerant Database-as-a-Service on AWS EC2 using RabbitMQ RPC queues with custom orchestrator for read/write routing, multi-node replication, and leader election.',
    tech: ['AWS EC2', 'RabbitMQ', 'Docker', 'PostgreSQL'],
    github: 'https://github.com/NishchalMN/Rideshare-Application',
    featured: false,
    category: 'systems',
    icon: Database,
  },
  {
    title: 'Voice Cloning System',
    shortTitle: 'Voice Clone',
    description: 'Developed a few-shot voice cloning system using GE2E speaker embeddings and Tacotron 2, optimizing inference with a fine-tuned WaveNet vocoder.',
    tech: ['GE2E', 'Tacotron 2', 'WaveNet', 'PyTorch'],
    github: 'https://github.com/NishchalMN/Voice-Cloning-Using-Deep-Learning',
    featured: false,
    category: 'audio',
    icon: Mic,
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const Icon = project.icon;
  const categoryInfo = categoryConfig[project.category];

  return (
    <motion.a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block p-5 rounded-xl border transition-all duration-300 card-hover ${
        project.featured
          ? 'bg-card border-primary/20'
          : 'bg-card/50 border-border/50'
      }`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
    >
      {/* Top row */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className={`w-8 h-8 rounded-lg bg-muted/50 flex items-center justify-center ${categoryInfo.color}`}>
            <Icon size={16} />
          </div>
          <span className={`text-xs font-mono ${categoryInfo.color}`}>
            {categoryInfo.label}
          </span>
        </div>
        {project.metric && (
          <div className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-primary/5 border border-primary/20">
            <TrendingUp size={10} className="text-primary" />
            <span className="text-xs font-mono font-semibold text-primary">{project.metric.value}</span>
            <span className="text-xs text-muted-foreground">{project.metric.label}</span>
          </div>
        )}
      </div>

      {/* Title */}
      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
        {project.shortTitle || project.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        {project.description}
      </p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tech.slice(0, 4).map((tech, i) => (
          <span key={i} className="tag text-xs py-0.5">{tech}</span>
        ))}
        {project.tech.length > 4 && (
          <span className="text-xs text-muted-foreground">+{project.tech.length - 4}</span>
        )}
      </div>

      {/* GitHub link */}
      <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground group-hover:text-primary transition-colors">
        <Github size={14} />
        <span>View on GitHub</span>
        <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">→</span>
      </div>
    </motion.a>
  );
};

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const featuredProjects = allProjects.filter(p => p.featured);
  const otherProjects = allProjects.filter(p => !p.featured);
  const displayedOther = showAll ? otherProjects : otherProjects.slice(0, 2);

  return (
    <section id="projects" className="py-24 px-6 lg:px-12 relative">
      <div className="absolute inset-0 dot-grid opacity-30" />

      <div className="container mx-auto max-w-6xl relative">
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-mono text-primary mb-2 block">03</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-lg">
            Research and applied ML projects spanning LLMs, computer vision, robotics, and distributed systems
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* Other Projects */}
        <AnimatePresence mode="sync">
          {displayedOther.length > 0 && (
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {displayedOther.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index + featuredProjects.length} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Show More Button */}
        {otherProjects.length > 2 && (
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
              {showAll ? 'Show Less' : `View ${otherProjects.length - 2} More`}
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

export default Projects;
