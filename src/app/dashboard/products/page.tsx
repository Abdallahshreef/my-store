"use client"

import { useState } from "react"
import { useProductsStore } from "@/store/products.store"
import { Product } from "@/fake-db/types/product"

export default function DashboardProductsPage() {
    const { products, deleteProduct, toggleActive } = useProductsStore()

    return (
        <div className="p-6 min-h-screen bg-gray-100 dark:bg-gray-900">
            <h1 className="text-2xl font-bold mb-6">Products Dashboard</h1>

            {/* زر إضافة منتج */}
            <div className="mb-6">
                <a
                    href="/dashboard/add"
                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                >
                    Add New Product
                </a>
            </div>

            {/* جدول المنتجات */}
            {products.length === 0 ? (
                <p>No products found</p>
            ) : (
                <table className="w-full border-collapse bg-white dark:bg-gray-800 rounded shadow">
                    <thead>
                        <tr className="border-b">
                            <th className="p-2 text-left">Title</th>
                            <th className="p-2 text-left">Price</th>
                            <th className="p-2 text-left">Stock</th>
                            <th className="p-2 text-left">Status</th>
                            <th className="p-2 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((p) => (
                            <tr key={p.id} className="border-b last:border-0">
                                <td className="p-2">{p.title}</td>
                                <td className="p-2">${p.price}</td>
                                <td className="p-2">{p.stock}</td>
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
                                    <a
                                        href={`/dashboard/edit/${p.id}`}
                                        className="bg-yellow-500 text-white px-2 py-1 rounded"
                                    >
                                        Edit
                                    </a>
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
            )}
        </div>
    )
}