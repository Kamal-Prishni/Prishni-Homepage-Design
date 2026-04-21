import { motion } from "framer-motion";
import { Eye, Award, Clock, BookOpen } from "lucide-react";

const features = [
  {
    icon: Eye,
    title: "Accessible Learning",
    description: "Courses designed with accessibility in mind, ensuring every learner can engage fully.",
    color: "primary" as const,
  },
  {
    icon: Award,
    title: "Expert-Designed Content",
    description: "Courses and materials created by experienced educators and specialists.",
    color: "secondary" as const,
  },
  {
    icon: Clock,
    title: "Flexible Learning",
    description: "Learn anytime and anywhere with self-paced courses that fit your schedule.",
    color: "accent" as const,
  },
  {
    icon: BookOpen,
    title: "Educational Resources",
    description: "Access books, tools, and learning materials that support inclusive education.",
    color: "primary" as const,
  },
];

const colorMap = {
  primary: { box: "icon-box-primary", text: "text-primary" },
  secondary: { box: "icon-box-secondary", text: "text-secondary" },
  accent: { box: "icon-box-accent", text: "text-accent" },
};

const Features = () => (
  <section className="section-padding bg-background" aria-labelledby="features-heading">
    <div className="container-content">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="section-label">Features</span>
        <h2 id="features-heading" className="text-3xl lg:text-[2.75rem] font-extrabold text-foreground mt-2">
          Everything You Need to{" "}
          <span className="gradient-text">Learn & Grow</span>
        </h2>
        <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
          A comprehensive platform built for inclusive, effective learning experiences.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="modern-card flex flex-col items-start gap-5"
          >
            <div className={colorMap[f.color].box}>
              <f.icon className={`w-6 h-6 ${colorMap[f.color].text}`} strokeWidth={1.8} aria-hidden="true" />
            </div>
            <h3 className="text-lg font-bold text-foreground">{f.title}</h3>
            <p className="text-muted-foreground leading-relaxed text-[0.95rem]">{f.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
