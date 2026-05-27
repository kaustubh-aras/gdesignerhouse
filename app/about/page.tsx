import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Metadata } from "next";
import { imageConfigDefault } from "next/dist/shared/lib/image-config";

export const metadata: Metadata = {
  title: "About Us - G Designer House | Meet Our Team",
  description:
    "Discover the story of G Designer House. Learn about our mission, core values, and the expert team behind innovative architectural designs.",
  keywords:
    "about us, architectural firm, design team, our mission, company values, architects",
  openGraph: {
    title: "About Us - G Designer House",
    description: "Learn about G Designer House - our mission, values, and team",
    url: "https://www.gdesignerhouse.com/about",
    type: "website",
  },
};
export default function About() {
  const values = [
    {
      title: "Innovation",
      description:
        "We push architectural boundaries to create forward-thinking designs that inspire.",
    },
    {
      title: "Excellence",
      description:
        "Every project reflects our commitment to exceptional quality and attention to detail.",
    },
    {
      title: "Sustainability",
      description:
        "Environmental responsibility is integrated into every architectural solution we create.",
    },
    {
      title: "Collaboration",
      description:
        "We work closely with clients and teams to ensure projects exceed expectations.",
    },
  ];

  const team = [
    {
      role: "Engineering Consultant",
      name: "Srinivas Reddy",
      bio: "20+ years of industry experience",
      // image: "/team/shekhar-limaye.jpeg",
    },
    {
      role: "Architectural Consultant",
      name: "Shekhar Limaye",
      bio: '"Ready to solve any issue"',
      image: "/shekhar-limaye.jpeg",
    },
    {
      role: "Lead Architect",
      name: "Snehal Limaye",
      bio: "Seamless project delivery",
      image: "/snehal-limaye.jpeg",
    },
  ];

  return (
    <>
      <Navigation />
      <main className="bg-background">
        {/* Hero Section */}
        <section className="pt-32 pb-12 px-6 bg-secondary">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-pretty leading-tight">
              About G Designer House
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A premier architectural firm dedicated to transforming visions
              into extraordinary spaces through innovation, expertise, and
              unwavering commitment to excellence.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-12 md:py-20 px-6 border-t border-border">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Our Mission
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  We create exceptional architectural solutions that blend
                  innovation with functionality. Every project is an opportunity
                  to design spaces that enhance lives, communities, and the
                  built environment.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our mission is to deliver architectural excellence that
                  exceeds expectations and stands the test of time.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  To be recognized as a leading architectural firm that shapes
                  the future of built environments through visionary design,
                  sustainable practices, and transformative projects.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We envision creating architecture that is not just beautiful,
                  but meaningful and impactful.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-12 md:py-20 px-6 bg-secondary">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="p-6 md:p-8 bg-background rounded-lg border border-border"
                >
                  <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-lg">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="text-center p-8 border border-border rounded-lg hover:border-foreground transition-colors"
                >
                  {member.image ? (
                    <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  ) : (
                    <div className="w-24 h-24 bg-secondary rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-muted-foreground">
                      {member.name.charAt(0)}
                    </div>
                  )}
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-accent font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">
              Why Choose G Designer House?
            </h2>
            <ul className="space-y-4 text-lg">
              {[
                "Decades of combined architectural expertise and industry knowledge",
                "Innovative design approach that balances aesthetics with functionality",
                "Commitment to sustainable and environmentally responsible design",
                "Full project management from concept through completion",
                "Strong relationships with builders, contractors, and suppliers",
                "Proven track record of client satisfaction and project success",
                "Attention to detail and quality in every aspect of our work",
                "Collaborative approach that values client input and vision",
              ].map((point, index) => (
                <li
                  key={index}
                  className="flex items-start gap-4 p-4 bg-secondary rounded-lg hover:bg-accent/10 transition-colors"
                >
                  <span className="text-accent font-bold flex-shrink-0">✓</span>
                  <span className="text-muted-foreground">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
