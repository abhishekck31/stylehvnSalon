import Link from "next/link"
import { Instagram, Facebook, Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  const phoneNumber = "+919876543210"
  const email = "hello@stylehvn.com"
  const instagramUrl = "https://instagram.com/stylehvn_official"
  const facebookUrl = "https://facebook.com/stylehvn"

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 lg:px-12 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {/* Brand */}
          <div className="space-y-6">
            <h3 className="text-2xl font-light tracking-wider uppercase">Stylehvn</h3>
            <p className="text-muted-foreground text-sm leading-loose max-w-xs">
              Redefining style and elevating confidence through premium unisex salon experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-sm font-medium uppercase tracking-wider text-foreground">Navigate</h4>
            <nav className="flex flex-col gap-3">
              <Link
                href="/"
                className="text-muted-foreground hover:text-foreground text-sm font-light transition-colors"
              >
                Home
              </Link>
              <Link
                href="/services"
                className="text-muted-foreground hover:text-foreground text-sm font-light transition-colors"
              >
                Services
              </Link>
              <Link
                href="/about"
                className="text-muted-foreground hover:text-foreground text-sm font-light transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/gallery"
                className="text-muted-foreground hover:text-foreground text-sm font-light transition-colors"
              >
                Gallery
              </Link>
              <Link
                href="/contact"
                className="text-muted-foreground hover:text-foreground text-sm font-light transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-sm font-medium uppercase tracking-wider text-foreground">Contact</h4>
            <div className="flex flex-col gap-4">
              <a
                href={`tel:${phoneNumber}`}
                className="flex items-center gap-3 hover:text-foreground transition-colors group"
              >
                <Phone className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                <span className="text-muted-foreground text-sm font-light group-hover:text-foreground transition-colors">
                  {phoneNumber}
                </span>
              </a>
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-3 hover:text-foreground transition-colors group"
              >
                <Mail className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                <span className="text-muted-foreground text-sm font-light group-hover:text-foreground transition-colors">
                  {email}
                </span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-1 text-muted-foreground" />
                <span className="text-muted-foreground text-sm font-light leading-relaxed">
                  123 Fashion Street, Style District, City 400001
                </span>
              </div>
            </div>
          </div>

          {/* Hours & Social */}
          <div className="space-y-6">
            <h4 className="text-sm font-medium uppercase tracking-wider text-foreground">Hours</h4>
            <div className="text-muted-foreground text-sm font-light space-y-2 leading-loose">
              <p>Mon - Sat: 10:00 AM - 8:00 PM</p>
              <p>Sunday: 11:00 AM - 7:00 PM</p>
            </div>
            <div className="flex items-center gap-6 pt-4">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 text-center">
          <p className="text-muted-foreground text-xs font-light tracking-wide">
            © {new Date().getFullYear()} Stylehvn Unisex Salon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
