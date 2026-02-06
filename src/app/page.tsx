"use client"

import Link from "next/link"
import CategoryCard from "@/components/category/categoryCard"
import { useCategoriesStore } from "@/store/categories.store"

export default function HomePage() {
  const categories = useCategoriesStore((state) => state.categories)

  return (
    <main className="space-y-16">
      <section className="rounded-3xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-10 md:p-16 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Welcome to Our Store
        </h1>

        <p className="opacity-90 mb-6">
          Discover amazing products, great prices, and fast delivery
        </p>

        <Link
          href="/shop/products"
          className="inline-block bg-white text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
        >
          Start Shopping
        </Link>
      </section>

      {/* CATEGORIES */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Shop by Category</h2>

          <Link
            href="/shop"
            className="text-sm text-indigo-500 hover:underline"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="transform hover:-translate-y-1 transition"
            >
              <CategoryCard
                name={cat.name}
                section={cat.section}
              />
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="grid md:grid-cols-3 gap-6 text-center">
        <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow">
          🚚
          <p className="font-semibold mt-2">Fast Delivery</p>
        </div>

        <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow">
          💳
          <p className="font-semibold mt-2">Secure Payment</p>
        </div>

        <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow">
          ⭐
          <p className="font-semibold mt-2">Top Quality</p>
        </div>
      </section>
    </main>
  )
}