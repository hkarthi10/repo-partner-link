import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { 
  BarChart3, Shield, TrendingUp, Megaphone, Palette, 
  Globe, Code, Headphones 
} from "lucide-react";
import serviceBi from "@/assets/service-bi.jpg";
import serviceAiNetwork from "@/assets/service-ai-network.jpg";
import servicePrediction from "@/assets/service-prediction.jpg";
import serviceMarketing from "@/assets/service-marketing.jpg";
import serviceDesign from "@/assets/service-design.jpg";
import serviceWeb from "@/assets/service-web.jpg";
import serviceWebapp from "@/assets/service-webapp.jpg";
import serviceSupport from "@/assets/service-support.jpg";

const services = [
  {
    icon: BarChart3,
    title: "Business Intelligence Reporting",
    description: "Transform raw data into clear, actionable insights with interactive dashboards and automated reports.",
    image: serviceBi,
    features: [
      "Real-Time KPI Dashboards",
      "Custom BI Reports (Power BI, Tableau, Looker)",
      "Data Warehousing & ETL Pipelines",
      "Executive Summary & Trend Analysis"
    ]
  },
  {
    icon: Shield,
    title: "Agentic AI-Driven Network & Compliance",
    description: "Autonomous AI agents that manage, secure, and ensure compliance across your digital infrastructure.",
    image: serviceAiNetwork,
    features: [
      "Self-Healing Network Agents",
      "AI-Powered Compliance Automation (GDPR, HIPAA, SOC 2)",
      "Intelligent Access Control",
      "Proactive Threat Response"
    ]
  },
  {
    icon: TrendingUp,
    title: "Prediction & Advanced Analytics",
    description: "Forecast trends, optimize decisions, and uncover opportunities using predictive modeling.",
    image: servicePrediction,
    features: [
      "Demand & Sales Forecasting",
      "Customer Churn Prediction",
      "Risk Assessment & Fraud Detection",
      "Scenario Planning & Optimization"
    ]
  },
  {
    icon: Megaphone,
    title: "Digital Marketing That Converts",
    description: "High-ROI campaigns powered by real-time analytics to grow your brand across every channel.",
    image: serviceMarketing,
    features: [
      "SEO & Content Strategy",
      "Paid Ads (Google, Meta, LinkedIn)",
      "Social Media Management",
      "Conversion Rate Optimization (CRO)"
    ]
  },
  {
    icon: Palette,
    title: "Design and Branding",
    description: "Craft a compelling visual identity that resonates and sets your brand apart.",
    image: serviceDesign,
    features: [
      "Brand Strategy & Identity",
      "Logo, Typography, Color Palette",
      "Graphic Design (Print & Digital)",
      "UI/UX for Apps & Websites"
    ]
  },
  {
    icon: Globe,
    title: "High-Performance Websites",
    description: "Fast, secure, and stunning websites built to perform on every device and dominate search engines.",
    image: serviceWeb,
    features: [
      "Custom Design & UX/UI",
      "Fully Responsive Layout",
      "Blazing-Fast Speed (Core Web Vitals)",
      "E-commerce & Secure Payments"
    ]
  },
  {
    icon: Code,
    title: "Scalable Web Applications",
    description: "Custom web apps that automate workflows, streamline operations, and grow with your company.",
    image: serviceWebapp,
    features: [
      "Full-Stack Development (React, Node.js, Python)",
      "API & Database Design",
      "Progressive Web Apps (PWA)",
      "CRM & ERP Integrations"
    ]
  },
  {
    icon: Headphones,
    title: "Maintenance and Support",
    description: "Proactive care to keep your digital assets secure, fast, and future-ready.",
    image: serviceSupport,
    features: [
      "24/7 Technical Support",
      "Security Monitoring & Backups",
      "Content & Feature Updates",
      "Performance Reports & Training"
    ]
  }
];

const Services = () => {
  return (
    <section id="services" className="relative py-24 px-8 overflow-hidden bg-gradient-to-b from-card/30 to-background">
      {/* Background Elements */}
      <div className="absolute top-40 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-40 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Our Core Services
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Data-driven digital solutions that turn clicks into customers and ideas into scalable revenue
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group relative overflow-hidden bg-[var(--gradient-card)] border-border hover:border-primary/50 transition-all duration-500 hover:shadow-[var(--shadow-glow)] h-full">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 p-3 rounded-xl bg-primary/10 backdrop-blur-sm border border-primary/20">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
