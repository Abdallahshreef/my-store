"use client"
import ProtectedRoute from "@/components/ProtectedRoute"
import { useProductsStore } from "@/store/products.store"
export default function ShopPage() {
    const products = useProductsStore((state) =>
        state.products.filter((p) => p.isActive)
    )

    return (
        <ProtectedRoute>
            <div className="p-6">
                <h1 className="text-2xl font-bold mb-4">Shop</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {products.map((p) => (
                        <div key={p.id} className="border rounded p-4 bg-white shadow">
                            <img
                                src={p.image}
                                alt={p.title}
                                className="w-full h-40 object-cover mb-2 rounded"
                            />
                            <h2 className="font-semibold">{p.title}</h2>
                            <p className="text-gray-500">${p.price}</p>
                            <p>Stock: {p.stock}</p>
                        </div>
                    ))}
                </div>
            </div>
        </ProtectedRoute>
    )
}