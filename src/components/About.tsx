import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Briefcase, Clock, Award } from "lucide-react";
import profilePlaceholder from "@/assets/profile-placeholder.jpg";

const About = () => {
  const stats = [
    {
      icon: Clock,
      number: "5+",
      label: "Years Experience",
      description: "Professional design expertise"
    },
    {
      icon: Briefcase,
      number: "50+",
      label: "Projects Completed",
      description: "Successful deliveries"
    },
    {
      icon: Users,
      number: "25",
      label: "Happy Clients",
      description: "Satisfied customers"
    },
    {
      icon: Award,
      number: "10+",
      label: "Awards Won",
      description: "Industry recognition"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Profile & Info */}
          <div className="text-center lg:text-left space-y-8">
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="w-64 h-64 relative">
                  {/* Glowing background */}
                  <div className="absolute inset-0 bg-gradient-primary rounded-full opacity-20 blur-xl"></div>
                  
                  {/* Profile image */}
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/30 shadow-card">
                    <img
                      src="/lovable-uploads/8d24991e-d07e-44a0-a082-10288cd30fa4.png"
                      alt="Neha Mehrana"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = profilePlaceholder;
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="font-heading text-4xl font-bold mb-4">
                  About <span className="text-gradient">Me</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                  I'm a passionate fashion designer with a keen eye for detail and creativity. 
                  I specialize in crafting unique visual experiences and user-friendly designs that tell compelling stories. 
                  My expertise spans branding, craft work, and Adobe Illustrator, bringing ideas to life through innovative design solutions.
                </p>
              </div>
              
              <Button 
                size="lg"
                className="bg-gradient-primary hover:shadow-glow hover:scale-105 transition-all duration-300 font-semibold px-8 py-6 text-lg"
              >
                Hire Me
              </Button>
            </div>
          </div>

          {/* Right Side - Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card 
                key={index} 
                className="bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-card group"
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="flex justify-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <stat.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-gradient mb-1">
                      {stat.number}
                    </div>
                    <div className="font-semibold text-foreground mb-1">
                      {stat.label}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.description}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;