import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ChevronDown, Trophy, Brain, Database, Satellite, Plane, Search, TrendingUp, HeartPulse, Cpu, Mic, WandSparkles, Video } from 'lucide-react';

type ProjectCategory = 'llm' | 'cv' | 'mm' | 'systems' | 'audio' | 'robotics' | 'nlp' | 'gen3d';

type ProjectMedia =
  | { type: 'image'; src: string; alt: string }
  | { type: 'video'; src: string; poster?: string; label: string };

interface Project {
  title: string;
  shortTitle?: string;
  description: string;
  media: ProjectMedia;
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
  mm: { label: 'Multimodal', color: 'text-green-400' },
  systems: { label: 'Systems', color: 'text-accent' },
  audio: { label: 'Audio', color: 'text-yellow-400' },
  robotics: { label: 'Robotics', color: 'text-red-400' },
  nlp: { label: 'NLP', color: 'text-cyan-400' },
  gen3d: { label: '3D GenAI', color: 'text-violet-400' },
};

const allProjects: Project[] = [
  {
    title: 'CAFBrain: Multimodal LLM Platform',
    shortTitle: 'CAFBrain: Multimodal LLM Platform',
    description: 'Built an agentic RAG system that reduced grant proposal creation time from hours to under a minute, using LangChain and LangGraph with multi-step tool routing across 5000+ multimodal documents using FAISS.',
    media: { type: 'image', src: '/cafbrain.png', alt: 'CAFBrain multimodal LLM platform preview' },
    metric: { value: '4+', label: 'Hours Saved' },
    tech: ['LangChain', 'LangGraph', 'RAG', 'FAISS', 'AWS'],
    github: 'https://github.com/CAFBrain-Project/CAFBrain',
    featured: true,
    category: 'llm',
    icon: Trophy,
  },
  {
    title: 'FSTChangeNet: Temporal Change Retrieval',
    shortTitle: 'FSTChangeNet: Temporal Change Retrieval',
    description: 'Designed a dual-encoder architecture with custom frequency-spatial-temporal attention module and LoRA fine-tuned RemoteCLIP for vision-language alignment, achieving 64% Recall@10 on natural-language change queries for satellite images.',
    media: { type: 'image', src: '/fst_changenet.png', alt: 'FSTChangeNet temporal satellite change retrieval preview' },
    metric: { value: '64%', label: 'Recall@10' },
    tech: ['RemoteCLIP', 'LoRA', 'PyTorch', 'Satellite Imagery'],
    github: 'https://github.com/NishchalMN/Temporal-Change-Retrieval',
    featured: true,
    category: 'mm',
    icon: Satellite,
  },
  {
    title: 'Latent Void: 3D Generative Scene Editing',
    shortTitle: 'Latent Void: 3D Generative Scene Editing',
    description: 'Built a 3D generative scene-editing pipeline combining 3D Gaussian Splatting, SAM3 prompt-based segmentation, and LaMa inpainting, with geometry-aware fusion and masked PyTorch losses to stabilize 3DGS finetuning.',
    media: {
      type: 'video',
      src: '/latent_void.mp4',
      poster: '/latent_void_poster.svg',
      label: 'Latent Void 3D generative scene editing demo video',
    },
    tech: ['3DGS', 'SAM3', 'LaMa', 'PyTorch', '3D Scene Editing'],
    github: 'https://github.com/NishchalMN/Latent-Void',
    featured: true,
    category: 'gen3d',
    icon: WandSparkles,
  },
  {
    title: 'In-Context Learning for Autonomous Drone Racing',
    shortTitle: 'In-Context Learning for Autonomous Drone Racing',
    description: 'Enabled zero-retraining adaptation to unseen drone racing environments from just 3 demos via cross-attention over context embeddings, achieving 42% lower MSE than PPO baselines at 30Hz real-time inference across 100+ procedurally generated tracks.',
    media: {
      type: 'video',
      src: '/drone_racing.mp4',
      poster: '/drone_racing.png',
      label: 'Autonomous drone racing demo video',
    },
    metric: { value: '-42%', label: 'MSE vs PPO' },
    tech: ['Transformers', 'Robotics', 'Reinforcement Learning', 'PyTorch'],
    github: 'https://github.com/NishchalMN/In-Context-Learning-for-Autonomous-Drone-Racing',
    featured: false,
    category: 'robotics',
    icon: Plane,
  },
  {
    title: 'HyDE Generative Query Expansion Engine',
    shortTitle: 'HyDE Generative Query Expansion Engine',
    description: 'Improved NDCG@10 by 13.6% over dense retrieval baselines on MS MARCO by generating hypothetical answer documents via Mistral-7B, enabling zero-shot dense retrieval without supervised fine-tuning.',
    media: { type: 'image', src: '/HyDE.png', alt: 'HyDE generative query expansion engine preview' },
    metric: { value: '+13.6%', label: 'NDCG@10' },
    tech: ['RAG', 'HyDE', 'Mistral-7B', 'Dense Retrieval'],
    github: 'https://github.com/NishchalMN/HyDE-Generative-Query-Expansion-Engine',
    featured: false,
    category: 'nlp',
    icon: Search,
  },
  {
    title: 'FedMedVision: Privacy-Preserving Medical Platform',
    shortTitle: 'FedMedVision: Privacy-Preserving Medical Platform',
    description: 'Developed a federated learning platform for X-ray classification across 4 non-IID hospital clients, improving global F1 by 14% over centralized baselines using FedProx aggregation and class-balanced local sampling.',
    media: { type: 'image', src: '/fedmed.png', alt: 'FedMedVision privacy-preserving medical platform preview' },
    metric: { value: '+14%', label: 'Global F1' },
    tech: ['Federated Learning', 'Healthcare', 'PyTorch', 'MLflow'],
    github: 'https://github.com/NishchalMN/FedMedVision',
    featured: false,
    category: 'cv',
    icon: HeartPulse,
  },
  {
    title: 'Scalable DBaaS for RideShare',
    shortTitle: 'Scalable DBaaS for RideShare',
    description: 'Deployed a fault-tolerant Database-as-a-Service on AWS supporting 2000+ RPS with Zookeeper-based leader election, automatic failover, and read/write routing via RabbitMQ RPC, achieving zero-downtime recovery under node failure.',
    media: { type: 'image', src: '/dbaas.png', alt: 'Scalable DBaaS for RideShare preview' },
    metric: { value: '2000+', label: 'RPS' },
    tech: ['AWS EC2', 'RabbitMQ', 'Docker', 'PostgreSQL'],
    github: 'https://github.com/NishchalMN/Rideshare-Application',
    featured: false,
    category: 'systems',
    icon: Database,
  },
  {
    title: 'Magic Filler: Image Inpainting',
    shortTitle: 'Magic Filler: Image Inpainting',
    description: 'Restored complex image occlusions with realistic textures by developing a U-Net based inpainting model with transposed convolutions that reached 0.92 SSIM.',
    media: { type: 'image', src: '/image_inpainting.png', alt: 'Magic Filler image inpainting preview' },
    metric: { value: '0.92', label: 'SSIM' },
    tech: ['U-Net', 'TensorFlow', 'Image Processing'],
    github: 'https://github.com/NishchalMN/Image-Inpainting',
    featured: false,
    category: 'cv',
    icon: Cpu,
  },
  {
    title: 'Voice Cloning System',
    shortTitle: 'Few-shot Voice Cloning',
    description: 'Developed a few-shot voice cloning system using GE2E speaker embeddings and Tacotron 2, optimizing inference with a fine-tuned WaveNet vocoder.',
    media: { type: 'image', src: '/voice_cloning.png', alt: 'Few-shot voice cloning system preview' },
    tech: ['Spectrogram', 'Tacotron 2', 'WaveNet', 'PyTorch'],
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
      className={`group block overflow-hidden rounded-xl border transition-all duration-300 card-hover ${
        project.featured
          ? 'bg-card border-primary/20'
          : 'bg-card/50 border-border/50'
      }`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-muted/30 border-b border-border/50">
        {project.media.type === 'video' ? (
          <>
            <video
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              src={project.media.src}
              poster={project.media.poster}
              muted
              loop
              playsInline
              autoPlay
              preload="metadata"
              aria-label={project.media.label}
            />
            <div className="absolute right-3 top-3 flex items-center gap-1.5 rounded bg-background/80 px-2 py-1 text-xs font-mono text-muted-foreground border border-border/50 backdrop-blur">
              <Video size={12} />
              <span>Video</span>
            </div>
          </>
        ) : (
          <img
            src={project.media.src}
            alt={project.media.alt}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background/75 via-background/5 to-transparent" />
        <div className="absolute bottom-3 left-3 flex items-center gap-2">
          <div className={`w-8 h-8 rounded-lg bg-background/80 border border-border/50 backdrop-blur flex items-center justify-center ${categoryInfo.color}`}>
            <Icon size={16} />
          </div>
          <span className={`text-xs font-mono px-2 py-1 rounded bg-background/80 border border-border/50 backdrop-blur ${categoryInfo.color}`}>
            {categoryInfo.label}
          </span>
        </div>
      </div>

      <div className="p-5">
      {/* Top row */}
      <div className="flex items-start justify-between mb-3">
        <span className="text-xs font-mono text-muted-foreground">Project</span>
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
      </div>
    </motion.a>
  );
};

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const featuredProjects = allProjects.filter(p => p.featured);
  const otherProjects = allProjects.filter(p => !p.featured);
  const displayedOther = showAll ? otherProjects : otherProjects.slice(0, 3);

  return (
    <section id="projects" className="py-24 px-6 lg:px-12 relative">
      <div className="absolute inset-0 dot-grid opacity-30" />

      <div className="container mx-auto max-w-6xl relative">
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
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
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
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
        {otherProjects.length > 3 && (
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
              {showAll ? 'Show Less' : `View ${otherProjects.length - 3} More`}
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
