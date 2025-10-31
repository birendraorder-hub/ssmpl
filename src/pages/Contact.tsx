import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.phone || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    // In a real application, this would send data to a backend
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      organization: "",
      message: "",
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Head Office",
      details: ["Plot No-841, Bomikhal, Rasulgarh", "Front Of Nexus Esplanade Mall", "Bhubaneswar - 751010, Odisha"],
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      details: ["+91 8035427037", "+91 6370285246"],
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: ["info@solutionssmpl.in", "contact@solutionssmpl.in"],
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Business Hours",
      details: ["Mon - Sat: 9:00 AM - 6:00 PM", "24×7 Emergency Support"],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl opacity-90 leading-relaxed">
              Contact us for professional security and housekeeping solutions tailored to your needs
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-none shadow-medium hover:shadow-strong transition-all duration-300 hover:-translate-y-2 animate-scale-in">
                <CardContent className="p-6 text-center">
                  <div className="bg-gradient-primary p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-primary-foreground">
                    {info.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-3">{info.title}</h3>
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-sm text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form and Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-none shadow-strong">
              <CardHeader>
                <CardTitle className="text-3xl text-primary">
                  Send Us a Message
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll respond within 24 hours
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
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

                  <div className="space-y-2">
                    <Label htmlFor="organization">Organization/Company</Label>
                    <Input
                      id="organization"
                      placeholder="Your company name"
                      value={formData.organization}
                      onChange={(e) => handleChange("organization", e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Your Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your security and housekeeping requirements..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map and Additional Info */}
            <div className="space-y-6">
              <Card className="border-none shadow-medium overflow-hidden">
                <div className="h-80 bg-secondary/30">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238132.63658782386!2d85.70630224999999!3d20.2960587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909d2d5170aa5%3A0xfc580e2b68b33fa8!2sBhubaneswar%2C%20Odisha!5e0!3m2!1sen!2sin!4v1234567890123"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="SSMPL Office Location"
                  ></iframe>
                </div>
              </Card>

              <Card className="border-none shadow-medium bg-gradient-primary text-primary-foreground">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Why Contact Us?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <span className="text-accent text-xl">✓</span>
                      <span>Free consultation and site assessment</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-accent text-xl">✓</span>
                      <span>Customized security and housekeeping solutions</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-accent text-xl">✓</span>
                      <span>Quick response within 24 hours</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-accent text-xl">✓</span>
                      <span>Transparent pricing and service agreements</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-accent text-xl">✓</span>
                      <span>24×7 emergency support available</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Service Coverage Across Odisha
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We provide professional security and housekeeping manpower across all districts of Odisha
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-foreground">
              {[
                "Bhubaneswar",
                "Cuttack",
                "Puri",
                "Berhampur",
                "Sambalpur",
                "Rourkela",
                "Balasore",
                "Angul",
                "Jharsuguda",
                "Rayagada",
                "Koraput",
                "Dhenkanal",
              ].map((city, index) => (
                <div key={index} className="p-3 bg-background rounded-lg shadow-soft">
                  {city}
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm text-muted-foreground italic">
              + All other districts across Odisha
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
