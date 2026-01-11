import { GraduationCap, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-hero flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">tutorly.in</span>
            </div>
            <p className="text-background/60 mb-4">
              Connecting students with expert tutors across India. Learn more, earn more.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#tutors" className="text-background/60 hover:text-background transition-colors">
                  Find Tutors
                </a>
              </li>
              <li>
                <Link to="/register" className="text-background/60 hover:text-background transition-colors">
                  Become a Tutor
                </Link>
              </li>
              <li>
                <a href="#how-it-works" className="text-background/60 hover:text-background transition-colors">
                  How It Works
                </a>
              </li>
            </ul>
          </div>

          {/* Subjects */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Popular Subjects</h4>
            <ul className="space-y-2">
              <li className="text-background/60">Mathematics</li>
              <li className="text-background/60">Physics</li>
              <li className="text-background/60">Chemistry</li>
              <li className="text-background/60">English</li>
              <li className="text-background/60">Programming</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-background/60">
                <Mail className="w-5 h-5" />
                <span>support@tutorly.in</span>
              </li>
              <li className="flex items-center gap-2 text-background/60">
                <Phone className="w-5 h-5" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-2 text-background/60">
                <MapPin className="w-5 h-5 mt-0.5" />
                <span>New Delhi, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 text-center text-background/40">
          <p>© {new Date().getFullYear()} tutorly.in. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
