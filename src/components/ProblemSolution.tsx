import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ProblemSolution = () => (
  <section className="section-padding bg-card" id="about" aria-labelledby="ps-heading">
    <div className="container-content max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-10"
      >
        <span className="section-label">Why Prishni?</span>
        <h2 id="ps-heading" className="text-3xl lg:text-[2.75rem] font-extrabold text-foreground leading-tight">
          Education Should Be Accessible{" "}
          <span className="gradient-text">to Everyone</span>
        </h2>

        <div className="grid sm:grid-cols-2 gap-6 text-left pt-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="modern-card space-y-4 hover:!transform-none"
          >
            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "hsl(var(--destructive) / 0.1)" }}>
              <span className="text-lg">⚠️</span>
            </div>
            <h3 className="text-lg font-bold text-foreground">The Problem</h3>
            <p className="text-muted-foreground leading-relaxed">
              Many learners with disabilities lack access to proper learning resources and inclusive educational content, creating barriers to growth.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl p-8 space-y-4 cta-gradient text-primary-foreground"
            style={{ boxShadow: "var(--shadow-button)" }}
          >
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-primary-foreground/20">
              <ArrowRight className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold">The Solution</h3>
            <p className="leading-relaxed text-primary-foreground/90">
              Prishni provides accessible courses and inclusive learning experiences, bridging the gap between quality education and learners who need it most.
            </p>
          </motion.div>
        </div>

        <p className="text-lg text-muted-foreground font-medium italic pt-2">
          "Education isn't broken; the access is. We built the bridge."
        </p>
      </motion.div>
    </div>
  </section>
);

export default ProblemSolution;
