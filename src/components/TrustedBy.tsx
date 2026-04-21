import { motion } from "framer-motion";

const partners = [
  { name: "Microsoft for Startups" },
  { name: "Enable India" },
  { name: "NSRCEL IIM Bangalore" },
];

const TrustedBy = () => (
  <section className="py-20 bg-card" aria-labelledby="trusted-heading">
    <div className="container-content text-center px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-label">Partners</span>
        <h2 id="trusted-heading" className="text-xl font-bold text-foreground mt-2 mb-12">
          Trusted by Leading Organizations
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {partners.map((p) => (
            <div
              key={p.name}
              className="px-8 py-4 rounded-2xl border border-border/60 bg-background text-foreground font-bold text-base opacity-50 hover:opacity-100 transition-all duration-300 hover:shadow-lg hover:border-primary/20"
            >
              {p.name}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default TrustedBy;
