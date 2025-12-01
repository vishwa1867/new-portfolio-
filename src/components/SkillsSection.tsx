import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, BarChart, Cpu, Cloud, Layers } from "lucide-react";

const SkillsSection = () => {
  const skills = [
    {
      category: "Data Science & AI",
      icon: BarChart,
      description: "Analytics, Machine Learning, Deep Learning, NLP",
      projects: "40+ Projects"
    },
    {
      category: "Python & Backend",
      icon: Code,
      description: "APIs, Automation, Data Processing, FastAPI, Flask",
      projects: "30+ Projects"
    },
    {
      category: "Full Stack Development",
      icon: Layers,
      description: "React, Next.js, Node.js, Tailwind, MongoDB",
      projects: "25+ Projects"
    },
    {
      category: "Cloud & DevOps",
      icon: Cloud,
      description: "Microsoft Azure, AWS, Docker, GitHub Actions",
      projects: "15+ Deployments"
    },
    {
      category: "High-Performance Computing",
      icon: Cpu,
      description: "NVIDIA CUDA, RAPIDS, TensorRT, GPU Acceleration",
      projects: "10+ Projects"
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-wider uppercase mb-4">— Skills</p>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8">
            My Technical Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Through hackathons, projects, and collaborations, I’ve built a versatile tech stack 
            that allows me to solve real-world problems from data pipelines to AI systems 
            and full-stack applications.
          </p>
        </div>

        {/* Main Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <Card 
                key={skill.category}
                className={`group bg-card border-dark-border shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-2 ${
                  index === 0 ? 'bg-primary text-primary-foreground' : ''
                }`}
              >
                <CardContent className="p-8 text-center">
                  <IconComponent className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">{skill.category}</h3>
                  <p className="text-sm opacity-80 mb-4">{skill.description}</p>
                  <p className="text-sm font-medium">{skill.projects}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Tech Stack Badges */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">Tech Stack I’ve Worked With</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Python", "TensorFlow", "PyTorch", "Scikit-learn", "Hugging Face", 
              "React", "Next.js", "Node.js", "Express", "FastAPI", "Flask",
              "JavaScript", "TypeScript", "Java", "C++",
              "MongoDB", "MySQL", "PostgreSQL", "Firebase",
              "Microsoft Azure", "AWS", "Docker", "Kubernetes",
              "NVIDIA CUDA", "RAPIDS", "TensorRT",
              "D3.js", "Figma", "UI/UX Design", "Git", "GitHub Actions"
            ].map((tech) => (
              <Badge 
                key={tech}
                variant="secondary"
                className="px-6 py-3 text-base bg-dark-surface text-foreground hover:bg-dark-hover border-dark-border"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
  