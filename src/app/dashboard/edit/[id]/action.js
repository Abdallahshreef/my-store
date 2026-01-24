"use server"
import { updateProduct } from "@/action/products"
export default async function updateProductAction(prev, id, formData) {
    const data = { price: Number(formData.get("price")), description: formData.get("description"), image: formData.get("image") }
    const updated = await updateProduct(id, formData)
    if (!updated) {
        return { error: "Updated failed" }
    }
    return { success: "Product Updated successfully" }
}