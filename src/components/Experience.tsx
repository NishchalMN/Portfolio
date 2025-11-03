import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Machine Learning Engineer II',
    company: 'Entrupy Inc.',
    logo: '/entrupy-icon.webp',
    location: 'Bangalore, India',
    period: 'Aug 2021 - Aug 2024',
    achievements: [
      'Built end-to-end luxury authentication system achieving 96% TPR at 5% FPR, processing 10K+ items monthly in production',
      'Trained monocular depth estimation and semantic segmentation models using SAM for automated quality inspection',
      'Developed 3D document unwarping pipeline with DenseNet, boosting OCR accuracy by 23% and achieving 0.84 SSIM',
      'Optimized on-device CoreML inference with dynamic overlays, delivering 2x faster real-time processing',
      'Built synthetic data pipelines using Blender and python simulating camera variations and 3D distortions',
    ],
    featured: true,
  },
  {
    title: 'AI Intern',
    company: 'Connyct',
    logo: '/connyct.jpeg',
    location: 'New York, NY (Remote)',
    period: 'Jun 2025 - Aug 2025',
    achievements: [
      'Built hybrid recommendation system using two-tower architecture with sentence transformers, achieving 85% semantic relevance and 15% personalized profile boosting',
      'Implemented multi-factor scoring with Redis caching, achieving <1.5s response times on recommendations',
      'Integrated system as MCP tool for LLM agents, enabling adaptive querying and real-time semantic similarity scoring',
    ],
    featured: false,
  },
  {
    title: 'Cloud ML Intern',
    company: 'IBM',
    logo: '/ibm.webp',
    location: 'Bangalore, India',
    period: 'Jan 2021 - Jul 2021',
    achievements: [
      'Developed cloud-based ML deployment pipelines on IBM Watson platform, optimizing model serving workflows',
      'Optimized batch prediction pipelines using GoLang concurrency and chunking, reducing inference latency by 15ms',
      'Benchmarked TensorFlow, PyTorch, and ONNX runtimes for production migration and performance evaluation',
    ],
    featured: false,
  },
  {
    title: 'Software Engineering Intern',
    company: 'SLK Software',
    logo: '/slk.jpeg',
    location: 'Bangalore, India',
    period: 'May 2020 - Jul 2020',
    achievements: [
      'Built centralized ELK Stack log aggregation system using Filebeat and Node.js APIs across 5+ components',
      'Saved developers 10+ hours per week on log retrieval and debugging efforts through automated aggregation',
    ],
    featured: false,
  },
  {
    title: 'Machine Learning Intern',
    company: 'PathPartner Technology',
    logo: '/pathpartner_logo.jpeg',
    location: 'Bangalore, India',
    period: 'May 2019 - Jul 2019',
    achievements: [
      'Developed real-time CNN-based gaze tracking using transposed convolutions and Gaussian heatmap regression',
      'Achieved mean error rate of 1.3px across diverse lighting and occlusion scenarios with high accuracy',
    ],
    featured: false,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Work <span className="gradient-text">Experience</span>
        </h2>
        
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className={`p-6 sm:p-8 transition-all hover:shadow-glow ${
                exp.featured ? 'border-primary shadow-glow' : ''
              }`}
            >
              <div className="flex flex-col sm:flex-row gap-6">
                {/* Logo */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-lg bg-muted flex items-center justify-center overflow-hidden">
                    <img
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                    <div className="mb-4 sm:mb-0">
                      <h3 className="text-2xl font-bold mb-2">
                        {exp.title}
                        {exp.featured && (
                          <Badge className="ml-3 gradient-primary">Featured</Badge>
                        )}
                      </h3>
                      <div className="flex items-center gap-2 text-muted-foreground mb-1">
                        <Building2 size={16} />
                        <span className="font-semibold">{exp.company}</span>
                        <span>•</span>
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <span className="text-primary mt-1.5">▹</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
