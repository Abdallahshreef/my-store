"use server"
export default async function createProduct(prev, formData) {
    const name = formData.get("name")
    const price = formData.get("price")
    const image = formData.get("image")

    if (!name || !price || !image) {
        return { error: "All feild are required" }
    }

}