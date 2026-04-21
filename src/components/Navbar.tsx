import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Courses", href: "#courses" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#footer" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-xl border-b border-border/50" role="navigation" aria-label="Main navigation">
      <div className="container-content flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        <a href="#" className="text-2xl font-extrabold tracking-tight">
          <span className="gradient-text">Prishni</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-muted-foreground hover:text-foreground font-medium transition-colors duration-200 text-[0.9rem]"
            >
              {link.label}
            </a>
          ))}
          <Button variant="gradient" size="default" className="min-h-[44px] px-6">
            Sign Up
          </Button>
        </div>

        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border/50 bg-card/95 backdrop-blur-xl px-4 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block py-3 text-muted-foreground hover:text-foreground font-medium"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button variant="gradient" className="w-full mt-2 min-h-[44px]">
            Sign Up
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
