"use server"
import { DeleteProduct } from "../../action/products"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
export async function deleteProductAction(formData) {
    const id = formData.get("id")
    await DeleteProduct(id)
    revalidatePath("/dashboard")
    redirect("/dashboard")
}