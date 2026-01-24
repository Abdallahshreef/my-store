import { addProductAction } from "./action"

export default function addProductsPage() {
    return (
        <div className="max-w-xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-6">Add New Product</h1>
            <form action={addProductAction} className="space-y-4">
                <input type="text" name="name" placeholder="Product Name" className="w-full border p-2 rounded" />
                <input type="text" name="description" placeholder="Product Describtion" className="w-full border p-2 rounded" />
                <input type="text" name="price" placeholder="Price" className="w-full border p-2 rounded" />
                <input type="text" name="image" placeholder="Image URL" className="w-full border p-2 rounded" />
                <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                    Add Product
                </button>
            </form>
        </div>
    )
}