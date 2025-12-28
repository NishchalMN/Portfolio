import { Card } from '@/components/ui/card';
import { Code2, Brain, Rocket, Users } from 'lucide-react';

const stats = [
  {
    icon: Rocket,
    value: "10K+",
    label: "Items Processed Monthly",
    desc: "Production ML Scale"
  },
  {
    icon: Brain,
    value: "4+",
    label: "Years Experience",
    desc: "Deep Learning & CV"
  },
  {
    icon: Code2,
    value: "96%",
    label: "Model TPR",
    desc: "High-Precision Systems"
  },
  {
    icon: Users,
    value: "MS",
    label: "Machine Learning",
    desc: "University of Maryland"
  }
];

const About = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Narrative */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">
              Building <span className="gradient-text">Scalable AI</span> That Solves Real Problems
            </h2>
            
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm a Machine Learning Engineer who doesn't just train models—I build production systems. 
                At <strong className="text-foreground">Entrupy</strong>, I engineered pipelines that authenticate luxury goods worth millions, 
                reducing counterfeit fraud globally.
              </p>
              <p>
                My expertise lies at the intersection of <strong className="text-foreground">Computer Vision</strong> and <strong className="text-foreground">System Design</strong>. 
                Whether it's optimizing CoreML for edge devices or architecting distributed inference with Ray Serve, 
                I focus on latency, cost, and reliability.
              </p>
              <p>
                Currently pursuing my Masters at UMD to deepen my knowledge in Multimodal AI and Agentic Systems.
                When I'm not coding, you can find me playing basketball or exploring the latest in Generative AI.
              </p>
            </div>
          </div>

          {/* Right: Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 border-border/50 bg-card/50 hover:bg-card hover:border-primary/20 transition-all duration-300 group">
                <div className="mb-4 p-3 rounded-xl bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-3xl font-bold text-foreground">{stat.value}</h3>
                  <p className="font-medium text-foreground">{stat.label}</p>
                  <p className="text-sm text-muted-foreground">{stat.desc}</p>
                </div>
              </Card>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;