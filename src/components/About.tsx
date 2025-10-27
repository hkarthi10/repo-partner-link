import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Target, Users, Zap, Award, Shield, TrendingUp } from "lucide-react";
import aboutTeam from "@/assets/about-team.jpg";

const features = [
  {
    icon: Target,
    title: "Data-Driven Decisions",
    description: "Every strategy backed by real-time analytics and actionable insights"
  },
  {
    icon: Users,
    title: "Client-Centric Approach",
    description: "Your success is our success - we grow when you grow"
  },
  {
    icon: Zap,
    title: "Rapid Deployment",
    description: "Fast implementation without compromising quality or security"
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description: "250+ projects delivered with 98% client retention rate"
  }
];

const specializations = [
  {
    icon: Shield,
    title: "AI-First Solutions",
    description: "Autonomous agents and intelligent systems that work 24/7 to protect, optimize, and scale your business operations."
  },
  {
    icon: TrendingUp,
    title: "Growth Engineering",
    description: "We don't just build—we engineer measurable growth through data science, predictive analytics, and conversion optimization."
  }
];

const About = () => {
  return (
    <section id="about" className="relative py-24 px-8 overflow-hidden bg-gradient-to-b from-card/30 to-background">
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
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent gradient-animate">
              About iBee Analytics
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Turning data into intelligence. One autonomous solution at a time.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        {/* Mission Statement with Image */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-elegant)] group">
              <img
                src={aboutTeam}
                alt="iBee Analytics Team"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-60" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 flex flex-col justify-center"
          >
            <h3 className="text-3xl font-bold text-foreground">
              Smart Digital Growth for Your Business
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At iBee Analytics, we specialize in data-driven digital solutions that transform raw information into revenue-generating strategies. Our mission is simple: turn clicks into customers and ideas into scalable growth.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We combine cutting-edge AI, predictive analytics, and full-stack development to deliver solutions that don't just meet expectations—they exceed them. From autonomous security systems to high-converting marketing campaigns, we build the digital infrastructure that powers modern business success.
            </p>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="group relative overflow-hidden bg-[var(--gradient-card)] border border-border/50 hover:border-primary/60 transition-all duration-500 hover:shadow-[var(--shadow-glow)] p-8 h-full rounded-2xl backdrop-blur-sm">
                <div className="space-y-4">
                  <div className="p-3 rounded-xl bg-primary/15 w-fit group-hover:bg-primary/30 transition-all duration-300 group-hover:scale-110">
                    <feature.icon className="w-7 h-7 text-primary drop-shadow-lg" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Specializations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h3 className="text-3xl font-bold text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            What Makes Us Different
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {specializations.map((spec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="group relative overflow-hidden bg-[var(--gradient-card)] border border-border/50 hover:border-primary/60 transition-all duration-700 hover:shadow-[var(--shadow-glow)] p-10 rounded-2xl backdrop-blur-sm">
                  <div className="flex items-start gap-6">
                    <div className="p-4 rounded-xl bg-primary/15 group-hover:bg-primary/30 transition-all duration-300 flex-shrink-0 group-hover:scale-110">
                      <spec.icon className="w-9 h-9 text-primary group-hover:rotate-6 transition-transform duration-500 drop-shadow-lg" />
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        {spec.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {spec.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Animated gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-2xl" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
