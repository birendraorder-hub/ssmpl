import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Sparkles, Users, PartyPopper, Camera, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: <Shield className="h-10 w-10" />,
      title: "Security Manpower Services",
      description: "Professional, trained, and verified security guards for comprehensive protection of your premises.",
      features: [
        "Industrial & Factory Security",
        "Commercial Office Security",
        "Residential Complex Security",
        "Institutional Security (Schools, Colleges, Hospitals)",
        "Armed & Unarmed Guards",
        "Access Control & Gate Management",
        "Patrolling & Perimeter Security",
        "24×7 Security Coverage",
      ],
    },
    {
      icon: <Sparkles className="h-10 w-10" />,
      title: "Housekeeping & Facility Management",
      description: "Trained cleaning and housekeeping staff ensuring hygiene and cleanliness across all types of facilities.",
      features: [
        "Office & Corporate Cleaning",
        "Hospital & Healthcare Cleaning",
        "Educational Institution Cleaning",
        "Industrial Facility Maintenance",
        "Residential Society Housekeeping",
        "Deep Cleaning Services",
        "Waste Management",
        "Restroom & Pantry Maintenance",
      ],
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "Supervisory & Support Staff",
      description: "Experienced supervisors and multi-skilled personnel to manage and coordinate facility operations.",
      features: [
        "Security Supervisors",
        "Housekeeping Supervisors",
        "Team Leaders & Coordinators",
        "Quality Assurance Personnel",
        "Administrative Support Staff",
        "Regular Inspection & Reporting",
        "Performance Monitoring",
        "Staff Training & Development",
      ],
    },
    {
      icon: <PartyPopper className="h-10 w-10" />,
      title: "Event & VIP Security",
      description: "Specialized security solutions for events, conferences, and VIP protection requirements.",
      features: [
        "Corporate Event Security",
        "Wedding & Social Event Security",
        "Exhibition & Trade Fair Security",
        "VIP & Executive Protection",
        "Crowd Management",
        "Entry & Exit Control",
        "Emergency Response Teams",
        "Professional Bouncers",
      ],
    },
    {
      icon: <Camera className="h-10 w-10" />,
      title: "Electronic Surveillance Assistance",
      description: "Support services for electronic security systems including CCTV monitoring and alarm response.",
      features: [
        "CCTV Monitoring Support",
        "Control Room Operations",
        "Access Control System Support",
        "Alarm Response Services",
        "Incident Reporting",
        "Video Surveillance Analysis",
        "Emergency Alert Management",
        "Technology Integration Support",
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Professional Services
            </h1>
            <p className="text-xl opacity-90 leading-relaxed">
              Comprehensive security and facility management solutions tailored to meet the unique needs of your organization
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`border-none shadow-medium hover:shadow-strong transition-all duration-300 animate-slide-up ${
                  index % 2 === 0 ? "" : "bg-secondary/20"
                }`}
              >
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-primary p-4 rounded-lg text-primary-foreground flex-shrink-0">
                      {service.icon}
                    </div>
                    <div>
                      <CardTitle className="text-2xl md:text-3xl text-primary mb-2">
                        {service.title}
                      </CardTitle>
                      <p className="text-lg text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
              Why Choose Our Services?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Trained & Certified Personnel",
                  description: "All staff undergo rigorous training and background verification",
                },
                {
                  title: "PSARA Compliance",
                  description: "Fully licensed and compliant with security regulations",
                },
                {
                  title: "24×7 Support",
                  description: "Round-the-clock supervision and emergency response",
                },
                {
                  title: "Custom Solutions",
                  description: "Services tailored to your specific requirements",
                },
                {
                  title: "Modern Technology",
                  description: "Integration with latest security and facility management systems",
                },
                {
                  title: "Transparent Operations",
                  description: "Regular reporting, inspections, and quality audits",
                },
              ].map((item, index) => (
                <Card key={index} className="border-none shadow-medium hover:shadow-strong transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-primary mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need a Customized Solution?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Contact us to discuss your specific requirements. Our team will design a tailored security and facility management solution for you.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg">
            <Link to="/contact">Request a Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
