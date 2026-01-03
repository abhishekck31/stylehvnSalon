"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { StaggerContainer, StaggerItem } from "@/components/scroll-reveal"
import { motion } from "framer-motion"
import Image from "next/image"

export default function GalleryPage() {
  const instagramUrl = "https://www.instagram.com/_stylehvn_?igsh=MWIyMzJsdWk2NW9pdQ=="
  const facebookUrl = "https://facebook.com/stylehvn"
  const pinterestUrl = "https://pinterest.com/stylehvn"

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
              <h1 className="text-5xl lg:text-7xl font-light tracking-tight">Gallery</h1>
              <p className="text-xl text-muted-foreground leading-loose font-light">
                A visual journey through Stylehvn. Explore our signature looks, premium interiors, and the artistry of
                our expert team.
              </p>
            </motion.div>
          </div>
        </header>

        <section className="py-24 lg:py-32 bg-background">
          <div className="container mx-auto px-6 lg:px-12">
            <StaggerContainer className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6" staggerDelay={0.08}>
              {[
                { src: "/SalonImages/IMG_7910.jpg", aspect: "aspect-[4/5]", alt: "Stylehvn Salon Interior 1" },
                { src: "/SalonImages/IMG_7912.jpg", aspect: "aspect-square", alt: "Stylehvn Salon Interior 2" },
                { src: "/SalonImages/IMG_7914.jpg", aspect: "aspect-[3/4]", alt: "Stylehvn Salon Interior 3" },
                { src: "/SalonImages/IMG_7915.jpg", aspect: "aspect-[4/3]", alt: "Stylehvn Salon Interior 4" },
                { src: "/SalonImages/IMG_7916.jpg", aspect: "aspect-square", alt: "Stylehvn Salon Interior 5" },
              ].map((item, idx) => (
                <StaggerItem key={idx}>
                  <motion.div
                    whileHover={{ scale: 1.03, y: -8 }}
                    transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                    className={`relative ${item.aspect} overflow-hidden bg-muted group break-inside-avoid cursor-pointer`}
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover"
                    />
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 0.1 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-accent"
                    />
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        <section className="py-28 lg:py-32 bg-background">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl lg:text-4xl font-light mb-10 tracking-tight"
            >
              Follow Our Real-Time Transformation
            </motion.h2>
            <div className="flex justify-center gap-16">
              <motion.a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="text-muted-foreground hover:text-foreground transition-colors font-light text-lg"
              >
                Instagram
              </motion.a>
              <motion.a
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="text-muted-foreground hover:text-foreground transition-colors font-light text-lg"
              >
                Facebook
              </motion.a>
              <motion.a
                href={pinterestUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="text-muted-foreground hover:text-foreground transition-colors font-light text-lg"
              >
                Pinterest
              </motion.a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
