import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const allProjects = [
  {
    title: 'CAFBrain: Multimodal LLM Platform',
    description: 'Top 3 winner multimodal GenAI platform enabling contextual search and Q&A across diverse data types including video, audio, images, and PDFs. Built with RAG architecture and deployed on AWS.',
    tech: ['LangChain', 'RAG', 'AWS', 'FastAPI', 'React', 'Vector DB'],
    image: '/cafbrain.png',
    github: 'https://github.com/NishchalMN/CAFBrain',
    demo: null,
    featured: true,
  },
  {
    title: 'FedMedVision: Privacy-Preserving Federated Learning',
    description: 'Developed a federated learning system for medical image classification preserving patient privacy. Implemented advanced aggregation algorithms and achieved 94% accuracy across distributed datasets.',
    tech: ['PyTorch', 'Federated Learning', 'Medical Imaging', 'Privacy ML'],
    image: '/fedmed.png',
    github: 'https://github.com/NishchalMN/FedMedVision',
    demo: null,
    featured: true,
  },
  {
    title: 'Magic Filler: Image Inpainting with Deep Learning',
    description: 'Developed a U-Net-based image inpainting model which restores occlusions such as window panes, fencing, or dirt on the images with realistic textures, closely matching the surrounding areas with an average SSIM score of 0.92',
    tech: ['CNN', 'TensorFlow', 'Image Processing', 'Deep Learning'],
    image: '/image_inpainting.png',
    github: 'https://github.com/NishchalMN/Image-Inpainting',
    demo: null,
    featured: true,
  },
  {
    title: 'Scalable DBaaS for Rideshare Application',
    description: 'Built a distributed database-as-a-service system supporting high-throughput rideshare operations. Implemented sharding, replication, and load balancing for 10K+ concurrent users.',
    tech: ['PostgreSQL', 'Docker', 'Kubernetes', 'Go', 'Microservices'],
    image: '/dbaas.png',
    github: 'https://github.com/NishchalMN/Rideshare-Application',
    demo: null,
    featured: false,
  },
  // Add more projects here that will be hidden initially
  {
    title: 'Voice Cloning Using Deep Learning',
    description: 'Developed a few-shot voice cloning system that replicates a speaker\'s voice from a short audio clip and text, using speaker embeddings from GE2E, and text-to-Mel synthesis using Tacotron 2, achieving a MOS of 3.2/5 for Female American speakers',
    tech: ['PyTorch', 'NLP', 'Librosa', 'Audio Processing', 'Spectrograms', 'Speech Synthesis'],
    image: '/voice_cloning.png',
    github: 'https://github.com/NishchalMN/Voice-Cloning-Using-Deep-Learning',
    demo: null,
    featured: false,
  },
  {
    title: 'Heart disease detection website with live COVID-19 updates',
    description: 'A web application that assesses the risk of heart disease and diabetes based on user inputs and provides real-time COVID-19 updates via email. The application is built using Flask in Python.',
    tech: ['Flask', 'Machine Learning', 'Random Forest', 'Web Scraping', 'APIs'],
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
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Featured <span className="gradient-text">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project, index) => (
            <a
              key={index}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="block transition-all hover:-translate-y-2 cursor-pointer"
            >
              <Card className="p-6 flex flex-col transition-all hover:shadow-glow group h-full"
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
            </a>
          ))}
        </div>

        {allProjects.length > 3 && (
          <div className="flex justify-center mt-12">
            <Button
              onClick={() => setShowAll(!showAll)}
              variant="outline"
              size="lg"
              className="gradient-hover transition-all"
            >
              {showAll ? 'Show Less' : 'Show More'}
              <ChevronDown className={`ml-2 h-5 w-5 transition-transform ${showAll ? 'rotate-180' : ''}`} />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
