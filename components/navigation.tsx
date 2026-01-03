"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { motion } from "framer-motion"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false)
  const pathname = usePathname()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <header className="fixed top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" onClick={scrollToTop} className="flex items-center gap-2 md:gap-3 group">
            <div className="relative w-12 h-12 md:w-20 md:h-20 flex-shrink-0">
              <Image
                src="/logo.png"
                alt="Stylehvn Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-sm md:text-xl font-light uppercase text-primary">
              Stylehvn Unisex Salon
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-light transition-colors hover:text-primary relative",
                  pathname === item.href ? "text-primary" : "text-muted-foreground",
                )}
              >
                {item.name}
                {pathname === item.href && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-accent"
                    transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                  />
                )}
              </Link>
            ))}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                size="sm"
                className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8"
              >
                <Link href="/contact">Book Now</Link>
              </Button>
            </motion.div>
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-10 w-10">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[85vw] sm:w-[400px] bg-background/95 backdrop-blur-xl border-l border-border/50">
                <nav className="flex flex-col h-full">
                  {/* Logo/Brand at top */}
                  <motion.div
                    className="pt-8 pb-12 border-b border-border/30 flex items-center gap-4"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="relative w-16 h-16 flex-shrink-0">
                      <Image
                        src="/logo.png"
                        alt="Stylehvn Logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-2xl font-light tracking-wider uppercase text-primary">
                      Stylehvn
                    </span>
                  </motion.div>

                  {/* Navigation Links */}
                  <div className="flex-1 flex flex-col justify-center space-y-2 py-8">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            "block py-4 px-4 text-2xl font-light transition-all duration-300 rounded-lg",
                            "hover:bg-accent/10 hover:text-primary hover:translate-x-2",
                            pathname === item.href
                              ? "text-primary bg-accent/5 translate-x-1"
                              : "text-foreground"
                          )}
                        >
                          {item.name}
                          {pathname === item.href && (
                            <motion.div
                              layoutId="activeMobileNav"
                              className="h-0.5 w-12 bg-accent mt-2"
                              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                            />
                          )}
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Button at bottom */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                    className="pb-8"
                  >
                    <Button
                      asChild
                      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-full h-14 text-base font-medium shadow-lg"
                    >
                      <Link href="/contact" onClick={() => setIsOpen(false)}>
                        Book Appointment
                      </Link>
                    </Button>
                  </motion.div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
