import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSolution from "@/components/ProblemSolution";
import Features from "@/components/Features";
import WhoCanUse from "@/components/WhoCanUse";
import CoursesSection from "@/components/CoursesSection";
import AccessibilityFocus from "@/components/AccessibilityFocus";
import Testimonials from "@/components/Testimonials";
import TrustedBy from "@/components/TrustedBy";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <Navbar />
    <main>
      <HeroSection />
      <ProblemSolution />
      <Features />
      <WhoCanUse />
      <CoursesSection />
      <AccessibilityFocus />
      <Testimonials />
      <TrustedBy />
      <CTASection />
    </main>
    <Footer />
  </>
);

export default Index;
