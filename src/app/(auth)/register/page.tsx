"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useAuthStore } from "../auth.store"

export default function RegisterPage() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const register = useAuthStore((state) => state.register)
    const router = useRouter()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const newUser = register(name, email)
        router.push("/dashboard")
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded shadow w-96"
            >
                <h1 className="text-xl font-bold mb-4">Register</h1>

                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full mb-4 p-2 border rounded"
                />

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full mb-4 p-2 border rounded"
                />

                <button className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700">
                    Register
                </button>
            </form>
        </div>
    )
}