"use server"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { addProduct } from "@/action/products"

export async function addProductAction(formData) {
    const name = formData.get("name")
    const description = formData.get("description")
    const price = formData.get("price")
    const image = formData.get("image")

    if (!description || !price || !image || !name) { throw new Error("All field are required") }
    await addProduct({ name, description, price: Number(price), image })
    revalidatePath("/dashboard")
    redirect("/dashboard")

}