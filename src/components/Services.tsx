import { Brain, Code, Cloud, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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
            <Card 
              key={index}
              className="group bg-[var(--gradient-card)] border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-card)] hover:-translate-y-2 cursor-pointer"
            >
              <CardHeader>
                <div className="mb-4 p-4 rounded-2xl bg-primary/10 text-primary w-fit group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <service.icon className="w-8 h-8" />
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
