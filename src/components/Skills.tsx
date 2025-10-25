import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['Python', 'C++', 'SQL', 'Go', 'Scala', 'JavaScript', 'TypeScript'],
  },
  {
    title: 'ML Tools & Frameworks',
    skills: [
      'PyTorch',
      'TensorFlow',
      'Langchain',
      'HuggingFace',
      'scikit-learn',
      'OpenCV',
      'ONNX',
      'MLflow',
    ],
  },
  {
    title: 'Infrastructure & Cloud',
    skills: [
      'Docker',
      'Kubernetes',
      'AWS',
      'Azure',
      'Ray',
      'Elasticsearch',
      'PostgreSQL',
      'Redis',
    ],
  },
  {
    title: 'Specializations',
    skills: [
      'Computer Vision',
      'Deep Learning',
      'NLP',
      'MLOps',
      'Distributed Systems',
      'Model Optimization',
      'RAG Systems',
      'Federated Learning',
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Technical <span className="gradient-text">Skills</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6">
              <h3 className="text-xl font-bold mb-4 text-primary">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <Badge
                    key={i}
                    variant="secondary"
                    className="text-sm px-3 py-1"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
