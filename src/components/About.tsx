import { motion } from "framer-motion";
import { Sparkles, Target, Users, Zap, Brain, Rocket, Shield } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Sparkles,
      title: "Innovation First",
      description: "Cutting-edge solutions powered by the latest AI technology.",
      color: "text-primary"
    },
    {
      icon: Target,
      title: "Results Driven",
      description: "Focused on delivering measurable outcomes for your business.",
      color: "text-secondary"
    },
    {
      icon: Users,
      title: "Client Focused",
      description: "Your success is our priority, every step of the way.",
      color: "text-primary"
    },
    {
      icon: Zap,
      title: "Rapid Execution",
      description: "Fast implementation without compromising on quality.",
      color: "text-secondary"
    },
  ];

  const specializations = [
    {
      icon: Brain,
      title: "AI-Powered Solutions",
      description: "Leveraging machine learning and AI to transform your business processes."
    },
    {
      icon: Rocket,
      title: "Data-Driven Strategies",
      description: "Making informed decisions based on comprehensive analytics and insights."
    },
    {
      icon: Shield,
      title: "Technical Excellence",
      description: "Building robust, scalable solutions with cutting-edge technologies."
    },
  ];

  return (
    <section id="about" className="relative py-24 px-8 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" />

      <div className="max-w-full mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent gradient-animate"
          style={{ backgroundSize: '200% 200%' }}
        >
          About iBee Analytics
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground text-lg mb-16 max-w-3xl mx-auto"
        >
          Empowering businesses through innovation, technology, and AI-driven excellence
        </motion.p>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left: Company Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              At <span className="text-primary font-semibold">iBee Analytics</span>, we're transforming 
              the digital landscape through innovative AI-powered solutions. Our mission is to help 
              businesses harness the power of artificial intelligence, data analytics, and modern web 
              technologies to achieve unprecedented growth.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With a team of expert developers, AI specialists, and digital marketing professionals, 
              we deliver cutting-edge solutions that drive real results. From intelligent web applications 
              to advanced cloud infrastructure, we're your partner in digital transformation.
            </p>
            
            {/* Mission Statement */}
            <div className="relative mt-8 p-6 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
              <p className="text-foreground font-medium text-lg italic">
                "Empowering businesses to thrive in the digital age through innovation, 
                data-driven insights, and cutting-edge technology."
              </p>
            </div>
          </motion.div>

          {/* Right: Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.05, 
                    rotateY: 5,
                    transition: { duration: 0.3 }
                  }}
                  className="group relative perspective-1000"
                >
                  <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-[var(--shadow-glow)]">
                    <div className="mb-4">
                      <div className="relative">
                        <Icon className={`w-10 h-10 ${feature.color} transition-transform duration-300 group-hover:scale-110`} />
                        <div className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-50 transition-opacity">
                          <Icon className={`w-10 h-10 ${feature.color}`} />
                        </div>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Hover gradient effect */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/0 via-primary/5 to-secondary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Specialization Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            What Makes Us Unique
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {specializations.map((spec, index) => {
              const Icon = spec.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="text-center"
                >
                  <div className="relative inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30">
                    <Icon className="w-10 h-10 text-primary" />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-xl animate-pulse-glow" />
                  </div>
                  <h4 className="text-xl font-semibold mb-3 text-foreground">{spec.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{spec.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
