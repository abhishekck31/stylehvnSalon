"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/scroll-reveal"
import { Button } from "@/components/ui/button"
import { Scissors, UserCheck, Sparkles, Heart } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

const serviceCategories = [
  {
    id: "hair-design",
    name: "Hair Design & Styling",
    icon: Scissors,
    services: [
      { name: "Haircut" },
      { name: "Hairstyling" },
      { name: "Blowdry" },
      { name: "Shampoo & Conditioning" },
      { name: "Children's Cuts" },
    ],
  },
  {
    id: "hair-color",
    name: "Color & Chemical",
    icon: Sparkles,
    services: [
      { name: "Hair Colouring" },
      { name: "Balayage" },
      { name: "Hair Highlighting" },
      { name: "Hair Straightening" },
      { name: "Keratin Treatments" },
      { name: "Ombre Hair Colour" },
    ],
  },
  {
    id: "treatments",
    name: "Specialized Care",
    icon: UserCheck,
    services: [
      { name: "Hair Treatments" },
      { name: "Curly Hair" },
    ],
  },
  {
    id: "other",
    name: "Grooming & Special Occasions",
    icon: Heart,
    services: [
      { name: "Body Waxing" },
      { name: "Shaving" },
      { name: "Bridal Services" },
    ],
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow pt-20">
        <header className="bg-background py-20 lg:py-24">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="max-w-4xl space-y-8"
            >
              <h1>Our Services</h1>
              <p className="text-body-lg text-muted-foreground">
                Curated luxury treatments for hair, skin, and grooming. Experience the art of precision and the science
                of beauty at Stylehvn.
              </p>
            </motion.div>
          </div>
        </header>

        <section className="py-16 lg:py-20 bg-background">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="space-y-16">
              {serviceCategories.map((category, catIdx) => (
                <ScrollReveal key={category.id} delay={catIdx * 0.1}>
                  <div className="space-y-12">
                    <div className="flex items-center gap-6">
                      <category.icon className="size-8 text-muted-foreground" />
                      <h2 className="text-4xl">{category.name}</h2>
                    </div>

                    <StaggerContainer className="space-y-10" staggerDelay={0.08}>
                      {category.services.map((service, sIdx) => (
                        <StaggerItem key={sIdx}>
                          <motion.div
                            whileHover={{ x: 10 }}
                            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                            className="flex items-start justify-between group py-6 border-b border-border/50 last:border-0 cursor-pointer"
                          >
                            <div className="space-y-3 flex-1">
                              <h3 className="text-2xl group-hover:text-foreground transition-colors">{service.name}</h3>
                            </div>
                          </motion.div>
                        </StaggerItem>
                      ))}
                    </StaggerContainer>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <ScrollReveal>
          <section className="py-20 lg:py-24 bg-background">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="max-w-5xl mx-auto text-center space-y-10">
                <div className="space-y-6">
                  <h2>Need a Personalized Experience?</h2>
                  <p className="text-body-lg text-muted-foreground">
                    We offer bespoke packages tailored to your specific needs. Book a free consultation with our master
                    stylists to discuss your vision.
                  </p>
                </div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    asChild
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-12 h-14 font-medium shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <Link href="/contact">Book Free Consultation</Link>
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
