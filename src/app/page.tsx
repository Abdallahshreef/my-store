"use client"

import CategoryCard from "@/components/category/categoryCard"
import { useCategoriesStore } from "@/store/categories.store"

export default function HomePage() {
  const categories = useCategoriesStore((state) => state.categories)

  return (
    <div className="p-6 space-y-10">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-2">Welcome to Our Store</h1>
        <p className="text-gray-500">Choose a category and start shopping</p>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <CategoryCard
            key={cat.id}
            name={cat.name}
            section={cat.section}
          />
        ))}
      </section>
    </div>
  )
}