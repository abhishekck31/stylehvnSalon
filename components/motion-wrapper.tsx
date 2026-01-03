"use client"

import { motion, type HTMLMotionProps } from "framer-motion"
import type { ReactNode } from "react"

interface MotionWrapperProps extends HTMLMotionProps<"div"> {
  children: ReactNode
  delay?: number
}

export const FadeIn = ({ children, delay = 0, ...props }: MotionWrapperProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{
      duration: 0.8,
      delay,
      ease: [0.21, 0.47, 0.32, 0.98], // Apple-style easing
    }}
    {...props}
  >
    {children}
  </motion.div>
)

export const StaggerContainer = ({ children, delay = 0, ...props }: MotionWrapperProps) => (
  <motion.div
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-100px" }}
    variants={{
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
          delayChildren: delay,
        },
      },
    }}
    {...props}
  >
    {children}
  </motion.div>
)

export const StaggerItem = ({ children, ...props }: MotionWrapperProps) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] } },
    }}
    {...props}
  >
    {children}
  </motion.div>
)

export const PageTransition = ({ children }: { children: ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.5, ease: "easeInOut" }}
  >
    {children}
  </motion.div>
)
