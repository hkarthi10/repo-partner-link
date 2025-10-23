import { Lightbulb, Target, Zap } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"
        />
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              About iBee Analytics
            </span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              iBee Analytics is a cutting-edge technology company specializing in transforming businesses through intelligent digital solutions. We combine the power of artificial intelligence with innovative web development and cloud technologies to deliver exceptional results.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our team of experts brings together years of experience in AI development, digital marketing, web technologies, and cloud infrastructure to help businesses scale and succeed in the digital age.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid gap-6">
            {[
              {
                icon: Lightbulb,
                title: "Innovation First",
                description: "Leveraging cutting-edge AI and technology to solve complex business challenges"
              },
              {
                icon: Target,
                title: "Results Driven",
                description: "Focused on delivering measurable outcomes and ROI for our clients"
              },
              {
                icon: Zap,
                title: "Fast & Agile",
                description: "Rapid deployment and iterative improvements for maximum efficiency"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="group p-6 rounded-2xl bg-[var(--gradient-card)] border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-glow)] cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300"
                  >
                    <feature.icon className="w-6 h-6" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
