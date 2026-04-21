import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => (
  <section className="section-padding relative overflow-hidden" aria-labelledby="cta-heading">
    <div className="absolute inset-0 cta-gradient" />
    <div className="absolute top-10 left-10 w-80 h-80 rounded-full bg-primary-foreground/5 blur-3xl" />
    <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-primary-foreground/5 blur-3xl" />

    <div className="container-content text-center relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-8 max-w-2xl mx-auto"
      >
        <h2 id="cta-heading" className="text-3xl lg:text-[2.75rem] font-extrabold text-primary-foreground leading-tight">
          Start Your Inclusive Learning Journey Today
        </h2>
        <p className="text-primary-foreground/80 text-lg">
          Join thousands of learners building skills through accessible, inclusive education.
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Button
            size="lg"
            className="min-h-[48px] px-8 font-bold bg-card text-foreground hover:bg-card/90 shadow-lg hover:-translate-y-0.5 transition-all duration-200 gap-2"
          >
            Sign Up <ArrowRight className="w-4 h-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="min-h-[48px] px-8 font-bold border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:-translate-y-0.5 transition-all duration-200"
          >
            Explore Courses
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
