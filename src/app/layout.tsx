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
      <body className="bg-gray-50 text-black dark:bg-[var(--bg-main)] dark:text-[var(--text-main)] min-h-screen transition-colors">
        <ThemeProvider>
          <Navbar />
          <main>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}


