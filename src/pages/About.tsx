import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Award, Users, TrendingUp, Heart } from "lucide-react";
import aboutImage from "@/assets/about-partnership.jpg";

const About = () => {
  const values = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "Integrity",
      description: "Upholding honesty and ethical conduct in all our operations",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Discipline",
      description: "Punctuality, appearance, and responsibility at all times",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Customer Focus",
      description: "Exceeding client expectations through service excellence",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Teamwork",
      description: "Fostering cooperation, mutual respect, and shared purpose",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Continuous Improvement",
      description: "Constantly evolving through training and innovation",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Solution Security Management Pvt. Ltd.
            </h1>
            <p className="text-xl opacity-90 leading-relaxed">
              Your trusted partner for professional security and housekeeping solutions across Odisha
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Who We Are
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">Solution Security Management Pvt. Ltd. (SSMPL)</strong> is a Bhubaneswar-based company providing professional security and housekeeping manpower solutions across Odisha. Established with a commitment to quality, discipline, and reliability, we deliver trained and verified personnel to industrial units, corporate offices, residential societies, institutions, and government establishments.
                </p>
                <p>
                  At SSMPL, we believe that safety and hygiene are not just services but responsibilities. With a growing presence across Odisha, our strength lies in our well-trained workforce, structured supervision, and a customer-first approach.
                </p>
                <p>
                  Our team of security guards, supervisors, and housekeeping staff undergo regular training in safety awareness, soft skills, and emergency response. Each deployment is backed by efficient management and real-time support to ensure client satisfaction and operational excellence.
                </p>
              </div>
            </div>
            <div className="animate-scale-in">
              <img
                src={aboutImage}
                alt="Professional Partnership"
                className="w-full h-auto rounded-lg shadow-strong"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="border-none shadow-medium hover:shadow-strong transition-all duration-300">
              <CardContent className="p-8">
                <div className="bg-gradient-primary p-4 rounded-full w-16 h-16 flex items-center justify-center text-primary-foreground mb-6">
                  <Eye className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  "To become the most trusted and professional provider of security and facility management manpower in Odisha — known for reliability, discipline, and customer satisfaction."
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-medium hover:shadow-strong transition-all duration-300">
              <CardContent className="p-8">
                <div className="bg-gradient-primary p-4 rounded-full w-16 h-16 flex items-center justify-center text-primary-foreground mb-6">
                  <Target className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Deliver skilled and reliable manpower in security and housekeeping</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Uphold integrity, professionalism, and accountability</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Continuously train, monitor, and motivate our workforce</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Expand across Odisha with technology-backed excellence</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Build long-term partnerships through trust and transparency</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="border-none shadow-medium hover:shadow-strong transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className="bg-gradient-primary p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-primary-foreground">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* MD Message */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                Message from the Managing Director
              </h2>
              <p className="text-xl opacity-90">Mr. Indubhusan Behera</p>
            </div>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 shadow-strong">
              <CardContent className="p-8 md:p-12">
                <p className="text-lg leading-relaxed mb-6 italic">
                  "At Solution Security Management Pvt. Ltd., we started with a simple idea — to bring professionalism, discipline, and trust to the security and housekeeping industry in Odisha.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Today, we are proud to serve clients across the state with a dedicated team of trained and responsible personnel. Our goal has always been to ensure that every client feels confident in the safety, cleanliness, and efficiency of their premises.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  We continue to invest in people, process, and technology to deliver services that meet modern standards of quality and reliability.
                </p>
                <p className="text-lg leading-relaxed font-semibold">
                  We thank our clients, partners, and staff for their continuous support and trust."
                </p>
                <div className="mt-8 pt-6 border-t border-white/20">
                  <p className="font-bold text-xl">Mr. Indubhusan Behera</p>
                  <p className="opacity-90">Managing Director, SSMPL</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
