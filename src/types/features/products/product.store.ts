import { create } from "zustand"
import { Product } from "@/fake-db/types/product"

interface ProductsStore {
    products: Product[]
    addProduct: (product: Product) => void
    updateProduct: (product: Product) => void
    deleteProduct: (id: string) => void
    toggleActive: (id: string) => void
}

export const useProductsStore = create<ProductsStore>((set) => ({
    products: [],

    addProduct: (product) =>
        set((state) => ({
            products: [...state.products,
            { ...product, id: crypto.randomUUID() }
            ],
        })),

    updateProduct: (product) =>
        set((state) => ({
            products: state.products.map((p) =>
                p.id === product.id ? product : p
            ),
        })),

    deleteProduct: (id) =>
        set((state) => ({
            products: state.products.filter((p) => p.id !== id),
        })),
    toggleActive: (id) =>
        set((state) => ({
            products: state.products.map((p) =>
                p.id === id ? { ...p, isActive: !p.isActive } : p
            ),
        })),
}))