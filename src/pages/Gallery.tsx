import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-security.jpg";
import housekeepingImage from "@/assets/housekeeping-team.jpg";
import controlRoomImage from "@/assets/control-room.jpg";
import aboutImage from "@/assets/about-partnership.jpg";

const Gallery = () => {
  const galleryImages = [
    {
      image: heroImage,
      title: "Professional Security Guards",
      category: "Security Services",
    },
    {
      image: housekeepingImage,
      title: "Housekeeping Team",
      category: "Facility Management",
    },
    {
      image: controlRoomImage,
      title: "Control Room Operations",
      category: "Surveillance",
    },
    {
      image: aboutImage,
      title: "Client Partnerships",
      category: "Corporate Relations",
    },
  ];

  const clientLogos = [
    "Manufacturing Industries",
    "Educational Institutions",
    "Corporate Offices",
    "Residential Societies",
    "Government Departments",
    "Healthcare Facilities",
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Work in Action
            </h1>
            <p className="text-xl opacity-90 leading-relaxed">
              See how we deliver professional security and facility management services across Odisha
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-4">
              Service Gallery
            </h2>
            <p className="text-lg text-center text-muted-foreground max-w-2xl mx-auto">
              Professional manpower deployment across various sectors
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {galleryImages.map((item, index) => (
              <Card
                key={index}
                className="border-none shadow-medium hover:shadow-strong transition-all duration-300 overflow-hidden group animate-scale-in"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-overlay opacity-40 group-hover:opacity-60 transition-opacity"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
                    <span className="inline-block bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold mb-2">
                      {item.category}
                    </span>
                    <h3 className="text-2xl font-bold">{item.title}</h3>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Training & Operations */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
              Our Capabilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Training Programs",
                  description: "Regular skill development and safety training for all personnel",
                },
                {
                  title: "Quality Supervision",
                  description: "Experienced supervisors ensure consistent service quality",
                },
                {
                  title: "Modern Equipment",
                  description: "Latest security and cleaning equipment for efficient operations",
                },
                {
                  title: "24×7 Support",
                  description: "Round-the-clock monitoring and emergency response system",
                },
                {
                  title: "Compliance",
                  description: "PSARA licensed and compliant with all regulatory standards",
                },
                {
                  title: "Verified Staff",
                  description: "All personnel undergo thorough background verification",
                },
              ].map((item, index) => (
                <Card key={index} className="border-none shadow-medium hover:shadow-strong transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-semibold text-primary mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client Sectors */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
              Trusted by Leading Organizations
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              We serve diverse sectors across Odisha with dedication and professionalism
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {clientLogos.map((client, index) => (
                <Card key={index} className="border-none shadow-medium hover:shadow-strong transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-8 flex items-center justify-center">
                    <p className="text-lg font-semibold text-primary text-center">{client}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="mt-12 text-muted-foreground italic">
              * Client confidentiality maintained. Logos displayed upon permission only.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Want to See Our Services in Action?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Schedule a site visit or request a demonstration of our security and facility management capabilities.
          </p>
          <a
            href="/contact"
            className="inline-block bg-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent/90 transition-all duration-200 shadow-medium hover:shadow-strong"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
