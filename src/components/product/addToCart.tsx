"use client"
import { useCartStore } from "@/types/features/cart/cart.store"
import { useState } from "react"
import { Product } from "@/fake-db/types/product"
import CartToast from "./CartToast"

interface Props {
    product: Product
}


export default function AddToCart({ product }: Props) {
    const [toast, setToast] = useState(false)
    const addToCart = useCartStore((state) => state.addToCart)
    return (
        <>
            < button
                onClick={(e) => {
                    e.stopPropagation()
                    addToCart({
                        id: product.id,
                        title: product.title,
                        price: product.price,
                        image: product.image,
                    })
                    setToast(true)
                    setTimeout(() => {
                        setToast(false)
                    }, 1000)
                }}
                className="bg-blue-600 text-white px-3 py-1 rounded"
            >
                Add to Cart
            </button >

            {toast && (<CartToast message={`${product.title} added to cart!`} />)}
        </>
    )
}




