import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, GraduationCap, X, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const subjectOptions = [
  "Mathematics", "Physics", "Chemistry", "Biology", "English", 
  "Hindi", "Social Studies", "Computer Science", "Programming",
  "Accountancy", "Economics", "Business Studies", "History", "Geography"
];

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    phone: "",
    qualification: "",
    monthlyFees: "",
  });
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleSubject = (subject: string) => {
    setSelectedSubjects((prev) =>
      prev.includes(subject)
        ? prev.filter((s) => s !== subject)
        : [...prev, subject]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.age || !formData.phone || !formData.qualification || !formData.monthlyFees) {
      toast.error("Please fill in all required fields");
      return;
    }

    if (selectedSubjects.length === 0) {
      toast.error("Please select at least one subject");
      return;
    }

    // Simulate form submission
    console.log({ ...formData, subjects: selectedSubjects });
    setIsSubmitted(true);
    toast.success("Registration successful! We'll review your profile.");
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="max-w-md w-full text-center">
          <CardContent className="pt-12 pb-8">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-2">Registration Successful!</h2>
            <p className="text-muted-foreground mb-8">
              Thank you for registering as a tutor. Your profile is under review and will be live soon.
            </p>
            <Button asChild>
              <Link to="/">Back to Home</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="container max-w-2xl mx-auto">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <Card className="shadow-card">
          <CardHeader className="text-center pb-8">
            <div className="w-16 h-16 rounded-2xl bg-gradient-hero flex items-center justify-center mx-auto mb-4 shadow-soft">
              <GraduationCap className="w-8 h-8 text-primary-foreground" />
            </div>
            <CardTitle className="text-2xl">Register as a Tutor</CardTitle>
            <CardDescription>
              Fill in your details to start teaching and earning
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="h-12"
                />
              </div>

              {/* Age & Phone */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="age">Age *</Label>
                  <Input
                    id="age"
                    name="age"
                    type="number"
                    placeholder="Your age"
                    value={formData.age}
                    onChange={handleInputChange}
                    className="h-12"
                    min="18"
                    max="60"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Mobile Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="h-12"
                  />
                </div>
              </div>

              {/* Qualification */}
              <div className="space-y-2">
                <Label htmlFor="qualification">Educational Qualification *</Label>
                <Textarea
                  id="qualification"
                  name="qualification"
                  placeholder="E.g., B.Tech in Computer Science from IIT Delhi"
                  value={formData.qualification}
                  onChange={handleInputChange}
                  rows={3}
                />
              </div>

              {/* Subjects */}
              <div className="space-y-2">
                <Label>Subjects You Can Teach *</Label>
                <p className="text-sm text-muted-foreground mb-3">
                  Select all subjects you're comfortable teaching
                </p>
                <div className="flex flex-wrap gap-2">
                  {subjectOptions.map((subject) => (
                    <Badge
                      key={subject}
                      variant={selectedSubjects.includes(subject) ? "default" : "outline"}
                      className="cursor-pointer hover:bg-primary/80 transition-colors py-2 px-3"
                      onClick={() => toggleSubject(subject)}
                    >
                      {subject}
                      {selectedSubjects.includes(subject) && (
                        <X className="w-3 h-3 ml-1" />
                      )}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Monthly Fees */}
              <div className="space-y-2">
                <Label htmlFor="monthlyFees">Monthly Fees (₹) *</Label>
                <Input
                  id="monthlyFees"
                  name="monthlyFees"
                  type="number"
                  placeholder="E.g., 3000"
                  value={formData.monthlyFees}
                  onChange={handleInputChange}
                  className="h-12"
                  min="500"
                />
                <p className="text-sm text-muted-foreground">
                  Set your monthly tutoring fee per student
                </p>
              </div>

              <Button type="submit" size="lg" className="w-full">
                Submit Registration
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Register;
