import { create } from "zustand"
import { Category } from "@/fake-db/types/category"

interface CategoriesStore {
    categories: Category[]
    addCategory: (category: Category) => void
}

export const useCategoriesStore = create<CategoriesStore>((set) => ({
    categories: [
        { id: 1, name: "Electronics", section: "electroncs" },
        { id: 2, name: "Fashion", section: "fashion" },
        { id: 3, name: "Mobiles", section: "mobiles" }
    ],
    addCategory: (category) =>
        set((state) => ({
            categories: [...state.categories, category]
        }))
}))