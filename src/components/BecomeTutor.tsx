import { Button } from "@/components/ui/button";
import { ArrowRight, Wallet, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";

const benefits = [
  {
    icon: Wallet,
    title: "Earn Extra Income",
    description: "Set your own rates and earn while helping others learn",
  },
  {
    icon: Clock,
    title: "Flexible Schedule",
    description: "Choose when and where you want to teach",
  },
  {
    icon: Users,
    title: "Build Your Profile",
    description: "Create a reputation and grow your student base",
  },
];

const BecomeTutor = () => {
  return (
    <section id="become-tutor" className="py-20 bg-gradient-hero text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary-foreground rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Are You a Student Looking to Earn?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Join tutorly.in as a tutor and turn your knowledge into income. Share what you know, help others succeed, and build your teaching career.
            </p>

            {/* Benefits */}
            <div className="space-y-4 mb-8">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-foreground/20 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{benefit.title}</h3>
                    <p className="text-primary-foreground/70">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button size="xl" variant="heroOutline" asChild>
              <Link to="/register">
                Register as Tutor
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>

          {/* Stats Card */}
          <div className="bg-primary-foreground/10 backdrop-blur-lg rounded-3xl p-8 border border-primary-foreground/20">
            <h3 className="text-2xl font-bold mb-6 text-center">Why Tutors Love Us</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4">
                <div className="text-4xl font-bold mb-2">₹15K+</div>
                <div className="text-primary-foreground/70 text-sm">Avg. Monthly Earnings</div>
              </div>
              <div className="text-center p-4">
                <div className="text-4xl font-bold mb-2">200+</div>
                <div className="text-primary-foreground/70 text-sm">Active Tutors</div>
              </div>
              <div className="text-center p-4">
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-primary-foreground/70 text-sm">Free to Join</div>
              </div>
              <div className="text-center p-4">
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-primary-foreground/70 text-sm">Students Helped</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BecomeTutor;
