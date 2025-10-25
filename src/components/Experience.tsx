import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Machine Learning Engineer II',
    company: 'Entrupy',
    location: 'Remote',
    period: 'Aug 2021 - Aug 2024',
    achievements: [
      'Built production ML pipelines achieving 96% TPR and 0.3% FPR using PyTorch and Docker',
      'Improved OCR accuracy by 23% through custom pipeline design and ensemble methods',
      'Doubled model training performance using ONNX Runtime and mixed-precision training',
      'Deployed scalable ML services on Azure Kubernetes with 99.9% uptime',
      'Developed real-time inference systems processing 10K+ requests daily',
    ],
    featured: true,
  },
  {
    title: 'AI Intern',
    company: 'Connyct',
    location: 'Remote',
    period: 'May 2021 - Jul 2021',
    achievements: [
      'Developed custom search algorithms to enhance resume matching accuracy',
      'Built recommendation systems improving candidate-job fit by 30%',
      'Implemented NLP pipelines for resume parsing and skill extraction',
    ],
    featured: false,
  },
  {
    title: 'Cloud ML Intern',
    company: 'IBM',
    location: 'Bangalore, India',
    period: 'Jan 2021 - May 2021',
    achievements: [
      'Developed cloud-based ML solutions on IBM Watson platform',
      'Created automated ML pipelines reducing deployment time by 40%',
      'Collaborated with cross-functional teams on enterprise AI projects',
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
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
