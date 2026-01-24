"use client"

import { useEffect, useState } from "react"

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [dark, setDark] = useState(false)

    useEffect(() => {
        const isDark = localStorage.getItem("theme") === "dark"
        setDark(isDark)
        document.documentElement.classList.toggle("dark", isDark)
    }, [])

    const toggleTheme = () => {
        const newTheme = !dark
        setDark(newTheme)
        document.documentElement.classList.toggle("dark", newTheme)
        localStorage.setItem("theme", newTheme ? "dark" : "light")
    }

    return (
        <div>
            <button
                onClick={toggleTheme}
                className="fixed bottom-5 right-5 bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded"
            >
                {dark ? "☀️ Light" : "🌙 Dark"}
            </button>

            {children}
        </div>
    )
}