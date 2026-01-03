import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { MotionProvider } from "@/components/motion-provider"
import { ScrollToTop } from "@/components/scroll-to-top"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })

// Updated metadata for Stylehvn Unisex Salon
export const metadata: Metadata = {
  title: "Stylehvn Unisex Salon - Premium Salon Experience",
  description:
    "Redefining Style. Elevating Confidence. Experience premium unisex salon services with modern luxury and exceptional care.",
  generator: "v0.app",
  keywords: ["salon", "unisex salon", "hair salon", "beauty salon", "premium salon", "stylehvn"],
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B0B0B",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <MotionProvider>
          {children}
        </MotionProvider>
        <ScrollToTop />
        <Analytics />
      </body>
    </html>
  )
}
