import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Users, Award, TrendingUp, Heart, Briefcase, UserCheck } from "lucide-react";

const Careers = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    position: "",
    experience: "",
    message: "",
  });

  const positions = [
    "Security Guard",
    "Security Supervisor",
    "Housekeeping Staff",
    "Housekeeping Supervisor",
    "Team Leader",
    "Administrative Staff",
    "Other",
  ];

  const benefits = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "Regular Training",
      description: "Continuous skill development and professional training programs",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Career Growth",
      description: "Clear progression paths from guard to supervisor to management roles",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Job Security",
      description: "Stable employment with timely salary payments and benefits",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Supportive Environment",
      description: "Work with a professional team in a respectful workplace",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.phone || !formData.position) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    // In a real application, this would send data to a backend
    toast({
      title: "Application Submitted!",
      description: "Thank you for your interest. We will contact you soon.",
    });

    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      location: "",
      position: "",
      experience: "",
      message: "",
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Join Our Team
            </h1>
            <p className="text-xl opacity-90 leading-relaxed">
              Build a rewarding career with Solution Security Management Pvt. Ltd. — Odisha's trusted security and facility management provider
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Work With Us?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We invest in our people because they are our greatest asset
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-none shadow-medium hover:shadow-strong transition-all duration-300 hover:-translate-y-2 animate-scale-in">
                <CardContent className="p-6 text-center">
                  <div className="bg-gradient-primary p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-primary-foreground">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Current Openings
              </h2>
              <p className="text-lg text-muted-foreground">
                We're always looking for dedicated professionals to join our team
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: <UserCheck className="h-6 w-6" />,
                  title: "Security Guards",
                  requirements: "Basic education, good health, willingness to work in shifts",
                },
                {
                  icon: <Users className="h-6 w-6" />,
                  title: "Security Supervisors",
                  requirements: "2+ years experience, leadership skills, strong communication",
                },
                {
                  icon: <Briefcase className="h-6 w-6" />,
                  title: "Housekeeping Staff",
                  requirements: "Experience in cleaning services, attention to detail",
                },
                {
                  icon: <Award className="h-6 w-6" />,
                  title: "Housekeeping Supervisors",
                  requirements: "Experience in facility management, team coordination skills",
                },
              ].map((position, index) => (
                <Card key={index} className="border-none shadow-medium hover:shadow-strong transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-primary p-3 rounded-lg text-primary-foreground flex-shrink-0">
                        {position.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-primary mb-2">{position.title}</h3>
                        <p className="text-sm text-muted-foreground">{position.requirements}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="border-none shadow-strong">
              <CardHeader>
                <CardTitle className="text-3xl text-primary text-center">
                  Apply Now
                </CardTitle>
                <p className="text-center text-muted-foreground">
                  Fill in the form below to submit your application
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">Current Location</Label>
                      <Input
                        id="location"
                        placeholder="City, District"
                        value={formData.location}
                        onChange={(e) => handleChange("location", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="position">Position Applied For *</Label>
                      <Select value={formData.position} onValueChange={(value) => handleChange("position", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a position" />
                        </SelectTrigger>
                        <SelectContent>
                          {positions.map((position) => (
                            <SelectItem key={position} value={position}>
                              {position}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="experience">Years of Experience</Label>
                      <Input
                        id="experience"
                        placeholder="e.g., 2 years"
                        value={formData.experience}
                        onChange={(e) => handleChange("experience", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Additional Information</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your skills, experience, or any other relevant information..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto border-none shadow-medium">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Have Questions About Careers?
              </h3>
              <p className="text-muted-foreground mb-6">
                Our HR team is here to help. Contact us for more information about job opportunities.
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p>
                  Email: <a href="mailto:careers@solutionssmpl.in" className="text-primary hover:text-accent transition-colors">careers@solutionssmpl.in</a>
                </p>
                <p>
                  Phone: <a href="tel:+918035427037" className="text-primary hover:text-accent transition-colors">+91 8035427037</a>
                </p>
                <p>
                  <a href="tel:+916370285246" className="text-primary hover:text-accent transition-colors">+91 6370285246</a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Careers;
