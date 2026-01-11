import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TutorsList from "@/components/TutorsList";
import HowItWorks from "@/components/HowItWorks";
import BecomeTutor from "@/components/BecomeTutor";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <TutorsList />
        <HowItWorks />
        <BecomeTutor />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
