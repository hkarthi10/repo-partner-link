import { motion } from "framer-motion";
import { 
  Bot, 
  FileText, 
  MessageSquare, 
  TrendingUp, 
  Video, 
  DollarSign, 
  Lightbulb, 
  Eye, 
  BarChart3, 
  Network 
} from "lucide-react";

const AIModules = () => {
  const modules = [
    {
      icon: Bot,
      title: "Agentic AI – Personalized Product Recommendations",
      tagline: "Your Smart Sales Assistant, Powered by AI",
      description: "AI learns your needs and instantly shows the most relevant products.",
      gradient: "from-primary/20 to-secondary/20"
    },
    {
      icon: FileText,
      title: "Deep Learning – Smart Summaries & Instant Answers",
      tagline: "Understand Products in Seconds",
      description: "Generates quick, tailored summaries based on business challenges.",
      gradient: "from-secondary/20 to-primary/20"
    },
    {
      icon: MessageSquare,
      title: "NLP – Intent-Based Compatibility Checks",
      tagline: "Ask in Plain English, Get Instant Answers",
      description: "Understands natural questions like \"Does it work with Oracle ERP?\" and responds with precise details.",
      gradient: "from-primary/20 to-secondary/20"
    },
    {
      icon: TrendingUp,
      title: "Reinforcement Learning – Dynamic Pricing & Tiering",
      tagline: "The Best Package, Highlighted for You",
      description: "Learns optimal pricing and feature combinations for each user.",
      gradient: "from-secondary/20 to-primary/20"
    },
    {
      icon: Video,
      title: "Computer Vision – Interactive Product Demos",
      tagline: "Click, Jump, Learn Faster",
      description: "Allows users to click on tagged demo video sections to explore key features instantly.",
      gradient: "from-primary/20 to-secondary/20"
    },
    {
      icon: DollarSign,
      title: "Causal AI – Predict Your ROI",
      tagline: "See the Impact Before You Invest",
      description: "Estimates ROI and business outcomes based on causal relationships.",
      gradient: "from-secondary/20 to-primary/20"
    },
    {
      icon: Lightbulb,
      title: "Generative AI – 'What-If' Scenario Modeling",
      tagline: "Simulate Outcomes Instantly",
      description: "Lets users test business scenarios and see predicted results dynamically.",
      gradient: "from-primary/20 to-secondary/20"
    },
    {
      icon: Eye,
      title: "Explainable AI – Transparent Decisions",
      tagline: "Understand Every AI Recommendation",
      description: "Shows reasoning behind AI suggestions to build trust and transparency.",
      gradient: "from-secondary/20 to-primary/20"
    },
    {
      icon: BarChart3,
      title: "Federated Learning – Secure Industry Benchmarking",
      tagline: "Compare Your Performance Safely",
      description: "Benchmarks your KPIs against industry data without sharing confidential information.",
      gradient: "from-primary/20 to-secondary/20"
    },
    {
      icon: Network,
      title: "Graph Neural Networks – Map Your Business Connections",
      tagline: "Visualize & Protect Your Supply Chain",
      description: "Maps suppliers, logistics, and customers to reveal dependencies and potential disruptions.",
      gradient: "from-secondary/20 to-primary/20"
    }
  ];

  return (
    <section className="relative py-24 px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-40 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-40 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" />
      
      <div className="max-w-full mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent gradient-animate">
              AI-Powered Innovation
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our advanced AI modules designed to transform your business operations
          </p>
        </motion.div>

        {/* AI Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {modules.map((module, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.02, 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full p-8 rounded-2xl bg-card border border-border backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-[var(--shadow-card)]">
                {/* Gradient Overlay on Hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${module.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary mb-6 group-hover:shadow-[var(--shadow-glow)] transition-shadow duration-300"
                  >
                    <module.icon className="w-8 h-8 text-primary-foreground" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                    {module.title}
                  </h3>

                  {/* Tagline */}
                  <p className="text-base font-semibold text-primary mb-3">
                    {module.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {module.description}
                  </p>
                </div>

                {/* Animated Border Effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 rounded-2xl border-2 border-primary/50 animate-pulse-glow" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIModules;
