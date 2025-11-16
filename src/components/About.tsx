import { Card } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold mb-12 text-center">
          About <span className="gradient-text">Me</span>
        </h2>

        <Card className="p-8 shadow-glow">
          <div className="space-y-8">
            <p className="text-base text-muted-foreground leading-relaxed">
              I'm a Machine Learning Engineer with 4+ years of building systems that solve real business problems, while saving cost and improving efficiency.
            </p>

            <p className="text-base text-muted-foreground leading-relaxed">
              Joined Entrupy as an early ML engineer in 2021 and did it all: Built synthetic data pipelines,
              experimented with architectures, deployed models to production, optimized on-device inference.
              I built pipelines that authenticate luxury goods for brands worldwide, processing 10K+ luxury items monthly at 96% TPR,
              preventing millions in counterfeit losses.

              Recently at Connyct, built a hybrid recommendation system using two-tower architecture with sentence
               transformers, achieving &lt;42ms latency, and integrated it as MCP tool for LLM orchestration.
            </p>

            <p className="text-base text-muted-foreground leading-relaxed">
              Now finishing my Masters in ML at UMD, diving deep into agentic systems, multimodal models,
               advanced computer vision, and distributed ML systems. Built projects involving agentic 
               RAG, federated learning, 3D vision, robotics, and reinforcement learning.
            </p>

            <p className="text-base text-muted-foreground leading-relaxed">
              Outside of work and academics, I love playing basketball, singing, cooking amazing food, and exploring new AI releases happening every week.
              <br /><br />
              Looking for full-time roles starting May 2026, where I can build ML systems that scale and solve real problems with meaningful impact.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;
