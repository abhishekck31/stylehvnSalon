"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/scroll-reveal"
import { ShieldCheck, Users, Target, Award, Sparkles, Heart } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

export default function AboutPage() {
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
              className="max-w-5xl space-y-10"
            >
              <h1>
                Philosophy of Excellence.
                <br />
                Passion for Style.
              </h1>
              <p className="text-body-lg text-muted-foreground">
                Stylehvn was born from a simple vision: to create a premium, gender-neutral space where modern grooming
                and high-end aesthetics meet.
              </p>
            </motion.div>
          </div>
        </header>

        <ScrollReveal>
          <section className="py-24 lg:py-32 bg-background">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-24 items-center">
                <div className="space-y-10 order-2 lg:order-1">
                  <h2>Redefining the Salon Experience</h2>
                  <div className="space-y-8 text-muted-foreground text-body-lg">
                    <p>
                      Since our inception, Stylehvn has been dedicated to providing a sanctuary for those who value both
                      style and substance. We believe that grooming is an essential part of self-care, and it should be
                      experienced in an environment that inspires confidence.
                    </p>
                    <p>
                      Our team of master stylists and skin specialists are chosen not just for their technical prowess,
                      but for their commitment to our philosophy of personalized care. Every client who walks through
                      our doors is treated to a tailored journey that respects their individual identity and style
                      goals.
                    </p>
                  </div>
                </div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                  className="relative aspect-[4/5] overflow-hidden bg-muted order-1 lg:order-2"
                >
                  <Image src="/salon-atmosphere.png" alt="Stylehvn Salon Atmosphere" fill className="object-cover" />
                </motion.div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="py-24 lg:py-32 bg-secondary/30">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="max-w-3xl mb-20">
                <h2 className="mb-6">Our Core Values</h2>
                <p className="text-body-lg text-muted-foreground">The pillars that define the Stylehvn experience.</p>
              </div>

              <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16" staggerDelay={0.1}>
                {[
                  {
                    title: "Inclusive Luxury",
                    description: "A premium experience designed for everyone, regardless of gender or background.",
                    icon: Users,
                  },
                  {
                    title: "Technical Mastery",
                    description: "Continuous education and training to stay at the forefront of global trends.",
                    icon: Target,
                  },
                  {
                    title: "Uncompromising Hygiene",
                    description: "Maintaining the highest medical-grade sterilization standards in the industry.",
                    icon: ShieldCheck,
                  },
                  {
                    title: "Premium Products",
                    description: "We use only the world's finest, dermatologist-approved beauty brands.",
                    icon: Sparkles,
                  },
                  {
                    title: "Exceptional Service",
                    description: "Going above and beyond to ensure every visit is memorable and relaxing.",
                    icon: Heart,
                  },
                  {
                    title: "Modern Aesthetics",
                    description: "A focus on contemporary styles that enhance your natural features.",
                    icon: Award,
                  },
                ].map((value, idx) => (
                  <StaggerItem key={idx}>
                    <motion.div
                      whileHover={{ y: -8 }}
                      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                      className="space-y-6"
                    >
                      <value.icon className="size-8 text-muted-foreground" />
                      <h3 className="text-2xl">{value.title}</h3>
                      <p className="text-muted-foreground leading-loose text-lg">{value.description}</p>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </section>
        </ScrollReveal>
      </main>

      <Footer />
    </div>
  )
}
