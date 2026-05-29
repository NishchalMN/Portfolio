import { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Cloud, Code2, Search } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Tech {
  name: string;
  icon?: string;
  initials?: string;
}

interface SkillEvidence {
  label: string;
  detail: string;
  href?: string;
}

interface SkillArea {
  title: string;
  icon: LucideIcon;
  summary: string;
  proof: string;
  core: Tech[];
  alsoUsed: Tech[];
  evidence: SkillEvidence[];
}

const techInitials = (tech: Tech) =>
  tech.initials ??
  tech.name
    .split(/[\s./+-]+/)
    .filter(Boolean)
    .map((part) => part[0])
    .join('')
    .slice(0, 3)
    .toUpperCase();

const skillAreas: SkillArea[] = [
  {
    title: 'LLM, Agents & Retrieval',
    icon: Search,
    summary: 'RAG systems, tool-calling agents, semantic search, and retrieval evaluation.',
    proof: 'Built agentic and hybrid retrieval systems over multimodal data with measurable latency and ranking gains.',
    core: [
      { name: 'LangChain', icon: '/tech-icons/langchain.svg' },
      { name: 'LangGraph', icon: '/tech-icons/langchain.svg', initials: 'LG' },
      { name: 'Hugging Face', icon: '/tech-icons/huggingface.svg' },
      { name: 'Elasticsearch', icon: '/tech-icons/elasticsearch.svg' },
      { name: 'vLLM', icon: '/tech-icons/vllm.svg' },
      { name: 'DeepEval', initials: 'DE' },
    ],
    alsoUsed: [
      { name: 'LlamaIndex', icon: '/tech-icons/llamaindex.svg' },
      { name: 'Pinecone', icon: '/tech-icons/pinecone.svg' },
      { name: 'LoRA', initials: 'Lo' },
      { name: 'LangSmith', icon: '/tech-icons/langchain.svg', initials: 'LS' },
      { name: 'FAISS', initials: 'FA' },
    ],
    evidence: [
      {
        label: 'CAFBrain',
        detail: 'agentic RAG across 5000+ multimodal documents',
        href: 'https://github.com/CAFBrain-Project/CAFBrain',
      },
      {
        label: 'HyDE Engine',
        detail: '+13.6% NDCG@10 over dense retrieval baselines',
        href: 'https://github.com/NishchalMN/HyDE-Generative-Query-Expansion-Engine',
      },
      {
        label: 'Connyct',
        detail: 'hybrid BM25 + vector retrieval at sub-150ms p95',
      },
    ],
  },
  {
    title: 'Computer Vision & Multimodal ML',
    icon: Brain,
    summary: 'Vision-language models, segmentation, retrieval, inpainting, and edge inference.',
    proof: 'Shipped production CV systems and research pipelines spanning authentication, satellite change retrieval, and 3D scene editing.',
    core: [
      { name: 'PyTorch', icon: '/tech-icons/pytorch.svg' },
      { name: 'OpenCV', icon: '/tech-icons/opencv.svg' },
      { name: 'SAM', icon: '/tech-icons/meta.svg' },
      { name: 'CLIP', icon: '/tech-icons/openai.svg' },
      { name: 'TensorRT', icon: '/tech-icons/nvidia.svg' },
      { name: 'Core ML', icon: '/tech-icons/apple.svg' },
    ],
    alsoUsed: [
      { name: 'LoFTR', initials: 'LF' },
      { name: 'ONNX', icon: '/tech-icons/onnx.svg' },
      { name: 'TensorFlow', icon: '/tech-icons/tensorflow.svg' },
      { name: 'Open3D', icon: '/tech-icons/open3d.svg' },
      { name: 'Stable Diffusion', icon: '/tech-icons/stability-ai.svg' },
      { name: 'Blender', icon: '/tech-icons/blender.svg' },
    ],
    evidence: [
      {
        label: 'Entrupy',
        detail: '96% TPR at 5% FPR for luxury authentication',
      },
      {
        label: 'FSTChangeNet',
        detail: '64% Recall@10 for satellite change retrieval',
        href: 'https://github.com/NishchalMN/Temporal-Change-Retrieval',
      },
      {
        label: 'Latent Void',
        detail: 'SAM + inpainting + 3D Gaussian Splatting',
        href: 'https://github.com/NishchalMN/Latent-Void',
      },
    ],
  },
  {
    title: 'ML Systems & Infrastructure',
    icon: Cloud,
    summary: 'Training, serving, orchestration, monitoring, and data systems for production ML.',
    proof: 'Designed systems that scale inference, automate evaluation, and keep model pipelines observable.',
    core: [
      { name: 'AWS', icon: '/tech-icons/aws.svg' },
      { name: 'Docker', icon: '/tech-icons/docker.svg' },
      { name: 'Kubernetes', icon: '/tech-icons/kubernetes.svg' },
      { name: 'Ray', icon: '/tech-icons/ray.svg' },
      { name: 'MLflow', icon: '/tech-icons/mlflow.svg' },
      { name: 'FastAPI', icon: '/tech-icons/fastapi.svg' },
    ],
    alsoUsed: [
      { name: 'CUDA', icon: '/tech-icons/nvidia.svg' },
      { name: 'Triton', icon: '/tech-icons/nvidia.svg' },
      { name: 'Redis', icon: '/tech-icons/redis.svg' },
      { name: 'PostgreSQL', icon: '/tech-icons/postgresql.svg' },
      { name: 'Kafka', icon: '/tech-icons/kafka.svg' },
      { name: 'Spark', icon: '/tech-icons/spark.svg' },
    ],
    evidence: [
      {
        label: 'Entrupy ML Serving',
        detail: '150K+ monthly authentication requests on EKS/Ray',
      },
      {
        label: 'RideShare DBaaS',
        detail: '2000+ RPS with failover and read/write routing',
        href: 'https://github.com/NishchalMN/Rideshare-Application',
      },
      {
        label: 'FedMedVision',
        detail: '+14% global F1 with federated MLflow workflows',
        href: 'https://github.com/NishchalMN/FedMedVision',
      },
    ],
  },
  {
    title: 'Languages & Data Tooling',
    icon: Code2,
    summary: 'Implementation languages and data tooling used across modeling, services, and pipelines.',
    proof: 'Kept only the languages and libraries that show up in shipped ML systems, research code, or scalable data work.',
    core: [
      { name: 'Python', icon: '/tech-icons/python.svg' },
      { name: 'SQL', icon: '/tech-icons/postgresql.svg' },
      { name: 'C++', icon: '/tech-icons/cplusplus.svg' },
      { name: 'Go', icon: '/tech-icons/go.svg' },
      { name: 'Pandas', icon: '/tech-icons/pandas.svg' },
      { name: 'NumPy', icon: '/tech-icons/numpy.svg' },
    ],
    alsoUsed: [
      { name: 'Scala', icon: '/tech-icons/scala.svg' },
      { name: 'Node.js', icon: '/tech-icons/nodejs.svg' },
      { name: 'Scikit-Learn', icon: '/tech-icons/scikitlearn.svg' },
      { name: 'XGBoost', initials: 'XGB' },
      { name: 'MongoDB', icon: '/tech-icons/mongodb.svg' },
      { name: 'Airflow', icon: '/tech-icons/airflow.svg' },
    ],
    evidence: [
      {
        label: 'IBM Watson Cloud',
        detail: 'Go concurrency for lower-latency batch prediction',
      },
      {
        label: 'Model Pipelines',
        detail: 'Python data workflows for training, evaluation, and monitoring',
      },
      {
        label: 'DBaaS + Retrieval',
        detail: 'SQL and service code across distributed data products',
      },
    ],
  },
];

const TechIcon = ({ tech, size = 'md' }: { tech: Tech; size?: 'sm' | 'md' }) => {
  const initials = techInitials(tech);
  const [iconFailed, setIconFailed] = useState(false);
  const isSmall = size === 'sm';
  const iconSizeClass = isSmall ? 'h-4 w-4' : 'h-6 w-6';
  const tileSizeClass = isSmall ? 'h-7 w-7 rounded-md' : 'h-9 w-9 rounded-lg';
  const hasIcon = Boolean(tech.icon && !iconFailed);

  return (
    <span
      className={`relative flex flex-shrink-0 items-center justify-center border ${
        hasIcon
          ? `${tileSizeClass} border-white/10 bg-white shadow-sm`
          : `${isSmall ? 'h-7 w-7 rounded-md' : 'h-9 w-9 rounded-lg'} border-border/60 bg-background/80`
      }`}
    >
      {hasIcon ? (
        <img
          src={tech.icon}
          aria-hidden="true"
          alt=""
          className={`${iconSizeClass} object-contain`}
          loading="lazy"
          onError={() => setIconFailed(true)}
        />
      ) : (
        <span className={`${isSmall ? 'text-[9px]' : 'text-[10px]'} font-mono font-semibold text-primary`}>
          {initials}
        </span>
      )}
    </span>
  );
};

const TechBadge = ({ tech, variant = 'core' }: { tech: Tech; variant?: 'core' | 'also' }) => (
  <motion.span
    className={`flex min-w-0 items-center gap-2 border transition-colors ${
      variant === 'core'
        ? 'min-h-[44px] rounded-lg border-border/60 bg-muted/30 px-3 py-2 text-sm text-foreground hover:border-primary/30'
        : 'min-h-[34px] rounded-md border-border/40 bg-muted/20 px-2.5 py-1.5 text-xs text-muted-foreground hover:border-primary/20 hover:text-foreground'
    }`}
    whileHover={{ y: -2 }}
  >
    <TechIcon tech={tech} size={variant === 'also' ? 'sm' : 'md'} />
    <span className="whitespace-nowrap">{tech.name}</span>
  </motion.span>
);

const EvidenceItem = ({ item }: { item: SkillEvidence }) => {
  const content = (
    <>
      <span className="block font-medium text-foreground transition-colors group-hover:text-primary">
        {item.label}
      </span>
      <span className="block text-muted-foreground">{item.detail}</span>
    </>
  );

  const className =
    'group block border-l border-border/70 pl-3 text-xs leading-relaxed transition-colors hover:border-primary/60';

  return item.href ? (
    <a href={item.href} target="_blank" rel="noopener noreferrer" className={className}>
      {content}
    </a>
  ) : (
    <div className={className}>{content}</div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="relative px-6 py-24 lg:px-12">
      <div className="absolute inset-0 chart-lines opacity-30" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          className="mb-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="mb-2 block font-mono text-sm text-primary">04</span>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Technical Skills
          </h2>
          <p className="max-w-xl text-muted-foreground">
            Core tools I use to build production ML systems, with supporting technologies tied to real projects.
          </p>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-2">
          {skillAreas.map((area, areaIndex) => {
            const Icon = area.icon;

            return (
              <motion.article
                key={area.title}
                className="card-hover rounded-lg border border-border/50 bg-card/50 p-5"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: areaIndex * 0.08 }}
              >
                <div className="mb-5 flex items-start gap-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/10">
                    <Icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{area.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {area.summary}
                    </p>
                  </div>
                </div>

                <p className="mb-5 border-l border-primary/40 pl-3 text-sm leading-relaxed text-foreground/85">
                  {area.proof}
                </p>

                <div>
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <span className="font-mono text-xs uppercase tracking-[0.16em] text-primary">
                      Core
                    </span>
                    <span className="text-xs text-muted-foreground">primary working stack</span>
                  </div>
                  <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-2">
                    {area.core.map((tech) => (
                      <TechBadge key={tech.name} tech={tech} />
                    ))}
                  </div>
                </div>

                <div className="mt-5">
                  <span className="mb-3 block font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    Also Used
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {area.alsoUsed.map((tech) => (
                      <TechBadge key={tech.name} tech={tech} variant="also" />
                    ))}
                  </div>
                </div>

                <div className="mt-5 border-t border-border/40 pt-4">
                  <span className="mb-3 block font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    Used In
                  </span>
                  <div className="grid gap-2">
                    {area.evidence.map((item) => (
                      <EvidenceItem key={`${area.title}-${item.label}`} item={item} />
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
