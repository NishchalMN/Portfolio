import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['Python', 'C++', 'SQL', 'Go', 'Scala', 'JavaScript', 'Node.js'],
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
      'CoreML',
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
      'Large Language Models',
      'Deep Learning',
      'Data Science',
      'MLOps',
      'Model Optimization',
      'Agentic RAG',
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
                  <span
                    key={i}
                    className="relative text-sm px-3 py-1.5 rounded-full bg-background/50 text-muted-foreground hover:scale-105 transition-transform"
                    style={{
                      border: '1px solid transparent',
                      backgroundImage: 'linear-gradient(hsl(222 47% 11%), hsl(222 47% 11%)), linear-gradient(135deg, hsl(163, 64%, 60%) 0%, hsl(220, 74%, 39%) 100%)',
                      backgroundOrigin: 'border-box',
                      backgroundClip: 'padding-box, border-box',
                    }}
                  >
                    {skill}
                  </span>
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
