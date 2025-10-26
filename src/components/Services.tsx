import { Brain, Code, Cloud, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "AI Development",
      description: "Custom AI solutions, machine learning models, and intelligent automation to transform your business operations.",
      features: ["Machine Learning", "NLP Solutions", "Computer Vision", "Predictive Analytics"]
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Modern, responsive websites and web applications built with cutting-edge technologies for optimal performance.",
      features: ["React & Next.js", "Full-Stack Development", "E-commerce Solutions", "Progressive Web Apps"]
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure, migration services, and optimization for AWS, Azure, and Google Cloud platforms.",
      features: ["Cloud Migration", "Infrastructure Setup", "DevOps & CI/CD", "Cloud Security"]
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Data-driven marketing strategies powered by AI to maximize your ROI and grow your digital presence.",
      features: ["SEO & SEM", "Social Media Marketing", "Content Strategy", "Analytics & Reporting"]
    }
  ];

  return (
    <section id="services" className="relative py-24 px-8 overflow-hidden bg-gradient-to-b from-background to-card/30">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      
      <div className="max-w-full mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions tailored to your business needs
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.03,
                  y: -10,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                className="group perspective-1000"
              >
                <Card className="relative h-full bg-card/50 backdrop-blur-sm border-border transition-all duration-300 hover:border-primary/50 hover:shadow-[var(--shadow-glow)] overflow-hidden">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  {/* Animated border effect */}
                  <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent" />
                  </div>

                  <CardHeader className="relative">
                    <div className="mb-4 relative">
                      <div className="relative inline-block">
                        <service.icon className="w-14 h-14 text-primary transition-all duration-300 group-hover:scale-110 group-hover:rotate-6" />
                        {/* Icon glow effect */}
                        <div className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300">
                          <service.icon className="w-14 h-14 text-primary" />
                        </div>
                      </div>
                    </div>
                    <CardTitle className="text-2xl mb-3 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative">
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.5 + featureIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-3 text-sm text-muted-foreground group/item"
                        >
                          <span className="text-primary mt-1 text-lg transition-transform group-hover/item:scale-125">•</span>
                          <span className="group-hover/item:text-foreground transition-colors">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
