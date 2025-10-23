import { Lightbulb, Target, Zap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              About iBee Analytics
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Description */}
          <div className="space-y-6 animate-fade-in">
            <p className="text-lg text-muted-foreground leading-relaxed">
              iBee Analytics is a cutting-edge technology company specializing in transforming businesses through intelligent digital solutions. We combine the power of artificial intelligence with innovative web development and cloud technologies to deliver exceptional results.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our team of experts brings together years of experience in AI development, digital marketing, web technologies, and cloud infrastructure to help businesses scale and succeed in the digital age.
            </p>
          </div>

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
              <div 
                key={index}
                className="group p-6 rounded-2xl bg-[var(--gradient-card)] border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-glow)] hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
