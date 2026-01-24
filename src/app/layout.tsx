"use client"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/layout/Navbar";
import { useEffect } from "react"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    const saved = localStorage.getItem("theme")
    if (saved === "dark") {
      document.documentElement.classList.add("dark")
    }
  }, [])

  return (
    <html lang="en">
      <body className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen transition-colors">
        <ThemeProvider>
          <Navbar />
          <main className="max-w-7xl mx-auto px-6 py-6">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}


