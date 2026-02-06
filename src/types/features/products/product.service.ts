import { products } from "@/fake-db/data/products";
import { Product } from "@/fake-db/types/product";
export const getAllProducts = async (): Promise<Product[]> => {
    await new Promise((res) => setTimeout(res, 500))
    return products
}

export const getProductById = async (id: string): Promise<Product | undefined> => {
    await new Promise((res) => setTimeout(res, 500))
    return products.find((p) => p.id === id)
}