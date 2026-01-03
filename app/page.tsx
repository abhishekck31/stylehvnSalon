"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/scroll-reveal"
import { Button } from "@/components/ui/button"
import { ArrowRight, Scissors, Sparkles, UserCheck } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  const whatsappNumber = "919876543210" // Replace with actual number
  const phoneNumber = "tel:+919876543210"
  const instagramUrl = "https://instagram.com/stylehvn_official"

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-background py-28 lg:py-36">
          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="max-w-5xl space-y-10">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
                className="text-foreground"
              >
                Unmistakably You.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                className="text-body-lg text-muted-foreground max-w-3xl"
              >
                Confidence begins with precision—crafted by experts who understand nuance.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    asChild
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-12 h-14 text-base font-medium shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <Link href="/contact">Book Now</Link>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Preview Section */}
        <ScrollReveal>
          <section className="py-24 lg:py-32 bg-background">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-24 items-center">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                  className="relative aspect-[4/5] overflow-hidden bg-muted"
                >
                  <Image src="/luxury-salon-interior.png" alt="Stylehvn Salon Interior" fill className="object-cover" />
                </motion.div>
                <div className="space-y-10">
                  <div className="space-y-6">
                    <h2>Crafting Beauty Through Precision</h2>
                    <p className="text-body-lg text-muted-foreground">
                      Stylehvn isn't just a salon; it's a sanctuary for self-expression. Founded on the principles of
                      modern luxury and inclusive style, we provide a space where gender-neutral grooming meets
                      world-class expertise.
                    </p>
                  </div>
                  <div className="space-y-8 pt-6">
                    <div className="space-y-2">
                      <h4 className="font-medium text-foreground">Clean & Sterile</h4>
                      <p className="text-muted-foreground">Highest hygiene standards in every service.</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium text-foreground">Expert Stylists</h4>
                      <p className="text-muted-foreground">Masters of their craft with years of experience.</p>
                    </div>
                  </div>
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors group"
                  >
                    Learn Our Story <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Services Section */}
        <ScrollReveal>
          <section className="py-24 lg:py-32 bg-secondary/30">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="max-w-3xl mb-20">
                <h2 className="mb-6">Signature Services</h2>
                <p className="text-body-lg text-muted-foreground">
                  Explore our curated range of premium services designed for both men and women.
                </p>
              </div>

              <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-20" staggerDelay={0.15}>
                {[
                  {
                    title: "Precision Haircut",
                    description: "Modern cuts tailored to your unique style and facial features.",
                    icon: Scissors,
                  },
                  {
                    title: "Advanced Skin Care",
                    description: "Dermatologist-approved treatments for a radiant, healthy glow.",
                    icon: Sparkles,
                  },
                  {
                    title: "Grooming Rituals",
                    description: "Traditional techniques meeting modern luxury for the modern man.",
                    icon: UserCheck,
                  },
                ].map((service, idx) => (
                  <StaggerItem key={idx}>
                    <motion.div
                      whileHover={{ y: -8 }}
                      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                      className="space-y-6 cursor-pointer"
                    >
                      <service.icon className="size-8 text-muted-foreground" />
                      <h3 className="text-2xl">{service.title}</h3>
                      <p className="text-muted-foreground leading-loose">{service.description}</p>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              <div className="mt-20">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors group"
                >
                  View All Services <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Testimonials Section */}
        <ScrollReveal>
          <section className="py-24 lg:py-32 bg-background">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="max-w-5xl mx-auto">
                <div className="mb-20">
                  <h2 className="mb-6">Client Experiences</h2>
                  <p className="text-body-lg text-muted-foreground">
                    What our community says about their time at Stylehvn.
                  </p>
                </div>

                <StaggerContainer className="space-y-20" staggerDelay={0.2}>
                  {[
                    {
                      name: "Ananya Sharma",
                      quote:
                        "The most professional salon experience I've ever had. The attention to detail is unmatched, and the atmosphere is truly luxurious.",
                    },
                    {
                      name: "Rahul Verma",
                      quote:
                        "Stylehvn redefined my grooming routine. Their stylists really understand modern male grooming without the generic barbershop feel.",
                    },
                  ].map((testimonial, idx) => (
                    <StaggerItem key={idx}>
                      <div className="space-y-8 max-w-4xl">
                        <p className="text-3xl lg:text-4xl text-foreground leading-relaxed">"{testimonial.quote}"</p>
                        <div className="flex items-center gap-6">
                          <div className="h-px w-16 bg-border" />
                          <div className="space-y-1">
                            <p className="font-medium text-lg">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">Verified Client</p>
                          </div>
                        </div>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Instagram Section */}
        <ScrollReveal>
          <section className="py-24 lg:py-32 bg-secondary/30">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
                <div className="space-y-4">
                  <h2>@stylehvn_official</h2>
                  <p className="text-body-lg text-muted-foreground">
                    Follow our journey and get inspired on Instagram.
                  </p>
                </div>
                <Link
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors group"
                >
                  Follow Us <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6" staggerDelay={0.1}>
                {[1, 2, 3, 4].map((i) => (
                  <StaggerItem key={i}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                      className="aspect-square relative overflow-hidden bg-muted cursor-pointer"
                    >
                      <Image
                        src={`/salon-fashion-instagram-post-.jpg?height=400&width=400&query=salon+fashion+instagram+post+${i}`}
                        alt={`Instagram Post ${i}`}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </section>
        </ScrollReveal>

        {/* Final CTA Section */}
        <ScrollReveal>
          <section className="py-32 lg:py-40 bg-background">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="max-w-5xl mx-auto text-center space-y-10">
                <h2 className="leading-tight">Ready to Elevate Your Style Experience?</h2>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    asChild
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-12 h-14 font-medium shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <Link href="/contact">Book Your Session Now</Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </section>
        </ScrollReveal>
      </main>

      <Footer />
    </div>
  )
}
