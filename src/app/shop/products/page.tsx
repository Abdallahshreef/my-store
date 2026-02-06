"use client"
import ProductGrid from "@/components/product/productGrid"
import { products } from "@/fake-db/data/products"
export default function ProductsPage() {
    const pgProducts = products

    return (
        <div className="p-6">
            <ProductGrid products={products} />
        </div>
    )
}