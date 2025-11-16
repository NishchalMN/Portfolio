import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const education = [
  {
    degree: 'Master of Science in Machine Learning',
    school: 'University of Maryland, College Park',
    location: 'Maryland, USA',
    period: 'Aug 2024 - May 2026',
    gpa: '3.7/4.0',
    logo: '/umd.svg',
    website: 'https://www.umd.edu',
    details: [
      'Specialization: Multimodal Models, Large Language Models, Computer Vision',
      'Relevant Coursework: Advanced ML, Multimodal Foundational Models, Computer Vision, Robotics, NLP, MLOps',
    ],
    featured: true,
  },
  {
    degree: 'Bachelor of Technology in Computer Science',
    school: 'PES University',
    location: 'Bangalore, India',
    period: 'Aug 2017 - May 2021',
    gpa: '8.4/10.0',
    logo: '/pes-logo.webp',
    website: 'https://www.pes.edu',
    details: [
      'Graduated with First Class Honors, and Data Science specialization',
      'Relevant Coursework: Data Structures, Algorithms, Data Science, Data Analytics, Machine Learning, Cloud Computing',
    ],
    featured: false,
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="gradient-text">Education</span>
        </h2>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card
              key={index}
              className={`p-6 sm:p-8 transition-all hover:shadow-glow ${
                edu.featured ? 'border-primary shadow-glow' : ''
              }`}
            >
              <div className="flex flex-col sm:flex-row gap-6">
                {/* Logo */}
                <div className="flex-shrink-0">
                  <a
                    href={edu.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-20 h-20 rounded-lg bg-white flex items-center justify-center overflow-hidden p-2 transition-all hover:scale-110 hover:shadow-lg cursor-pointer"
                    aria-label={`Visit ${edu.school} website`}
                  >
                    <img
                      src={edu.logo}
                      alt={`${edu.school} logo`}
                      className="w-full h-full object-contain"
                    />
                  </a>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                    <div className="mb-4 sm:mb-0">
                      <h3 className="text-2xl font-bold mb-2">
                        {edu.degree}
                        {edu.featured && (
                          <Badge className="ml-3 gradient-primary">Current</Badge>
                        )}
                      </h3>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <GraduationCap size={16} />
                        <span className="font-semibold">{edu.school}</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar size={14} />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin size={14} />
                        <span>{edu.location}</span>
                      </div>
                      <div className="text-secondary font-semibold">
                        GPA: {edu.gpa}
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {edu.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <span className="text-primary mt-1.5">▹</span>
                        <span>{detail}</span>
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

export default Education;
