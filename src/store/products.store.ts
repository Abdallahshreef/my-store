import { create } from "zustand"
import { Product } from "@/fake-db/types/product"

interface ProductsStore {
    products: Product[]
    addProduct: (product: Omit<Product, "id">) => void
    updateProduct: (product: Product) => void
    deleteProduct: (id: string) => void
    toggleActive: (id: string) => void
}

export const useProductsStore = create<ProductsStore>((set) => ({
    products: [],

    addProduct: (product) =>
        set((state) => ({ products: [...state.products, { ...product, id: Date.now().toString() },], })),
    updateProduct: (updated) =>
        set((state) => ({
            products: state.products.map((p) =>
                p.id === updated.id ? updated : p
            ),
        })),

    deleteProduct: (id) =>
        set((state) => ({
            products: state.products.filter((p) => p.id !== id.toString()),
        })),

    toggleActive: (id) =>
        set((state) => ({
            products: state.products.map((p) =>
                p.id === id.toString() ? { ...p, isActive: !p.isActive } : p
            ),
        })),
}))