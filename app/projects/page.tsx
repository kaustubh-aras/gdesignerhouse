import Image from 'next/image'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio - G.Designer House | Featured Architectural Projects',
  description: 'Browse our impressive portfolio of completed architectural projects including residential, commercial, and urban development designs.',
  keywords: 'architectural projects, portfolio, residential projects, commercial projects, architectural portfolio, design projects',
  openGraph: {
    title: 'Portfolio - G.Designer House',
    description: 'Explore our portfolio of stunning architectural projects',
    url: 'https://www.gdesignerhouse.com/projects',
    type: 'website',
  },
}

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Index Hyundai',
      category: 'Commercial',
      year: '2024',
      image: '/project-hero-1.jpg',
      description: 'Modern commercial complex featuring Hyundai showroom with multi-level structure and retail spaces.',
      details: 'Commercial • Automotive Showroom • State-of-the-art facilities'
    },
    {
      id: 2,
      title: 'Sindhudurg Co-Op',
      category: 'Residential',
      year: '2023',
      image: '/project-hero-2.jpg',
      description: 'Contemporary residential tower designed with elegant cream façade and ground-floor retail commercial spaces.',
      details: 'Residential • Mixed-use Development'
    },
    {
      id: 3,
      title: 'Twin Towers',
      category: 'Residential',
      year: '2023',
      image: '/project-hero-3.jpg',
      description: 'Two elegant residential towers showcasing modern architecture with warm ambient lighting and sophisticated design.',
      details: 'Residential • Premium Apartments'
    },
    {
      id: 4,
      title: 'Club House',
      category: 'Amenities',
      year: '2024',
      image: '/project-hero-4.jpg',
      description: 'Luxury residential property featuring rooftop pool, extensive landscaping, and premium architectural finishes.',
      details: 'Private Amenities'
    }
  ]

  return (
    <>
      <Navigation />
      <main className="bg-background">
        {/* Hero Section */}
        <section className="pt-32 pb-12 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-pretty leading-tight">
              Our Portfolio
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A collection of award-winning architectural projects that showcase our commitment to excellence and innovation.
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-12 md:py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {projects.map((project) => (
                <div key={project.id} className="group">
                  <div className="relative overflow-hidden rounded-lg h-64 sm:h-80 md:h-96 mb-4 md:mb-6 bg-gray-100 flex items-center justify-center">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end p-6">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="inline-block bg-accent text-background px-4 py-2 rounded text-sm font-medium">
                          {project.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{project.details}</p>
                    <p className="text-foreground mb-4">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-6 bg-secondary border-t border-border">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              {[
                { number: '50+', label: 'Projects Completed' },
                { number: '20+', label: 'Years Experience' },
                { number: '100+', label: 'Happy Clients' },
                { number: '1M+', label: 'Sq Ft Designed' }
              ].map((stat, index) => (
                <div key={index}>
                  <p className="text-4xl md:text-5xl font-bold text-accent mb-2">{stat.number}</p>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
