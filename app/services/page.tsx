import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Check } from "lucide-react";

export const metadata = {
  title: "Our Services - G Designer House | Architectural Design Services",
  description:
    "Explore our comprehensive architectural services including residential architecture, commercial planning, urban development, interior design, and renovation services.",
  keywords:
    "architectural services, design services, residential architecture, commercial planning, interior design, urban development, renovation",
  openGraph: {
    title: "Our Services - G Designer House",
    description:
      "Comprehensive architectural and planning services for residential and commercial projects",
    url: "https://www.gdesignerhouse.com/services",
    type: "website",
  },
};

export default function Services() {
  const services = [
    {
      title: "Residential Architecture + Commercial Planning",
      description:
        "Innovative residential and commercial architectural solutions focused on functionality, aesthetics, and seamless project execution from concept to completion.",
      features: [
        "Custom residential design",
        "Commercial space planning",
        "3D visualization & modeling",
        "Space optimization",
        "Sustainable design solutions",
      ],
    },
    {
      title: "Liaisoninig",
      description:
        "Our Liaisoning services simplify approvals, documentation, and coordination with local authorities to ensure smooth and compliant project execution.",
      features: [
        "Government approvals",
        "Authority coordination",
        "Documentation management",
        "Legal compliance support",
        "Approval process assistance",
      ],
    },
    {
      title: "Urban Development",
      description:
        "Large-scale planning and design for sustainable, community-focused urban spaces.",
      features: [
        "Master planning",
        "Zoning consultation",
        "Environmental impact",
        "Public spaces",
        "Infrastructure planning",
      ],
    },
    {
      title: "Consultation Services",
      description:
        "Expert guidance for your architectural projects at every stage of development.",
      features: [
        "Design consultation",
        "Feasibility studies",
        "Regulatory guidance",
        "Technical advice",
        "Project planning",
      ],
    },
  ];

  return (
    <>
      <Navigation />
      <main className="bg-background">
        {/* Hero Section */}
        <section className="pt-24 md:pt-32 pb-12 px-6 bg-secondary">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-pretty leading-tight">
              Comprehensive Services
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From concept to completion, we provide end-to-end architectural
              and liaisoning solutions tailored to your specific needs.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-12 md:py-20 px-6 border-t border-border">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="border border-border rounded-lg p-6 md:p-8 hover:border-foreground transition-colors group"
                >
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-3">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3">
                        <Check
                          size={20}
                          className="text-accent flex-shrink-0 mt-0.5"
                        />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Processes Section */}
        <section className="py-12 md:py-20 px-6 bg-secondary">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 md:mb-16 text-center">
              Our Processes
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
              {/* Designing Section */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">
                  Designing
                </h3>
                <div className="space-y-6">
                  {[
                    {
                      stage: "Stage 1",
                      title: "Briefing & Site Analysis",
                      description:
                        "Comprehensive understanding of project requirements, site conditions, client vision, and regulatory constraints.",
                    },
                    {
                      stage: "Stage 2",
                      title: "Concept Design",
                      description:
                        "Initial design concepts and ideas presented through sketches, 3D models, and presentations.",
                    },
                    {
                      stage: "Stage 3",
                      title: "Design Development",
                      description:
                        "Refinement of approved concepts with detailed design development, material selections, and technical solutions.",
                    },
                    {
                      stage: "Stage 4",
                      title: "Working Drawings / Construction Documents",
                      description:
                        "Complete construction documentation including detailed drawings, specifications, and cost estimates ready for contractor bidding.",
                    },
                    {
                      stage: "Stage 5",
                      title: "Project Management / Site Supervision",
                      description:
                        "Regular site inspections, quality control, and coordination between design intent and actual construction.",
                    },
                    {
                      stage: "Stage 6",
                      title: "Interior Execution (if applicable)",
                      description:
                        "Oversight and coordination of interior design elements, finishes, and installations throughout the project.",
                    },
                    {
                      stage: "Stage 7",
                      title: "Handover",
                      description:
                        "Final inspection, documentation, client orientation, and project completion with all warranties and manuals.",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex gap-6 pb-6 border-b border-border last:border-b-0"
                    >
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-14 w-14 rounded-lg bg-primary text-primary-foreground font-bold text-sm">
                          {item.stage.split(" ")[1]}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold mb-2 text-foreground">
                          {item.title}
                        </h4>
                        <p className="text-muted-foreground text-sm md:text-base">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Liaisoning Section */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">
                  Liaisoning
                </h3>
                <div className="space-y-6">
                  {[
                    {
                      stage: "Stage 1",
                      title: "Pre-Approval Stage",
                      description:
                        "Liaison with municipal authorities, obtaining necessary approvals, and ensuring compliance with building regulations and zoning requirements.",
                    },
                    {
                      stage: "Stage 2",
                      title: "Proposal Submission",
                      description:
                        "Submission of design proposals to relevant authorities and addressing feedback for approval.",
                    },
                    {
                      stage: "Stage 3",
                      title: "During Construction",
                      description:
                        "Continuous coordination with contractors, authorities, and stakeholders to ensure project execution aligns with approved plans and regulations.",
                    },
                    {
                      stage: "Stage 4",
                      title: "Post-Construction",
                      description:
                        "Final inspections, obtaining completion certificates, and ensuring all required documentation is submitted to authorities.",
                    },
                    {
                      stage: "Stage 5",
                      title: "Specialized Liaisoning",
                      description:
                        "Expert handling of area-specific requirements including heritage clearances, environmental approvals, and special regulatory needs.",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex gap-6 pb-6 border-b border-border last:border-b-0"
                    >
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-14 w-14 rounded-lg bg-primary text-primary-foreground font-bold text-sm">
                          {item.stage.split(" ")[1]}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold mb-2 text-foreground">
                          {item.title}
                        </h4>
                        <p className="text-muted-foreground text-sm md:text-base">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
