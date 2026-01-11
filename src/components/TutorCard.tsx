import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, GraduationCap, IndianRupee, Calendar } from "lucide-react";

export interface Tutor {
  id: string;
  name: string;
  age: number;
  qualification: string;
  subjects: string[];
  monthlyFees: number;
  phone: string;
  experience?: string;
  avatar?: string;
}

interface TutorCardProps {
  tutor: Tutor;
  onContact: (tutor: Tutor) => void;
}

const TutorCard = ({ tutor, onContact }: TutorCardProps) => {
  return (
    <Card className="group overflow-hidden bg-card border-border hover:shadow-card transition-all duration-300 hover:-translate-y-1">
      <CardContent className="p-6">
        {/* Header */}
        <div className="flex items-start gap-4 mb-4">
          <div className="w-16 h-16 rounded-xl bg-gradient-hero flex items-center justify-center text-primary-foreground text-2xl font-bold shadow-soft">
            {tutor.name.charAt(0)}
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
              {tutor.name}
            </h3>
            <div className="flex items-center gap-2 text-muted-foreground text-sm mt-1">
              <Calendar className="w-4 h-4" />
              <span>{tutor.age} years old</span>
            </div>
          </div>
        </div>

        {/* Qualification */}
        <div className="flex items-start gap-2 mb-4">
          <GraduationCap className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
          <p className="text-sm text-muted-foreground">{tutor.qualification}</p>
        </div>

        {/* Subjects */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tutor.subjects.map((subject) => (
            <Badge key={subject} variant="secondary" className="text-xs">
              {subject}
            </Badge>
          ))}
        </div>

        {/* Fees */}
        <div className="flex items-center gap-2 p-3 rounded-lg bg-secondary mb-4">
          <IndianRupee className="w-5 h-5 text-primary" />
          <div>
            <span className="text-xl font-bold text-foreground">₹{tutor.monthlyFees.toLocaleString()}</span>
            <span className="text-sm text-muted-foreground">/month</span>
          </div>
        </div>

        {/* Contact Button */}
        <Button 
          className="w-full" 
          onClick={() => onContact(tutor)}
        >
          <Phone className="w-4 h-4" />
          Contact Tutor
        </Button>
      </CardContent>
    </Card>
  );
};

export default TutorCard;
