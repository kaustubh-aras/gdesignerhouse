import Image from "next/image";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import HeroCarousel from "@/components/hero-carousel2";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio - G Designer House | Featured Architectural Projects",
  description:
    "Browse our impressive portfolio of completed architectural projects including residential, commercial, and urban development designs.",
  keywords:
    "architectural projects, portfolio, residential projects, commercial projects, architectural portfolio, design projects",
  openGraph: {
    title: "Portfolio - G Designer House",
    description: "Explore our portfolio of stunning architectural projects",
    url: "https://www.gdesignerhouse.com/portfolio",
    type: "website",
  },
};

const PROJECTS = [
  {
    id: 1,
    title: "Index Hyundai",
    category: "Commercial",
    year: "2026",
    image: "/project-hero-1.jpg",
    description:
      "Modern commercial complex featuring Hyundai showroom with multi-level structure and retail spaces.",
    details: "Automotive Showroom · State-of-the-art Facilities",
  },
  {
    id: 2,
    title: "Sindhudurg Co-Op",
    category: "Residential",
    year: "2023",
    image: "/project-hero-2.jpg",
    description:
      "Contemporary residential tower designed with elegant cream façade and ground-floor retail commercial spaces.",
    details: "Mixed-use Development · Ground-floor Retail",
  },
  {
    id: 3,
    title: "Twin Towers",
    category: "Residential",
    year: "2023",
    image: "/project-hero-3.jpg",
    description:
      "Two elegant residential towers showcasing modern architecture with warm ambient lighting and sophisticated design.",
    details: "Premium Apartments · Ambient Lighting Design",
  },
  {
    id: 4,
    title: "Club House",
    category: "Amenities",
    year: "2026",
    image: "/project-hero-4.jpg",
    description:
      "Luxury residential property featuring rooftop pool, extensive landscaping, and premium architectural finishes.",
    details: "Rooftop Pool · Recreational Spaces",
  },
  {
    id: 5,
    title: "Raj Anant",
    category: "Residential",
    year: "2026",
    image: "/raj_anant_building_1.jpg",
    description:
      "Premium residential development offering refined living spaces with meticulous attention to architectural detail and luxury finishes.",
    details: "Luxury Development · Curated Finishes",
  },
];

const STATS = [
  { number: "50+", label: "Projects Completed" },
  { number: "20+", label: "Years Experience" },
  { number: "100+", label: "Happy Clients" },
  { number: "1M+", label: "Sq Ft Designed" },
];

export default function Projects() {
  const [featured, ...rest] = PROJECTS;

  return (
    <>
      <Navigation />

      {/*
        Outer wrapper:
        - overflow-x-hidden  → prevents horizontal scroll on every breakpoint
        - w-full             → never exceeds viewport width
      */}
      <main className="bg-background w-full overflow-x-hidden">

        <HeroCarousel
          title="Our Portfolio"
          subtitle="A collection of award-winning architectural projects that showcase our commitment to excellence and innovation."
        />

        {/* ══════════════════════════════════════════
            SECTION INTRO
            Responsive: stacked on mobile, side-by-side from sm
        ════════════════════════════════════════════ */}
        <section className="w-full px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 lg:pt-16 pb-8 sm:pb-10">
          <div className="max-w-7xl mx-auto">

            {/* ruled divider label */}
            <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-10">
              <span className="block h-px flex-1 bg-border" />
              <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-muted-foreground whitespace-nowrap">
                Selected Works
              </span>
              <span className="block h-px flex-1 bg-border" />
            </div>

            {/* heading + blurb */}
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
              <div className="shrink-0">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-none tracking-tight">
                  <span className="text-red-600">{PROJECTS.length}</span>{" "}
                  Projects
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground max-w-xs leading-relaxed border-l-2 border-red-600 pl-3 sm:pl-4">
                Each project reflects our dedication to precision, context, and
                timeless design across commercial and residential typologies.
              </p>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            FEATURED PROJECT
            Height scales smoothly: 240px → 420px → 560px
        ════════════════════════════════════════════ */}
        <section className="w-full px-4 sm:px-6 lg:px-8 pb-6 sm:pb-8 lg:pb-10">
          <div className="max-w-7xl mx-auto">
            <div
              className="
                group relative overflow-hidden rounded-xl sm:rounded-2xl
                bg-gray-900 shadow-xl sm:shadow-2xl
                h-[240px] xs:h-[280px] sm:h-[380px] md:h-[460px] lg:h-[560px]
              "
            >
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 90vw, 1280px"
                className="object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
              />

              {/* gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

              {/* red top accent */}
              <div className="absolute top-0 left-0 right-0 h-[3px] sm:h-1 bg-red-600" />

              {/* top-left badges */}
              <div className="absolute top-3 sm:top-5 left-3 sm:left-6 flex items-center gap-2 sm:gap-3">
                <span className="bg-red-600 text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-widest px-2 sm:px-3 py-[3px] sm:py-1 rounded-sm">
                  Featured
                </span>
                <span className="bg-black/40 backdrop-blur-sm text-white/80 text-[9px] sm:text-[10px] font-mono tracking-widest px-2 sm:px-3 py-[3px] sm:py-1 rounded-sm border border-white/10">
                  {featured.category}
                </span>
              </div>

              {/* year top-right */}
              <span className="absolute top-3 sm:top-5 right-3 sm:right-6 text-white/50 text-[10px] sm:text-xs font-mono tracking-widest">
                {featured.year}
              </span>

              {/* bottom content — padding grows with screen */}
              <div className="absolute bottom-0 left-0 right-0 p-4 xs:p-5 sm:p-8 md:p-10">
                <h3 className="text-white text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold leading-none mb-2 sm:mb-3 tracking-tight">
                  {featured.title}
                </h3>
                {/* description hidden on very small screens to avoid clutter */}
                <p className="text-white/65 text-xs sm:text-sm max-w-lg leading-relaxed hidden xs:block mb-2 sm:mb-3">
                  {featured.description}
                </p>
                <p className="text-red-400 text-[9px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em]">
                  {featured.details}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            PROJECTS GRID
            1 col on mobile → 2 col from sm
        ════════════════════════════════════════════ */}
        <section className="w-full px-4 sm:px-6 lg:px-8 pb-14 sm:pb-16 lg:pb-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-10 sm:gap-x-6 sm:gap-y-12 md:gap-x-8 md:gap-y-14">
              {rest.map((project, index) => (
                <div key={project.id} className="group flex flex-col">

                  {/* ── Image ── */}
                  <div
                    className="
                      relative overflow-hidden rounded-lg sm:rounded-xl
                      bg-gray-100 shadow-md
                      aspect-[4/3] sm:aspect-[16/10]
                    "
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 640px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />

                    {/* hover scrim */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300" />

                    {/* red reveal bar */}
                    <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                    {/* year badge */}
                    <span className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 text-[9px] sm:text-[10px] text-white/90 font-mono tracking-widest bg-black/40 backdrop-blur-sm px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-sm border border-white/10">
                      {project.year}
                    </span>

                    {/* category — slides in on hover */}
                    <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 translate-y-1 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <span className="bg-red-600 text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-widest px-2 sm:px-3 py-0.5 sm:py-1 rounded-sm">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* ── Text ── */}
                  <div className="pt-4 sm:pt-5 flex-1 flex flex-col border-t border-border">

                    {/* index + title */}
                    <div className="flex items-baseline gap-2 sm:gap-3 mb-1.5 sm:mb-2">
                      <span className="text-red-600 text-[11px] sm:text-xs font-mono font-bold tabular-nums shrink-0">
                        {String(index + 2).padStart(2, "0")}
                      </span>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold leading-snug group-hover:text-red-600 transition-colors duration-200">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-muted-foreground mb-2.5 sm:mb-3">
                      {project.details}
                    </p>

                    <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            STATS BAND
            2 col on mobile → 4 col from md
        ════════════════════════════════════════════ */}
        <section className="relative w-full py-12 sm:py-14 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-neutral-950">
          {/* red top line */}
          <div className="absolute top-0 left-0 right-0 h-[3px] sm:h-1 bg-red-600" />

          <div className="max-w-7xl mx-auto">
            <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] sm:tracking-[0.3em] text-red-500 text-center mb-10 sm:mb-12">
              By the Numbers
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 sm:gap-y-10 gap-x-4 sm:gap-x-6 text-center">
              {STATS.map((stat, i) => (
                <div key={i} className="group/stat flex flex-col items-center gap-2">
                  <p className="text-4xl xs:text-5xl md:text-6xl font-extrabold text-white tabular-nums group-hover/stat:text-red-500 transition-colors duration-300">
                    {stat.number}
                  </p>
                  <span className="block w-5 sm:w-6 h-px bg-red-600 mx-auto" />
                  <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/40">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* red bottom line */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-red-600/30" />
        </section>

      </main>
      <Footer />
    </>
  );
}