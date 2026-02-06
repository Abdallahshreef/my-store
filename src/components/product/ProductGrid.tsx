"use client"

import { useState } from "react"
import ProductCard from "./ProductCard"
import { Product } from "@/fake-db/types/product"

interface Props {
    products: Product[]
}

export default function ProductGrid({ products }: Props) {
    const [sort, setSort] = useState("name")

    const sortedProducts = [...products].sort((a, b) => {
        if (sort === "name") return a.title.localeCompare(b.title)
        if (sort === "price-low") return a.price - b.price
        if (sort === "price-high") return b.price - a.price
        return 0
    })

    return (
        <div className="space-y-6">

            {/* Sort */}
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Products</h2>

                <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className="border dark:border-gray-700 bg-transparent p-2 rounded"
                >
                    <option value="name">Name</option>
                    <option value="price-low">Price: Low → High</option>
                    <option value="price-high">Price: High → Low</option>
                </select>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {sortedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}