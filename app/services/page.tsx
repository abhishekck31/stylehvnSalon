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
    id: "hair",
    name: "Hair Design & Styling",
    icon: Scissors,
    services: [
      { name: "Luxury Precision Haircut", price: "₹1,200+", duration: "60 mins" },
      { name: "Creative Color & Highlights", price: "₹3,500+", duration: "120 mins" },
      { name: "Keratin Smooth Treatment", price: "₹5,000+", duration: "180 mins" },
      { name: "Red Carpet Styling", price: "₹2,500+", duration: "90 mins" },
    ],
  },
  {
    id: "grooming",
    name: "Premium Grooming",
    icon: UserCheck,
    services: [
      { name: "Royal Beard Sculpt", price: "₹600+", duration: "30 mins" },
      { name: "Signature Hot Towel Shave", price: "₹800+", duration: "45 mins" },
      { name: "Scalp Therapy Massage", price: "₹1,000+", duration: "45 mins" },
      { name: "Men's Luxury Manicure", price: "₹1,200+", duration: "45 mins" },
    ],
  },
  {
    id: "skin",
    name: "Skin & Aesthetics",
    icon: Sparkles,
    services: [
      { name: "Stylehvn Glow Facial", price: "₹2,500+", duration: "60 mins" },
      { name: "Hydra-Radiance Treatment", price: "₹4,500+", duration: "90 mins" },
      { name: "Detox Deep Cleanse", price: "₹1,800+", duration: "45 mins" },
      { name: "Anti-Aging Gold Facial", price: "₹6,000+", duration: "120 mins" },
    ],
  },
  {
    id: "premium",
    name: "Bridal & Special Occasions",
    icon: Heart,
    services: [
      { name: "Bridal Styling Consultation", price: "₹1,500", duration: "60 mins" },
      { name: "Premium Bridal Makeover", price: "₹15,000+", duration: "180 mins" },
      { name: "Groom's Special Ritual", price: "₹5,500+", duration: "120 mins" },
      { name: "Stylehvn Signature Package", price: "₹8,000+", duration: "240 mins" },
    ],
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow pt-20">
        <header className="bg-background py-28 lg:py-32">
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

        <section className="py-24 lg:py-32 bg-background">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="space-y-24">
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
                              <div className="flex items-center gap-8 text-base text-muted-foreground">
                                <span>{service.duration}</span>
                                <span>Starting from {service.price}</span>
                              </div>
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
          <section className="py-28 lg:py-36 bg-background">
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
