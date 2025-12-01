import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Green Shield",
      description:
        "A comprehensive farmer support application that provides real-time crop monitoring, weather alerts, and agricultural guidance to help farmers make informed decisions.",
      tech: ["React", "Node.js", "MongoDB", "Weather API"],
      image: "vishwaimages/green1.jpg",
      liveUrl: "https://vishwa1867.github.io/green-shield-project-/",
      githubUrl: "https://github.com/vishwa1867/green-shield-project-",
      category: "Full Stack",
    },
    {
      title: "Clima Vision",
      description:
        "An advanced climate and weather AI platform that uses machine learning to predict weather patterns and provide actionable climate insights.",
      tech: ["Python", "TensorFlow", "React", "FastAPI"],
      image: "vishwaimages/clima1.jpg",
      liveUrl: "https://vishwa1867.github.io/clima-vision/",
      githubUrl: "https://github.com/vishwa1867/clima-vision",
      category: "AI/ML",
    },
    {
      title: "AutoML",
      description:
        "Automated machine learning pipeline for building, training, and optimizing models with minimal human intervention, accelerating AI adoption.",
      tech: ["Python", "Scikit-learn", "Flask", "Docker"],
      image: "vishwaimages/automl.jpg",
      liveUrl: "#",
      githubUrl: "https://github.com/vishwa1867/Auto-ml-studio-",
      category: "AI/Automation(working on)",
    },
    {
      title: "Microsoft Azure Project",
      description:
        "Cloud-based energy monitoring and analytics solution leveraging Microsoft Azure services to deliver real-time insights and dashboards.",
      tech: ["Azure", "Power BI", "C#", "SQL Server"],
      image: "vishwaimages/as2.png",
      liveUrl: "#",
      githubUrl: "#",
      category: "Cloud",
    },
    {
      title: "NVIDIA,NetworkX & ArrangoDB",
      description:
        "High-performance deep learning solution built with NVIDIA GPUs to accelerate large-scale climate data analysis and AI model training.",
      tech: ["CUDA", "PyTorch", "Python", "NVIDIA GPUs"],
      image: "vishwaimages/n.jpg",
      liveUrl: "https://www.youtube.com/watch?v=T7G0GRBQgA0",
      githubUrl: "https://github.com/advaithsarva/GraphRAG",
      category: "Research",
    },
     
     
    
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-dark-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-wider uppercase mb-4">— Portfolio</p>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            All Creative Works,
          </h2>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8">
            Selected <span className="text-primary">projects.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of impactful projects spanning AI, cloud, IoT, and full-stack development — built with passion and
            purpose.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className={`group bg-card border-dark-border shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-2 ${
                index === 0 ? "lg:col-span-2" : ""
              }`}
            >
              <CardHeader className="p-0">
                <div className="aspect-video bg-muted rounded-t-lg overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary/90 text-primary-foreground rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="p-2 hover:bg-dark-hover"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 text-muted-foreground hover:text-foreground" />
                      </a>
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="p-2 hover:bg-dark-hover"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 text-muted-foreground hover:text-foreground" />
                      </a>
                    </Button>
                  </div>
                </div>

                <CardDescription className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </CardDescription>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-dark-hover text-foreground rounded-md text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-16">
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3"
          >
            View All Projects →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
