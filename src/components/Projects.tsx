import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, ChevronDown, Trophy, Zap, Shield } from 'lucide-react';
import { useState } from 'react';

const allProjects = [
  {
    title: 'CAFBrain: Multimodal LLM Platform',
    description: 'Top 3 winner multimodal GenAI platform enabling contextual search and Q&A across diverse data types including video, audio, images, and PDFs. Built with RAG architecture and deployed on AWS.',
    tech: ['LangChain', 'RAG', 'AWS', 'FastAPI', 'React'],
    image: '/cafbrain.png',
    github: 'https://github.com/NishchalMN/CAFBrain',
    demo: null,
    featured: true,
    metric: 'Top 3 Winner',
    icon: Trophy,
  },
  {
    title: 'FedMedVision',
    description: 'Privacy-preserving federated learning system for medical image classification. Implemented advanced aggregation algorithms to train across distributed hospital datasets without sharing patient data.',
    tech: ['PyTorch', 'Federated Learning', 'Medical Imaging'],
    image: '/fedmed.png',
    github: 'https://github.com/NishchalMN/FedMedVision',
    demo: null,
    featured: true,
    metric: '94% Accuracy',
    icon: Shield,
  },
  {
    title: 'Scalable DBaaS',
    description: 'Distributed database-as-a-service system supporting high-throughput rideshare operations. Implemented sharding, replication, and load balancing for 10K+ concurrent users.',
    tech: ['Go', 'Kubernetes', 'PostgreSQL', 'Docker'],
    image: '/dbaas.png',
    github: 'https://github.com/NishchalMN/Rideshare-Application',
    demo: null,
    featured: true,
    metric: '10K+ Users',
    icon: Zap,
  },
  {
    title: 'Magic Filler: Image Inpainting',
    description: 'U-Net-based image inpainting model restoring occlusions like window panes or fencing with realistic textures.',
    tech: ['CNN', 'TensorFlow', 'Deep Learning'],
    image: '/image_inpainting.png',
    github: 'https://github.com/NishchalMN/Image-Inpainting',
    demo: null,
    featured: false,
    metric: '0.92 SSIM',
  },
  {
    title: 'Voice Cloning Deep Learning',
    description: 'Few-shot voice cloning system replicating speakers from short audio clips using GE2E embeddings and Tacotron 2.',
    tech: ['PyTorch', 'Librosa', 'Speech Synthesis'],
    image: '/voice_cloning.png',
    github: 'https://github.com/NishchalMN/Voice-Cloning-Using-Deep-Learning',
    demo: null,
    featured: false,
    metric: '3.2/5 MOS',
  },
  {
    title: 'Heart Disease Detection',
    description: 'Web app assessing heart disease and diabetes risk with real-time COVID-19 updates via email alerts.',
    tech: ['Flask', 'Scikit-learn', 'Web Scraping'],
    image: '/heart_disease.png',
    github: 'https://github.com/NishchalMN/Heart-disease-diabetes-detection-website-with-live-covid-updates',
    demo: null,
    featured: false,
  },
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? allProjects : allProjects.slice(0, 3);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold mb-4 text-center">
          Featured <span className="gradient-text">Work</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          A selection of projects focusing on scalable systems, privacy-preserving AI, and generative models.
        </p>

        <div className="grid gap-8">
          {displayedProjects.map((project, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden border-border/50 bg-card/50 transition-all hover:border-primary/50 hover:shadow-glow"
            >
              <div className="flex flex-col md:flex-row">
                {/* Image Section */}
                <div className="w-full md:w-2/5 h-64 md:h-auto relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10 md:hidden" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {project.metric && (
                    <Badge className="absolute top-4 left-4 z-20 bg-background/90 backdrop-blur-sm border-primary/20 text-foreground shadow-sm">
                      {project.icon && <project.icon className="w-3 h-3 mr-1.5 text-primary" />}
                      {project.metric}
                    </Badge>
                  )}
                </div>

                {/* Content Section */}
                <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col justify-center">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Github size={20} />
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((tech, i) => (
                      <Badge 
                        key={i} 
                        variant="secondary" 
                        className="bg-secondary/10 hover:bg-secondary/20 text-secondary-foreground border-transparent"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {allProjects.length > 3 && (
          <div className="flex justify-center mt-12">
            <Button
              onClick={() => setShowAll(!showAll)}
              variant="outline"
              size="lg"
              className="group"
            >
              {showAll ? 'Show Less' : 'View Archive'}
              <ChevronDown className={`ml-2 h-4 w-4 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`} />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;