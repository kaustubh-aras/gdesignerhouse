import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Check } from "lucide-react";
import HeroCarousel from "@/components/hero-carousel2";
import type { Metadata } from "next";

export const metadata: Metadata = {
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
  alternates: { canonical: "https://www.gdesignerhouse.com/services" },
};

const SERVICES = [
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
    title: "Liaisoning",
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

const DESIGNING_STAGES = [
  {
    stage: "1",
    title: "Briefing & Site Analysis",
    description:
      "Comprehensive understanding of project requirements, site conditions, client vision, and regulatory constraints.",
  },
  {
    stage: "2",
    title: "Concept Design",
    description:
      "Initial design concepts and ideas presented through sketches, 3D models, and presentations.",
  },
  {
    stage: "3",
    title: "Design Development",
    description:
      "Refinement of approved concepts with detailed design development, material selections, and technical solutions.",
  },
  {
    stage: "4",
    title: "Working Drawings / Construction Documents",
    description:
      "Complete construction documentation including detailed drawings, specifications, and cost estimates ready for contractor bidding.",
  },
  {
    stage: "5",
    title: "Project Management / Site Supervision",
    description:
      "Regular site inspections, quality control, and coordination between design intent and actual construction.",
  },
  {
    stage: "6",
    title: "Interior Execution (if applicable)",
    description:
      "Oversight and coordination of interior design elements, finishes, and installations throughout the project.",
  },
  {
    stage: "7",
    title: "Handover",
    description:
      "Final inspection, documentation, client orientation, and project completion with all warranties and manuals.",
  },
];

const LIAISONING_STAGES = [
  {
    stage: "1",
    title: "Pre-Approval Stage",
    description:
      "Liaison with municipal authorities, obtaining necessary approvals, and ensuring compliance with building regulations and zoning requirements.",
  },
  {
    stage: "2",
    title: "Proposal Submission",
    description:
      "Submission of design proposals to relevant authorities and addressing feedback for approval.",
  },
  {
    stage: "3",
    title: "During Construction",
    description:
      "Continuous coordination with contractors, authorities, and stakeholders to ensure project execution aligns with approved plans and regulations.",
  },
  {
    stage: "4",
    title: "Post-Construction",
    description:
      "Final inspections, obtaining completion certificates, and ensuring all required documentation is submitted to authorities.",
  },
  {
    stage: "5",
    title: "Specialized Liaisoning",
    description:
      "Expert handling of area-specific requirements including heritage clearances, environmental approvals, and special regulatory needs.",
  },
];

function StageItem({
  stage,
  title,
  description,
}: {
  stage: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-6 pb-6 border-b border-border last:border-b-0">
      <div className="shrink-0">
        <div className="flex items-center justify-center h-14 w-14 rounded-lg bg-primary text-primary-foreground font-bold text-sm">
          {stage}
        </div>
      </div>
      <div className="flex-1">
        <h4 className="text-lg font-bold mb-2 text-foreground">{title}</h4>
        <p className="text-muted-foreground text-sm md:text-base">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <>
      <Navigation />
      <main className="bg-background">
        <HeroCarousel
          title="Comprehensive Services"
          subtitle="From concept to completion, we provide end-to-end architectural and liaisoning solutions tailored to your specific needs."
        />

        {/* Services Grid */}
        <section className="py-12 md:py-20 px-6 border-t border-border">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {SERVICES.map((service, i) => (
                <div
                  key={i}
                  className="border border-border rounded-lg p-6 md:p-8 hover:border-foreground transition-colors group"
                >
                  <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 text-sm md:text-base">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, fi) => (
                      <li key={fi} className="flex items-start gap-3">
                        <Check
                          size={20}
                          className="text-accent shrink-0 mt-0.5"
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

        {/* Our Processes */}
        <section className="py-12 md:py-20 px-6 bg-secondary">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 md:mb-16 text-center">
              Our Processes
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-8">
                  Designing
                </h3>
                <div className="space-y-6">
                  {DESIGNING_STAGES.map((item) => (
                    <StageItem key={item.stage} {...item} />
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-8">
                  Liaisoning
                </h3>
                <div className="space-y-6">
                  {LIAISONING_STAGES.map((item) => (
                    <StageItem key={item.stage} {...item} />
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
