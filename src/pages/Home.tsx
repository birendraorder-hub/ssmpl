import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, Clock, Award, CheckCircle, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-security.jpg";
import housekeepingImage from "@/assets/housekeeping-team.jpg";
import controlRoomImage from "@/assets/control-room.jpg";

const Home = () => {
  const highlights = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Trained Manpower",
      description: "Professional, verified, and regularly trained security and housekeeping staff",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "PSARA Compliant",
      description: "Fully licensed and compliant with all security regulations in Odisha",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "24×7 Supervision",
      description: "Round-the-clock monitoring and support for all deployments",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Statewide Coverage",
      description: "Serving clients across all districts of Odisha with excellence",
    },
  ];

  const services = [
    {
      title: "Security Manpower",
      description: "Professional guards for industrial, commercial, and residential premises",
      image: heroImage,
    },
    {
      title: "Housekeeping Services",
      description: "Trained cleaning staff for offices, institutions, and healthcare facilities",
      image: housekeepingImage,
    },
    {
      title: "Electronic Surveillance",
      description: "CCTV monitoring and alarm response support services",
      image: controlRoomImage,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Professional Security Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-overlay"></div>
        </div>
        
        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Professional Security and Housekeeping Solutions for a Safer, Cleaner Odisha
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Solution Security Management Pvt. Ltd. (SSMPL) is a Bhubaneswar-based company providing professional security and housekeeping manpower across Odisha.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-lg">
                <Link to="/services">
                  Explore Services <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className="text-lg">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Your Trusted Security Partner in Odisha
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We deliver trained and verified staff to industries, institutions, residential societies, and government establishments. 
              Our focus is on reliability, discipline, and customer satisfaction.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-left">
              {[
                "Trained & Verified Personnel",
                "Statewide Coverage Across Odisha",
                "PSARA Compliance & Certification",
                "24×7 Professional Supervision",
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
            Why Choose SSMPL?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <Card key={index} className="border-none shadow-medium hover:shadow-strong transition-all duration-300 hover:-translate-y-2 animate-scale-in">
                <CardContent className="p-6 text-center">
                  <div className="bg-gradient-primary p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-primary-foreground">
                    {highlight.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">{highlight.title}</h3>
                  <p className="text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Core Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive security and facility management solutions tailored to your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-medium hover:shadow-strong transition-all duration-300 group">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-overlay opacity-60 group-hover:opacity-40 transition-opacity"></div>
                  <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white z-10">
                    {service.title}
                  </h3>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/services">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link to="/services">
                View All Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Secure Your Premises?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Get in touch with our team for a consultation and customized security solution for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg">
              <Link to="/contact">Request a Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg bg-transparent border-white text-white hover:bg-white hover:text-primary">
              <Link to="/about">Learn About Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
