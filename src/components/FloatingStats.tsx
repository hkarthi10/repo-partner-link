import { motion } from "framer-motion";
import { TrendingUp, Users, Award, Zap } from "lucide-react";

const stats = [
  { icon: Users, value: "500+", label: "Clients Served", color: "from-blue-500 to-cyan-500" },
  { icon: Award, value: "98%", label: "Success Rate", color: "from-purple-500 to-pink-500" },
  { icon: TrendingUp, value: "250%", label: "Avg ROI", color: "from-orange-500 to-red-500" },
  { icon: Zap, value: "24/7", label: "Support", color: "from-green-500 to-emerald-500" },
];

const FloatingStats = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5" />
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative group"
            >
              <div className="relative p-6 rounded-2xl bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.15)]">
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.color} mb-4 shadow-lg`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                
                {/* Value */}
                <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                
                {/* Label */}
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FloatingStats;
