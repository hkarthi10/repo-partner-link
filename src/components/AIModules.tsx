import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import {
  Sparkles, Brain, MessageSquare, DollarSign, Eye,
  GitBranch, Boxes, FileSearch, Shield, Network
} from "lucide-react";

const aiModules = [
  {
    icon: Sparkles,
    title: "Agentic AI",
    tagline: "Your Smart Sales Assistant, Powered by AI",
    description: "Personalized product recommendations that study your industry and needs, showing the most relevant solutions instantly.",
  },
  {
    icon: Brain,
    title: "Deep Learning",
    tagline: "Understand Products in Seconds",
    description: "Smart summaries and instant answers explaining how our solutions solve your specific challenges in your business language.",
  },
  {
    icon: MessageSquare,
    title: "Natural Language Processing",
    tagline: "Ask in Plain English, Get Instant Answers",
    description: "Intent-based compatibility checks that understand questions like 'Does it work with Oracle ERP?' without waiting for a sales rep.",
  },
  {
    icon: DollarSign,
    title: "Reinforcement Learning",
    tagline: "The Best Package, Highlighted for You",
    description: "Dynamic pricing and tiering that learns which combinations fit your company best, making decisions faster and easier.",
  },
  {
    icon: Eye,
    title: "Computer Vision",
    tagline: "Click, Jump, Learn Faster",
    description: "Interactive product demos with AI-tagged features, letting you jump directly to what matters and focus on key insights.",
  },
  {
    icon: GitBranch,
    title: "Causal AI",
    tagline: "See the Impact Before You Invest",
    description: "Predict your ROI by analyzing cause-and-effect, estimating profit from operational improvements before implementation.",
  },
  {
    icon: Boxes,
    title: "Generative AI",
    tagline: "Simulate Outcomes Instantly",
    description: "What-if scenario modeling that tests scenarios like cost increases or expansion, showing how your business would perform.",
  },
  {
    icon: FileSearch,
    title: "Explainable AI (XAI)",
    tagline: "Understand Every AI Recommendation",
    description: "Transparent decisions with clear explanations, removing the 'black box' effect and building trust in every recommendation.",
  },
  {
    icon: Shield,
    title: "Federated Learning",
    tagline: "Compare Your Performance Safely",
    description: "Secure industry benchmarking that learns from multiple companies without sharing your data, letting you compare KPIs safely.",
  },
  {
    icon: Network,
    title: "Graph Neural Networks",
    tagline: "Visualize & Protect Your Supply Chain",
    description: "Map your business connections including suppliers, logistics, and customers, preventing chain disruptions before they happen.",
  }
];

const AIModules = () => {
  return (
    <section className="relative py-24 px-8 overflow-hidden bg-gradient-to-b from-background to-card/30">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              AI-Powered Intelligence
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cutting-edge AI technologies that transform how you understand, predict, and grow your business
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary to-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiModules.map((module, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div className="group relative overflow-hidden bg-[var(--gradient-card)] border border-border/50 hover:border-secondary/60 transition-all duration-700 hover:shadow-[var(--shadow-glow-blue)] h-full p-8 rounded-2xl backdrop-blur-sm">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-secondary/15 group-hover:bg-secondary/30 transition-all duration-300 group-hover:scale-110">
                      <module.icon className="w-7 h-7 text-secondary group-hover:rotate-12 transition-transform duration-500 drop-shadow-lg" />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-secondary transition-colors duration-300">
                      {module.title}
                    </h3>
                    <p className="text-sm font-semibold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                      {module.tagline}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {module.description}
                    </p>
                  </div>
                </div>

                {/* Animated gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-2xl" />
                
                {/* Subtle corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIModules;
