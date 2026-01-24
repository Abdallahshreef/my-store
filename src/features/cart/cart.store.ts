"use client"
import { create } from "zustand";
import { Product } from "@/fake-db/types/product";

interface CartItem extends Product {
    quantity: number
}

interface cartStore {
    items: CartItem[]
    addToCart: (product: Product) => void
}

export const useCartStore = create<cartStore>((set) => ({
    items: [],
    addToCart: (product) =>
        set((state) => ({
            items: [...state.items, { ...product, quantity: 1 }],
        })),
}))
