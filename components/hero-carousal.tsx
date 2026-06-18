'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useRef, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&q=85',
    title: 'Index Hyundai',
    description: 'Modern Commercial & Showroom Complex',
    category: 'Commercial',
    fit: 'cover' as const,
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=85',
    title: 'Sindhudurg Co-Op',
    description: 'Contemporary Residential Tower',
    category: 'Residential',
    fit: 'cover' as const,
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=85',
    title: 'Twin Towers',
    description: 'Elegant Residential Development',
    category: 'Residential',
    fit: 'cover' as const,
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&q=85',
    title: 'Club House',
    description: 'Luxury Amenities & Recreational Spaces',
    category: 'Amenities',
    fit: 'cover' as const,
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=85',
    title: 'Raj Anant',
    description: 'Premium Residential Development',
    category: 'Residential',
    fit: 'cover' as const,
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1920&q=85',
    title: 'City Skyline at Dusk',
    description: 'Where Architecture Meets the Horizon',
    category: 'Inspiration',
    fit: 'cover' as const,
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&q=85',
    title: 'Metropolitan Grandeur',
    description: 'Iconic Towers Shaping the Urban Canvas',
    category: 'Inspiration',
    fit: 'cover' as const,
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=85',
    title: 'Skyline at Night',
    description: 'The City Alive — Light, Form & Scale',
    category: 'Inspiration',
    fit: 'cover' as const,
  },
]

const AUTO_DELAY = 5000

export function HeroCarousel() {
  const [current, setCurrent] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, AUTO_DELAY)
  }, [])

  useEffect(() => {
    resetTimer()
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [resetTimer])

  const goTo = (index: number) => {
    setCurrent(index)
    resetTimer()
  }

  const prev = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setCurrent((p) => (p - 1 + slides.length) % slides.length)
    resetTimer()
  }

  const next = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setCurrent((p) => (p + 1) % slides.length)
    resetTimer()
  }

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">

      {slides.map((slide, index) => {
        const isActive = index === current
        return (
          <Link
            key={slide.id}
            href="/portfolio"
            className={[
              'absolute inset-0 transition-opacity duration-700 ease-in-out',
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none',
            ].join(' ')}
            tabIndex={isActive ? 0 : -1}
          >
            <div className="absolute inset-0 overflow-hidden">
              <Image
                src={slide.image}
                alt=""
                fill
                aria-hidden="true"
                className="object-cover scale-110"
                style={{ filter: 'blur(18px) brightness(0.35) saturate(1.1)' }}
                sizes="100vw"
                priority={index === 0}
              />
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover object-center"
                sizes="100vw"
                priority={index === 0}
              />
            </div>

            <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/10 to-transparent" />

            <div className="absolute bottom-24 left-6 md:left-12 z-10">
              <span className="text-[11px] tracking-[0.2em] uppercase text-white/55 font-medium">
                {slide.category}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mt-1 drop-shadow-lg">
                {slide.title}
              </h2>
              <p className="text-sm text-white/70 mt-0.5">{slide.description}</p>
            </div>
          </Link>
        )
      })}

      <div className="absolute top-0 inset-x-0 z-30 h-0.5 bg-white/10">
        <div
          key={current}
          className="h-full bg-primary"
          style={{ animation: `carousel-progress ${AUTO_DELAY}ms linear forwards` }}
        />
      </div>

      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-8 h-8 flex items-center justify-center rounded-full bg-black/30 hover:bg-black/55 backdrop-blur-sm border border-white/20 text-white transition-all duration-200 hover:scale-105 active:scale-95"
      >
        <ChevronLeft size={16} strokeWidth={2.5} />
      </button>

      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-8 h-8 flex items-center justify-center rounded-full bg-black/30 hover:bg-black/55 backdrop-blur-sm border border-white/20 text-white transition-all duration-200 hover:scale-105 active:scale-95"
      >
        <ChevronRight size={16} strokeWidth={2.5} />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-1.5">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              goTo(index)
            }}
            aria-label={`Go to slide ${index + 1}`}
            className={[
              'rounded-full transition-all duration-300 ease-in-out',
              index === current
                ? 'w-6 h-1.5 bg-white'
                : 'w-1.5 h-1.5 bg-white/40 hover:bg-white/70',
            ].join(' ')}
          />
        ))}
      </div>

      <style>{`
        @keyframes carousel-progress {
          from { transform: scaleX(0); transform-origin: left; }
          to   { transform: scaleX(1); transform-origin: left; }
        }
      `}</style>
    </div>
  )
}
