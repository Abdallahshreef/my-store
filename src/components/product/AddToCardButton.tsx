"use client"
import { Product } from "@/fake-db/types/product"
import { useCartStore } from "@/features/cart/cart.store"

export default function AddToCartButton({ product }: { product: Product }) {
    const addToCart = useCartStore((state) => state.addToCart)
    return (
        <button onClick={() => addToCart(product)} className="bg-black text-white px-4 py-2 rounded">Add to Cart</button>
    )
}