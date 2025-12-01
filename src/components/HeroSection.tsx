import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-hero flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left - Photo/Logo */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary shadow-glow">
                <img 
                  src="vishwaimages\profile.jpg" 
                  alt="Vishwa Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-glow">
                <span className="text-2xl font-bold text-primary-foreground">VT</span>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="text-center lg:text-left order-1 lg:order-2 space-y-8">
            <div className="space-y-4">
              <p className="text-primary font-medium tracking-wider uppercase">— Introduction</p>
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                Vishwa  <span className="text-primary">Teja</span>
              </h1>
              <div className="space-y-2">
                <p className="text-xl lg:text-2xl text-muted-foreground font-medium">
                  B.Tech Student and Developer,
                </p>
                <p className="text-xl lg:text-2xl text-muted-foreground">
                 passionate about technology, data science, and energy resource management.
                </p>
              </div>
            </div>

            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
             B.Tech student at Woxsen University School of Technology with expertise in Data Science, 
  Java, Python, MongoDB, and UI/UX Designing. Passionate about energy resource management 
  and building innovative technology solutions that create real-world impact.
              
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="default" 
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow font-medium"
                onClick={() => scrollToSection('projects')}
              >
                My story →
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start pt-4">
              <a href="https://github.com/vishwa1867" className="p-3 rounded-full bg-dark-surface hover:bg-dark-hover transition-colors">
                <Github className="w-5 h-5 text-muted-foreground hover:text-foreground" />
              </a>
              <a href="https://www.linkedin.com/in/kandulavishwateja/" className="p-3 rounded-full bg-dark-surface hover:bg-dark-hover transition-colors">
                <Linkedin className="w-5 h-5 text-muted-foreground hover:text-foreground" />
              </a>
              <a href="mailto:vishwateja.k_2027@woxsen.edu.in" className="p-3 rounded-full bg-dark-surface hover:bg-dark-hover transition-colors">
                <Mail className="w-5 h-5 text-muted-foreground hover:text-foreground" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => scrollToSection('about')}
          className="text-muted-foreground hover:text-foreground transition-colors p-2"
        >
          <ChevronDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;