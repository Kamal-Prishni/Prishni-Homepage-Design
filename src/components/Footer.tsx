import { Mail, Phone, Twitter, Linkedin, Github } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground py-20 px-4 sm:px-6 lg:px-8" id="footer" role="contentinfo">
    <div className="container-content">
      <div className="grid md:grid-cols-4 gap-12">
        <div className="space-y-5">
          <span className="text-2xl font-extrabold text-card">Prishni</span>
          <p className="text-card/50 leading-relaxed text-sm">
            Inclusive education and skill development for learners of all abilities.
          </p>
          <div className="flex gap-3">
            {[Twitter, Linkedin, Github].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 rounded-lg bg-card/10 hover:bg-card/20 flex items-center justify-center transition-colors duration-200"
                aria-label={Icon.displayName || "Social media"}
              >
                <Icon className="w-4 h-4 text-card/60" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-bold mb-5 text-xs uppercase tracking-[0.15em] text-card/40">Quick Links</h3>
          <ul className="space-y-3">
            {["Home", "About Us", "Courses", "Careers"].map((link) => (
              <li key={link}>
                <a href="#" className="text-card/50 hover:text-card transition-colors duration-200 text-sm">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-5 text-xs uppercase tracking-[0.15em] text-card/40">Legal</h3>
          <ul className="space-y-3">
            {["Privacy Policy", "Terms of Service", "Contact"].map((link) => (
              <li key={link}>
                <a href="#" className="text-card/50 hover:text-card transition-colors duration-200 text-sm">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-5 text-xs uppercase tracking-[0.15em] text-card/40">Contact Us</h3>
          <ul className="space-y-3">
            <li>
              <a href="mailto:hello@prishni.com" className="flex items-center gap-2 text-card/50 hover:text-card transition-colors duration-200 text-sm">
                <Mail size={14} aria-hidden="true" /> hello@prishni.com
              </a>
            </li>
            <li>
              <a href="tel:+911234567890" className="flex items-center gap-2 text-card/50 hover:text-card transition-colors duration-200 text-sm">
                <Phone size={14} aria-hidden="true" /> +91 123 456 7890
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-card/10 mt-16 pt-8 text-center text-card/30 text-sm">
        © {new Date().getFullYear()} Prishni. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
