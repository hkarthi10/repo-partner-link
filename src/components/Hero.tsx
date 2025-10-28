import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden px-8 py-20 pt-32">
      {/* Enhanced Mesh Gradient Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 opacity-75" style={{ background: 'var(--gradient-mesh)' }} />
      
      {/* Floating Gradient Orbs */}
      <div className="absolute top-20 left-[10%] w-[450px] h-[450px] bg-primary/18 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-20 right-[10%] w-[450px] h-[450px] bg-secondary/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }} />
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(220_70%_50%_/_0.05)_1px,transparent_1px),linear-gradient(to_bottom,hsl(220_70%_50%_/_0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto space-y-8">
        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-5xl md:text-7xl font-bold tracking-tight"
        >
          <span className="bg-gradient-to-r from-foreground via-foreground to-foreground bg-clip-text text-transparent drop-shadow-sm">
            Innovative Solutions for
          </span>
          <br />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent gradient-animate drop-shadow-lg"
            style={{ backgroundSize: '200% 200%' }}
          >
            AI-Driven Digital Marketing
          </motion.span>
        </motion.h1>

        {/* Tagline with enhanced contrast */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto leading-relaxed font-medium"
        >
          Web Development, AI Development, and Cloud Services
        </motion.p>

        {/* CTA Button - Solid without gradient */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="pt-6"
        >
          <Button 
            onClick={scrollToContact}
            size="lg" 
            className="group relative bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-7 text-lg font-semibold rounded-full transition-all duration-300 hover:shadow-[var(--shadow-glow)] hover:scale-105"
          >
            <span className="flex items-center gap-2">
              Get Started Today
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
            </span>
          </Button>
        </motion.div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
