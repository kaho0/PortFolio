import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { poppins, raleway } from "./fonts"

export const metadata: Metadata = {
  title: "Kahon | Portfolio",
  description: "Full Stack Developer Portfolio",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${raleway.variable} font-body`}>{children}</body>
    </html>
  )
}
