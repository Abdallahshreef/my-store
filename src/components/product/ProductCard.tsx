"use client"

import { Product } from "@/fake-db/types/product"
import { useCartStore } from "@/features/cart/cart.store"

interface Props {
    product: Product
}

export default function ProductCard({ product }: Props) {
    const addToCart = useCartStore((state) => state.addToCart)

    return (
        <div className="
      group
      bg-white dark:bg-gray-800
      border border-gray-200 dark:border-gray-700
      rounded-xl p-4
      shadow-sm hover:shadow-lg
      transition
    ">
            {/* Title */}
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 line-clamp-2">
                {product.title}
            </h2>

            {/* Price */}
            <p className="mt-2 text-xl font-bold text-blue-600">
                ${product.price}
            </p>

            {/* Button */}
            <button
                onClick={() => addToCart(product)}
                className="
          mt-4 w-full
          bg-black dark:bg-blue-600
          text-white
          py-2 rounded-lg
          hover:opacity-90
          transition
        "
            >
                Add to cart
            </button>
        </div>
    )
}