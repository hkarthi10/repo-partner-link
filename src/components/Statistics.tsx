import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp, Users, Award, CheckCircle } from "lucide-react";

const Statistics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    { 
      icon: CheckCircle, 
      value: 120, 
      suffix: "+", 
      label: "Projects Completed",
      color: "text-primary"
    },
    { 
      icon: Users, 
      value: 98, 
      suffix: "%", 
      label: "Client Satisfaction",
      color: "text-secondary"
    },
    { 
      icon: Award, 
      value: 50, 
      suffix: "+", 
      label: "Industry Awards",
      color: "text-primary"
    },
    { 
      icon: TrendingUp, 
      value: 200, 
      suffix: "%", 
      label: "Growth Rate",
      color: "text-secondary"
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const CountUpAnimation = ({ 
    endValue, 
    suffix, 
    isVisible 
  }: { 
    endValue: number; 
    suffix: string; 
    isVisible: boolean;
  }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      let startTime: number;
      const duration = 2000; // 2 seconds

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeOutQuart * endValue));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }, [isVisible, endValue]);

    return (
      <span className="text-5xl md:text-6xl font-bold">
        {count}{suffix}
      </span>
    );
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 px-8 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[var(--gradient-orange-blue)] opacity-30" />
      
      {/* Floating Orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />

      <div className="relative z-10 max-w-full mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Our Achievements
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Delivering excellence through innovation and dedication
          </p>
        </motion.div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                className="group relative perspective-1000"
              >
                <div className="relative bg-[var(--gradient-card)] backdrop-blur-md border border-border/50 rounded-2xl p-10 text-center transition-all duration-700 hover:border-primary/60 hover:shadow-[var(--shadow-glow)] hover:scale-105">
                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div className={`relative ${stat.color} transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                      <Icon className="w-14 h-14 drop-shadow-lg" strokeWidth={1.5} />
                      <div className="absolute inset-0 blur-2xl opacity-60">
                        <Icon className="w-14 h-14" />
                      </div>
                    </div>
                  </div>

                  {/* Number */}
                  <div className={`mb-4 ${stat.color} transition-all duration-500 group-hover:scale-110`}>
                    <CountUpAnimation 
                      endValue={stat.value} 
                      suffix={stat.suffix}
                      isVisible={isVisible}
                    />
                  </div>

                  {/* Label */}
                  <p className="text-muted-foreground font-semibold text-lg">
                    {stat.label}
                  </p>

                  {/* Animated Gradient Border Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  
                  {/* Corner accent */}
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-primary/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tl-full" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
