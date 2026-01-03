"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  })

  const phoneNumber = "+919876543210"
  const email = "hello@stylehvn.com"
  const whatsappNumber = "919876543210"

  const handleWhatsApp = () => {
    const text = `Hello Stylehvn! I'd like to book an appointment.\n\nName: ${formData.name}\nService: ${formData.service}\nPreferred Date: ${formData.date}\nMessage: ${formData.message}`
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, "_blank")
  }

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
              <h1 className="text-5xl lg:text-7xl font-light tracking-tight mb-12 leading-tight">
                Book Your Experience.
                <br />
                Begin Your Journey.
              </h1>
              <p className="text-xl text-muted-foreground leading-loose font-light">
                Connect with our team to schedule your premium grooming or skin care session. We are here to help you
                redefine your style.
              </p>
            </motion.div>
          </div>
        </header>

        <ScrollReveal>
          <section className="py-24 lg:py-32 bg-background">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                <div className="lg:col-span-4 space-y-16">
                  <div className="space-y-8">
                    <h2 className="text-3xl font-light tracking-tight">Contact Information</h2>
                    <div className="space-y-8">
                      <motion.a
                        href={`tel:${phoneNumber}`}
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.3 }}
                        className="flex items-start gap-4 group cursor-pointer"
                      >
                        <Phone className="size-5 text-muted-foreground mt-1 group-hover:text-foreground transition-colors" />
                        <div>
                          <p className="font-medium text-sm uppercase tracking-wide mb-1">Call Us</p>
                          <p className="text-muted-foreground font-light group-hover:text-foreground transition-colors">
                            {phoneNumber}
                          </p>
                        </div>
                      </motion.a>
                      <motion.a
                        href={`mailto:${email}`}
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.3 }}
                        className="flex items-start gap-4 group cursor-pointer"
                      >
                        <Mail className="size-5 text-muted-foreground mt-1 group-hover:text-foreground transition-colors" />
                        <div>
                          <p className="font-medium text-sm uppercase tracking-wide mb-1">Email</p>
                          <p className="text-muted-foreground font-light group-hover:text-foreground transition-colors">
                            {email}
                          </p>
                        </div>
                      </motion.a>
                      <div className="flex items-start gap-4">
                        <MapPin className="size-5 text-muted-foreground mt-1" />
                        <div>
                          <p className="font-medium text-sm uppercase tracking-wide mb-1">Location</p>
                          <p className="text-muted-foreground font-light leading-relaxed">
                            123 Fashion Street, Style District, City 400001
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <h2 className="text-3xl font-light tracking-tight">Salon Hours</h2>
                    <div className="space-y-5">
                      <div className="flex justify-between items-center py-3 border-b border-border/50">
                        <span className="text-muted-foreground font-light">Monday - Friday</span>
                        <span className="font-light">8 AM - 9 PM</span>
                      </div>
                      <div className="flex justify-between items-center py-3 border-b border-border/50">
                        <span className="text-muted-foreground font-light">Saturday & Sunday</span>
                        <span className="font-light">7 PM - 9 PM</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-8">
                  <div className="space-y-10">
                    <h2 className="text-4xl font-light tracking-tight">Schedule an Appointment</h2>
                    <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div whileFocus={{ scale: 1.01 }} transition={{ duration: 0.2 }} className="space-y-3">
                          <label className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                            Full Name
                          </label>
                          <Input
                            placeholder="Your Name"
                            className="bg-secondary/30 border-border/50 h-14 text-base"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          />
                        </motion.div>
                        <motion.div whileFocus={{ scale: 1.01 }} transition={{ duration: 0.2 }} className="space-y-3">
                          <label className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                            Phone Number
                          </label>
                          <Input
                            placeholder="+91"
                            className="bg-secondary/30 border-border/50 h-14 text-base"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          />
                        </motion.div>
                        <div className="space-y-3">
                          <label className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                            Select Service
                          </label>
                          <Select onValueChange={(val) => setFormData({ ...formData, service: val })}>
                            <SelectTrigger className="bg-secondary/30 border-border/50 h-14 text-base">
                              <SelectValue placeholder="Choose a service" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="haircut">Precision Haircut</SelectItem>
                              <SelectItem value="grooming">Premium Grooming</SelectItem>
                              <SelectItem value="skin">Skin Care</SelectItem>
                              <SelectItem value="bridal">Bridal / Special Occasion</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <motion.div whileFocus={{ scale: 1.01 }} transition={{ duration: 0.2 }} className="space-y-3">
                          <label className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                            Preferred Date
                          </label>
                          <Input
                            type="date"
                            className="bg-secondary/30 border-border/50 h-14 text-base"
                            value={formData.date}
                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          />
                        </motion.div>
                      </div>
                      <motion.div whileFocus={{ scale: 1.01 }} transition={{ duration: 0.2 }} className="space-y-3">
                        <label className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                          Message (Optional)
                        </label>
                        <Textarea
                          placeholder="Any specific requests or questions?"
                          className="bg-secondary/30 border-border/50 min-h-[140px] text-base"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        />
                      </motion.div>
                      <div className="pt-4">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                          <Button
                            className="h-16 bg-accent hover:bg-accent/90 text-accent-foreground text-base px-12 rounded-full font-medium shadow-lg hover:shadow-xl transition-shadow"
                            onClick={handleWhatsApp}
                          >
                            <MessageCircle className="mr-2 size-5" />
                            Book via WhatsApp
                          </Button>
                        </motion.div>
                        <p className="text-sm text-muted-foreground mt-6">
                          *By clicking book, you agree to receive a WhatsApp message from our team for confirmation.
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="h-[500px] bg-muted/30 relative">
            <div className="absolute inset-0 flex items-center justify-center w-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center space-y-4 w-5xl"
              >
                <MapPin className="size-10 text-muted-foreground mx-auto" />
                <div className="space-y-6 w-full">
                  <p className="font-light text-lg">Find us in the heart of Style District</p>
                  <div className="mt-6 rounded-lg overflow-hidden shadow-lg">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.9807326805408!2d77.56732317484372!3d13.100407087226959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae19000bc8ee37%3A0x8ff356f07ad3a93a!2sStylehvn%20Unisex%20Salon!5e0!3m2!1sen!2sin!4v1767452469911!5m2!1sen!2sin"
                      width="100%"
                      height="280"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        </ScrollReveal>
      </main>

      <Footer />
    </div>
  )
}
