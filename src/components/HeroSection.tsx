import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-illustration.png";

const ease = [0.16, 1, 0.3, 1] as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease, staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const HeroSection = () => (
  <section className="section-padding hero-gradient relative overflow-hidden" aria-labelledby="hero-heading">
    {/* Decorative gradient orbs */}
    <div className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-20 blur-3xl animate-float" style={{ background: "hsl(var(--primary) / 0.3)" }} />
    <div className="absolute bottom-10 right-20 w-96 h-96 rounded-full opacity-15 blur-3xl animate-float" style={{ background: "hsl(var(--accent) / 0.25)", animationDelay: "2s" }} />

    <div className="container-content relative">
      <motion.div
        className="grid lg:grid-cols-5 gap-12 lg:gap-20 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="lg:col-span-3 space-y-8">
          <motion.div variants={itemVariants}>
            <span className="section-label">
              <Sparkles className="w-3 h-3 inline mr-1" aria-hidden="true" />
              Inclusive EdTech Platform
            </span>
          </motion.div>

          <motion.h1
            id="hero-heading"
            variants={itemVariants}
            className="text-foreground font-black leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4.25rem)" }}
          >
            Accessible Learning{" "}
            <span className="gradient-text">for Everyone</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-muted-foreground text-lg lg:text-xl max-w-lg leading-relaxed"
          >
            A platform designed to provide inclusive education and skill development for learners of all abilities.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-2">
            <Button variant="gradient" size="lg" className="min-h-[48px] px-8 gap-2">
              Explore Courses <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="lg" className="min-h-[48px] px-8">
              Join as Expert
            </Button>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center gap-6 pt-4">
            <div className="flex -space-x-2">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-card"
                  style={{
                    background: `hsl(${217 + i * 30} ${60 + i * 10}% ${50 + i * 5}%)`,
                  }}
                />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              <span className="font-bold text-foreground">2,000+</span> learners already enrolled
            </p>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="lg:col-span-2">
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl opacity-20 blur-2xl" style={{ background: "var(--gradient-primary)" }} />
            <img
              src={heroImage}
              alt="Modern 3D illustration showing inclusive education technology with diverse learners and assistive devices"
              className="w-full h-auto rounded-2xl relative"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
