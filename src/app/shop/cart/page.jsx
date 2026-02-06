"use client"

import { useCartStore } from "@/types/features/cart/cart.store"
export default function CartPage() {
    const items = useCartStore((state) => state.items)
    if (items.lentgh === 0) {
        return <p className="text-center mt-10">السلة فاضية</p>
    }

}