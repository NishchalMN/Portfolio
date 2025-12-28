import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip } from 'recharts';

const skillData = [
  { subject: 'Computer Vision', A: 120, fullMark: 150 },
  { subject: 'LLMs & NLP', A: 110, fullMark: 150 },
  { subject: 'MLOps', A: 90, fullMark: 150 },
  { subject: 'Data Science', A: 130, fullMark: 150 },
  { subject: 'Backend Eng', A: 85, fullMark: 150 },
  { subject: 'Cloud Infra', A: 95, fullMark: 150 },
];

const technicalSkills = {
  "Languages": ['Python', 'C++', 'SQL', 'Go', 'Scala', 'JavaScript', 'Node.js'],
  "Frameworks": ['PyTorch', 'TensorFlow', 'Langchain', 'HuggingFace', 'scikit-learn', 'OpenCV', 'ONNX'],
  "Infrastructure": ['Docker', 'Kubernetes', 'AWS', 'Azure', 'Ray', 'Elasticsearch', 'PostgreSQL', 'Apache Spark'],
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-muted/20 -z-10" />
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold mb-16 text-center">
          Technical <span className="gradient-text">Proficiency</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Data Viz */}
          <div className="w-full h-[400px] bg-card/50 backdrop-blur-sm rounded-2xl border border-border p-4 shadow-xl">
            <h3 className="text-center text-lg font-semibold mb-4 text-muted-foreground">Area of Expertise</h3>
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="70%" data={skillData}>
                <PolarGrid stroke="hsl(var(--border))" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
                <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} axisLine={false} />
                <Radar
                  name="Skill Level"
                  dataKey="A"
                  stroke="hsl(var(--primary))"
                  strokeWidth={3}
                  fill="hsl(var(--primary))"
                  fillOpacity={0.3}
                />
                <Tooltip 
                    contentStyle={{ backgroundColor: 'hsl(var(--popover))', borderColor: 'hsl(var(--border))', color: 'hsl(var(--foreground))' }}
                    itemStyle={{ color: 'hsl(var(--primary))' }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          {/* Right Column: Detailed Tags */}
          <div className="space-y-8">
            {Object.entries(technicalSkills).map(([category, skills]) => (
              <div key={category}>
                <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary inline-block" />
                    {category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge 
                        key={skill} 
                        variant="secondary" 
                        className="px-3 py-1.5 text-sm bg-background border border-border hover:border-primary transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;