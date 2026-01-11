import { useState } from "react";
import TutorCard, { Tutor } from "./TutorCard";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";

// Sample tutors data
const sampleTutors: Tutor[] = [
  {
    id: "1",
    name: "Priya Sharma",
    age: 24,
    qualification: "B.Tech in Computer Science from IIT Delhi",
    subjects: ["Mathematics", "Physics", "Programming"],
    monthlyFees: 3500,
    phone: "+91 98765 43210",
  },
  {
    id: "2",
    name: "Rahul Verma",
    age: 22,
    qualification: "B.Sc Mathematics from Delhi University",
    subjects: ["Mathematics", "Statistics"],
    monthlyFees: 2500,
    phone: "+91 87654 32109",
  },
  {
    id: "3",
    name: "Anjali Gupta",
    age: 26,
    qualification: "M.A. English Literature from JNU",
    subjects: ["English", "Hindi", "Social Studies"],
    monthlyFees: 2000,
    phone: "+91 76543 21098",
  },
  {
    id: "4",
    name: "Vikram Singh",
    age: 23,
    qualification: "B.Sc Physics Honours from St. Stephen's",
    subjects: ["Physics", "Chemistry"],
    monthlyFees: 3000,
    phone: "+91 65432 10987",
  },
  {
    id: "5",
    name: "Sneha Patel",
    age: 25,
    qualification: "M.Sc Chemistry from BITS Pilani",
    subjects: ["Chemistry", "Biology"],
    monthlyFees: 2800,
    phone: "+91 54321 09876",
  },
  {
    id: "6",
    name: "Arjun Reddy",
    age: 21,
    qualification: "B.Com from Loyola College Chennai",
    subjects: ["Accountancy", "Economics", "Business Studies"],
    monthlyFees: 2200,
    phone: "+91 43210 98765",
  },
];

const TutorsList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTutor, setSelectedTutor] = useState<Tutor | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const filteredTutors = sampleTutors.filter((tutor) => {
    const searchLower = searchQuery.toLowerCase();
    return (
      tutor.name.toLowerCase().includes(searchLower) ||
      tutor.subjects.some((s) => s.toLowerCase().includes(searchLower)) ||
      tutor.qualification.toLowerCase().includes(searchLower)
    );
  });

  const handleContact = (tutor: Tutor) => {
    setSelectedTutor(tutor);
    setIsDialogOpen(true);
  };

  return (
    <section id="tutors" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Find Your Perfect Tutor
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse through our verified tutors and find the right match for your learning needs
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search by name, subject, or qualification..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-12 text-base bg-card border-border"
            />
          </div>
        </div>

        {/* Tutors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTutors.map((tutor, index) => (
            <div
              key={tutor.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <TutorCard tutor={tutor} onContact={handleContact} />
            </div>
          ))}
        </div>

        {filteredTutors.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No tutors found matching your search.</p>
          </div>
        )}

        {/* Contact Dialog */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Contact {selectedTutor?.name}</DialogTitle>
              <DialogDescription>
                Get in touch with the tutor to discuss your learning requirements
              </DialogDescription>
            </DialogHeader>
            {selectedTutor && (
              <div className="space-y-4 pt-4">
                <div className="p-4 rounded-lg bg-secondary">
                  <p className="text-sm text-muted-foreground mb-1">Phone Number</p>
                  <p className="text-lg font-semibold text-foreground">{selectedTutor.phone}</p>
                </div>
                <div className="p-4 rounded-lg bg-secondary">
                  <p className="text-sm text-muted-foreground mb-1">Monthly Fees</p>
                  <p className="text-lg font-semibold text-foreground">₹{selectedTutor.monthlyFees.toLocaleString()}/month</p>
                </div>
                <Button className="w-full" asChild>
                  <a href={`tel:${selectedTutor.phone.replace(/\s/g, "")}`}>
                    Call Now
                  </a>
                </Button>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default TutorsList;
