"use client"

import Link from "next/link"
import { useThemeStore } from "@/store/theme.store"

export default function Navbar() {
    const toggle = useThemeStore((s) => s.toggle)

    return (
        <header className="sticky top-0 z-50 bg-white dark:border-[var(--corder-color)] border-b dark:border-gray-800 shadow-sm">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold text-blue-600">
                    MyStore
                </Link>

                <nav className="flex items-center gap-4">
                    <Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-blue-600">
                        Home
                    </Link>

                    <Link href="/shop/products" className="text-gray-600 dark:text-gray-300 hover:text-blue-600">
                        Shop
                    </Link>

                    <Link href="/dashboard/products" className="text-gray-600 dark:text-gray-300 hover:text-blue-600">
                        Dashboard
                    </Link>

                    <Link href="/shop/cart" className="text-gray-600 dark:text-gray-300 hover:text-blue-600">
                        Cart
                    </Link>


                    {/* Dark mode toggle */}
                    <button
                        onClick={toggle}
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-105 transition"
                    >
                        🌙
                    </button>

                    <Link
                        href="/login"
                        className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
                    >
                        Login
                    </Link>
                </nav>
            </div>
        </header>
    )
}