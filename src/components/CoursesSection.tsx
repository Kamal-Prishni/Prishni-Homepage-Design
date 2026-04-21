import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const courses = [
  {
    title: "Web Accessibility Development",
    description: "Learn to build websites and applications accessible to all users, following WCAG guidelines.",
    difficulty: "Intermediate",
    duration: "8 weeks",
    accent: "accent",
  },
  {
    title: "Digital Skills for All",
    description: "Essential digital literacy skills designed for learners of diverse abilities.",
    difficulty: "Beginner",
    duration: "6 weeks",
    accent: "primary",
  },
  {
    title: "Assistive Technology Fundamentals",
    description: "Master the tools and technologies that enable independent learning and work.",
    difficulty: "Beginner",
    duration: "4 weeks",
    accent: "secondary",
  },
];

const CoursesSection = () => (
  <section className="section-padding bg-background" id="courses" aria-labelledby="courses-heading">
    <div className="container-content">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="section-label">Courses</span>
        <h2 id="courses-heading" className="text-3xl lg:text-[2.75rem] font-extrabold text-foreground mt-2">
          Featured <span className="gradient-text">Courses</span>
        </h2>
        <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
          Start building skills with our expert-designed, accessible courses.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {courses.map((c, i) => (
          <motion.article
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="modern-card flex flex-col"
          >
            <div className="flex items-center gap-2 mb-5">
              <span className="pill-green">{c.difficulty}</span>
              <span className="pill-blue">{c.duration}</span>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">{c.title}</h3>
            <p className="text-muted-foreground leading-relaxed mb-8 flex-1 text-[0.95rem]">{c.description}</p>

            <Button variant="outline" className="w-full min-h-[48px] gap-2 group">
              View Course
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default CoursesSection;
