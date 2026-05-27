import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { HeroCarousel } from "@/components/hero-carousal";
import { ArrowRight } from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "G Designer House - Architects & Planners | Mumbai",
  description:
    "Premier architectural firm in Mumbai specializing in residential, commercial, and urban design. Trusted architects with 20+ years of experience.",
  alternates: {
    canonical: "https://www.gdesignerhouse.com",
  },
};

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="bg-background">
        {/* ── Hero: full-viewport carousel ── */}
        <section className="relative w-full h-screen">
          <HeroCarousel />

          {/* Overlay content sits on top of the carousel */}
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-16 px-6 pointer-events-none z-10">
            <div className="text-center max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight text-white drop-shadow-lg">
                Architectural Excellence Redefined
              </h1>
              <p className="text-base md:text-lg text-white/80 mb-8 max-w-2xl mx-auto drop-shadow">
                At G.Designer House, we craft distinctive spaces that blend
                innovation with elegance.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center pointer-events-auto">
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 px-7 py-2.5 bg-primary text-primary-foreground text-sm font-semibold rounded-lg hover:bg-primary/90 transition-colors shadow-lg"
                >
                  View Our Work <ArrowRight size={15} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-2.5 border-2 border-white text-white text-sm font-semibold rounded-lg hover:bg-white/10 transition-colors backdrop-blur-sm"
                >
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Services strip ── */}
        <section className="py-14 md:py-20 px-6 bg-secondary">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div className="max-w-2xl">
                <h2 className="text-2xl md:text-3xl font-bold mb-3">
                  Our Services
                </h2>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  From architectural design and urban planning to interior
                  solutions and project management consultancy, we deliver
                  comprehensive services tailored to your vision.
                </p>
              </div>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-7 py-2.5 bg-primary text-primary-foreground text-sm font-semibold rounded-lg hover:bg-primary/90 transition-colors shadow-lg whitespace-nowrap shrink-0"
              >
                Explore All Services <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
