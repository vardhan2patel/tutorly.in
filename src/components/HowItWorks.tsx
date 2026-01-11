import { Search, MessageCircle, BookOpen, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Browse Tutors",
    description: "Search through our verified tutors by subject, location, or price range",
  },
  {
    icon: MessageCircle,
    title: "Connect Directly",
    description: "Contact tutors directly via phone to discuss your requirements",
  },
  {
    icon: BookOpen,
    title: "Start Learning",
    description: "Schedule sessions and begin your personalized learning journey",
  },
  {
    icon: CheckCircle,
    title: "Achieve Goals",
    description: "Track your progress and achieve your academic goals",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Getting started is easy. Follow these simple steps to find your perfect tutor
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-border" />
              )}

              {/* Icon */}
              <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-hero text-primary-foreground mb-6 shadow-card mx-auto">
                <step.icon className="w-10 h-10" />
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
