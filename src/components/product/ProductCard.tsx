"use client"
import { useRouter } from "next/navigation"
import { Product } from "@/fake-db/types/product"
import AddToCart from "./addToCart"

interface Props {
    product: Product
}

export default function ProductCard({ product }: Props) {
    const router = useRouter()

    return (
        <div onClick={() => router.push(`/shop/products/${product.id}`)} className="bg-white dark:bg-[var(--bg-socendary)] border border-gray-200 dark:border-[var(--corder-color)] rounded-xl  shadow hover:shadow-lg p-4 flex flex-col transition">
            {/* Image */}
            <div className="h-40 flex items-center justify-center mb-4">
                <img src={product.image} className="max-h-full object-contain" />
            </div>
            {/* Title */}
            <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-700 line-clamp-1">
                {product.title}
            </h2>

            {/* Price */}
            <p className="mt-2 text-xl font-bold text-blue-600">
                ${product.price}
            </p>

            {/* Button */}
            <AddToCart product={product} />


        </div>
    )
}