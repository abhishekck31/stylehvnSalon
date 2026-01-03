"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Sparkle {
    id: number
    x: number
    y: number
}

export function CursorSparkle() {
    const [sparkles, setSparkles] = useState<Sparkle[]>([])
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        let sparkleId = 0
        let lastSparkleTime = 0
        const SPARKLE_INTERVAL = 50 // milliseconds between sparkles

        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY })

            const now = Date.now()
            if (now - lastSparkleTime > SPARKLE_INTERVAL) {
                const newSparkle: Sparkle = {
                    id: sparkleId++,
                    x: e.clientX,
                    y: e.clientY,
                }

                setSparkles((prev) => [...prev, newSparkle])
                lastSparkleTime = now

                // Remove sparkle after animation completes
                setTimeout(() => {
                    setSparkles((prev) => prev.filter((s) => s.id !== newSparkle.id))
                }, 1000)
            }
        }

        window.addEventListener("mousemove", handleMouseMove)
        return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [])

    return (
        <div className="pointer-events-none fixed inset-0 z-50">
            <AnimatePresence>
                {sparkles.map((sparkle) => (
                    <motion.div
                        key={sparkle.id}
                        initial={{
                            opacity: 1,
                            scale: 0,
                            x: sparkle.x - 8,
                            y: sparkle.y - 8,
                        }}
                        animate={{
                            opacity: 0,
                            scale: [0, 1.5, 0],
                            rotate: [0, 180, 360],
                        }}
                        exit={{ opacity: 0 }}
                        transition={{
                            duration: 0.8,
                            ease: "easeOut"
                        }}
                        className="absolute"
                    >
                        {/* Sparkle shape using SVG */}
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            {/* Main sparkle */}
                            <path
                                d="M8 0L9 7H16L9 9L10 16L8 10L6 16L7 9L0 7H7L8 0Z"
                                fill="url(#sparkle-gradient)"
                                className="drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]"
                            />
                            <defs>
                                <linearGradient id="sparkle-gradient" x1="0" y1="0" x2="16" y2="16">
                                    <stop offset="0%" stopColor="#60a5fa" />
                                    <stop offset="50%" stopColor="#3b82f6" />
                                    <stop offset="100%" stopColor="#2563eb" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    )
}
