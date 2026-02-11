"use client"

import { useParams } from "next/navigation"
import { products } from "@/fake-db/data/products"
import { useCartStore } from "@/types/features/cart/cart.store"

export default function ProductPage() {
    const params = useParams()
    const prod = products.find((p) => p.id === params.id)
    const addToCart = useCartStore((state) => state.addToCart)

    if (!prod) return <p className="text-center mt-10 text-xl">Product not found</p>

    return (
        <div className="max-w-4xl mx-auto p-6 flex flex-col md:flex-row gap-8">
            {/* صورة المنتج */}
            <div className="flex-1">
                <img
                    src={prod.image}
                    alt={prod.title}
                    className="w-full h-96 object-cover rounded-lg shadow-md"
                />
            </div>

            {/* تفاصيل المنتج */}
            <div className="flex-1 flex flex-col gap-4">
                <h1 className="text-3xl font-bold">{prod.title}</h1>
                <p className="text-gray-600">{prod.description}</p>
                <p className="text-xl font-semibold">Price: ${prod.price}</p>
                <p>description: {prod.description}</p>

                {/* زر إضافة للسلة */}


                {/* زر العودة للمتجر */}
                <a
                    href="/shop/products"
                    className="mt-2 text-blue-500 underline w-40"
                >
                    Back to Shop
                </a>
            </div>
        </div>
    )
}