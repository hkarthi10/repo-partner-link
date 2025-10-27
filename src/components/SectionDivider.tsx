import { motion } from "framer-motion";

interface SectionDividerProps {
  variant?: "default" | "gradient" | "wave" | "dots";
}

const SectionDivider = ({ variant = "default" }: SectionDividerProps) => {
  if (variant === "gradient") {
    return (
      <div className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full max-w-7xl mx-auto px-8">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"
            />
          </div>
        </div>
        
        {/* Floating decorative elements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm border border-primary/30 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-gradient-to-br from-primary to-secondary animate-pulse" />
          </div>
        </motion.div>
      </div>
    );
  }

  if (variant === "wave") {
    return (
      <div className="relative py-12 overflow-hidden">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <motion.path
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
            d="M0,60 Q300,20 600,60 T1200,60"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="2"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
              <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="1" />
              <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  }

  if (variant === "dots") {
    return (
      <div className="relative py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-center gap-4">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`rounded-full ${
                  i === 2 ? "w-4 h-4 bg-primary" : "w-3 h-3 bg-primary/40"
                }`}
              />
            ))}
          </div>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-4 h-px bg-gradient-to-r from-transparent via-border to-transparent"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="relative py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center gap-4">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/50 to-primary rounded-full"
          />
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm border border-primary/40 flex items-center justify-center"
          >
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-primary to-secondary" />
          </motion.div>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 h-px bg-gradient-to-l from-transparent via-secondary/50 to-secondary rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default SectionDivider;
