import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Palette, Layers, Scissors } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "Fashion Design",
      description: "Creative fashion designs, posters, branding materials, and logo design that capture your unique style and vision.",
      features: [
        "Fashion Illustrations",
        "Brand Identity Design", 
        "Poster & Print Design",
        "Logo Creation"
      ]
    },
    {
      icon: Layers,
      title: "Adobe Illustrator Design",
      description: "Professional digital artwork and vector graphics using Adobe Illustrator for web and app design projects.",
      features: [
        "Vector Graphics",
        "Digital Illustrations", 
        "Web Design Elements",
        "App Interface Design"
      ]
    },
    {
      icon: Scissors,
      title: "Craft & Handmade",
      description: "Unique handcrafted pieces and responsive design solutions that blend traditional craftsmanship with modern aesthetics.",
      features: [
        "Handmade Crafts",
        "Custom Artwork",
        "Responsive Design",
        "Creative Solutions"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-medium text-sm tracking-wide mb-6">
            MY EXPERTISE
          </div>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold mb-6">
            Services I <span className="text-gradient">Offer</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transforming ideas into stunning visual experiences with creativity, precision, and passion.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-card hover:shadow-glow hover:-translate-y-2 group"
            >
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 group-hover:shadow-glow transition-all duration-300">
                    <service.icon className="w-10 h-10 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold text-foreground group-hover:text-gradient transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed text-center">
                  {service.description}
                </p>
                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;