import { Card, CardContent } from "@/components/ui/card";
import { Factory, Building2, GraduationCap, Home, Landmark, Hospital } from "lucide-react";

const Industries = () => {
  const industries = [
    {
      icon: <Factory className="h-12 w-12" />,
      title: "Industrial Units & Factories",
      description: "Comprehensive security and housekeeping solutions for manufacturing plants, warehouses, and industrial complexes.",
      services: [
        "24×7 Security Guards & Supervisors",
        "Access Control & Gate Management",
        "Industrial Cleaning & Maintenance",
        "Material Handling Support",
        "Safety Compliance Assistance",
      ],
    },
    {
      icon: <Building2 className="h-12 w-12" />,
      title: "Corporate Offices",
      description: "Professional manpower services for modern corporate environments ensuring safety, cleanliness, and efficiency.",
      services: [
        "Reception & Front Desk Management",
        "Office Security Personnel",
        "Daily Housekeeping & Cleaning",
        "Facility Maintenance Support",
        "Visitor Management Assistance",
      ],
    },
    {
      icon: <GraduationCap className="h-12 w-12" />,
      title: "Educational Institutions",
      description: "Trusted security and facility management for schools, colleges, universities, and training centers.",
      services: [
        "Campus Security Guards",
        "Student Safety & Supervision",
        "Classroom & Campus Cleaning",
        "Hostel Security & Housekeeping",
        "Event Security for College Functions",
      ],
    },
    {
      icon: <Home className="h-12 w-12" />,
      title: "Residential Complexes",
      description: "Reliable security and housekeeping services for apartments, gated communities, and housing societies.",
      services: [
        "Gate Security & Access Control",
        "Visitor Verification & Management",
        "Common Area Cleaning",
        "Garden & Landscape Maintenance",
        "24×7 Emergency Response",
      ],
    },
    {
      icon: <Landmark className="h-12 w-12" />,
      title: "Government Departments",
      description: "Professional manpower solutions for government offices, public institutions, and administrative buildings.",
      services: [
        "Government Building Security",
        "Office Housekeeping Services",
        "Document Security & Management",
        "Public Area Maintenance",
        "Compliance with Government Standards",
      ],
    },
    {
      icon: <Hospital className="h-12 w-12" />,
      title: "Hospitals & Healthcare Facilities",
      description: "Specialized security and hygiene services for hospitals, clinics, and medical institutions.",
      services: [
        "Hospital Security Personnel",
        "Patient Area Cleaning",
        "Bio-Medical Waste Management Support",
        "OT & ICU Cleaning Services",
        "Infection Control Compliance",
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
              Industries We Serve
            </h1>
            <p className="text-xl opacity-90 leading-relaxed">
              Providing specialized security and facility management solutions across diverse sectors in Odisha
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <Card
                key={index}
                className="border-none shadow-medium hover:shadow-strong transition-all duration-300 hover:-translate-y-2 animate-scale-in"
              >
                <CardContent className="p-8">
                  <div className="bg-gradient-primary p-4 rounded-lg w-20 h-20 flex items-center justify-center text-primary-foreground mb-6">
                    {industry.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-3">{industry.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {industry.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-primary text-sm uppercase tracking-wide mb-3">
                      Our Services Include:
                    </h4>
                    <ul className="space-y-2">
                      {industry.services.map((service, serviceIndex) => (
                        <li key={serviceIndex} className="flex items-start space-x-2">
                          <span className="text-accent mt-1">•</span>
                          <span className="text-foreground">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Reach Across Odisha
            </h2>
            <p className="text-lg text-muted-foreground">
              Serving diverse industries with professionalism and dedication
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: "500+", label: "Deployed Personnel" },
              { number: "100+", label: "Active Clients" },
              { number: "30+", label: "Districts Covered" },
              { number: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <Card key={index} className="border-none shadow-medium text-center">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wide">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Card className="border-none shadow-strong bg-gradient-primary text-primary-foreground">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Is Your Industry Listed Here?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                We provide customized security and facility management solutions for all types of organizations. 
                Contact us to discuss your specific requirements.
              </p>
              <a
                href="/contact"
                className="inline-block bg-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent/90 transition-all duration-200 shadow-medium hover:shadow-strong"
              >
                Get in Touch
              </a>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Industries;
