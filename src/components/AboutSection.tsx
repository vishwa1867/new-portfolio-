import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Target, Zap } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { number: "20+", label: "Projects Completed (and growing)" },
    { number: "8+", label: "Hackathons (3 Internatonal, 2 IITs, +1 Sponsored)" }
  ];

  return (
    <section id="about" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left - Content */}
          <div className="space-y-8">
            <div>
              <p className="text-primary font-medium tracking-wider uppercase mb-4">— About Me</p>
              <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-8">
                Driven by Technology<br />
                <span className="text-muted-foreground">&amp; Sustainable Innovation.</span>
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              I am a B.Tech student at <span className="text-foreground font-medium">Woxsen University School of Technology</span>, 
              specializing in <span className="text-foreground font-medium">Data Science, full-stack development, and UI/UX design</span>.  
              My journey blends <span className="text-foreground font-medium">software engineering</span> with a passion for 
              <span className="text-foreground font-medium"> sustainable energy solutions</span>, where I aim to create impactful 
              projects that solve real-world challenges.  
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              From building <span className="text-foreground font-medium">20+ projects</span> to participating in 
              <span className="text-foreground font-medium"> international and IIT hackathons</span>, I thrive in environments 
              where innovation, collaboration, and technology meet. Some notable works include <span className="text-foreground font-medium">Green Shield</span> 
              and <span className="text-foreground font-medium">Clima Vision</span>, both focusing on sustainability and real-time data solutions.
            </p>

            <div className="space-y-4">
              <p className="text-primary font-medium">
                vishwateja.k_2027@woxsen.edu.in
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-8 pt-8">
                {stats.map((stat, index) => (
                  <div key={index}>
                    <div className="text-4xl lg:text-6xl font-bold text-primary mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - FAQ */}
       
        </div>

        {/* Bottom Quote */}
        <div className="text-center mt-24">
          <p className="text-2xl lg:text-4xl font-bold text-foreground max-w-4xl mx-auto leading-relaxed">
            "Innovation is not just about ideas—it’s about turning challenges into 
            <span className="text-primary"> impactful solutions</span> through technology."
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
