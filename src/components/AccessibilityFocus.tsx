import { motion } from "framer-motion";
import { Monitor, Keyboard, Accessibility, Heart } from "lucide-react";

const items = [
  { icon: Monitor, title: "Screen Reader Friendly", description: "Full compatibility with popular screen readers for seamless navigation.", color: "primary" as const },
  { icon: Keyboard, title: "Keyboard Navigation", description: "Complete keyboard support with visible focus indicators throughout.", color: "secondary" as const },
  { icon: Accessibility, title: "Accessible Content", description: "All course content meets WCAG AA standards with captions and alt text.", color: "accent" as const },
  { icon: Heart, title: "Inclusive Design", description: "Built from the ground up with diverse learners and their needs in mind.", color: "primary" as const },
];

const colorMap = {
  primary: { box: "icon-box-primary", text: "text-primary" },
  secondary: { box: "icon-box-secondary", text: "text-secondary" },
  accent: { box: "icon-box-accent", text: "text-accent" },
};

const AccessibilityFocus = () => (
  <section className="section-padding bg-card" aria-labelledby="a11y-heading">
    <div className="container-content">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="section-label">Accessibility</span>
        <h2 id="a11y-heading" className="text-3xl lg:text-[2.75rem] font-extrabold text-foreground mt-2">
          Accessibility at <span className="gradient-text">Our Core</span>
        </h2>
        <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
          <span className="font-bold text-foreground">98.4%</span> WCAG Compliance Score across all course modules.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="modern-card text-center space-y-5"
          >
            <div className={`${colorMap[item.color].box} mx-auto w-14 h-14 rounded-2xl`}>
              <item.icon className={`w-7 h-7 ${colorMap[item.color].text}`} strokeWidth={1.8} aria-hidden="true" />
            </div>
            <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
            <p className="text-muted-foreground leading-relaxed text-[0.95rem]">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AccessibilityFocus;
