import { Card, CardContent } from "@/components/ui/card";

const ExperienceSection = () => {
  const services = [
    {
      title: "Full-Stack Development",
      projects: "20+ Projects Delivered",
      color: "bg-primary"
    },
    {
      title: "Data Science & AI Solutions",
      projects: "Hackathons & Research Work",
      color: "bg-dark-surface"
    },
    {
      title: "UI/UX Design & Prototyping",
      projects: "User-Centered Applications",
      color: "bg-dark-surface"
    }
  ];

 const hackathons = [
  {
    title: "WATCH Hackathon (2024)",
    description:
      "Represented Woxsen University at KISS, Bhubaneswar — The WeATher and Climate Hackathon organized by Bronx Community College, U.S. Consulate Hyderabad & Mumbai. Developed a real-time weather forecasting and advisory system as part of the Green Shield project.",
    image: "/vishwaimages/watch.png",
  },
  {
    title: "Volkswagen Certified Hackathon (2024)",
    description:
      "Organized by Volkswagen Group of Technology, India. Focused on IoT and ML-driven solutions integrating Python, REST APIs, and DBMS. Worked on smart automation prototypes for connected mobility.",
    image: "/vishwaimages/vw.jpg",
  },
  {
    title: "Prayagraj Mahakumbh 2025 Hackathon (IIIT Allahabad)",
    description:
      "Participated in the national-level hackathon hosted by IIIT Allahabad. Built innovative IoT and UI-based applications with REST APIs for real-time data interaction.",
    image: "/vishwaimages/iit1.jpg",
  },
  {
    title: "Mark XXIV - 24 Hours Hackathon (2023)",
    description:
      "Conducted by Woxsen University. Led a team in designing full-stack and mobile web applications within 24 hours, focusing on REST APIs and UI integration.",
    image: "/vishwaimages/24.png",
  },
    {
    title: "Adobe India Hackathon (Hack4Change)",
    description:
      "Participated in Round 1 – Online MCQ Assessment and Coding of the Adobe India Hackathon as a team member from Woxsen University, Hyderabad. Gained hands-on experience in problem-solving, coding, and collaboration through a competitive environment organized by Adobe.",
    image: "/vishwaimages/adobe.jpg",
  }

];

  

  return (
    <section id="experience" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        
        {/* Title */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-wider uppercase mb-4">
            — Experience
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8">
            What I Do Best
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I bring together <span className="text-foreground font-medium">creativity, problem-solving,</span> 
            and <span className="text-foreground font-medium">technical expertise</span> to design and develop 
            scalable, impactful solutions—from hackathon prototypes to real-world applications.
          </p>
        </div>

        {/* Services Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className={`group ${service.color} border-dark-border shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-2 ${
                service.color === 'bg-primary' ? 'text-primary-foreground' : 'text-foreground'
              }`}
            >
              <CardContent className="p-8 flex flex-col justify-between h-64">
                <div className="mb-8">
                  <div className="w-12 h-12 rounded-full border-2 border-current mb-6 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-current" />
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4 leading-tight">
                    {service.title}
                  </h3>
                  <p className={`text-sm ${
                    service.color === 'bg-primary' ? 'text-primary-foreground/80' : 'text-muted-foreground'
                  }`}>
                    {service.projects}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Hackathons Participated Section */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <p className="text-primary font-medium tracking-wider uppercase mb-4">— Hackathons</p>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8">
              Hackathons Participated
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A journey through innovation — competing, collaborating, and creating solutions
              that merge technology with real-world impact.
            </p>
          </div>

          {/* Hackathon Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {hackathons.map((hackathon, index) => (
              <Card
                key={index}
                className="group bg-dark-surface border-dark-border shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-2 text-foreground"
              >
                <CardContent className="p-6 flex flex-col h-full">
                  {/* Image */}
                  <div className="w-full h-48 mb-6 overflow-hidden rounded-xl">
                    <img
                      src={hackathon.image}
                      alt={hackathon.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-3 leading-tight">
                    {hackathon.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {hackathon.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
