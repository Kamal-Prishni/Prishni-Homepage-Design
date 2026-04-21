import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Prishni's courses gave me the confidence and skills to pursue a career in web development. The accessible format made all the difference.",
    name: "Ananya R.",
    role: "Learner, Visual Impairment",
  },
  {
    quote: "As an educator, I love how easy it is to create inclusive content on Prishni. The platform truly puts accessibility first.",
    name: "Dr. Sanjay M.",
    role: "Expert & Educator",
  },
  {
    quote: "We've used Prishni to train our entire team on digital accessibility. The results have been outstanding.",
    name: "Priya K.",
    role: "HR Lead, Tech Company",
  },
];

const Testimonials = () => (
  <section className="section-padding bg-background" aria-labelledby="testimonials-heading">
    <div className="container-content">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="section-label">Testimonials</span>
        <h2 id="testimonials-heading" className="text-3xl lg:text-[2.75rem] font-extrabold text-foreground mt-2">
          What Our <span className="gradient-text">Learners Say</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.blockquote
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="modern-card flex flex-col"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-accent text-accent" aria-hidden="true" />
              ))}
            </div>
            <p className="text-foreground leading-relaxed flex-1 text-[0.95rem]">"{t.quote}"</p>
            <footer className="mt-6 pt-5 border-t border-border/60">
              <cite className="not-italic flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm" style={{ background: "var(--gradient-primary)", color: "white" }}>
                  {t.name.charAt(0)}
                </div>
                <div>
                  <span className="font-bold text-foreground block text-sm">{t.name}</span>
                  <span className="text-xs text-muted-foreground">{t.role}</span>
                </div>
              </cite>
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
