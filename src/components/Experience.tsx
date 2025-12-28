import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, Calendar, ArrowUpRight } from 'lucide-react';

const experiences = [
  {
    title: 'Machine Learning Engineer II',
    company: 'Entrupy Inc.',
    logo: '/entrupy-icon.webp',
    website: 'https://www.entrupy.com',
    location: 'Bangalore, India',
    period: 'Aug 2021 - Aug 2024',
    achievements: [
      'Built end-to-end luxury authentication system achieving 96% TPR at 5% FPR, processing 10K+ items monthly in production.',
      'Developed 3D document unwarping pipeline with DenseNet, boosting OCR accuracy by 23% and achieving 0.84 SSIM.',
      'Optimized on-device CoreML inference with dynamic overlays, delivering 2x faster real-time processing.',
    ],
    tech: ['PyTorch', 'CoreML', 'Ray Serve', 'AWS'],
    featured: true,
  },
  {
    title: 'AI Intern',
    company: 'Connyct',
    logo: '/connyct.jpeg',
    website: 'https://www.connyct.com',
    location: 'New York, NY (Remote)',
    period: 'Jun 2025 - Aug 2025',
    achievements: [
      'Built hybrid recommendation system using two-tower architecture with sentence transformers, achieving <42ms average latency.',
      'Implemented multi-factor reranking with Redis caching, supporting 50+ RPS.',
    ],
    tech: ['Python', 'Redis', 'Transformers', 'LLMs'],
    featured: false,
  },
  {
    title: 'MLOps Intern',
    company: 'IBM',
    logo: '/ibm.webp',
    website: 'https://www.ibm.com',
    location: 'Bangalore, India',
    period: 'Jan 2021 - Jul 2021',
    achievements: [
      'Optimized batch prediction pipelines using GoLang concurrency, reducing inference latency by 15ms.',
      'Benchmarked TensorFlow, PyTorch, and ONNX runtimes for production migration.',
    ],
    tech: ['Go', 'Kubernetes', 'TensorFlow', 'ONNX'],
    featured: false,
  },
  {
    title: 'Software Engineering Intern',
    company: 'SLK Software',
    logo: '/slk.jpeg',
    website: 'https://slksoftware.com/',
    location: 'Bangalore, India',
    period: 'May 2020 - Jul 2020',
    achievements: [
        'Built centralized ELK Stack log aggregation system using Filebeat and Node.js APIs across 5+ components.',
    ],
    tech: ['ELK Stack', 'Node.js'],
    featured: false,
  },
  {
    title: 'Machine Learning Intern',
    company: 'PathPartner Technology',
    logo: '/pathpartner_logo.jpeg',
    website: 'https://www.linkedin.com/company/pathpartnertechnology',
    location: 'Bangalore, India',
    period: 'May 2019 - Jul 2019',
    achievements: [
      'Developed real-time CNN-based gaze tracking using transposed convolutions and Gaussian heatmap regression.',
    ],
    tech: ['CNN', 'Computer Vision'],
    featured: false,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl font-bold mb-16 text-center">
          Professional <span className="gradient-text">Journey</span>
        </h2>
        
        <div className="relative border-l-2 border-primary/20 ml-4 md:ml-12 space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-12">
              {/* Timeline Dot */}
              <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 bg-background ${index === 0 ? 'border-primary animate-pulse' : 'border-muted-foreground'}`} />
              
              <Card className={`p-6 transition-all hover:border-primary/50 group ${exp.featured ? 'shadow-lg border-primary/30 bg-primary/5' : ''}`}>
                <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold flex items-center gap-2">
                      {exp.title}
                      {exp.featured && <Badge variant="default" className="text-[10px] h-5">Latest</Badge>}
                    </h3>
                    <a href={exp.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:underline mt-1 font-medium">
                      <Building2 size={14} />
                      {exp.company}
                      <ArrowUpRight size={14} />
                    </a>
                  </div>
                  <div className="text-sm text-muted-foreground flex flex-col md:items-end gap-1">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} />
                      {exp.period}
                    </div>
                    <span>{exp.location}</span>
                  </div>
                </div>

                <ul className="space-y-2 mb-4">
                  {exp.achievements.map((item, i) => (
                    <li key={i} className="text-muted-foreground text-sm leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-primary/40 before:rounded-full">
                      {item}
                    </li>
                  ))}
                </ul>

                {exp.tech && (
                  <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border/50">
                    {exp.tech.map((t) => (
                      <Badge key={t} variant="secondary" className="text-xs font-normal bg-secondary/10 text-secondary-foreground hover:bg-secondary/20">
                        {t}
                      </Badge>
                    ))}
                  </div>
                )}
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;