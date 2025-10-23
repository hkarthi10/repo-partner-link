import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20 pt-32">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-[var(--gradient-hero)] opacity-50" />
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(220_15%_20%_/_0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(220_15%_20%_/_0.1)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto space-y-8">
        {/* Logo Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card/50 border border-primary/20 backdrop-blur-sm"
        >
          <div className="flex items-center gap-1">
            <span className="text-2xl font-bold text-primary">i</span>
            <span className="text-2xl font-bold text-secondary">Bee</span>
          </div>
          <span className="text-xl font-semibold text-foreground">Analytics</span>
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border backdrop-blur-sm"
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-muted-foreground">AI-Powered Innovation</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-5xl md:text-7xl font-bold tracking-tight"
        >
          <span className="bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent">
            Innovative Solutions for
          </span>
          <br />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
          >
            AI-Driven Digital Marketing
          </motion.span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
        >
          Web Development, AI Development, and Cloud Services
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="pt-6"
        >
          <Button 
            onClick={scrollToContact}
            size="lg" 
            className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:shadow-[var(--shadow-glow)] hover:scale-105"
          >
            Get Started Today
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
