"use client"

import { useParams } from "next/navigation"
import { useProductsStore } from "@/store/products.store"
import ProductCard from "@/components/product/ProductCard"

export default function CategoryPage() {
    const { section } = useParams()
    const products = useProductsStore((state) =>
        state.products.filter((p) => p.category === section)
    )

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6 capitalize">{section}</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {products.map((p) => (
                    <ProductCard key={p.id} product={p} />
                ))}
            </div>
        </div>
    )
}