import { Card } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold mb-12 text-center">
          About <span className="gradient-text">Me</span>
        </h2>

        <div className="relative lg:ml-32">
          {/* Horizontal text labels - hidden on mobile, visible on larger screens */}
          <div className="hidden lg:block absolute -left-36 top-1 w-28 pt-8">
            <div className="space-y-8">
              <div className="h-[110px] flex items-start">
                <span className="text-xs font-mono gradient-text opacity-50 tracking-wider text-right w-full">
                  PRE-TRAINING
                </span>
              </div>
              <div className="h-[125px] flex items-start">
                <span className="text-xs font-mono gradient-text opacity-50 tracking-wider text-right w-full">
                  FINE-TUNING
                </span>
              </div>
              <div className="h-[105px] flex items-start">
                <span className="text-xs font-mono gradient-text opacity-50 tracking-wider text-right w-full">
                  RLHF
                </span>
              </div>
              <div className="h-[55px] flex items-start">
                <span className="text-xs font-mono gradient-text opacity-50 tracking-wider text-right w-full">
                  REGULARIZATION
                </span>
              </div>
              <div className="h-[64px] flex items-start">
                <span className="text-xs font-mono gradient-text opacity-50 tracking-wider text-right w-full">
                  INFERENCE
                </span>
              </div>
            </div>
          </div>

          <Card className="p-8 shadow-glow">
            <div className="space-y-8">
              <p className="text-base text-muted-foreground leading-relaxed">
                I've been building ML systems since 2019, back when deep learning meant ResNets and actual math, not just prompt engineering and API calls.
                Built real-time gaze tracking at PathPartner, log aggregation with ELK stack and Node.js at SLK, and optimized ML runtimes at IBM Watson
                during my undergrad in Computer Science.
              </p>

              <p className="text-base text-muted-foreground leading-relaxed">
                Joined Entrupy as an early ML engineer in 2021 and did it all: scraped and cleaned data, built synthetic pipelines in Blender,
                experimented with architectures, deployed models to production, optimized on-device inference.
                Three years of end-to-end ownership from a laptop experiment to systems processing 10K+ luxury items monthly at 96% TPR.
              </p>

              <p className="text-base text-muted-foreground leading-relaxed">
                Currently pursuing MS in Machine Learning at University of Maryland, College Park,
                specializing in agentic LLM architectures, multimodal models, advanced computer vision, and distributed ML systems.
                Worked on projects involving multimodal transformers, federated learning, 3D vision, robotics, and RL.
              </p>

              <p className="text-base text-muted-foreground leading-relaxed">
                Outside of work and academics, I love playing basketball, singing, cooking amazing Indian food, and exploring new tech trends.
              </p>

              <p className="text-base text-muted-foreground leading-relaxed">
                Looking for full-time roles starting May 2026, where I can build ML systems that scale and solve real problems.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
