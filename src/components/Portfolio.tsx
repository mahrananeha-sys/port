import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Eye } from "lucide-react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Fashion Collection Design",
      category: "Fashion Design",
      image: portfolio1,
      description: "Complete fashion collection with elegant designs and modern aesthetics."
    },
    {
      id: 2,
      title: "Luxury Brand Identity",
      category: "Branding",
      image: portfolio2,
      description: "Sophisticated brand identity design for luxury fashion house."
    },
    {
      id: 3,
      title: "Digital Art Portfolio",
      category: "Adobe Illustrator",
      image: portfolio3,
      description: "Creative digital artwork and vector illustrations."
    },
    {
      id: 4,
      title: "Fashion Website Design",
      category: "Web Design",
      image: portfolio4,
      description: "Modern responsive website design for fashion e-commerce."
    },
    {
      id: 5,
      title: "Packaging Design",
      category: "Brand Design",
      image: portfolio5,
      description: "Elegant packaging design for luxury fashion products."
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-medium text-sm tracking-wide mb-6">
            SHOWCASE
          </div>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold mb-6">
            My <span className="text-gradient">Work</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A curated selection of my best fashion design projects, branding work, and creative solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id}
              className="group bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-card hover:shadow-glow hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <div className="flex gap-4">
                    <button className="w-12 h-12 bg-primary/90 hover:bg-primary rounded-full flex items-center justify-center text-primary-foreground hover:shadow-glow transition-all duration-300 hover:scale-110">
                      <Eye className="w-5 h-5" />
                    </button>
                    <button className="w-12 h-12 bg-primary/90 hover:bg-primary rounded-full flex items-center justify-center text-primary-foreground hover:shadow-glow transition-all duration-300 hover:scale-110">
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-semibold rounded-full backdrop-blur-sm">
                  {project.category}
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-2 text-foreground group-hover:text-gradient transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;