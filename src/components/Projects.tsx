import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'CAFBrain: Multimodal LLM Platform',
    description: 'Top 3 winner multimodal GenAI platform enabling contextual search and Q&A across diverse data types including video, audio, images, and PDFs. Built with RAG architecture and deployed on AWS.',
    tech: ['LangChain', 'RAG', 'AWS', 'FastAPI', 'React', 'Vector DB'],
    image: '/placeholder.svg',
    github: 'https://github.com/NishchalMN',
    demo: null,
    featured: true,
  },
  {
    title: 'FedMedVision: Privacy-Preserving Federated Learning',
    description: 'Developed a federated learning system for medical image classification preserving patient privacy. Implemented advanced aggregation algorithms and achieved 94% accuracy across distributed datasets.',
    tech: ['PyTorch', 'Federated Learning', 'Medical Imaging', 'Privacy ML'],
    image: '/placeholder.svg',
    github: 'https://github.com/NishchalMN',
    demo: null,
    featured: true,
  },
  {
    title: 'Scalable DBaaS for Rideshare Application',
    description: 'Built a distributed database-as-a-service system supporting high-throughput rideshare operations. Implemented sharding, replication, and load balancing for 10K+ concurrent users.',
    tech: ['PostgreSQL', 'Docker', 'Kubernetes', 'Go', 'Microservices'],
    image: '/placeholder.svg',
    github: 'https://github.com/NishchalMN',
    demo: null,
    featured: true,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-6 flex flex-col transition-all hover:shadow-glow group"
            >
              {/* Image/Video Placeholder */}
              <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                {project.featured && (
                  <Badge className="absolute top-3 right-3 gradient-primary">
                    Featured
                  </Badge>
                )}
              </div>
              
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              
              <p className="text-muted-foreground mb-4 flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <Badge key={i} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
              
              <div className="flex gap-3">
                {project.github && (
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                )}
                {project.demo && (
                  <Button size="sm" asChild>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
