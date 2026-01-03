"use client"

import { motion, useInView, Variants } from "framer-motion"
import { useRef, ReactNode } from "react"

interface ScrollRevealProps {
    children: ReactNode
    className?: string
    delay?: number
    duration?: number
}

export function ScrollReveal({
    children,
    className = "",
    delay = 0,
    duration = 0.5
}: ScrollRevealProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration, delay }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

interface StaggerContainerProps {
    children: ReactNode
    className?: string
    staggerDelay?: number
}

export function StaggerContainer({
    children,
    className = "",
    staggerDelay = 0.1
}: StaggerContainerProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: staggerDelay
            }
        }
    }

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className={className}
        >
            {children}
        </motion.div>
    )
}

interface StaggerItemProps {
    children: ReactNode
    className?: string
}

export function StaggerItem({ children, className = "" }: StaggerItemProps) {
    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    }

    return (
        <motion.div variants={itemVariants} className={className}>
            {children}
        </motion.div>
    )
}
