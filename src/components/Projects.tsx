import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, ChevronDown, Trophy, Cpu, Brain, Database, Mic, Satellite, Plane, Search } from 'lucide-react';
import {
  staggerContainer,
  staggerItem,
  viewportConfig,
  hoverScale,
} from '@/lib/animations';

type ProjectCategory = 'llm' | 'cv' | 'systems' | 'audio' | 'robotics' | 'nlp';

interface Project {
  title: string;
  shortTitle?: string;
  description: string;
  highlight?: string; // Key metric to show prominently
  tech: string[];
  image: string;
  github: string;
  demo?: string | null;
  featured: boolean;
  category: ProjectCategory;
  icon: typeof Brain;
}

const categoryConfig: Record<ProjectCategory, { label: string; color: string }> = {
  llm: { label: 'LLM/RAG', color: 'text-emerald-400' },
  cv: { label: 'Computer Vision', color: 'text-blue-400' },
  systems: { label: 'Distributed Systems', color: 'text-orange-400' },
  audio: { label: 'Audio/Speech', color: 'text-purple-400' },
  robotics: { label: 'Robotics', color: 'text-red-400' },
  nlp: { label: 'NLP', color: 'text-cyan-400' },
};

const allProjects: Project[] = [
  {
    title: 'CAFBrain: Multimodal LLM Platform',
    shortTitle: 'CAFBrain',
    description: 'LangGraph-based Agentic RAG workflow handling 5000+ multimodal documents (PDFs, Videos) via FAISS, reducing grant proposal creation time from hours to under a minute.',
    highlight: 'Top 3 Winner',
    tech: ['LangGraph', 'RAG', 'FAISS', 'FastAPI', 'AWS'],
    image: '/cafbrain.png',
    github: 'https://github.com/NishchalMN/CAFBrain',
    featured: true,
    category: 'llm',
    icon: Trophy,
  },
  {
    title: 'Temporal Change Retrieval',
    shortTitle: 'Change Detection',
    description: 'Achieved 64% Recall@10 on satellite imagery by adapting RemoteCLIP with LoRA, multi-scale frequency analysis, and difference attention mechanisms for vision-language alignment.',
    highlight: '64% Recall@10',
    tech: ['RemoteCLIP', 'LoRA', 'PyTorch', 'Satellite Imagery'],
    image: '/temporal_change.png',
    github: 'https://github.com/NishchalMN/temporal-change-retrieval',
    featured: true,
    category: 'cv',
    icon: Satellite,
  },
  {
    title: 'In-Context Learning for Drone Racing',
    shortTitle: 'Drone Racing AI',
    description: 'Transformer-based In-Context Learning policy with cross-attention enabling zero-shot drone adaptation to new tracks using only 3 demonstrations, achieving 0.118 MSE at 60Hz real-time inference.',
    highlight: '60Hz Real-time',
    tech: ['Transformers', 'RL', 'AirSim', 'PyTorch'],
    image: '/drone_racing.png',
    github: 'https://github.com/NishchalMN/drone-icl',
    featured: true,
    category: 'robotics',
    icon: Plane,
  },
  {
    title: 'FedMedVision: Privacy-Preserving Medical Platform',
    shortTitle: 'FedMedVision',
    description: 'Improved global F1 score by 12-15% on class-skewed X-ray data by developing a federated learning system training across 4+ client nodes using MLflow and Docker.',
    highlight: '+15% F1 Score',
    tech: ['Federated Learning', 'PyTorch', 'MLflow', 'Docker'],
    image: '/fedmed.png',
    github: 'https://github.com/NishchalMN/FedMedVision',
    featured: false,
    category: 'cv',
    icon: Brain,
  },
  {
    title: 'HyDE Retrieval System',
    shortTitle: 'HyDE RAG',
    description: 'Achieved 13.6% improvement in mean retrieval rate over dense baselines by implementing Hypothetical Document Embeddings using Mistral-7B for zero-shot retrieval on MS MARCO.',
    highlight: '+13.6% Retrieval',
    tech: ['Mistral-7B', 'HyDE', 'MS MARCO', 'Embeddings'],
    image: '/hyde_retrieval.png',
    github: 'https://github.com/NishchalMN/hyde-retrieval',
    featured: false,
    category: 'nlp',
    icon: Search,
  },
  {
    title: 'Magic Filler: Image Inpainting',
    shortTitle: 'Magic Filler',
    description: 'Restored complex image occlusions with realistic textures by developing a U-Net based inpainting model with transposed convolutions that reached 0.92 SSIM.',
    highlight: '0.92 SSIM',
    tech: ['U-Net', 'TensorFlow', 'Image Processing'],
    image: '/image_inpainting.png',
    github: 'https://github.com/NishchalMN/Image-Inpainting',
    featured: false,
    category: 'cv',
    icon: Cpu,
  },
  {
    title: 'Scalable DBaaS for RideShare',
    shortTitle: 'DBaaS',
    description: 'Designed fault-tolerant Database-as-a-Service on AWS EC2 using RabbitMQ RPC queues with custom orchestrator for read/write routing, multi-node replication, and leader election.',
    highlight: 'Fault-Tolerant',
    tech: ['AWS EC2', 'RabbitMQ', 'Docker', 'PostgreSQL'],
    image: '/dbaas.png',
    github: 'https://github.com/NishchalMN/Rideshare-Application',
    featured: false,
    category: 'systems',
    icon: Database,
  },
  {
    title: 'Voice Cloning System',
    shortTitle: 'Voice Clone',
    description: 'Developed a few-shot voice cloning system using GE2E speaker embeddings and Tacotron 2, optimizing inference with a fine-tuned WaveNet vocoder.',
    highlight: 'Few-Shot',
    tech: ['GE2E', 'Tacotron 2', 'WaveNet', 'PyTorch'],
    image: '/voice_cloning.png',
    github: 'https://github.com/NishchalMN/Voice-Cloning-Using-Deep-Learning',
    featured: false,
    category: 'audio',
    icon: Mic,
  },
];

// Project Card Component
const ProjectCard = ({
  project,
  index,
  isFeatured,
}: {
  project: Project;
  index: number;
  isFeatured: boolean;
}) => {
  const Icon = project.icon;
  const categoryInfo = categoryConfig[project.category];

  return (
    <motion.div
      variants={staggerItem}
      className={`group ${isFeatured ? 'md:col-span-2 lg:col-span-1' : ''}`}
    >
      <motion.a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
        whileHover={{ y: -8 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <Card
          className={`relative h-full overflow-hidden transition-all duration-500 ${
            isFeatured
              ? 'bg-gradient-to-br from-card via-card to-primary/5 border-primary/30'
              : 'border-border/50 hover:border-border'
          }`}
        >
          {/* Image Container */}
          <div className="relative h-48 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              onError={(e) => {
                // Fallback gradient if image doesn't load
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.classList.add('bg-gradient-to-br', 'from-primary/20', 'to-secondary/20');
              }}
            />

            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

            {/* Category & Icon */}
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-background/80 backdrop-blur-sm flex items-center justify-center">
                <Icon size={16} className={categoryInfo.color} />
              </div>
              <span className={`text-xs font-mono ${categoryInfo.color} bg-background/60 backdrop-blur-sm px-2 py-1 rounded`}>
                {categoryInfo.label}
              </span>
            </div>

            {/* Highlight Badge */}
            {project.highlight && (
              <motion.div
                className="absolute top-4 right-4"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Badge
                  className={`${
                    isFeatured
                      ? 'gradient-primary shadow-glow'
                      : 'bg-secondary/20 text-secondary border-secondary/30'
                  } font-mono text-xs`}
                >
                  {project.highlight}
                </Badge>
              </motion.div>
            )}

            {/* GitHub icon on hover */}
            <motion.div
              className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-foreground/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              whileHover={{ scale: 1.1 }}
            >
              <Github size={18} className="text-foreground" />
            </motion.div>
          </div>

          {/* Content */}
          <div className="p-5">
            <h3 className="text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
              {project.shortTitle || project.title}
            </h3>

            <p className="text-sm text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-1.5">
              {project.tech.slice(0, 4).map((tech, i) => (
                <span
                  key={i}
                  className="text-xs px-2 py-0.5 rounded bg-muted/50 text-muted-foreground border border-border/50"
                >
                  {tech}
                </span>
              ))}
              {project.tech.length > 4 && (
                <span className="text-xs px-2 py-0.5 rounded bg-muted/30 text-muted-foreground">
                  +{project.tech.length - 4}
                </span>
              )}
            </div>
          </div>

          {/* Featured indicator line */}
          {isFeatured && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent" />
          )}
        </Card>
      </motion.a>
    </motion.div>
  );
};

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const featuredProjects = allProjects.filter(p => p.featured);
  const otherProjects = allProjects.filter(p => !p.featured);
  const displayedOther = showAll ? otherProjects : otherProjects.slice(0, 2);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/5 via-transparent to-muted/5 pointer-events-none" />

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
            {'<projects>'}
          </motion.span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            Research and applied ML projects spanning LLMs, computer vision, robotics, and distributed systems
          </p>
        </motion.div>

        {/* Featured Projects - Bento Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8"
        >
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              isFeatured={true}
            />
          ))}
        </motion.div>

        {/* Other Projects */}
        <AnimatePresence mode="sync">
          {displayedOther.length > 0 && (
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
            >
              {displayedOther.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={index}
                  isFeatured={false}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Show More/Less Button */}
        {otherProjects.length > 2 && (
          <motion.div
            className="flex justify-center mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Button
              onClick={() => setShowAll(!showAll)}
              variant="outline"
              className="group gap-2 px-6 border-border/50 hover:border-primary/50 hover:bg-primary/5"
            >
              {showAll ? 'Show Less' : `View ${otherProjects.length - 2} More Projects`}
              <motion.span
                animate={{ rotate: showAll ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown size={16} />
              </motion.span>
            </Button>
          </motion.div>
        )}

        {/* Closing tag */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-mono text-primary/50">{'</projects>'}</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
