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
    <section id="services" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
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
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                rotateX: 5,
              }}
              className="perspective-1000"
            >
              <Card className="group h-full bg-[var(--gradient-card)] border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-card)] cursor-pointer relative overflow-hidden">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:via-primary/5 group-hover:to-transparent transition-all duration-500 pointer-events-none" />
                
                <CardHeader className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="mb-4 p-4 rounded-2xl bg-primary/10 text-primary w-fit group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 group-hover:shadow-[var(--shadow-glow)]"
                  >
                    <service.icon className="w-8 h-8" />
                  </motion.div>
                  <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground group-hover:text-foreground/80 transition-colors">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * idx }}
                        className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground/70 transition-colors"
                      >
                        <motion.div
                          whileHover={{ scale: 1.5 }}
                          className="w-1.5 h-1.5 rounded-full bg-primary group-hover:shadow-[0_0_8px_var(--primary)]"
                        />
                        {feature}
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
