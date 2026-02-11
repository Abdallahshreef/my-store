"use client"

import Image from "next/image"
import { useCartStore } from "@/types/features/cart/cart.store"

export default function CartPage() {
    const items = useCartStore((s) => s.items)
    const removeFromCart = useCartStore((s) => s.removeFromCart)

    if (!items.length) {
        return (
            <div className="p-10 text-center text-gray-500">
                Your cart is empty 🛒
            </div>
        )
    }

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {items.map((item) => (
                    <div
                        key={item.id}
                        className="border rounded-xl p-4 shadow hover:shadow-lg transition bg-white dark:bg-gray-800"
                    >
                        {/* Image */}
                        <div className="relative w-full h-40 mb-3">
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-contain"
                            />
                        </div>

                        {/* Title */}
                        <h2 className="font-semibold line-clamp-1">{item.title}</h2>

                        {/* Price */}
                        <p className="text-blue-600 font-bold mt-1">
                            ${item.price}
                        </p>

                        {/* Quantity */}
                        <p className="text-sm text-gray-500 mt-1">
                            Qty: {item.quantity}
                        </p>

                        {/* Delete */}
                        <button
                            onClick={() => removeFromCart(item.id)}
                            className="mt-3 w-full bg-red-600 text-white py-1 rounded hover:bg-red-700"
                        >
                            Remove
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}