import { Link } from "react-router-dom";
import { Shield, Phone, Mail, MapPin, Facebook, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-accent p-2 rounded-lg">
                <Shield className="h-6 w-6 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-bold text-lg">SSMPL</h3>
                <p className="text-xs opacity-90">Solution Security Management</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Professional Security and Housekeeping solutions across Odisha. Trusted by industries, institutions, and residential complexes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "About Us", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Industries", path: "/industries" },
                { name: "Careers", path: "/careers" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all duration-200 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>Security Manpower</li>
              <li>Housekeeping Services</li>
              <li>Facility Management</li>
              <li>Supervisory Staff</li>
              <li>Event Security</li>
              <li>CCTV Monitoring</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 opacity-80 flex-shrink-0 mt-0.5" />
                <span className="text-sm opacity-80">
                  Plot No-841, Bomikhal, Rasulgarh, Front Of Nexus Esplanade Mall, Rasulgarh, Bhubaneswar - 751010
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 opacity-80 flex-shrink-0" />
                <a href="tel:+918035427037" className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all">
                  +91 8035427037
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 opacity-80 flex-shrink-0" />
                <a href="tel:+916370285246" className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all">
                  +91 6370285246
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 opacity-80 flex-shrink-0" />
                <a href="mailto:info@solutionssmpl.in" className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all">
                  info@solutionssmpl.in
                </a>
              </li>
            </ul>

            {/* Social Media */}
            <div className="mt-6">
              <h5 className="font-semibold text-sm mb-3">Follow Us</h5>
              <div className="flex space-x-3">
                <a href="#" className="p-2 bg-primary-light rounded-lg hover:bg-accent hover:text-accent-foreground transition-all" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="p-2 bg-primary-light rounded-lg hover:bg-accent hover:text-accent-foreground transition-all" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="p-2 bg-primary-light rounded-lg hover:bg-accent hover:text-accent-foreground transition-all" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-light mt-8 pt-8 text-center">
          <p className="text-sm opacity-80">
            © {currentYear} Solution Security Management Pvt. Ltd. All rights reserved.
          </p>
          <p className="text-xs opacity-60 mt-2">
            PSARA Licensed | ISO Certified | Trusted Security Partner
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
