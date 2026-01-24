"use client"

import { useState } from "react"
import { useProductsStore } from "@/store/products.store"
import { Product } from "@/fake-db/types/product"

export default function DashboardProductsPage() {
    const { products, addProduct, updateProduct, deleteProduct, toggleActive } =
        useProductsStore()

    const [newTitle, setNewTitle] = useState("")
    const [newPrice, setNewPrice] = useState(0)
    const [newStock, setNewStock] = useState(0)

    const [editId, setEditId] = useState<string | null>(null)
    const [editTitle, setEditTitle] = useState("")
    const [editPrice, setEditPrice] = useState(0)
    const [editStock, setEditStock] = useState(0)

    const handleAdd = () => {
        if (!newTitle || newPrice <= 0) return alert("Invalid data")

        addProduct({
            title: newTitle,
            description: "New product",
            price: newPrice,
            image: "/images/default.png",
            category: "1",
            stock: newStock,
            isActive: true,
        })

        setNewTitle("")
        setNewPrice(0)
        setNewStock(0)
    }

    const startEdit = (p: Product) => {
        setEditId(p.id)
        setEditTitle(p.title)
        setEditPrice(p.price)
        setEditStock(p.stock)
    }

    const saveEdit = (p: Product) => {
        updateProduct({
            ...p,
            title: editTitle,
            price: editPrice,
            stock: editStock,
        })
        setEditId(null)
    }
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Products Dashboard</h1>

            {/* Add Product */}
            <div className="mb-6 p-4 border rounded bg-gray-50 dark:bg-gray-800">
                <h2 className="font-semibold mb-3">Add New Product</h2>

                <div className="flex gap-2 flex-wrap">
                    <input
                        placeholder="Title"
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                        className="p-2 border rounded"
                    />
                    <input
                        type="number"
                        placeholder="Price"
                        value={newPrice}
                        onChange={(e) => setNewPrice(+e.target.value)}
                        className="p-2 border rounded w-24"
                    />
                    <input
                        type="number"
                        placeholder="Stock"
                        value={newStock}
                        onChange={(e) => setNewStock(+e.target.value)}
                        className="p-2 border rounded w-24"
                    />
                    <button
                        onClick={handleAdd}
                        className="bg-green-600 text-white px-4 py-2 rounded"
                    >
                        Add
                    </button>
                </div>
            </div>

            {/* Products Table */}
            <table className="w-full border-collapse">
                <thead>
                    <tr className="border-b">
                        <th className="p-2">Title</th>
                        <th className="p-2">Price</th>
                        <th className="p-2">Stock</th>
                        <th className="p-2">Status</th>
                        <th className="p-2">Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {products.map((p) => (
                        <tr key={p.id} className="border-b last:border-0">
                            <td className="p-2">
                                {editId === p.id ? (
                                    <input
                                        value={editTitle}
                                        onChange={(e) => setEditTitle(e.target.value)}
                                        className="p-1 border rounded"
                                    />
                                ) : (
                                    p.title
                                )}
                            </td>

                            <td className="p-2">
                                {editId === p.id ? (
                                    <input
                                        type="number"
                                        value={editPrice}
                                        onChange={(e) => setEditPrice(+e.target.value)}
                                        className="p-1 border rounded w-24"
                                    />
                                ) : (
                                    `$${p.price}`
                                )}
                            </td>

                            <td className="p-2">
                                {editId === p.id ? (
                                    <input
                                        type="number"
                                        value={editStock}
                                        onChange={(e) => setEditStock(+e.target.value)}
                                        className="p-1 border rounded w-20"
                                    />
                                ) : (
                                    p.stock
                                )}
                            </td>

                            <td className="p-2">
                                <button
                                    onClick={() => toggleActive(p.id)}
                                    className={`px-2 py-1 rounded text-white ${p.isActive ? "bg-green-600" : "bg-gray-500"
                                        }`}
                                >
                                    {p.isActive ? "Active" : "Inactive"}
                                </button>
                            </td>

                            <td className="p-2 flex gap-2">
                                {editId === p.id ? (
                                    <button
                                        onClick={() => saveEdit(p)}
                                        className="bg-blue-600 text-white px-2 py-1 rounded"
                                    >
                                        Save
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => startEdit(p)}
                                        className="bg-yellow-500 text-white px-2 py-1 rounded"
                                    >
                                        Edit
                                    </button>
                                )}

                                <button
                                    onClick={() => deleteProduct(p.id)}
                                    className="bg-red-600 text-white px-2 py-1 rounded"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}