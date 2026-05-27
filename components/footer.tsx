import Link from 'next/link'
import Image from 'next/image'
import { Mail, MapPin, Phone } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">
          {/* Brand */}
          <div>
            <Image
              src="/logo.png"
              alt="G Designer House"
              width={120}
              height={60}
              className="h-12 w-auto mb-4"
              style={{
                filter: 'brightness(0) saturate(100%) invert(1) sepia(1) hue-rotate(0deg) saturate(2) brightness(1.2)'
              }}
            />
            <p className="text-sm text-background/70">Architects & Planners</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">Navigation</h4>
            <ul className="space-y-2 text-xs md:text-sm">
              <li><Link href="/services" className="hover:text-accent transition-colors">Services</Link></li>
              <li><Link href="/portfolio" className="hover:text-accent transition-colors">Portfolio</Link></li>
              <li><Link href="/about" className="hover:text-accent transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">Services</h4>
            <ul className="space-y-2 text-xs md:text-sm">
              <li><a href="#" className="hover:text-accent transition-colors">Residential Design</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Commercial Planning</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Urban Development</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">Contact</h4>
            <ul className="space-y-2 md:space-y-3 text-xs md:text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 shrink-0" />
                <span>Shop Number 1&2 Narayan Smruti, Temba Hospital Road, Mandli Talav, Bhayandar (West) 401101</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span>8879454416 / 9324590880</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:contact@gdesignerhouse.com" className="hover:text-accent transition-colors">
                  contact@gdesignerhouse.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-sm text-background/70">
          <p>&copy; 2026 G Designer House. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
