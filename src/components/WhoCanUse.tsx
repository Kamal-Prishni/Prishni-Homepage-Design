import { motion } from "framer-motion";
import { GraduationCap, Lightbulb, Building2 } from "lucide-react";

const personas = [
  {
    icon: GraduationCap,
    title: "Learners",
    description: "Gain skills and knowledge through accessible and inclusive courses designed for diverse needs.",
    gradient: "from-primary/10 to-accent/5",
    iconColor: "text-primary",
  },
  {
    icon: Lightbulb,
    title: "Experts",
    description: "Create and publish courses to share your knowledge with a wider, more diverse audience.",
    gradient: "from-secondary/10 to-primary/5",
    iconColor: "text-secondary",
  },
  {
    icon: Building2,
    title: "Organizations",
    description: "Deliver accessible learning programs and training to your teams and communities.",
    gradient: "from-accent/10 to-secondary/5",
    iconColor: "text-accent",
  },
];

const WhoCanUse = () => (
  <section className="section-padding bg-card" aria-labelledby="who-heading">
    <div className="container-content">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="section-label">For Everyone</span>
        <h2 id="who-heading" className="text-3xl lg:text-[2.75rem] font-extrabold text-foreground mt-2">
          Who Can Use <span className="gradient-text">Prishni</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {personas.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="modern-card text-center space-y-5"
          >
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${p.gradient} flex items-center justify-center mx-auto`}>
              <p.icon className={`w-8 h-8 ${p.iconColor}`} strokeWidth={1.8} aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold text-foreground">{p.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{p.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhoCanUse;
