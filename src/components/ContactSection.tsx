import { useState, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);

  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);

    emailjs
      .sendForm(
        "service_m4vk50k",      // Replace with your EmailJS Service ID
        "template_nc4xh5y",     // Replace with your EmailJS Template ID
        formRef.current,
        "6DXGlOs99OomWIgla" // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          toast({
            title: "✅ Message Sent!",
            description: "Thanks for reaching out — I’ll get back to you soon.",
          });
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          toast({
            title: "❌ Error",
            description: "Message failed to send. Try again later.",
            variant: "destructive",
          });
          console.error("EmailJS Error:", error);
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <section id="contact" className="py-24 px-6 bg-dark-surface">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-wider uppercase mb-4">— Get In Touch</p>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8">
            Let's Build Something Great
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether it’s AI-driven solutions, full-stack apps, or hackathon-worthy prototypes, 
            I’m always excited to collaborate on impactful projects and innovative ideas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <Card className="bg-card border-dark-border shadow-card">
            <CardContent className="p-8">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <Input
                  placeholder="Your Name"
                  name="user_name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  required
                  className="bg-dark-hover border-dark-border text-foreground placeholder:text-muted-foreground"
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  name="user_email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                  className="bg-dark-hover border-dark-border text-foreground placeholder:text-muted-foreground"
                />
                <Textarea
                  placeholder="Your Message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  required
                  className="bg-dark-hover border-dark-border text-foreground placeholder:text-muted-foreground resize-none"
                />
                <Button 
                  type="submit" 
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow flex justify-center items-center"
                  size="lg"
                  disabled={loading}
                >
                  <Send className="w-4 h-4 mr-2 animate-bounce" />
                  {loading ? "Sending..." : "Send Message →"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">Let’s Connect</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I’m always open to exciting collaborations, freelance opportunities, or just 
              discussing new ideas. Drop me a message — I’ll reply as soon as I can!
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-primary" />
                <a 
                  href="mailto:vishwateja.k_2027@woxsen.edu.in" 
                  className="text-foreground hover:text-primary transition-colors"
                >
                  vishwateja.k_2027@woxsen.edu.in
                </a>
              </div>
              <div className="flex gap-4 pt-4">
                <a 
                  href="https://github.com/vishwa1867" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-dark-hover hover:bg-primary hover:text-primary-foreground transition-all shadow-card hover:shadow-glow"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/kandulavishwateja/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-dark-hover hover:bg-primary hover:text-primary-foreground transition-all shadow-card hover:shadow-glow"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="mailto:vishwateja.k_2027@woxsen.edu.in" 
                  className="p-3 rounded-full bg-dark-hover hover:bg-primary hover:text-primary-foreground transition-all shadow-card hover:shadow-glow"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
