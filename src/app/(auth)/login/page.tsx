"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useAuthStore } from "../auth.store"

export default function LoginPage() {
    const [email, setEmail] = useState("")
    const login = useAuthStore((state) => state.login)
    const router = useRouter()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const success = login(email)
        if (success) router.push("/dashboard")
        else alert("User not found")
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded shadow w-96"
            >
                <h1 className="text-xl font-bold mb-4">Login</h1>

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full mb-4 p-2 border rounded"
                />

                <button className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
                    Login
                </button>
            </form>
        </div>
    )
}