import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import carouselAnalytics from "@/assets/carousel-analytics.jpg";
import carouselAiSecurity from "@/assets/carousel-ai-security.jpg";
import carouselWebDesign from "@/assets/carousel-web-design.jpg";
import carouselMarketing from "@/assets/carousel-marketing.jpg";

const capabilities = [
  {
    title: "Business Intelligence & Analytics",
    description: "Transform raw data into actionable insights with real-time dashboards and predictive analytics",
    image: carouselAnalytics,
  },
  {
    title: "AI-Powered Security & Compliance",
    description: "Autonomous agents that secure your infrastructure and ensure regulatory compliance",
    image: carouselAiSecurity,
  },
  {
    title: "High-Performance Web Solutions",
    description: "Lightning-fast, responsive websites and applications built to convert and scale",
    image: carouselWebDesign,
  },
  {
    title: "Data-Driven Digital Marketing",
    description: "ROI-focused campaigns that turn clicks into customers across every channel",
    image: carouselMarketing,
  },
];

const CapabilitiesCarousel = () => {
  return (
    <section className="relative py-24 px-8 overflow-hidden bg-gradient-to-b from-background to-card/30">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              What We Can Do For You
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Smart digital growth powered by data, AI, and innovation
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {capabilities.map((capability, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <div className="p-4">
                    <div className="group relative overflow-hidden rounded-2xl bg-[var(--gradient-card)] border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-[var(--shadow-glow)]">
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={capability.image}
                          alt={capability.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-80" />
                      </div>
                      <div className="p-6 relative">
                        <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                          {capability.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {capability.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-card border-primary/50 hover:bg-primary hover:text-primary-foreground" />
            <CarouselNext className="hidden md:flex -right-12 bg-card border-primary/50 hover:bg-primary hover:text-primary-foreground" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default CapabilitiesCarousel;
