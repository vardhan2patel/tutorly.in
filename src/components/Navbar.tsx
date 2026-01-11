import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-hero flex items-center justify-center shadow-soft">
              <GraduationCap className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">tutorly.in</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#tutors" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Find Tutors
            </a>
            <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              How It Works
            </a>
            <a href="#become-tutor" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Become a Tutor
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" asChild>
              <Link to="/register">Register as Tutor</Link>
            </Button>
            <Button asChild>
              <a href="#tutors">Find a Tutor</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              <a href="#tutors" className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2">
                Find Tutors
              </a>
              <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2">
                How It Works
              </a>
              <a href="#become-tutor" className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2">
                Become a Tutor
              </a>
              <div className="flex flex-col gap-2 pt-4">
                <Button variant="outline" asChild>
                  <Link to="/register">Register as Tutor</Link>
                </Button>
                <Button asChild>
                  <a href="#tutors">Find a Tutor</a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
