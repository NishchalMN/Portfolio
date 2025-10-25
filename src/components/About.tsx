import { Card } from '@/components/ui/card';
import { MapPin, GraduationCap, Briefcase } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold mb-12 text-center">
          About <span className="gradient-text">Me</span>
        </h2>
        
        <Card className="p-8 shadow-glow">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Machine Learning Engineer with over 3 years of experience building and deploying 
            production-grade ML systems at scale. Currently pursuing MS in Machine Learning at 
            University of Maryland, College Park, specializing in computer vision, deep learning, 
            and distributed ML systems.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            At Entrupy, I developed high-performance ML pipelines that achieved 96% true positive 
            rate and improved OCR accuracy by 23%. I'm passionate about solving complex problems 
            with elegant, scalable solutions and bringing cutting-edge research into production.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <MapPin className="text-primary mt-1" size={20} />
              <div>
                <h3 className="font-semibold mb-1">Location</h3>
                <p className="text-sm text-muted-foreground">College Park, MD</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <GraduationCap className="text-primary mt-1" size={20} />
              <div>
                <h3 className="font-semibold mb-1">Education</h3>
                <p className="text-sm text-muted-foreground">MS in ML at UMD</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Briefcase className="text-primary mt-1" size={20} />
              <div>
                <h3 className="font-semibold mb-1">Experience</h3>
                <p className="text-sm text-muted-foreground">3+ Years Production ML</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;
