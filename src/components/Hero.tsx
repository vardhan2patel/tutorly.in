import { Button } from "@/components/ui/button";
import { ArrowRight, Users, BookOpen, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 animate-fade-in">
            <Star className="w-4 h-4 fill-primary" />
            <span>Trusted by 500+ students across India</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Connect with Expert{" "}
            <span className="text-gradient">Tutors</span>
            <br />
            Near You
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            The bridge between passionate tutors and eager students. Find qualified tutors in your area or earn while you learn by becoming one.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button size="xl" variant="hero" asChild>
              <a href="#tutors">
                Find a Tutor
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button size="xl" variant="outline" asChild>
              <Link to="/register">Become a Tutor</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground">200+</div>
              <div className="text-sm text-muted-foreground">Active Tutors</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground">50+</div>
              <div className="text-sm text-muted-foreground">Subjects</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Star className="w-8 h-8 text-primary fill-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground">4.8</div>
              <div className="text-sm text-muted-foreground">Avg. Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
