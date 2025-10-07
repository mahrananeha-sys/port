import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import profilePlaceholder from "@/assets/profile-placeholder.jpg";
import nehaProfile from "@/assets/neha-profile.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-dark">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Geometric Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 border border-primary/20 rotate-45 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-primary/10 rotate-12 animate-pulse-glow"></div>
        <div className="absolute top-1/2 right-10 w-16 h-16 border border-primary/30 rotate-45"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-medium text-sm tracking-wide">
                FASHION DESIGNER
              </div>
              <h1 className="font-heading text-5xl lg:text-7xl font-black leading-tight">
                Hi, I'm <span className="text-gradient">NEHA</span>
                <br />
                <span className="text-gradient">MAHRANA</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground font-light max-w-lg">
                Fashion Designer crafting creative visuals and user-friendly designs. Specializing in branding & Adobe Illustrator.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-glow hover:scale-105 transition-all duration-300 font-semibold px-8 py-6 text-lg group"
              >
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Download CV
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary/30 text-primary hover:bg-primary/10 hover:border-primary transition-all duration-300 px-8 py-6 text-lg group"
              >
                View Portfolio
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 relative">
                {/* Glowing background circle */}
                <div className="absolute inset-0 bg-gradient-primary rounded-full opacity-20 blur-xl animate-pulse-glow"></div>
                
                {/* Main profile image */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/30 shadow-card">
                  <img
                    src={nehaProfile}
                    alt="Neha Mehrana - Fashion Designer"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = profilePlaceholder;
                    }}
                  />
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 border border-primary/40 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-primary/20 rounded-full animate-float"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;